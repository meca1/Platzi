# Fundamentos de ingenieria de software

## Qué es un system on a chip

La arquitectura rápida y compleja en un sistema tradicional podemos hoy tenerlo en un disposivo pequeño gracias a un system on a chip

Un system on a chip es una CPU que también tiene una memoria RAM y un disco duro en un chip.

También incluye chips especializados que permiten realizar algunos procesos necesarios por un dispositivo móvil.



Sistemas enteros en un chip es una combinacion de los diferentes componnentes eque hacen un computador real

**BIOS** encargada de arrancar nuestro sistema

**RAM** Ddonde se van a guardar arampida mente todos los datos a los que queremos aseder

**CPU** se encarga de procesar todo

**Señales de radio** 

**GPU:** unidad de  procesamiento grafico

**perifericos** ampliar el haware

**bateria** tine su porpio controlador interno

![GitHub Logo](./sistem.png)

Como funcionan las computadoras y los telefonos moviles

señal de teclado manda una señal electrica intervenida por el computador la cpu y la dirige por la placa madre la manda a una capa mas ariba donde corre  el sistema operativo ya sea (windows linux mac) entiende la señal electrica por una capa llamada driver y envia la señal al navegador donde corre por una pagina web integrada por estas tecnologias html css y javascript donde javascript entiende la señal resivida mediente un evento por medio de la programacion orientada a objetos javascript va a encapsular la informacion resivida para enciarselo a internet la nuve utilizando la API APLICATION PORGRAM INTERFACE medio de comunicacion establecido por progrmadores los navegadores les dijeron a los programadore s vamos a crear un api llamado AJAX  pueden enviar la informacion a un servido en internet sin necesidad  de recargar la pagiana ajax (encapsula los datos optenidos y los enviar al servidor) como los encapsula "se llama  formato de archivo" .css .html .xml .json y la forma de enciarlos a un serviodor es mediante un protocolo pre establecido de envio de datos conocido como un API REST tecnica para enciar datos y por donde se envianm el tubo se llama portocolo te trasferencia de inpertexto HT

Idea básica al escribir y enviar un mail:

Escribimos el mail XD
Apretamos enter para enviar el mail.
2.1. Al apretar enter estamos enviando una señal eléctrica desde el teclado
2.2. Esta señal es enviada a la motherboard, la motherboard la envia al CPU
2.3. La CPU recibe la señal del teclado y la envia al sistema operativo
2.4. El sistema operativo (a través de drivers, que son softwares que interpretan las señales eléctricas de los periféricos) interpreta la señal eléctrica y la envía al navegador (pues sabe que nosotros queriamos enviarla ahí por donde apretamos el enter (mientras estabamos en el navegador)
2.5. Nosotros cuando estamos en una pestaña de chrome en realidad estamos en un html, un html posee uno o varios script, y ahí un script que esta preparado para hacer algo al momento de pulsar la tecla enter (al momento que ocurra el evento “Pulsar tecla enter”), el cual va a hacer pues hemos apretado a tecla enter.
2.6. Javascript entiende que al ocurrir el evento enter tiene que hacer algo con el mail que hemos escrito.
2.6.1. AJAX permite enviar datos al servidor (el mail en este caso) y que la pagina no se recargue. AJAX es un API (interfaz de programación), que, entre sus multiples funciones, encapsula los datos que deseamos enviar de una manera que luego el servidor comprendera. La forma de encapsular los datos se denomina formato. AJAX encapsula el mail en un formato llamado JSON
2.6.2. AJAX envía el mail en formato JSON a través del protocolo REST (es un conjunto de reglas de como se envían los datos a un servidor) a través de HTTP (esta incluido en REST).
2.6.3. HTTP y HTTPS son protocolos de transferencia de texto. HTTPS es más seguro porque permite que solo al servidor al cual estamos enviando los datos pueda interpretar la información, solo el receptor final podrá ver los datos que enviamos. De esta manera se evita que alguien se pueda meter en el medio de al transferencia y ver los datos. Los datos se envían a una dominio DNS, que es la dirección de un servidor
2.7. El servidor recibe los datos en forma de señales eléctricas, el sistema operativo del servidor (en general linux(muerte al capitalismo 😛 )) a través de ethernet, transforma los datos que están encapsulados según el protocolo TCP/IP. Este protocolo luego crea los datos hacia el protocolo HTTP, HTTP es recibido por un servidor de HTTP de linux.
2.8. El servidor HTTP ahora permite que los programas en el backend procesen la información recibida según corresponda. Los datos procesados son guardados en una base de datos para luego poder acceder a estos datos.
2.9. El mail ahora si es enviado al dominio que sigue al @.
2.10. El mail ahora va al servidor de mail del dominio que se envía, este lo envía a la base de datos del mail que corresponde (el que esta previo al @), es decir va a la bandeja del receptor.
2.11. La bandeja del receptor recibe una notificación
2.12. La bandeja envía una notificación a un servidor de notificaciones, el servidor de notificación avisa a nuestro celular que se ha recibido un mail.
El mail fue envía y el receptor fue notificado a su celular.
Más claro échale agua 😛

NOTA: Los DNS es una base de datos que relaciona un nombre con un IP


__________________________
Ajax es un -> API (Application Program Interfaz)
Como los programadores se Comunican entre si sin hablar entre ellos

JSON -> es el Formato de Archivos de AJAX (como .doc, xls)

PROTOCOLO DE ENVIO DE DATOS AL SERVIDOR -> REST

Y POR DONDE SE ENVIA PROTOCOLAPOR DONDE SEENVIA LA INFORMACION -> POR UN PROTOCOLO LLAMADO HTTP -> PROTOCOLO DE INTERNET

SSH (Secure SHell, en español: intérprete de órdenes seguro) -> Protocolo que y sirve para acceder servidores privados a través de una puerta trasera (también llamada backdoor).
Permite manejar por completo el servidor mediante un intérprete de comandos, y también puede redirigir el tráfico de X (Sistema de Ventanas X) para poder ejecutar programas gráficos si tenemos ejecutando un Servidor X (en sistemas Unix y Windows). Se le asigno el puerto TCP 22.

Hay muchos protocolos pero internet se mueve por http

Dominio -> Es el nombre con el cual encontramos el servidor -> los nombres se convierten en IP -> direcciones exactas de los servidores
DNS -> Servidor de Nombres de Dominio -> es una base de datos gigantesca que tiene una IP relacionada con el nombre.
ping [google.com] -> en consola de “windows” -> para conocer a que IP equivale un nombre.

Servidor -> Serie de Computadores o Computador Gigantesco. (Servidor Físico)
Puede ser de cualquier sistema Operativo (Linux, Windows, MacOS…)

Hay servidores a Nivel de Software como (Apache, NGINX) - > Son aplicaciones que corren en el S.O -> para procesar señales mediante un lenguaje de programación (Java, Php,…).

Los Email funcionan con un procolo smtp y Pop -> el primero para envió el segundo para recepción.

Servidor Email Postfix -> es un servidor de correo de software libre - código abierto, un programa informático para el enrutamiento y envío de correo electrónico, creado con la intención de que sea una alternativa más rápida, fácil de administrar y segura

Servidores de Notificaciones -> Es un servidor que lo que hace es saber en todo momento dónde está el dispositivo, y está escuchando servidores (Email,Chat, ….) . Tiene una BD de todos los dispositivos para ubicar fácilmente el dispositivo(a través de la IP).



![GitHub Logo](./comoFuncionanLasComputadorasYlosTelefonos.png)

## Que son Bits y Bytes

la electricidad funciona con ondas y se tranformaron el 1 y 0 

BIT es la cantida minima uno y cero
Byte agrupacion de 8 Bits 
todo la informacion es trasmitida por bytes 


tabla ASCII estardar para establecer cierto caracter o informacion a un bite o una agrapcion de bites

Assembler:
bytes especiales de instrucciones de procesador

Todo hoy en dia son BYTES

La maxima catidad que puede tener un Byte es de 255  (byte < 256)

la IP 192.168.7.255 esta compuesta por bites y separados por el punto

un imagen es una matris de pixeles y cata pixel es un bite y el bite es la representacion de color

utf-8 es un estandar de caracteres para todo el mundo y tambien exite utf-16 UNICODE es la organizacion encargada del control de esta tabla ascii

UTF-8 utiliza un byte, UTF-16 utiliza dos.

Resumen-repaso:
Las ondas eléctricas que según las frecuencia con la que se propagaban podían transmitir sonido, también podían ser expresadas como 1 y 0. A cada 1 y 0 lo llamaron Bit que posteriormente IBM al fabricar procesadores, decidieron llamar byte a la unidad mínima y útil de bits. Por eso 8 bits son 1 byte, era la unidad más pequeña y útil con la que se podía enviar información. Ya definidos los bits y bytes, con el sistema binario se decidió que una byte correspondería a una letra o símbolo. En la tabla ASCII esta la asignación byte-símbolo. Dentro de la tabla y según el procesador, hay ordenes para el procesador. Estas ordenes igualmente son asignación de bytes, pero son especiales, y recibieron el nombre de Assembler. Assembler a fin de cuentas es el código en el que se programan los procesadores. Por lo tanto, todo al final del día son bytes, por ejemplo las direcciones IP (Internet Protocol), que son 4 bytes, las imágenes…etc. La razón por la que un byte no es mayor a 255e porque dado que un byte son 8 bits, las combinaciones posibles son 256 es decir del 0 al 255.

Otro pequeño resumen de la clase, para quien le pueda servir.

Los computadores funcionan con Ceros y unos, pero no significa que existan en verdad (físicamente).

Hace mucho se descubrió que la electricidad funciona con ondas.

Las ondas controladas y pegadas a una membrana permitían guardar sonidos.

Ondas conectadas a rayos catódicos crearon la televisión, para transmitir vídeo.

Para enviar texto se empezó por usar el Código morse, que se basaba en la longitud de los tonos que se enviaban, pero era poco efectivo.

apareció la idea de transformar las ondas en tonos que suben y que bajan, para los tonos altos se designaría 1 y para los bajos 0.

Bit: es una subida de la Onda 1 o una bajada de la Onda 0.

IMB en los años 50 definió el concepto de Byte que serviría para almacenar un solo carácter, letra o número.

En esa época los CPU eran extremadamente costoso y la mínima unidad que encontraron fue de 8 espacios en las que solo se almacenarían ceros y unos.

le asignaron a cada posición binaría un valor:

|||||||||
128 64 32 16 8 4 2 1

por ejemplo:

1010 = 10

Porque:
0 = 0
1 = 2
0 = 0
1 = 8

2 + 8 = 10

Notar que el número siguiente (de derecha a izquierda) duplica al anterior.

Ejercicio:

10011011

1 = 1
1 = 2
0 = 0
1 = 8
1 = 16
0 = 0
0 = 0
1 = 128
128 + 16 + 8 + 2 + 1 = 155

Te reto a hacer estos:
10011010
11011111
10010111

Cada carácter o letra tiene un byte asignado incluidos los caracteres especiales

@ = alt + 64
por ende @ tiene su representación en bytes que es:

01000000

De aquí nace la tabla ASCII, que determina que byte corresponde a que carácter.

Los computadores saben que cada 8 bits deben hacer una pausa porque los bytes siempre equivalen a 8 bits.

Existen bytes que son especiales que pueden significar ordenes específicas para el ordenador como pedir que arranque, o que ejecute una operación matemática.

Juntando todos estos bytes especiales nace Assembler. Del cual se derivaron lo que hoy conocemos como lenguajes de programación que no son más que abstracciones de Assembler.

TODO EN NUESTRA HUMANIDAD ACTUAL SON BYTES!

Por ejemplo una ip:

127.0.0.1 (nada como el Hogar, guiño guiño)

es un conjunto de 4 números y ninguno es mayor a 255 porque solo existen 256 números que se pueden expresar con un byte (de 0 a 255).

Una imagen realmente es una grilla de pixeles y cada pixel representa a un byte cuyo número es igual a su color.

y que hay de los Emojis?

Se añadieron a la tabla ASCII y cada emoji equivale a 2 bytes.

Cuando se democratizo el acceso a la computación muchos países por obvias razones tenían idiomas diferentes con distintos caracteres y para solventar eso se creó el protocolo utf-8 que permitió que todo el mundo use la misma lista de caracteres.

Pero existían miles de caracteres que no cabían en 8 bits (utf-8) por lo que se diseñó utf-16 (2 bytes) y como sobro tanto espacio, pues a crear emojis.

Nota: Unicode es la Asociación que se encarga de mantener todo el asunto de ASCII y tal.

## como funcionan los circuitos electricos

Electricidad -> Flujo constante de Electrones y se mide en: Voltaje y Amperaje
-Voltaje (Es como la presión de Agua en un Tubo, son la fuerza que mueven la electricidad por un cable
Del Positivo al Negativo (Conocimos también como polo a Tierra o Ground).
-Resistencia -> Se opone al flujo de los electrones, perdiendo dicha energía en forma de calor.
-Amperaje (Como la cantidad de Agua) Es el flujo de electrones.
-Se crea en plantas de energía y se almacena en baterías o se transmite por cables hasta la casa.
Creamos Movimiento con Un motor eléctrico.
La forma mas poderosa de usar electricidad es información.
Un circuito digital -> convierte las ondas electricas en 1 y 0
La memoria RAM guarda los ceros y unos mientras haya energia
El DiscoDuro almacena bytes con energia o sin energia
El procesador toma los bytes y los convierte en otros gracias a instrucciones que son código de programación (Java, C#, Assembler,) que se almacenan en memoria - se ejecuta en el procesador y por dentro manipulan electrones.

## Procesadores y arquitecturas de CPU

Vivimos en un mundo donde todo es un computador como celulares, tablets, televisores, etc.

Existen una arquitectura para computadores de escritorio y laptops, estos internamente tienen:

CPUs: "*unidad central de proceso*"su velocidad de mide en GHz y tienen Cores que son el número de instrucciones en paralelo que pueden hacer.
En este momento se hacen las CPUs en silicio y estas se calientan de acuerdo a la cantidad de procesos.

BIOS, es un pequeño sistema operativi de arranque en el computador y comprueba la conexión del hardware.

Disco duro, es donde se almacena el sistema operativo y los archivos que guardamos.

Memoria RAM, los datos del sistema operativo se envía a la memoria que sirve como intermediario con la CPU, porque es una memoria de acceso rápido, esta memoria solo funciona cuando hay electricidad lo que significa que es bolatil.

GPU, puede procesar en paralelo los pixeles de la pantalla y enviarlo en tiempo real para representarlos.

los driver entiende señales electricas y la convierten en bit y bite que la cpu manda al sitema operativo pra que funciones los perifericos  

**CPU **
//Unidad central de procesamiento
(
Cores = cantidad de CPUs paralelos
GHZ = velocidad a la que procesan una instrucción
)

**BIOS **
(
Cuando recibe electricidad -> arranca

Cuando arranca
Detecta lo que esta conectado al computador

Disco duro
Alli esta el sistema operativo
CPU
RAM (ramdom access memory) memoria volatil
Funciona cuando hay electricidad
Cuando guardas informaciòn (RAM -> Disco Duro)

RAM = (
Circuitos, transistores
)

CPU activa perifericos
//perifericos son cosas externas
teclado, mouse, puertos

Los perifericos funcionan gracias a chips especiales y drivers
drivers son piezas de software

GPU
graphic proccesor unit

Es quien grafica pixeles de la pantalla

Tarjeta de sonido (muerto)

ahora viene integrado en la board o bios

La CPU puede hacer todo
pero no deberia…

La especializacion es igual de bueno para las maquinas que para las personas
)

Todo esto es fisica y quimica

Cpu: Unidad central de procesamiento (central processing unit)
RAM: La memoria de acceso aleatorio (Random Access Memory, RAM)
BIOS: sistema básico de entrada-salida o BIOS (Basic Input/Output System)
Dico Duro: unidad de disco duro, hard disk drive, HDD
GPU: Unidad de procesamiento gráfico o GPU (Graphics Processing Unit)