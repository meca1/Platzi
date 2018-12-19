Metadatos, cabeceras y extensiones de archivos

Tu aprendiste que  _.jpg_  significa la extensión de archivos de imagen, históricamente windows tenia muy pocos bytes para la extensión, por esto la extensión normalmente era de 3 dígitos.

Existen muchas otras extensiones como  _.html_  para páginas web, .mpg4 para vídeo.

Cuando abres los archivos vas a ver su codificación binaria o dependiendo del editor puedes verlo en hexadecimal.

Un sistema operativo lee los primeros bytes del archivo para entender a que archivo corresponde, esta información se llama cabecera.

Cada sistema operativo tiene una base de datos de que programa abre que tipo de archivo.

Cuando estas transmitiendo un archivo por Internet se especifica el tipo de archivo con mime types, el cual se transmite en la cabecera de un paquete http.
![](https://static.platzi.com/media/files/filetypes_f84a50c0-2501-476d-b0e3-7d7194e2fb41.png)

Para estudiar:

-   La mayoría de extensiones son de tres caracteres porque en los inicios de la computación, solo era posible asignar 3 bits para la extensión (tipo) de archivo, y 8 para el nombre. Sin embargo todo avanzo y ya no estamos limitados a usar solo tres caracteres para denotar el tipo de archivo.
    
-   Los Sistemas Operativos, tienen en una base de datos guardada la correspondencia de cada extensión de archivo. Es decir, en la base de datos dirá algo como: jpg = imagen, mp3 = musica, html = pagina web y así…En todo caso para llegar a esta base de datos y encontrar a que corresponde, es necesario primero identficar que tipo de archivo es. Para ello el SO lee los primeros bits de cada archivo hasta que encuentra cierto patron, esos bits de identificación se llaman la cabecera. Una vez identificado el patrón, el SO ya conoce que tipo de archivo es, con que programa se debe abrir y cómo se debe mostrar gracias a la base de datos.
    
-   Todo esto en la web funciona a través de un estandar denominado MIME TYPES (Extensión para emails multiproposito). Eventualmente funcionaba solo con emails, pero hoy en día esta en la mayoria de protocolos de comunicación. La forma en que funciona es sencilla, en la cabecera del protocolo de comunicación (independiente de si es http, ftp…) se envían metadatos con la información del archivo. De tal forma que si es una pagina web, envía text/html, si es un video mp4 envía video/mp4 y asi se logra la identificación de los archivos
**Los metadatos**  son datos altamente estructurados que describen información, describen el contenido, la calidad, la condición y otras características de los datos. Es “Información sobre información” o “datos sobre los datos”.

**Cabecera**  es la información suplementaria situada al principio de un bloque de información que va a ser almacenada o transmitida y que contiene información necesaria para el correcto tratamiento del bloque de información.

**La extensión de archivo**  conocida también como extensión de fichero permite identificar el tipo de aplicación con la que está asociado un documento. Un archivo está compuesto del un nombre seguido por el carácter de puntuación (.) mas la extensión del archivo.

Algunos sistemas de archivos limitan la longitud de la extensión, como es el caso de los archivos FAT, mientras que los archivos tipo NTFS permiten más de tres caracteres en la extensión.

La extensión de archivo determina qué programa se utiliza para abrir dicho archivo, así como qué icono se debe mostrar para representarlo. Por ejemplo, la extensión .txt indica que el archivo es un documento de texto, la extensión .doc indica que se trata de un documento de Microsoft Word, mientras que .psd se refiere a documentos Photoshop.

Las extensiones de archivo más comunes son: .jpg, .gif, .mp3, .zip, .html y otros.
