# Permisos, niveles de procesos y privilegios de ejecución

Permisos, niveles de procesos y privilegios de ejecución  
En la administración de archivos la capacidad de utilizar permisos te permite definir entre las siguientes características, los permisos existen en todos los sistemas operativos de diversas formas y se crean con las siguientes opciones:

Read ®: permisos de escritura.  
Write (w): permisos de escritura.  
Execute (x): permisos de ejecución.

los permisos se los conseguiran de esta forma : 777 o 755 o 750, etc.  
Solo recuerden que cada numero de esos se refiere al admin/team/public respectivamente y tienen su representacion binaria, entonces:  
7 en binario es 111, 5 es 101 y 0 pues 000: Por lo tanto, por ej, los que tengan 7 tendran encendidos todos los permisos, rwx (leer, escribir y ejecutar).  
Luego, por ej 705 es: 7->111 (Admin puede leer, escribir y ejecutar) 0->000 ( Team no puede hacer nada) y 5->101 (publico puede leer y ejecutar pero no escribir)

16
