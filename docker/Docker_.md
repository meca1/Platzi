## Problemáticas del desarrollo de software profesional
A la hora de hacer aplicaciones y proyectos de software nos podemos encontrar con varios problemas, estos problemas los podemos agrupar en tres categorías:

Problemas al  **construir**:

-   Dependencias de desarrollo
-   Versiones de entornos de ejecución
-   Equivalencia de entornos de desarrollo
-   Equivalencia de entornos de producción
-   Versiones / compatibilidad

Problemas al  **Distribuir**:

-   Generaciones del build diferentes
-   Acceso a servidores de producción
-   Ejecución nativa vs la distribuida
-   Serverless

Problemas al  **Ejecutar**:

-   Dependencias de aplicación
-   Compatibilidad de sistema operativo
-   Disponibilidad de servicios externos
-   Recursos de hardware

_Docker permite:_  
**Construir, distribuir y correr tu código en cualquier lado**

## Instalación de Docker

Vamos a ver cómo podemos instalar Docker en diferentes sistemas operativos, tendrás el enlace en los archivos de esta clase.

-   Para usuarios Mac o Windows pueden utilizar este enlace:

[Docker en Mac o Windows](https://www.docker.com/)

Puedes comprobar que todo está funcionando, ingresa el comando ““docker”” en la terminal.

-   Para usuarios Linux, este es el enlace:  
    [Docker en Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)
    
## Qué es Docker?  
### containarization vs virtualization
**Docker**  Permite resolver problemas de construir, distribuir y ejecutar software en diferentes plataformas.

**Containarization:**  un estándar para llevar algo dentro. Agrupadores de procesos.

-   **Versátiles:**  
    En el orden de los MB  
    Tienen todas las dependencias que necesitan para funcionar correctamente.  
    Funcionan igual en todos lados.
    
-   **Eficientes:**  
    Comparten archivos simultáneos con otros contenedores.  
    Solo se ejecutan procesos, no un SS.OO completo.
    
-   **Aislados:**  
    Lo que pasa en el container queda en el container.  
    No pueden alterar su entorno de ejecución (a menos que explícitamente se indique lo contrario)
    

**Virtualization:**  es una imagen o archivo que contiene información dentro. Por lo general son pesadas de administración costosa y son lentas.

-   **Pesadas:**  
    En el orden de los GB  
    Muchas VMs en el mismo host suelen repetirse en lo que contienen  
   * **Administración costosa:**  
    Una VM tiene que ser administrada como cualquier otra computadora: patching, update, etc  
    Hay que administrar la seguridad interna entre apps
    
-   **Lentas:**  
    Correr nuestro código en una VM implica no solo arrancar aplicaciones, sino también esperar el boot de la VM en sí.

![Resultado de imagen para vms vs containers](https://blogs.bmc.com/wp-content/uploads/2018/07/containers-vs-virtual-machines.jpg)
## Ciclo de vida de un contenedor
* `docker run ubuntu tail -f /dev/null` 
  * corre mi contenedor muestatrame salida constantemente y envialo al barrin sin fondo es to ejecutara el contenedor hasta que yo decida terminarlo 
  

 En otra terminal vamos a corer el comando.
* `docker exec -it nombreDelContenedor bash`
	* esto lo que hara es abrir el contenedor interactivamente 
	* en la termial vemos que con: 
		 * ps nos muestra los procesos
		 * ps -fea nos muestra el el rpceso que corrimos con el comanddo anterior que fue el tail -f 

**para terminar** este proceso exinten dos formas las cuales don 
* docker rm -f nombreDelContenedor = lo borra y no importa si esta corriendo
* docker kill nombreDelContenedor =  mata el proceso
## Explorar el estado de docker
-   docker ps = lista los contenedores
-   docker ps -a = lista contenedores a detalles
-   docker ps -aq = lista solo los ID de los contenedores (la q significa quiet, tranquilo o silencioso)
-   docker inspect id_contenedor = detalles internos del contenedor
-   docker inspect nombre_contenedor = lo mismo que el anterior
-   docker inspect -f {{}} nombre_contenedor = filtra una variable especifico del contenedor
-   docker rm nombre_contenedor = elimina un contenedor
-   docker rm $(docker ps -aq) = borra TODOS los contenedores
- docker rename= renombre el contenedor
* docker run --name nombreDelcontendor imagenDelContenedor
* docker logs nombreDelContenedor = ver el output del contenedor y asegurarnos que esta corriendo.
* docker ps -aq = ver el  id de los contenedores
* docker run ubuntu = corre el contenedor de ubuntu
* docker run -it ubunut = **Entrar modo interactivo o bash** 
	*  El significado de las flags -it: 
	-t: Asignar un pseudo-tty (Terminal).
	-i: mantén STDIN abierto incluso si no está conectado.

## Exponiendo contenedores al mundo exterior

Los contenedores están aislados del sistema y a nivel de red, cada contenedor tiene su propia stack de net y sus propios puertos.

**Debemos redirigir los puertos del contenedor a los de la computadora**  y lo podemos hacer al utilizar este comando:


`docker run --detach` : si este contenedor que voy a correr tiene un proceso con estandar output o pretende que corra en modo interactivo no me intereza ponlo a andar y me regreses el control de mi terminal

    docker run -d --name server nginx
este comado lo que ejecuta es un servido nginx en un puerto  en este caso fue  `PORTS: 80/tcp`     pero esto no significa que este accediento a los puertos de la computadora para esto se utiliza un comando especial.

```
docker run -d --name server -p 8080:80  nombreDelContenedor
```
en este caso la `-p` es publish que puerto de mi computadora este atado o biulding y al ir al navegador al puerto localhost:8080 voy aver al servido nginx correindo dentro de mi servido.

puedo corer mas contenedores lo unico que tengo que cambiar es el puerto demi computadora al que lo quiero atar.

## Datos en docker

 1. lo primero  que hicimos fue descargar en contenedor de mongo db
    
        docker run -d --name db mongo
2. luego corrimos el modo interactivo    
	  el cual nos permite acceder  a al contenedor y poder
    utilizar la la base de datos de mongo

	  luego abrimos la bash interactiva de mongo:
   

    ` docker exec -it db bash `

3.	dentro de nuestra terminar en nuestro computador creamos un directorio llamdo mongodata

	`    mkdir mongodata`

4. ahora creamos un contenedor que tome los datos de  cierta ruta dentro de mi sistema de archivos `/home/meca1/Desktop/mongodata/` y lo guarde en una ruta dentro del contenedor `/data/db mongo`

    `docker run --name db -d -v /home/meca1/Desktop/mongodata/:/data/db mongo`
 5. para comprobar que el paso anterior funciono utilizamos el inspect

	`docker inspect db`

```
 "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/meca1/Desktop/mongodata",
                "Destination": "/data/db",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
  ```
```
 "Volumes": {
                "/data/configdb": {},
                "/data/db": {}
            },
```
 y vemos que la base de datos en esta ecribiendo en nuestro direstorio 
 ```
~/Desktop/mongodata$ ls
collection-0-4943726509625333851.wt  index-1-4943726509625333851.wt  journal          storage.bson      WiredTiger.turtle
collection-2-4943726509625333851.wt  index-3-4943726509625333851.wt  _mdb_catalog.wt  WiredTiger        WiredTiger.wt
collection-4-4943726509625333851.wt  index-5-4943726509625333851.wt  mongod.lock      WiredTigerLAS.wt
diagnostic.data                      index-6-4943726509625333851.wt  sizeStorer.wt    WiredTiger.lock
```
 6. coremos de forma interactiva el repositorio
 
	`  docker exec -it db bash`
7. dentro del contenedor  ejecutamos `mongo`
```
> use platzi
switched to db platzi
> db.users.insert({"name": "daniel"})
WriteResult({ "nInserted" : 1 })
> db.users.find()
{ "_id" : ObjectId("5c82c98dabf4a8572281d580"), "name" : "daniel" }
```
8. salimos de la base de datos y del contenedor y podemos darnos cuenta de que si borramos nuestro contenedor y creamos uno nuevo que se enlace con la misma ruta los archivos, toda la informacion va a estar ahí.  

## Datos con Docker: Volumes

A pesar de que no es lo más divertido que tiene Docker, esta herramienta nos permite recuperar datos que podíamos dar por perdido.

Existen tres maneras de hacer permanencia de datos:

-   Bind mount
-   Volume
-   tmpfs mount 
 * tambien con el vomuen podemos asignarle un driver que nos permitira guardar nuestros datos para simurlar la nuve como un amazon azure
 [Manage data in Docker | Docker Documentation](https://docs.docker.com/storage/)

![](https://docs.docker.com/storage/images/types-of-mounts-volume.png)


* docker pude **ocupar espacio** sin que nos demos cuenta 

1. nos muestra todo los volumenes que se han creado con cualquiera de los contenedores
`docker volume ls`

2. boramos todos los volumenes que no esten siendo utilizados por ninguno de nuestros contenedores
`docker volume prune `
3. creamos un volume
`docker volume create dbdata`
4. ahora vamos a enlasar nuestro contenedor con nuestro volumen que esta nuestro computador es hasta el momento la mejor manera par persistir los datos 
`docker run -d --name db --mount src=dbdata,dst=/data/db mongo`

 5. coremos de forma interactiva el repositorio
 
	`  docker exec -it db bash`
5. dentro del contenedor  ejecutamos `mongo`
```
> use platzi
switched to db platzi
> db.users.insert({"name": "daniel"})
WriteResult({ "nInserted" : 1 })
> db.users.find()
{ "_id" : ObjectId("5c82c98dabf4a8572281d580"), "name" : "daniel" }
```
6. salimos de la base de datos y del contenedor y podemos darnos cuenta de que si borramos nuestro contenedor y creamos uno nuevo que se enlace con el mismo volume, toda la informacion va a estar ahí. 

## Conceptos fundamentales de Docker: imágenes

Las **imágenes** son un componente fundamental de Docker y sin ellas los contenedores no tendrían sentido. Estas imágenes son fundamentalmente plantillas o templates.  
Algo que debemos tener en cuenta es que las imágenes no van a cambiar, es decir, una vez este realizada no la podremos cambiar.
 
 1. vamos a optener una imagen de un contenedor `docker pull <nombre de la imagen> `una imagen no solo es un archivo o una sola cosa
  es un conjunto de capas o layers
  
	  Descargar imágenes en el host imágenes descargadas en el host
 
	Ej: `docker pull redis`  
	Ej: `docker pull ubuntu:18.04` descargando una version en particular
  
	 
  * una imagen siempre esta montada sobre una capa base y capas que se van montando sobre ella es lo mismo que los commits de git.
2. Ver imágenes descargadas en el host
`docker image ls`
3. docker es super eficiente: si tengo imagenes que tiene el mismo contenido va a compartir esa misma informacion sin ocuparmas espacio en memoria
4. Eliminar imágenes descargadas en el host
	`docker image ls` // para obtener el id de la imagen
	
	```
	REPOSITORY        TAG                 IMAGE ID            CREATED             SIZE
	ubuntu           latest              93fd78260bd1        3 months ago        86.2MB
    ```
	Ej: `docker rmi -f 93fd78260bd1`
*	Eliminar una sola imagen
docker rmi image_name:version/image-id
* Eliminar todas las imágenes
docker rmi $(docker images -qf "dangling=true")
* Mata contenedores y quítalos:
docker rm $(docker kill $(docker ps -aq))
Nota: Reemplazar kill con stop para un apagado correcto

* Eliminar todas las imágenes excepto "my-image"
Use grep para eliminar todo, excepto my-image y ubuntu

	`docker rmi $(docker images | grep -v ‘ubuntu|my-image’ | awk {‘print $3’})`

	O (sin awk)

	`docker rmi $(docker images --quiet | grep -v $(docker images --quiet ubuntu:my-image))`

## Construyendo nuestras propias imágenes
Vamos a crear nuestras propias imágenes, necesitamos un archivo llamado DockerFile que es la ““receta”” que utiliza Docker para crear imágenes.

**Es importante que el DockerFile siempre empiece con un ““FROM”” sino, no va a funcionar. **

El flujo para construir en Docker siempre es así:
Dockerfile – **build **–> Imágen – run --> Contenedor

### Creando mi primer Dockerfile:

    touch Dockerfile

dentro del dockerfile 
```docker
FROM ubuntu
RUN touch /usr/src/hola-platzi
```
construimos la imagen con  -t el "TAG" como se va a llamar y al final le paso el path para que el sepa de donde va a sacar el contexto de build 

    docker build -t ubuntu:platzi .

  ![Imagen relacionada](https://cdn-images-1.medium.com/max/1600/1*p8k1b2DZTQEW_yf0hYniXw.png)
  ![Resultado de imagen para DOCKER BUILD](https://cdn-images-1.medium.com/max/1600/0*EMmmZ8pZPRzfewJy.png)
## Conseptos 
* **virtualizacion:** es una maquina corriendo dentro de otra maquina
* **Contenedores:** Los contenedores son el concepto fundamentalal hablar de docker. Un contenedor es una entidad lógica, una agrupación de procesos que se ejecutan de forma nativa como cualquier otra aplicación en la máquina host.
  * Un contenedor ejecuta sus procesos de forma nativa
[chroot, cgroups and namespaces — An overview – ITNEXT](https://itnext.io/chroot-cgroups-and-namespaces-an-overview-37124d995e3d)
* **las imagenes** son plantillas para contruir los contenedores
