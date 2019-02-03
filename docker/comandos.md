# Comandos
- **docker run NOMBRE DE LA IMAGEN]** Ejecuta vel cotenedor al que se esta llamando

-   **docker ps** = lista los contenedores
-   **docker ps -a** = lista contenedores a detalles
-   **docker ps -aq** = lista solo los ID de los contenedores (la q significa quiet, tranquilo o silencioso)
-   **docker inspect id_contenedor = detalles internos del contenedor**
-   **docker inspect nombre_contenedor** = lo mismo que el anterior
-   **docker inspect -f {{}} nombre_contenedor** = filtra una variable especifico del contenedor
-   **docker rm nombre_contenedor** = elimina un contenedor
-   **docker rm $(docker ps -aq)** = borra TODOS los contenedores
-  **docker rm -f $(docker ps -aq) ** = 
- borra TODOS los contenedores hasta los que se estan ejecutando

El significado de las flags  `-it`:

-   -t: Asignar un pseudo-tty (Terminal).
-   -i: mantén STDIN abierto incluso si no está conectado.

**Entrar modo interactivo o bash**  
`docker run -it <nombre de la imagen>`

**Salir modo interactivo**  
`exit`

siclo de vida de un contenedor 

 - [ ] docker run ubuntu tail -f /dev/nul

tail escumir el estandar ouput 
-f siga esperando respuesta 
null barrill sin fondo

Para ejecutar un proceso o un comando en un contenedor ya existente

-   docker exec it nombre_contenedor bash
    
-   docker kill nombre_contenedor = mata el proceso completo
    
-   docker rm -f nombre_contenedor = forzar la eliminación del contenedor

Adicional :

-   **docker pause**  command suspends all processes in the specified containers.
    
-   **docker stop**  command. The main process inside the container will receive SIGTERM, and after a grace period, SIGKILL.

**docker exec**: ejecuta un  itcomando en un contenedor. `docker exec -it contenedor bash`  
parar un contenedor `docker  itkill contenedor`  
eliminar un contenedor en ej itecución `docker rm -f contenedor`  
`rm` => remove   it
`-f` => force it
 it
Exponiendo contenedores al m itundo exterior
 it
Los contenedores están aisla itdos del sistema y a nivel de red, cada contenedor tiene su propia stack de net y sus propios puertos.
 it
**Debemos redirigir los puer ittos del contenedor a los de la computadora**  y lo podemos hacer al utilizar este comando:
 it
```
docker run -d --name server -p 8080:80  nombreDelContenedor
```
docker run -d --name
```
docker rm -f server
``` 
termina el contenedor y lo elimina server es el nombre del contenedor

### Datos en Docker

Crear volumenes de (Persistencia) a un contenedor	

docker run -d name < nombre del contenedor > -v < path carpeta host> : < carpeta datos del contenedor > < nombre de la imagen >

Ej: `docker run -d --name mongo-db -v /Users/gdaimon/docker/mongodata:/data/db mongo`

Cómo puedo saber, dónde guardan los datos las diferentes imágenes , por ejemplo, postres , gitlab, etc.

Si es una imagen pública, lo mejor que puedes hacer es ver el Dockerfile, a ver si encuentras algo relacionado con la configuración del software que está en la imagen. Si no, tendrás que ejecutar el contenedor, hacer  `docker exec -it <nombre> bash`  y fijarte si puedes encontrar el archivo de configuración relacionado a la aplicación que estás queriendo ver.

Una alternativa un poco más engorrosa pero también práctica sería que ejecutes un contenedor de dicha imagen, la uses como para que se generen cambios (se almacenen datos) y luego uses la instrucción  `docker commit`  para guardar una nueva imagen con los cambios del contenedor. Una vez hecho eso, con  `docker history`  de la imagen o mismo usando la herramienta  `dive`  que vemos en el curso, podrás encontrar los paths donde se almacenaron los datos.
### Datos con Docker: Volumes

A pesar de que no es lo más divertido que tiene Docker, esta herramienta nos permite recuperar datos que podíamos dar por perdido.

Existen tres maneras de hacer permanencia de datos:

-   Bind mount
-   Volume
-   tmpfs mount

docker mos permite persitir los datos que se generan dentro de un contenedor  de varias maneras 
![volumes on the Docker host](https://docs.docker.com/storage/images/types-of-mounts-volume.png)

Crear volúmenes en el host (Mejorado)

docker volume create <nombre del volumen>  
docker run -d --name <nombre del contenedor> —mount src=<nombre del volumen>,dst= <carpeta datos contenedor> <nombre de la imagen>

Ej:docker volume create dbdata  
Ej:docker run -d --name mongo-db --mount src=dbdata,dst=/data/db mongo

Hay alguna manera de montar esos volumes en nuestro entorno local para ver los datos que hay dentro ?

Idealmente no quieres usar los volúmenes así, dado que la ubicación de dónde guarda docker los volúmenes puede cambiar de instalación a instalación (es parte del configuración del daemon, y depende del sistema operativo que estés usando), sino que quieres manenerlos sólo administrados por Docker. La manera más fácil de ver los contenidos de un volúmen es:

```
docker run -it --rm —mount src=<nombre del volumen>,dst=/usr/src/volumen alpine

ls -lac /usr/src/volumen (una vez dentro del contenedor)
```
### Conceptos fundamentales de Docker: imágenes

Las  **imágenes**  son un componente fundamental de Docker y sin ellas los contenedores no tendrían sentido. Estas imágenes son fundamentalmente plantillas o templates.  
Algo que debemos tener en cuenta es que las imágenes no van a cambiar, es decir, una vez este realizada no la podremos cambiar.

Las imagenes son platillas pueden distribuirse de manera muy simple

es un conjuto de capas esta construida por una capa base y capas que se van montando sobre esa. cada capa es inmutables 
el nombre de la imagen realmente es un repositorio

**Ver imágenes descargadas en el host**  
`docker image ls`

**Descargar imágenes en el host imágenes descargadas en el host**  
docker pull <nombre de la imagen>  
Ej:  `docker pull redis`  
Ej:  `docker pull ubuntu:18.04`  descargando una version en particular

**Eliminar una sola imagen**  
`docker rmi image_name:version/image-id`  
**Eliminar todas las imágenes**  
`docker rmi $(docker images -qf "dangling=true")`  
**Mata contenedores y quítalos:**  
`docker rm $(docker kill $(docker ps -aq))`  
Nota: Reemplazar kill con stop para un apagado correcto

**Eliminar todas las imágenes excepto "my-image"**  
Use grep para eliminar todo, excepto my-image y ubuntu

`docker rmi $(docker images | grep -v ‘ubuntu|my-image’ | awk {‘print $3’})  
O (sin awk)

docker rmi $(docker images --quiet | grep -v $(docker images --quiet ubuntu:my-image))

### Construyendo nuestras propias imágenes

Vamos a crear nuestras propias imágenes, necesitamos un archivo llamado  **DockerFile**  que es la ““receta”” que utiliza Docker para crear imágenes.

**Es importante que el DockerFile siempre empiece con un ““FROM”” sino, no va a funcionar. **

El flujo para construir en Docker siempre es así:  
Dockerfile – **build **–> Imágen –  **run**  --> Contenedor

**Crear nuestras imágenes**

1.  Crear el archivo  `Dockerfile`  (receta)
2.  El  `dockerfile`  siempre debe empezar con el  `FROM`  le indicamos cual va a ser nuestra imagen base para empezar
3.  `RUN`  para correr un comando
4.  Creamos un archivo touch /usr/src/hola-mundo
5.  Construimos el  `dockerfile`
6.  docker build -t <imagen>:<tag de la imagen> <path de donde vamos a obtener el contexto build, para este caso .>

`-t`  es el nombre del tag de la imagen

```
Ej: 
FROM ubuntu
RUNtouch /usr/src/hola-mundo
docker build -t ubuntu:platzi .

```

**Hacer push a un contenedor**  
docker push <tag contenedor>  
Ej:  `docker push <user>/ubuntu:platzi`

**Cambiar el tag de un contenedor**  
docker tag <tag contenedor> <nuevo tag contenedor>  
Ej:  `docker tag ubuntu:platzi <user>/ubuntu:platzi`

**docker login** para acceder a mi usuario

Comprendiendo el sistema de capas
**Ver las capas o Layers de un contenedor**

docker history <tag contenedor>  
Ej:  `docker history ubuntu:platzi`  

[dive](https://github.com/wagoodman/dive)  
Dive nos permite ver en detalle las capas del contenedor, con las  `arrow key`  me puedo mover entre las capas, con  `tab`  me bueno dentro de los archivos y presionando la  `u`  nos muestra solamente los archivos o carpetas que fueron modificados o adicionados  
Los Layers son inmutables
