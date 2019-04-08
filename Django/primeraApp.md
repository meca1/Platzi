manage.py es una interfas de django Admin  pero unicamente estarelacionada a los setings de nuestro proyecto

    comando python3 manage.py startapp 

segido de la aplicacion que queremos crear procurando que siempre su nombre sea plural

    comando python3 manage.py startapp posts

si vamos al codigo fuente vemos que se creo un nuevo folder llamdo posts

 - cuenta con un archivo `__init__.py` que declara que esto es un modulo de python siempre vasio
 - declara un folder **migrations** 
   
   > se encarga de grabar los cambios en la base de datos
   
    el cual es un modulo de python tiene el archivo `__init__.py`y esta vasio
    
 - archivo `admin.py`el cuar se encarga de registar los modelos en el administrador de django

`apps.py` decalra  toda la configuracion de nuestra app hacia el publico en caso de que nuestra app sea reutilizable

`models.py` definir los modelos de nuestros datos

`test.py` es para realizar pruebas
