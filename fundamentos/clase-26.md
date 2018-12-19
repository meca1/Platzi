# Videos, contenedores, codecs y protocolos

En un vídeo hay muchos factores para comprimir, un vídeo es si es una serie de fotos vistas muy rápido. por ejemplo si un vídeo tiene 100 frames a 24 frames/segundo y si cada frame pesara 1.9MB el vídeo pesaría más de 100MB por 4 segundos de vídeo.

Por esto en los vídeos se utilizan varias formas de compresión

**Contenedores:**  es el formato es que se guarda el vídeo como .avi, .mp4, .flv, .mpg, .webm  
**Codecs:**  es un algoritmo que comprime un vídeo y lo descomprime como divx, h.264, ogg, vp9  
**Protocolos:**  es la forma de transmitir los vídeos como RTMP  
**Keyframes:**  cada cierta cantidad de frame existe un frame que vuelve a definir todo el área

Estrictamente cuando hablamos de **audio** nos referimos a señales eléctricas, cuando hablamos de **sonido** nos referimos a ondas mecánicas.  
Por ejemplo cuando hacemos un aplauso en el mundo “real”, se generan ondas mecánicas (sonido) que llegarían a un micrófono, dicho micrófono se conoce como transductor ya que convierte de un tipo de energía a otra. En éste caso se convierte de energía mecánica a eléctrica y solo después del micrófono es que se le puede llamar audio.

En el caso de la compresión de mp3 no es que el oido humano no escuche esas ondas, de hecho las grabaciones en general de alta fidelidad se hacen a 16bits con un muestreo de 44100 Hz. Esto se basa en el teorema de Nyquist y asegura que grabaremos solo lo que el humano es capaz de escuchar (20Hz-20KHz). Si revisamos un archivo wav podemos ver que se encuentra esa información.

![Wav File](https://s3-us-west-1.amazonaws.com/publicssets/Screen+Shot+2017-03-25+at+9.12.40+AM.png)

Ahora bien, con un mp3 lo que hace es quitar información que no es muy perceptible o relevante con respecto al demás contenido, pero a fin de cuentas el oido si lo puede escuchar. Es como si en un texto se eliminaran algunas letras, el cerebro es capaz e entender el mensaje.  **Lo msmo psa con l mp3.**

Para que se queden con una idea más clara de cuanta información de pierde al escuchar un mp3 les dejo ésta imagen comparativa de diversos formatos así como dos links a videos.  
![Table](https://s3-us-west-1.amazonaws.com/publicssets/Screenshot_2016-11-19-15-27-21.png)

El primero es una especie de documental sobre el panorama en la industria de la música desde la perspectiva de la compresión.  
[Distortion of sound](https://www.youtube.com/watch?v=mDZcz-V29_M)

El otro es una charla de Andrew Scheps en google del 2013, igual sobre el tema de compresión.  
[Lost in Translation](https://www.youtube.com/watch?v=SXbH-yzGNfg&t=1s)

Si, la compresión por lo general arruina la calidad de los audios.

Existen tipos de compresión sin pérdida también llamados losseless, FLAC es uno de esos tipos que no generan un cambió perceptible al compararlo con un WAV, que en teoría es la forma de onda digitalizada.

Algo importante es que no te debes de guiar siempre por el tamaño del archivo, si bien es cierto que uno con mayor fidelidad es más pesado puede darse el caso que el mismo esté siendo ocupado para esteganografía. Lo ideal es entrenar tu oido para poder percibir la calidad de un sonido o bien analizar el audio en algún editor dónde puedas ver la forma de onda o bien realizar un espectrograma. En youtube hay varios videos dónde se hace y explica ese ejercicio.

Un codec es un algoritmo que puede significar Codificador - Decodificador, lo que hace es comprimir y luego descomprimir un video.  
Ejemplos:  
DivX  
H.264  
VP9
-   En un vídeo hay muchos factores para comprimir, un vídeo es si es una serie de fotos vistas muy rápido. por ejemplo si un vídeo tiene 100 frames a 24 frames/segundo y si cada frame pesara 1.9MB el vídeo pesaría más de 190MB por 4 segundos de vídeo. Los frames por segundo son la cantidad de fotos que tiene un video por segundo.
-   Podemos usar jpg y comprimir cada una de estas fotos y ya tendriamos un peso menor. Pero a medida que avanzo el tiempo se descubrieron formas mas eficientes de compresion.
-   Hay una forma de compresion que es comprimir a lo largo del tiempo, porque resulta que un video las cosas cambian pero casi siempre no cambian tanto. Para ello hablemos de varios elementos que contiene un video:
-   Contenedores: Son los tipos de archivos donde se guarda el video, porque no es simplemente un formato como jpg, los videos son la animacion del movimiento, el sonido, los subtitulos, en dvd diferentes tracks de video, audio y subtitulos, mas cosas internas, etc…Por eso se han creado multiples contenedores como:  
    .avi, mp4, .flv (flash video), .mpg, webm (lo empuja mucho google), etc…  
    Google espera que webm se vuelva el contenedor estandar para internet pero mp4 es el ganador indiscutible.  
    Hay formatos raros que lo encuentran solamente en lugares perdidos de internet, uno de ellos es mkv (matroska video). Este es muy popular en japon porque te permite insrtar subtitulos y subtitulos con formatos especiales por ejemplo animaciones o estilos css, tb te permite insertar tracks diferentes de audio por ejemplo puedo ver una pelicula japonesa en ingles, o con subtitulos en ingles o sin subtitulos, etc…hay muchos formatos.  
    Lo especial de estos formatos es que hay fragmentos internos que los optimiza para cada caso por ejemplo en el caso de mp4, webm y flv son capaces de soportar multipart (esto es cuando rompes el video en muchos fragmentos chicos, y en cada fragmento lo que hace es repetir la cabecera). Por ejemplo si nosotros llegamos a una transmision en vivo, nosotros nunca llegamos a recibir la cabecera porque para eso tuvimos que estar al principio de una transmision en vivo entonces en cada segmento de la transmision en vivo, entonces en cada segmento de la transmision en vivo vuelve a repetir la cabecera para que sin importar el punto en el que estes en el video recibas esos datos.  
    El trabajo del contenedor es entregar la cabecera y metadatos del video, por ejemploo metadatos que deben de ir dentro del conetenedor son el tamano del video (1280*720), los codecs interno que usa, etc…
-   Codecs (codificador-decodificador o compresor-descompresor): Un codec es un algoritmo, es una pieza de codigo especial que comprime un video y lo descomprime. Historicamente el codec que se usaba mucho antes era DivX. El mas popular de nuestra epoca y el que mas se encuentran es H.264. El codec de webm es VP9. VP9 y ogg son codecs de codigo abierto. VP9 es especial porque la empresa que lo hizo google la compro (onto, hacian el contenedor y el codec de flash ) y los dejo de codigo abierto, por eso webm y el codc vp9 son de codigo abierto.  
    H264 y mp4 son formatos cerrados (tanto en codigo fuente como patentes) porque resulta que en EE.UU estos formatos son patentables, en una empresa llamada MPEG-LS que son los duenos del h264 y mp4. Esto es un consorcio compuesto por multiples empresas (apple, microsoft, sony, universal, etc…)  
    La mayoria de la tdt (televisiondigital terrestre) usa mp4 y h264. Por ondas aereas a nuestros televisores llega un video codificado en h264 y mp4 cuando prendemos el tele para ver tv en hd (depende del pais, pero en general funciona asi).  
    En los videos afecta mucho el contenedor y el codec. En los iphone y muchos android hay un chip especializado que no sirve para nada mas que para comprimir y descomprimir h264. La razon de porque hacen un chip especializado y no se lo dejan a la cpu o gpu del SoC es porque asi usan menos electricidad y aprovechan mas la bateria, sobretodo teniendo en cuanta que ver videos es de lo que mas destruye la bateria de un movil. Por eso lo colocan en un chip aparte para alargar la vida de la bateria mucho mas PERO ESTO GENERA QUE LOS DESARROLLADORES NO PUEDEN USAR OTRO TIPO DE COMPRESORES Y CONTENEDORES QUE SEAN MAS LIBRES COMO WEBM O VP9. COMO NORMAL GENERAL TODOS LOS MOVILES SOPORTAN H265 Y MP4 Y MUY POCOS WEBM Y VP9
-   Protocolos: Son la forma de transmitir videos. Uno muy obvio es HTTP pero este no es bueno para transmitir videos porque por ej, que pasa cuando se te corta la senal? o transmitiendo un video en vivo? Recuerda que HTTP es un protocolo que abre la conexion, envia los datos y la cierra. Han habido muchos mejoras a htttp para que pueda transmitir videos, una d ellas es la modificacion para poder descragar de manera progresiva cualquier tipo de archivo por ejemplo: antes descargabas un archivo y lo cancelabas, el archivo empieza desde 0 en vez de empezar desde donde paro, ESTO OCURRE PORQUE EN LOS SERVIDORES WEB NO PERMITIAN DESCARGA PROGESIVA Y SIEMPRE VOLVIAN A LA CABECERA DEL ARCHIVO. CON MEJORAS AL PROTOCOLO HTTP ES POSIBLE HACER DESCARGAS PROGESIVAS EN LUGARES ALEATORIOS. OTRAS DE LAS MEJORAS ES PODER DESCARGAR PEDACITOS DE FORMA PARALELA, AUNQUE HAY PROTOCOLOS ESPECIALIZADOS QUE HACEN ESTO SE LLAMAN PROTOCOLOS DE STREAMING, EL MAS POPULAR ES RTMP (Real Time Messages Protocol).  
    RTMP: Es una forma especial de transmitir video que te permite varias cosas, primero enviar y recibir, de tal manera que tu puedes ser el emisor del video. Te permite recibir por pedazos independientes ‘multipark’ cada uno de los videos con sus propios contenedores y cabeceras. Te permite recibir la cabecera en otro lado, enviar no solo video si no tb texto (ENTONCES PODEMOS PROGRAMAR CHATS O VIDEOJUEGOS EN RTM). Y FUNCIONA DE UNA MANERA PARALELA (PARA ASI DESCARGAR PARALELAMENTE MULTIPLES PEDACITOS) ESA ES LA FORMA EN QUE FUNCIONAN POR EJEMPLO YOUTUBE O TWITCH.  
    Hay protocolos experimentales como web app desert que estan disenados para cambiar la forma en que nosotros transmitimos y enviamos no solamente videos si no cualquier tipo de formato. Este protocolo es un protocolo P2P es decir todas las personas que se conectan y bajan el video empiezan a compartir el video a los demas y tb funciona como servidor. Es similar a bittorrent con la diferencia de hay un servidor central, que distribuye la informacion original y luego nosotros directamente la obtenemos P2P. ES IDEAL PARA VIDEOLLAMADAS porque en una videollamada no me interesa ir al servidor y luego al otro punto, puedo hacer kla conexion punto a punto sin necesidad de pasar al otro lado. Web app desert es muy pesado en el procesador porque tiene que hacer la codificacion y decodificacio en tiempo real y tb exige mucho a tu conexion. ESTO ES PROBABLEMENTE EL FUTURO DE LAS CONEXIONES (Esta soportado en pocos navegadores)
-   PERO COMO SE COMPRIME UN VIDEO?  
    Ustedes han escuchado 24 frames/segundo, 60 frames/segundo, etc…Esto funciona asi por ejemplo en un video de accion:  
    Hay cosas que se mantienen muy similar por ejemplo en este video el pecho de nuestro personaje es exactamente el mismo a lo largo del tiempo entonces yo puedo crear un algoritmo que agarre esto e internamente me diga que desde 1:00 hasta 1:05 coloque en ese rectangulo el color negro

ESTOY USANDO MUY POCOS BYTES PORQUE NO SOLO ESTOY COMPRIMIENDO EN EL AREA BIDIMENSIONAL DE LA IMAGEN, SI NO TAMBIEN EN EL AREA TRIDIMENSIONAL DEL TIEMPO.  
EJEMPLO: MIN 11:14 - 12:02  
EL PROBLEMA DE ESTE SISTEMA ES QUE CUANDO HAY UN CAMBIO RADICAL POR EJEMPLO UN CAMBIO DE ESCENA NO ME SIRVE PORQUE ESTOY CAMBIANDO TODOS LOS RECTANGULITOS O PIXELES.  
EN ESTOS CAMBIOS RADICALES LOS ALGORITMOS CREAN ALGO ESPECIAL LLAMADO “KEYFRAMES”, AGARRAN UNA SERIE DE FOTOGRAMAS O FRAMES ESPECIFICOS Y ESTOS LOS LLAMA KEYFRAMES.  
CADA CIERTA CANTIDAD DE FRAMES HAY UN FRAME QUE VUELVE A REDEFINIR TODO EL AREA, RECTANGULOS Y COMPRESION. DE ESTA MANERA LA TRANSICION ES SUAVE Y NO HAY NECESIDAD DE CREAR ARTEFACTOS.  
SI TE A PASADO QUE ESTAS CON UN VIDEO Y DE REPENTE TODO QUEDA VERDE Y EL OBJETO QUE SE MUEVE SE EMPIEZA A VER LARGO, TO MAL, Y LUEGO TODO VUELVE A ESTAR BIEN?? ESTO ES PORQUE SE CAYO UN KEYFRAME  
ESTOS SE LLAMAN DROPKEYFRAME (PORQUE SE PERDIO LA DEFINICION ORIGINAL DE ESTOS RECTANGULOS DE COMPRESION A LO LARGO DEL TIEMPO).  
ESTO SE PUEDE PONER MUCHO MAS COMPLEJO PORQUE LAS VERSIONES DE H264 Y H265 NO SOLAMENTE FUNCIONAN CON RECTANGULOS SI NO TB CON FIGURAS GEOMETRICAS COMO APROXIMACIONES, CIRCULOS, FORMAS, ETC… Y CON LA LLEGADA DE LA INTELIGENCIA ARTIFICIAL A LA COMPRESION ESTAN EMPEZANDO A ENCONTRARSE PATRONES AUN MAS COMPLEJOS QUE PUEDEN COMPRIMIR MUCHO MAS EL VIDEO, EL PROBLEMA ES QUE EL COSTO DEL PROCESADOR PARA DESCOMPRIMIR ESOS RECTANGULOS ES ALTO, PORQUE AL FINAL DEL DIA LA CPU Y LA GPU TIENEN QUE REPRESENTAR TODOS LOS BYTES REPRESENTADOS EN PANTALLA A LA VELOCIDAD DEL VIDEO.  
ENTONCES CONTRA MAS COMPLEJO SEA EL ALGORITMO DE COMPRESION Y MAS EXTREÑA SEA SU CONFIGURACION, MAS PESADO SERA PARA EL PROCESADOR PODER DECODIFICADOR Y REPRESENTARLO EN PANTALLA Y VA A SER AUN MAS DIFICIL PARA LA CPU DE UN TELEFONO ENTONCES VA A GUSTAR MAS ELECTRICIDAD, SE VA A CALENTAR MAS Y VA A GASTAR MAS BATERIA.

-   Sonido: El sonido es una onda electrica, que esta representada en bytes y funciona exactamente igual que una imagen. Ustedes pueden representar toda los elementos de la onda o comprimirla, uno de los algoritmos mas populares de comprension es mp3.  
    Similar a las imagenes el codec y el contenedor son lo mismo porque no hya mas cosas. Entonces mp3 es un contenedor y un codec.  
    mp3 NO COMPRIME EL ARCHIVO ENCONTRANDO AREAS SIMILARES, SI NO QUE BUSCA LAS PARTE DEL SONIDO QUE NO PUEDE CAPTURAR EL OIDO HUMANO Y LAS ELIMINA, DEJANDO SOLO LAS QUE SI SE PUEDEN ESCUCHAR.  
    PARA OPTIMIZAR LA CALIDAD DEL MP3 LO QUE PODEMOS HACER ES BAJAR LA CANTIDAD DE SONIDOS QUE ESCUCHA EL OIDO.  
    TAMBIEN HAY PTRA FORMA DE OPTIMIZAR MP3, SEGURAMENTE HABRAS VISTO 128KB/S, 96KB/S, ETC… ESTO SIGNIFICA QUE POR SEGUNDO LA ONDA ESTA REPRESENTADA EN 128.000 BYTES (LOS BYTES SON POSICIONES EN LA ONDA PARA LUEGO REPRESENTARLA Y LEERLA POR UN SOFTWARE QUE CONVIERTA ESA CURVA EN VIBRACION DE UNA MEMBRANA QUE GENERE UN SONIDO QUE UN HUMANO PUEDA ESCUCHAR).  
    ENTRE MAS BYTES LE ASIGNE A UNA ONDA, MAS CALIDAD TIENE, Y ENTRE MAS LE QUITE YO A ESTA MENOS CALIDAD TIENE. EJEMPLO: MIN 16:20 - 18:00  
    MP3 TIENE PATENTES Y REQUIERE LICENCIAS PARA PODER SER REPRODUCIDOS, IGUAL QUE MP4 Y H264.  
    HAY MAS COMO AAC, FLAC (SE COMPORTA COMO EL PNG PERO EN AUDIO), OGG (COMPLETAMENTE ABIERTO Y POCO USADO), WAV (REPRESENTA TODOS LOS BITS POSIBLE DE UNA ONDA DE AUDIO)
