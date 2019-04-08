# Django

Al inicio de la web todo era texto plano ([HTML](https://www.w3schools.com/htmL/)), al transcurrir del tiempo se necesitaban cosas más complejas como conexión a BD’s y de ahi nace  [CGIscript](https://es.wikipedia.org/wiki/Interfaz_de_entrada_com%C3%BAn)  
Nace con el objetivo de que a través de un request, se ejecute un script dentro del esrvidor, pero esto fue generando problemas con la escabilidad.y por ende difícil de mantener, de esta necesidad nace PHP.  
Luego nacen los frameworks para poder resolver tareas comunes, como:

-   Protocolos HTTP.
-   Conexiones a bases de datos.
-   Interacciones con el HTML(templates).

----------

**Django**  
Nace en 2003, con la necesidad de hacer web’s con la filosofía de hacer las cosas de manera agíl.

-   Poder hacer sitios escalables.
-   URLs bien diseñadas.
-   HTTP request y responses.  
    -ORM, que es conectar a na DB a traves de una interfaz python.

Características.

-   Rápido desarrollo.
-   Listo para todo.
-   Seguro contra ataques.
-   Versátil.

Ventajas

-   Es desarrollado en Python.  
    -DRY(Don’t repeat yourself).
-   Comunidad Open Source.

----------

-   CGI Scripts  _Common Gateway Interface_  (Interfaz de entrada común).
-   ORM  _Object-Relational mapping_  (Mapeo objeto relacional).
-   Una de las características de Django es que está  **listo para todo**, ya que tiene herramientas previas como la autenticación de usuarios, administración de contenidos, mapas de sitios, etc.
-   Una de las características de Django es que es  **seguro**, ya que tiene en cuenta los errores comunes de los developers como  [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp),  [Cross-site Scripting](https://es.wikipedia.org/wiki/Cross-site_scripting),  [Cross-site Request Forgery](https://es.wikipedia.org/wiki/Cross-site_request_forgery)  ‘CSRF’,  [Clickjacking](https://es.wikipedia.org/wiki/Clickjacking).
-   Una de las características de Django es que es  **escalable**, ya que puede manejar un número de peticiones más grande a largo plazo.

### Creacion de entornos virtuales

Puede agilizar un poco y reducir los pasos de la creación de entornos virtuales con Pipenv. Hay un post más al detalle donde expliqué esto  [pueden mirarlo aquí](https://platzi.com/python/tutoriales/pipenv-virtualenv-y-pip-en-un-solo-comando/).

También esta la documentación traducida  [por acá](https://pipenv-es.readthedocs.io/es/latest/). Si ven detalles con la traducción hagamenlo saber 😅

Pipenv resuelve un poco esos problemas al manejar entornos virtuales y lo hace más parecido a npm, yarn, composer, etc

### comandos importantes
* `python3 -m venv .env`  crea el entorno virtual donde env es el folder
* dentro de la carpeta `pip3 install django -U`
* `source ../.env/bin/activate` 
* `deactivate` desativa en entorno virtualf
* `pip freeze` lista los paquetes que están instalados en el entorno virtual o en el sistema en el caso de hacerlo fuera de un entorno virtual.
* `django-admin`   es una interfaz de django nos permite correr auto sub comandos
* `django-admin startproject platzigram .`Ssin olvidar el punto
*  `python manage.py`  para ver los comandos que se pueden ejecutar 
*  `python manage.py runserve` para correr el servidor 
