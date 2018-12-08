# Cómo funciona realmente un sitio web

1.- Los protocolos se encargan de manejar todas las peticiones que hacen la páginas de internet desde tu navegador hacia los servidores DNS, éstos transforman la dirección de la página web en una dirección IP y tu navegador se conecta a esa IP.

2.- Una vez se tiene la dirección IP el navegador envía un HTTP request en donde envía información con las características del cliente y los requerimientos del mismo, es decir, Host requerido, página del sitio que necesita, tipo de navegador, versión del navegador, etc.

3.- El servidor envía los resultados por medio del mismo protocolo HTTP en forma de un HTTP Response en donde manda todo el HTML del sitio web así como otros datos que el navegador necesita.

4.- Por último se cargan los assets de nuestro sitio web y es aquí donde se descargan imágenes, sonidos, etc.

1.  El navegador le hace una petición al sistema operativo para ver si tiene una versión en caché.
2.  GET le pide al servidor los datos y se los envía a la IP del servidor.
3.  El servidor responde con un número, como 200 (OK), 404 (No encontrado), 500 (error del servidor).
4.  Assets request.

La cookies son datos guardados en variables y van en el request y en el response del servidor. Las cookies pesan, entonces es importante limitarlas para no afectar la velocidad de las peticiones.

1.  El navegador le hace una petición al sistema operativo para ver si tiene en caché el DNS pedido (Si entramos a los mismos sitios webs muchas veces no tiene sentido estar yendo todo el tiempo a los sevidores de DNS).
    
2.  El navegador una vez entiende cual es la IP forma internamente en la RAM un HTTP Request (métodos de petición para indicar la acción que se desea realizar para un recurso determinado) y este lo organiza con el metodo GET (Mira aqui todos los metodos  [https://developer.mozilla.org/es/docs/Web/HTTP/Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)) que le dice algo asi:  
    La peticion empieza por la palabra GET  
    Fundamentos porque intentamos ir a fundamentos  
    HTTP/2 es la version del protocolo (El estandar de http exige que cuando se envie se coloque /)  
    Despues se escribe Host: dominioquequieresacceder (Si te preguntas que si ya tienes la IP para que quiero el dominio, es porque en un mismo servidor pueden correr diferentes dominios, por ejemplo en el servidor de platzi corre tambien maestros del web, cristallab, etc…)  
    Luego le mencionamos nuestro User-Agent (Aqui es como descubren los servidores que navegador estan usando Y ESTO NO LO VE EL USUARIO, ESTO VIAJA ESCONDIDO EN LAS CABECEDERAS HTTP)
    
3.  Todos estos datos se empaquetan y se envian a la IP del servidor que recibe la peticion en el puerto 80 (porque es http)
    
4.  El servidor responde con un numero, como 200 (ok), 404 (Not Found), 500 (error del servidor)  
    Llega la fecha en que se hizo la peticion  
    El tipo de servidor  
    La ultima fecha modificada (ESTO ES MUY IMPORTANTE, COLOCAMOS LA ULTIMA FECHA EN QUE SE MODIFICO PORQUE PUEDE QUE EN CACHE EN ESTE MISMO INSTANTE ESTE EL MISMO ARCHIVO, ENTONCES NO NECESITAMOS CARGAR OTROS ARCHIVOS). TE PERMITE INMEDIATAMENTE QUE EL NAVEGADOR SEPA “ESTE ES EL MISMO ARCHIVO QUE DESCARGUE AYER, NO LO HAN MODIFICADO. ENTONCES NO TENGO QUE VOLVER A DESCARGAR LOS ASSETS, MODIFICAR CSS, NO TENGO QUE CARGAR OTRAS IMAGENES, ETC…SIMPLEMENTE LO DEJO ASI”. ESTO ES UN INDICADOR PARA QUE EL CACHE SEPA CAUNTO TIEMPO LLEVA CACHEADO UN SITIO WEB  
    El content-lenght: numero (Este numero es la cantidad de bytes que tiene la peticion http. Cuando son muy largas necesitamos mostrar una barra de carga)  
    Connection: close (Le decimos que la conexion va a quedar completamente cerrada de manera inmediata, porque http tb puede mantener conexiones abiertas esto lo hace para mantener conexiones de sockets, como por ejemplo cuando hacemos un chat (un chat tiene que estar enviando y recibiendo conexiones todo el tiempo. Y eso hace que la conexion se abra))  
    Por ultimo le decimos el tipo de dato que le estamos enviando Content-type: text/html en este caso es un html y se manda ahi el html tal cual. Si fuera una imagen pondria image/jpg, etc…  
    FIJATE QUE EL ARCHIVO HTML QUE LE ENVIAMOS TIENE 13 BYTES Y EL CONTENT-LENGHTH LO INDICA  
    TODO ESTO SE LE LLAMA UN HTTP Response  
    SI EN EL HTML YO ESTOY PIDIENDO OTRA SERIE DE RECURSOS POR EJEMPLO QUE EN EL HTML ANTERIOR TENGO UNA IMAGEN, UN BACKGROUND EN CSS DE FONDO, UN CODIGO EN JS, ETC… VUELVO A PASAR POR EL MISMO CAMINO Y ESTE CAMINO ES LO QUE SE LLAMA UN ASSETS REQUEST
    
5.  Assets Request: Es cuando empiezo a pedir cada uno de ellos de manera independiente y lo unico que tengo que hacer aqui es volver al punto 1 pero con la url del asset que sale de nuestro codigo html (Aqui yo abre enlazado una imagen, un css, un js, etc…). Y el navegador se encarga de conectarse al servidor de platzi de resolver todo de nuevo y de traer el assets correcto
    

COOKIES: LAS COOKIES VAN TANTO EN EL REQUEST, COMO EN EL RESPONSE DEL SERVIDOR. SON DATOS EN VARIABLES, ES DECIR UN NOMBRE Y UN VALOR (SIMILAR A LOS DNS). LAS COOKIES SE PEGAN AL REQUEST (TODOS LOS REQUEST QUE YO HAGA AL SERVIDOR TRAEN LA COOKIE YA INSTALADA. Y ESTA VIENE COMO OTRO ELEMENTO DEL PROTOCOLO HTTP Y SE METE DENTRO DEL SERVIDOR CUANDO YO HAGO LA PETICION). DEL LADO DEL SERVIDOR YO PUEDO CAMBIAR LAS COOKIES, por ejemplo: Quiero recordar cuantas veces entro un usuario, entonces visitas en vez de 22 tengo 23, y donde actualizo esta? En el momento en el que le respondo al servidor enviandole el HTML, es decir el servidor manda la cookie cambiada como parte de la cabecedera antes de enviar la respuesta HTML del protocolo HTTP.  
LAS COOKIES ES UNA FORMA “ESCONDIDA” DE ENVIAR DATOS ENTRE CLIENTE Y SERVIDOR  
IMPORTANTEE!!: LAS COOKIES PESAN BYTES, SI SIEMPRE VAN PEGADAS TANTO EN LA PETICION COMO EN LA RESPUESTA, LA CANTIDAD DE COOKIES QUE NOSOTROS COMO PROGRAMADORES LE AGREGUEN A UN SITIO WEB VAN A HACER MAS PESADO TANTO EL ENVIO DE LOS DATOS COMO LA RESPUESTA DE ESTOS. SI TENEMOS 100KB DE COOKIES SIEMPRE LA CONEXION VA A TENER 100KB DE IDA Y 100KB DE VUELTA, 200KB DE TRANSFERENCIA!  
NUNCA ABUSES DE LAS COOKIES, ESTAS DEBERIAN SER EXTREMADAMENTE LIMITADAS A PEQUEÑAS VARIABLES.  
Si quieres ver que cookies guarda un sitio web de ustedes puedes ir a la console/application y os muestra las cookies
