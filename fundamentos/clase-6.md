# Que es la memoria RAM y como funcionan los discos duros

son lentos por que hay que esperar a que el disco rote para que llege la informacion deseada

los discos de estado solido son mas rapidos tienen circuitos integrados llamados memorias flask pero no son tam rapido como la memoria RAM que es instantania

cada documento esta compuesto por bit o bytes

los discos duros tiene una memoria persistente que guarda la informacion asi no tenga energia.

guardan los archivos de una manera secuencial osea que para aceder a un archivo en piezan leyendolo desde el principio

los archivos estan guardados de una manera estructurada tiene una forma especial de guardase adentro esa froma se llama sistemas de archivos son coversiones internas decididas por el sistema operativo que nosostros usamos para acerder alos archivos

Sabemos que los archivos se almacenan en el disco duro y la hora de abrirlo, se cargan en memoria RAM, pero… ¿Cómo exactamente funciona eso?

Los discos duros antiguos funcionan como los vinilos antiguos: tienen un cabezal que va leyendo los datos que pasan por debajo de ella a medida que el disco gira a una velocidad constante.

Los discos duros son lentos porque deben posicionarse donde está el archivo almacenado y esto puede implicar que el brazo mecánico que mueve el cabezal se tome mucho tiempo en encontrar todos los pedazos de datos del archivo.

La memoria RAM es más rápida ya que puede acceder a los datos almacenados de manera instantánea.

Los discos duros de estado sólido no tienen el cabezal ni los discos que giran, sino que son más parecidos a las memorias RAM: funcionan electrónicamente. A pesar de eso guardan los datos en memorias flash, que son un poco más lentas que las RAM.

Los discos duros no son volátiles: guardan la información de manera persistente aunque se les quite el suministro de energía.

Además almacenan los archivos de manera secuencial: para almacenar un archivo, éste se parte en varios pedacitos y se guarda la posición de cada uno de estos pedacitos y su ubicación en el disco para poder leerlos secuencialmente.

Los sistemas de archivos son convenciones internas de los sistemas operativos para poder acceder a los archivos almacenados.

En Linux existe ext3 o ext4
En Windows existía FAT16 o FAT32 (File Allocation Table), que fue reemplazado por NTFS (New Technology File System)
En Mac OSX el sistema de archivos se llamaba HFS (Hierarchical File System) pero ahora se llama AFS (Apple File System) en macOS Sierra
Cuando abrimos un archivo, el CPU se lo pide al disco duro y luego lo lleva a la memoria RAM para leerlo.

En la RAM están todos los programas y archivos que están en ejecución. Si abrimos un archivo con el Bloc de Notas, por ejemplo, ambos deben estar cargados en la RAM. Y el CPU puede acceder a la memoria RAM a través de un índice compartido, es decir, un índice que indica en qué posiciones de memoria se encuentran qué partes de un archivo o proceso.

Los datos viajan a través de un conjunto de cables paralelos llamado bus de datos, que comunica el CPU con el disco duro y la RAM para permitir la transferencia de datos.

Aspectos importantes a tener en cuenta de la clase:
Discos duros:

Forma en que organizan datos:

Persistente
Secuencial
Estructurada (Depende del sistema de archivos, que a su vez depende del S.O. que esté en el disco duro):
Windows: FAT16 - FAT32, NTFS
Linux: Ext3 - Ext4
Mac OS: HFS, APFS
Forma de localizar y leer archivos:
En la parte superior de los Discos Duros existe una cabecera, la cual guarda el indice de todos los archivos, esto permite que en el momento de lectura desde la cabecera, se conozca en dónde está ubicado el archivo en cuestión.

Borrado de archivos:
Por tal motivo, cuando se “borra” un archivo, lo que realmente se esta haciendo es eliminando el indice en la cabecera que está relacionado con el archivo. Determinados tipos de software permiten la recuperación de estos archivos, leyendo detalladamente toodo el disco duro. Sin embargo algunas practicas de borrado (Sheredder) permiten borrar el archivo por completo, incluso ejecutando el borrado determinado número de repeticiones, lo que imposibilita el trabajo de forenses para la recuperación de datos o archivos.

Memoria RAM (Random access memory)

Procesos:
La memoria RAM, siendo tan rápida, tiene la capacidad de ejecutar varios procesos paralelamente. El SO es uno de esos procesos ejecutados por la RAM. Sin embargo la opciones que nos ofrece el SO son muchas y no siempre se utilizan todas, por lo tanto la RAM solo carga aquellas tareas que realmente necesitamos y estamos usando frecuentemente.

Localización de procesos:
A diferencia de los discos duros, la memoria RAM hace uso de un indice compartido con la CPU que es ultra veloz. Esto facilita y permite una localización de los procesos por parte de la CPU de una manera increíblemente rápida.

CPU (Central process unit):

Dentro de este asombroso chip, no encontramos con un espacio que recibe por nombre Memoria Caché. En ella se guardan y almacenan cierto tipo de datos de uso frecuente, para que sea más fácil y rápido el acceso a ellos. Por ejemplo una parte del SO siempre estará almacenada en la Memoria Caché para que sea rápido acceder a él.

Comunicación:

Ram:
Para lograr la efectiva comunicación entre la CPU y la RAM existe lo que se conoce como un bus de datos o bridge (puente). Un bus de datos en algunas ocaciones es un cable delgado y ancho. En otros casos esta conexión está establecida como circuito en la placa madre (mother board).
Disco Duro:
Para la conexión entre en disco duro y la CPU, el bus de datos recibió inicialmente el nombre ATA, que en una versión posterior se llamó SATA. Hay otro tipo de bus de datos para el disco duro mejor que SATA, que se llamó IDG.


![GitHub Logo](./clase6.png)