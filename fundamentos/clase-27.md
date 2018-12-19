
Cómo funciona .zip: Árboles binarios

Cómo funciona la compresión de un archivo sin perder ningún valor de ese archivo.

Los arboles binarios nos permiten comprimir sin perder información, en este caso vamos a comprimir “amo leer panama paper”.

1.  Debemos ver cuantas veces se repite cada letra

```
a = 5
m = 2
r = 2
s = 1
o = 1
  = 3
p = 3
l = 1
e = e
n = 1

```

2.  La letra con más frecuencia va a estar en el primer punto de la rama, cuando se encuentra es 1 y si no se encuentra es cero
    
3.  Con esto debemos volver a construir nuestro mensaje siguiendo eárbolol, esto quedaría
    

`1 0001 0000001 01 00000001 001 001 000001 01 0001 1 0000000001 1 00001 1 01 0001 1 0001 001 000001 000000001`

Aunque en este ejemplo no se reduce drasticamente el tamaño, imagina parrafos más grandes u otro tipo de archivos.
Les dejo mi resumen de todo lo visto en este curso:

1.  Un system on a chip es una CPU que también tiene una memoria RAM y un disco duro en un chip.
2.  Algunos de los protocolos mas famosos de internet son:  
    -TCP: protocolo de control de transmisión.  
    -IP: protocolo de internet.  
    -ARP: protocolo de resolución de direcciones, para encontrar la dirección física (MAC) correspondiente a una determinada IP.  
    -FTP: protocolo de transferencia de archivos, popular en la transferencia de archivos.  
    -HTTP: protocolo de transferencia de hipertexto, que es popular porque se utiliza para acceder a las páginas web.  
    -POP: protocolo de oficina de correo, para correo electrónico.  
    -SMTP: protocolo para transferencia simple de correo, para el correo electrónico.
3.  El modelo OSI que consta de 7 capas:  
    -Fisica.  
    -Enlace de Datos.  
    -Red.  
    -Transporte.  
    -Sesión.  
    -Presentación.  
    -Aplicación.
4.  La Capa 4 de Transporte utiliza los protocolos TCP y UDP en el que la diferencia es que TCP va orientado a la conexión confiable y la integridad de los datos.
5.  Cuando mandas un correo o una imagen viaja por TCP porque tienen que llegar los bits completos, si algo se pierde en el camino, se vuelve a reenviar el datagrama.
6.  Cuando realizas una videollamada o ves un video en Youtube los datos viajan por UDP ya que si se pierden datos en el camino son casi imperceptibles y estar reenviando los datos por cada error seria mas notable al verse lento un video.
7.  Un byte nunca es mayor a 256, pues es el valor máximo que pueden sumar los bits.
8.  UTF-8 utiliza un byte, UTF-16 utiliza dos.
9.  Una direccion IPv4 consta de 4 bytes = 32 bits, formado por cuatro octetos (números de 8 bits).
10.  Las direcciones IPv6 están basadas en 128 bits.
11.  Bit: es una subida de la Onda 1 o una bajada de la Onda 0.
12.  Ghz: Velocidad a la que el CPU procesa una instruccion.
13.  Cores: El numero de CPUs que contiene la computadora, cuantas instrucciones en paralelo puede realizar.
14.  CPU: Central Processing Unit (Unidad Central de Proceso).
15.  BIOS: Chip especial que está instalado en la tarjeta madre, es un sistema operativo de arranque.
16.  RAM: Es una memoria de alta velocidad (memoria volátil), sólo funciona cuando hay electricidad.
17.  Memristor: Pieza electrónica que logra guardar la onda eléctrica que pasa por ella incluso cuando se desconecta.
18.  Periféricos: Pantalla, teclado, mouse, puertos, etc.
19.  Drivers: Convierte la interacción de los accesorios periféricos en Bits y Bytes para que el computador pueda entender las instrucciones que les damos a través de ellos.
20.  GPU: Canal de comunicación entre la pantalla y el CPU. Es quién se encarga de mostrar todo en la pantalla, desde que arranca hasta reproducir videos y videojuegos.
21.  Caracteristicas de los discos duros:  
    -Persistente.  
    -Secuencial.  
    -Estructurada (Depende del sistema de archivos, que a su vez depende del S.O. que esté en el disco duro):  
    -Windows: FAT16 - FAT32, NTFS  
    -Linux: Ext3 - Ext4  
    -Mac OS: HFS, APFS
22.  En la parte superior de los Discos Duros existe una cabecera, la cual guarda el indice de todos los archivos, esto permite que en el momento de lectura desde la cabecera, se conozca en dónde está ubicado el archivo en cuestión.
23.  Cuando se “borra” un archivo, lo que realmente se esta haciendo es eliminando el indice en la cabecera que está relacionado con el archivo.
24.  La memoria RAM, siendo tan rápida, tiene la capacidad de ejecutar varios procesos paralelamente.
25.  A diferencia de los discos duros, la memoria RAM hace uso de un indice compartido con la CPU que es ultra veloz.
26.  En la Memoria Caché se guardan y almacenan cierto tipo de datos de uso frecuente, para que sea más fácil y rápido el acceso a ellos.
27.  Para lograr la efectiva comunicación entre la CPU y la RAM existe lo que se conoce como un bus de datos o bridge (puente).
28.  Para la conexión entre en disco duro y la CPU, el bus de datos recibió inicialmente el nombre ATA, que en una versión posterior se llamó SATA. Hay otro tipo de bus de datos para el disco duro mejor que SATA, que se llamó IDG.
29.  USB (Universal Serial Bus).
30.  PCI Express: Es el puerto o la conexion entre la CPU y la GPU.
31.  GPU: Se encarga de la representación gráfica de los datos.
32.  Sistema operativo como anillos:  
    -Primer anillo - Kernel: El Kernel lo podemos entender como la capa mas profunda de nuestro S.O. por lo tanto tiene acceso completo a archivos, drivers, programas, etc., igual que cualquier otro proceso, se carga en la RAM como la cualidad de que es lo primero en cargar.  
    -Segundo anillo - Drivers: Como se ha dicho antes los drivers son código que se encargan de interpretar las señales de el hardware y establecer una comunicación con el software del PC.  
    -Tercer anillo - Mas Drivers: Otra capa de drivers carga en un tercer “puesto” en la RAM. Dado que están más alejados del Kernel, tienen menos permisos y privilegios que los drivers del segundo anillo.  
    -Cuarto anillo - Apps: Finalmente en la última capa del modelo de anillos del S.O. nos encontramos con las apps, que se cargan en la RAM para ejecutar procesos.
33.  IP’s que dirigen a nuestro pc:  
    127.0.0.1  
    localhost
34.  Puertos: Redes virtual dentro del SO.
35.  Los puertos del 1 al 1024 están reservados para ser ejecutados por el SO a través del admin.
36.  Protocolo HTTP => Puerto 80.
37.  Protocolo HTTPS => Puerto 443.
38.  Del 1024 al 49151 son los puertos registrados, los cuales puede usar cualquier aplicación.
39.  Bittorrent => Puertos del 6881 al 6889.
40.  Los puertos del 49151 al 65535 son llamados dinámicos o privados y son aquellos que se asignan dinámicamente a alguna aplicación del cliente, cuando inicia una conexión.
41.  as direcciones IP permiten que cada computador o dispositivo pueda conectarse al exterior, es decir a Internet, esto a través de tecnologías como NAT o Network Address Translation.
42.  255.0.0.0 - clase A.
43.  255.255.0.0 - clase B.
44.  255.255.255.0 - clase C.
45.  Todo seccion representada por un 0 en la mascara de red va a ser destinada a host o clientes y las que estan representadas por 255 son la destinada a la red
46.  Menos del 1% del tráfico funciona a través de satélites. La mayoría funciona a través de cables submarinos.
47.  Existen múltiples puntos de acceso a internet Internet Exchange Points (IXP). Hay 5 en México, por ejemplo.
48.  DNS: El sistema de nombres de dominio.
49.  Dominio: Extensión o dominio de Internet es un nombre único que identifica a un sitio web en Internet.
50.  Cuando queremos conectarnos a puntos muy lejanos por ejemplo el otro lado del mundo para nuestro proveedor de internet es muy costoso por lo tanto prioriza las conexiones usando un QoS (Quality of service).
51.  Cuando la conexión esta cerca nuestro proveedor de internet hace una red MAN (Metropolitan Area Network) y el costo de eso es casi nulo.
52.  Hay un forma de burlar el QoS y simular una la conexión más cercana y esto es a través del CDN (Content Delivery Network) que funcionan solamente para mostrar contenido estático como imagenes, videos etc.
53.  La velocidad del internet se mide obteniendo el tiempo que le toma a la información viajar a través de un punto a otro en milisegundos, a esto se le conoce como ping o latencia.
54.  La mayoría de los ISPs (Internet Service Providers) nos venden ancho de banda en Mb y debemos tener claro qué significa, ya que existe una importante diferencia entre Megabits y MegaBytes.
55.  Las tecnologías utilizadas en aplicaciones web son:  
    -Backend, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript.  
    -Servidores, existen tecnologías como NGINX, Apache, Node.  
    -Frontend, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript.
56.  A un grupo de tecnologías se les conoce como Stack.
57.  Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.
58.  Los protocolos se encargan de manejar todas las peticiones que hacen la páginas de internet desde tu navegador hacia los servidores DNS, éstos transforman la dirección de la página web en una dirección IP y tu navegador se conecta a esa IP.
59.  Una vez se tiene la dirección IP el navegador envía un HTTP request en donde envía información con las características del cliente y los requerimientos del mismo, es decir, Host requerido, página del sitio que necesita, tipo de navegador, versión del navegador, etc.
60.  El servidor envía los resultados por medio del mismo protocolo HTTP en forma de un HTTP Response en donde manda todo el HTML del sitio web así como otros datos que el navegador necesita.
61.  Por último se cargan los assets de nuestro sitio web y es aquí donde se descargan imágenes, sonidos, etc.
62.  Windows es el sistema operativo de propósito general más usado a nivel mundial, es un sistema operativo cerrado y se encuentra en la gran mayoría de computadoras para consumidores además utiliza un núcleo propietario perteneciente a Microsoft.
63.  Linux es el sistema operativo más utilizado en servidores, es libre y su creador Linus Torvalds aún sigue desarrollando su núcleo destacado por su alto rendimiento y alta seguridad, tienen una licencia del tipo GNU-GPL que no solo permite redistribuir si no también garantiza que las personas que redistribuyen el código deban aportar a la licencia entre otras cosas.
64.  FreeBSD es el sistema operativo en el que está basado Mac OS y muchos sistemas embebidos así como firewalls como pfsense y más, tiene una licencia del tipo BSD.
65.  Existen 3 grupos espaciales que forman parte de los permisos de un archivo, admin, team, public.
66.  Permisos 777:  
    -rwx, read (lectura), Write (escritura), Execution (ejecucion).  
    -Lectura: 4.  
    -Escritura: 2.  
    -Ejecucion: 1.
67.  Tu aprendiste que .jpg significa la extensión de archivos de imagen, históricamente windows tenia muy pocos bytes para la extensión, por esto la extensión normalmente era de 3 dígitos.
68.  Existen muchas otras extensiones como .html para páginas web, .mpg4 para vídeo.
69.  2 numeros hexadecimales equivalen a un byte o una letra.
70.  Un sistema operativo lee los primeros bytes del archivo para entender a que archivo corresponde, esta información se llama cabecera.
71.  Cada sistema operativo tiene una base de datos de que programa abre que tipo de archivo.
72.  Cuando estas transmitiendo un archivo por Internet se especifica el tipo de archivo con mime types, el cual se transmite en la cabecera de un paquete http.
73.  Contenedores: es el formato es que se guarda el vídeo como .avi, .mp4, .flv, .mpg, .webm.
74.  Codecs: es un algoritmo que comprime un vídeo y lo descomprime como divx, h.264, ogg, vp9.
75.  Protocolos: es la forma de transmitir los vídeos como RTMP.
76.  Keyframes: cada cierta cantidad de frame existe un frame que vuelve a definir todo el área.
