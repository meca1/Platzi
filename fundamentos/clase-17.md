# Qué es el Modelo Cliente/Servidor
Las tecnologías utilizadas en aplicaciones web son:

**Bases de datos**, MySQL es una base de datos relacionales y MondoDB es una base de datos no relacional

**Backend**, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript

**Servidores**, existen tecnologías como NGINX, Apache, Node

**Frontend**, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript

A un grupo de tecnologías se les conoce como Stack

Recuerda:

-   Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.

**El proceso de un modelo Cliente/Servidor es así:**

-   **Cliente (Navegador que lee HTML, CSS y JS)**
-   Se envía una solicitud al  **Backend (Python, Go, Node, Java, etc.)**  a través de una URl
-   El Backend recibe la solicitud y toma decisiones en base a ella
-   El Backend consulta la  **Base de Datos (MySQL, Oracle, MongoDB, etc.)**  en caso de ser necesario
-   El Backend devuelve una respuesta que el navegador pueda leer, muchas veces datos en  **formato JSON**
-   El Cliente recibe los datos JSON y los parsea para mostrarlos en  **HTML, información presentada muy linda**

> GET: enviar variables al servidor  
POST: enviar variables con un formulario y datos ocultos al servidor  
AJAX: envía datos sin cambiar la URL
Web Sockets: envía datos cliente-servidor en tiempo real.

-   El cliente es lo que hemos hecho hasta ahora es el navegador al cual tu le habres un archivo HTML y desde este tu invocas un archivo JavaScript.
    
-   Lo que se ejecuta dentro del navegador se le llama FRONTEND y luego tenemos el SERVIDOR y lo que se ejecuta dentro de este se le llama BACKEND, pero a parte del backend tenemos las BASES DE DATOS
    
-   En estos dos mundos es donde vive el programador:  
    El mundo del FRONTEND y el mundo del BACKEND
    

LA INMENSA MAYORIA DE LOS PROGRAMADORES MODERNOS SE ENFOCAN EN 1 SOLO, PERO NINGUN PROGRMADOR PROFESIONAL SOLO SABE UNA COSA. LA IDEA ES ENTENDER CUALES SON SUS DIFERENCIAS Y PARA DOND EVAN AMBAS DICIPLINAS.

-   Bases de Datos hay muchas, oracle, SQL server, Post, PostgreSQL, MySQL, mongoDB, etc…  
    MySQL y MongoDB son de las mas populares. MySQL hace parte de unas bases de datos llamadas relacionales o una base de datos tradiccional mientras que MongoDB hace parte de unas bases de datos no relacionales que funciona por cierto con JS. Ambas son muy populares aunque MySQL es mucho mas.
    
-   En la carrera de Base De Datos esta todo lo que necesitas saber de estas.
    
-   El BACKEND es la tecnologia backend es el codigo de programacion que corre en los servidores, las maquinas que viven en internet y que procesan estos datos. ES EL BACKEND EL QUE SE CONECTA A LA BASE DE DATOS. El lenguaje mas popular de backend de nuestra epoca es PHP, pero existen otros como RUBY ON RAILS, PYTHON, Node JS, Go, Java, etc…
    
-   Node JS es una tecnologia que te permite correr JS de lado del SERVIDOR a traves de algo que se llama un servidor de eventos
    
-   El Servidor es el software sobre el que se ejecuta ese BACKEND, asi como en el lado del cliente el navegador es el que abre HTML, CSS y JS. En el lado del servidor tiene que haber un software que procese Python, PHP, etc…
    
-   Los servidores mas populares dle mundo son NGINX, APACHE, o el propio Node JS.
    
-   En el caso de tecnologias de MICROSOFT el servidor se llama Internet Information Server y puede correr tecnologias como C# o  [ASP.net](http://asp.net/)  aunque tanto NGINX como APACHE tambien pueden correr tecnologias Microsoft.
    
-   El servidor es un software que agarra la direccion/URL que le colocas en un puerto y te muestra los resultados. Los procesa por detras.
    
-   El puerto casi siempre es el 80 aunque en general no debes preocuparte, con que tu coloques por ejemplo  [www.platzi.com](http://www.platzi.com/)  automaticamente el navegador coloca el puerto 80.
    
-   Los puertos son los huecos que tienen los servidores por donde se van los datos. Tienen numeros. Y el hueco por donde se van los datos de los servidores Web (http) es el hueco 80. Esto es personalizable y es importante hacerlo para cuando tu estas programando un servidor.
    
-   Las tecnologias de FRONTEND son las que corren en el navegador y ya las conocemos. Las 3 fundamentales son HTML (v.5), CSS (v.3) y JS (EcmaScript 6). Casi siempre no tienes que preocuparte por la version por suerte vivimos en un mundo mas alla de la guerra de los navegadores donde en general HTML, CSS y JS, es compatible con todos los navegadores modernos que la gente realmente usa. Hay librerias como Angular JS, React JS, etc…Preprocesadores como Stylus. Sistemas de plantillas como jade, jiko, etc…
    
-   stack: Es un GRUPO O COLECCION DE TECNOLOGIAS (Stack significa Pila). El stack mas popular para desarrollo WEB es el stack LAMP (Significa LINUX, en el que corres Apache, tu base de datos es MySQL y tu lenguaje es PHP).
    
-   El stack de Platzi funciona asi:  
    Iniciamos en el navegador, en este ponemos  [platzi.com](http://platzi.com/), al darle enter:  
    Esto va a un servidor especial que normalmente no es tuyo, es de alguien as como Namecheep, Dyn DNS, etc… DE QUIEN COMPRASTE EL DOMINIO  
    [platzi.com](http://platzi.com/)  se cambia por una ip, la direccion en internet de tu propio servidor, eso se llama un servidor de DNS (El que resuelve el nombre  [platzi.com](http://platzi.com/)  hacia una IP y le pasa la URL)  
    Una vez yo tengo la IP del servidor de platzi. El servidor de Platzi recibe la URL dentro de su software servidor que en el caso de platzi es APACHE o NGINX.  
    Una vez recibido este dato Platzi le pasa los datos al lenguaje de programacion del backend para que los procese. En el caso de platzi usan Go, Python y Node JS.  
    Estos lenguajes se conectan a la base de datos (MySQL y MongoDB). Procesan y crean un archivo resultante HTML, JS Y CSS. Que es el que le mandan al navegador
    
-   ESTE ES EL CICLO DE DESARROLLO DE UN SERVIDOR HASTA GENERAR EL CLIENTE. Y ES ASI COMO SE ACCEDE A LAS BASES DE DATOS.
    
-   IMPORTANTE: TU JAMAS ACCEDES A LA BASE DE DATOS DIRECTAMENTE DESDE EL FRONTEND.
    
-   No existe una forma real de PROTEGER TU CODIGO, cualquier codigo de un sitio web puede ser visto incluido el JS. Porque si tuvieras un codigo en el frontend que se conectara a la base de datos, tendrias acceso a TODA LA BASE DE DATOS incluyendo los datos de otros usuarios que no estan usando tu sitio web. COMO HACEMOS PARA SOLAMENTE ACCEDER A TUS DATOS? En estos casos el frontend se conecta al BACKEND POR ESO ES NECESARIO UN BACKEND. EL BACKEND A PARTIR DE LOS DATOS DEL FRONTEND (CON UN USUARIO Y UNA CONTRASEÑA) DECIDE QUE DATOS ACCEDER Y QUE DATOS ENVIAR DE REGRESO AL NAVEGADOR
    
-   ESTA ES LA VERDADERA FORMA DE CONECTARSE A DATOS Y POR ESO EXISTE EL BACKEND PARA CONECTARME SOLO A LOS DATOS QUE NECESITO Y PARA MANTENER EL RESTO DE LOS DATOS SEGUROS Y SECRETOS.
    
-   EXISTEN MUCHOS METODOS PARA COMUNICARME DESDE HTML Y JS, ES DECIR DESDE EL FRONTEND HACIA EL BACKEND. LOS METODOS NORMALMENTE SON 4 AUNQUE HAY MUCHOS MAS:
    
-   GET ES CUANDO ENTRAS A UN SITIO WEB Y TIENE:  
    ?VARIABLE=VALOR&VARIABLE=VALOR&BLABLABLA  
    GET Es mandarle a traves de la URL al servidor unas variables para que este las procese. Esto es un tipo de envio de datos.
    

PERO SI TU ESTAS MANDANDO UN USUARIO Y UNA CONTRASEÑA JAMAS DEBERIAS USAR GET PORQUE SI LO HACES ENTONCES LA CONTRASEÑA VA A QUEDAR EN LA URL Y UN ATACANTE MALIGNO SE VA AL NAVEGADOR MIRA EL HISTORIAL Y BUSCA EN LAS URL LO QUE PAREZCA UNA CONTRASEÑA Y TE LA ROBA.

-   PARA QUE NO SALGA EN LA URL Y PARA QUE SALGA POR UN CAMINO SECRETO LOS DATOS LOS TIENES QUE ENVIAR POR UN FORMULARIO

Imagina que tu tienes un sitio web que esta en  [www.sitio.com/pagina/](http://www.sitio.com/pagina/)  y detras de un usuario y una contraseña correcta hay un gato. Tu colocas el usuario y la contraseña le das Log In y envias ese FORMULARIO por POST. Y POST se transforma a la siguiente pagina web y envia el formulario hacia  [www.sitio.com/gato/](http://www.sitio.com/gato/)  y este recibe por POST el user y el password y si es el correcto te muestra un gato.

POST es enviar variables como formularios atraves de cambiar la URL pero sin colocar los datos en esta. Si no colocar los datos por debajo. LOS MANDA EXACTAMENTE EN LOS HEADERS HTTP.  
Cuando tienes un formulario lo que quieres es que no se vean los datos a medida que se envian entonces si tuvieras tus datos en  [www.sitio.com/pagina/](http://www.sitio.com/pagina/)  y el user y el password fueran los correctos se lo envias a la siguiente pagina que en este caso es  [www.sitio.com/gato/](http://www.sitio.com/gato/)  si esta bien y es lo correcto muestro el gato y si no no lo muestro. Y ESTO VA POR DEBAJO LA URL SIMPLEMENTE DICE  [www.sitio.com/pagina/](http://www.sitio.com/pagina/)  PERO POR DEBAJO EN UN LUGAR INVISIBLE SE LO MANDASTE AL SERVIDOR (EL USER Y EL PASSWORD). ESTOS DATOS CUANDO SE ENVIAN POR POST PARA SER EXACTOS SE ENVIAN JUNTO A LOS HEADERS DEL PROTOCOLO HTTP. LEE ACERCA DEL PROTOCOLO HTTP SI QUIERES SABER MAS.

-   Seguro que has visto sitios donde tu colocas cosas y automaticamente cambia. Por ejemplo en FaceBook cuando tu le envias un comentario a una foto inmediatamente aparece el comentario SIN RECARGARTE LA PAGINA
    
-   ESE CAMBIO SIN CAMBIAR LA URL DENTRO DEL BODY, DENTRO DE LA PROPIA SECCION DE LA PAGINA SE LLAMA AJAX (Asíncrono Javascript And XML).
    
-   Asi como existe el stack LAMP existen muchos otros, uno de los que estan tomando mas popularidad en los ultimos años es el stack MEAN:  
    En este stack tu usas algu servidor puede ser NGINX o el propio Node JS, usas mongoDB como base de datos no relacional, usas express como una libreia de JS para crear sitios web y usas angular JS que es una libreia en frontend que hace mas facil crear aplicaciones web complejas.
    
-   Este es el stack de platzi:
    
-   Django es un framework o libreria del lenguaje python
    
-   Go es muy rapido para procesamiento matematicos
    
-   Node js es espectacular para sockets.
    
-   Sockets es una opcion especial para transmitir datos clientes/servidor en tiempo real. Por ejemplo los videojuegos para intercambiar datos mientras estas jugando usan socket, los chats para moverse en tiempo real tambien, etc…
    
-   Arduino es una placa electronica a la que puedes conectar cualquier cosa que sea electrica
    
-   Cuando corres un servidor local, es decir un servidor en tu propia maquina la IP es 127.0.0.1 (En el esquema tradicional de como funciona las redes esta ip es la ip que indica tu propio ordenador)
    
-   En algunos sistemas operativos como en Windows si escribes Local Host esto tambien significa 127.0.0.1
    
-   En el navegador JS y HTML no tiene forma de conectarse a dispositivos externos, pero el servidor si que lo puede hacer
    
-   Puerto 8080: Cuando estas corriendo servidores en tu propia maquina es una BUENA PRACTICA hacerlo en puertos donde tu sepas que no estan siendo usados. Casi nunca el puerto 8080 esta siendo usado.
    
-   Vamos a usar este stack para nuestro ejercicio de arduinobot:
    

NodeJS que es la forma de correr JS de lado del servidor  
express que es una libreria de NodeJS que me permite crear aplicaciones web sobre NodeJS  
Y JS de lado del cliente junto con el HTML de toda la vida  
(Tenemos que usar NodeJS porque HTML no tiene acceso a dispositivos pero un SERVIDOR ES COMO SI FUERA UN PROGRAMA NATIVO DEL S.O WINDOWS, LINUX O MAC. Y LOS PROGRAMAS NATIVOS DEL S.O TIENEN ACCESO A TODO! INCLUYENDO EL PUERTO USB POR DONDE NOS VAMOS A COMUNICAR CON NUESTRO ARDUINO)
