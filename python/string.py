Comparación de strings y unicode
Los strings tiene una característica muy importante: son inmutables, esto quiere decir que no se pueden cambiar después de que se han declarado.

Si quieres modificar el texto de un string debes definir un nuevo string y modificarlo usando funciones como slice.

Comparación de strings

Se pueden realizar operaciones con strings, por ejemplo comparar si son iguales o mayores o menores.

Diferencia entre ASCII y Unicode

Los caracteres también son números, para esto existen estándares que asigna un número a cada carácter, para generar un estándar se creó el ASCII pero esta solo toma en cuenta los caracteres en inglés, para dar soporte a más lenguajes se crea UNICODE.

Python codifica en ASCII por default, para cambiarlo por UNICODE debemos colocar u antes del string.

La función slice de python nos permite separar los strings en substrings generando nuevas secuencias.

my_string = 'platzi'

my_string[1:3] # la

my_string[1:] # latzi

my_string[1:6:2] # lti

my_string[::-1] # iztalp

