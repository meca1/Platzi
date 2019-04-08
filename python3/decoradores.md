## Decoradores en python
la forma en la que veniamos progrmando se llama programacion por procesos es un tipo de paracdima de programacion.

Python es un lenguaje  que acepta distintos paradicmas y nos enfocaremos en la programacion orientada a objetos y la rpogramacion funcional.

### Decoradores

Es una funcion que envuelve a otra para modificar su comportamiento muchas veces necesitamos realizar trabajos antes y depues de la funcion

permiten extender y modificar el funcionamiento de las funciones

Por convención la función interna se llama  `wrapper`,

Para usar los decoradores es con el símbolo de @(arroba) y las colocamos por encima de la función. Es un  _sugar syntax_

`*args **kwargs`  son los argumentos que tienen keywords, es decir que tienen nombre o los argumentos posicionales, los  **args**. Los asteriscos es simplemente una expansión.
```python
def lower_case(func):
	def wrapper():
		# execute code before
		result=func()
		# execute code after 
		return result
	return wrapper
```

En este caso una funcion puede resibir una funcion y tambien pude retornar una funcion, este es el principio fundamental de los decoradores.

```python
PASSWORD = '12345'


def password_required(func):
    def wrapper():
        password = input('cual es tu contraseña? ')

        if password == PASSWORD:
            return func()
        else:
            print('La contraseña no es correcta')

    return wrapper


@password_required
def needs_password():
    print('la contraseña es correcta')


if __name__ == '__main__':
    needs_password()
```
Otro ejemplo
```python
def upper(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)

        return result.upper()
    return wrapper


@upper
def say_my_name(name):
    return'Hola, {}'.format(name)


if __name__ == '__main__':
    print(say_my_name('Daniel'))
```
DECORADORES EN PYTHON  
Los decoradores sirven para ejecutar lógica del código antes y/o después de otra función, esto nos ayuda a generar funciones y código que pueda ser reutilizado fácilmente sin hacer más extenso nuestro código. Hay que recordar que si se genera una función dentro de otra solo existiera en ese scope(dentro de la función padre), si se quiere invocar una función varias veces dentro de otras se tiene que generar de manera global.

```
**args y kwargs**

```

Básicamente lo que hacen es pasar tal cual los valores de de los argumentos que se pasan a la función args hace referencias a listas y kwargs a elementos de un diccionario (llave: valor)

** args: **

```
deftest_valor_arg(n_arg, *args):
    print('primer valor normal: ', n_arg)

    For arg in args:
	print('este es un valor de *args: ',arg)

    print(type(args))

if__name__ == '__main__':

    test_valor_args('carlos','Karla','Paola','Elena')

```

-   el tipo de valor y es una tupla
-   solo poniendo argumentos divididos por comas los convierte

**kuargs: **

```python
deftest_valor_kwargs(**kwargs):
    if kwargs isnotNone:
        for key,  value in kwargs.items():
            print('%s == %s' %(key,value))

    print(type(kwargs))

if __name__ == '__main__':

    test_valor_kwargs(caricatura='batman')

```

-   el valor que te da es un diccionario
-   toma los valores en los extremos de un signo igual

**Este es un ejemplo usando los 2 en una función**

```python
deftest_valor_kwargs_args(*args, **kwargs):
    print(type(kwargs))
    print(kwargs)
    print('----------')
    print(type(args))
    print(args)

if __name__ == '__main__':
    test_valor_kwargs_args('flash', 'batman', caricatura='batman', empresa = 'dc')

```
## PROGRAMACION ORIENTADA A OBJETOS
Nos permite modelar objetos del mundo real, podemos modelar desde naves espaciales hasta el comportamiento de bacterias para entender como modelar estos objetos tenemos que tener bien claros estos principios.

La programación orientada a objetos es un paradigma de programación que otorga los medios para estructurar programas de tal manera que las propiedades y comportamientos estén envueltos en objetos individuales.

Para poder entender cómo modelar estos objetos tenemos que tener claros cuatro principios:

**Encapsulation**: Cada objeto tiene sus propias funciones, y datos sin afectar a otros, son lógica interna.

**Abstraction**: El usuario podrá interactuar con el objeto sin necesidad de conocer toda la lógica del mismo.

**Inheritance**: si se declara un método en una clase todas las subclases heredan ese método, es decir: si tu declaras un método “imprime” que ejecute un print en una clase, las subclases podrán usar el método imprime, sin necesidad de declararlo en cada una.

**Polymorphismo**: usando el ejemplo anterior, en cada subclase se puede modificar el método “imprime” por lo tal cada sub clase contara con un método imprime pero acorde a las necesidades de cada subclase.
Las clases simplemente nos sirven como un molde para poder generar diferentes instancias.
