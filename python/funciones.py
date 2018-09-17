# -*- coding: utf-8 -*-

import turtle

def main():
    window = turtle.Screen()
    dave = turtle.Turtle()

    make_square(dave)

    

def make_square(dave):
    length = int(raw_input('Tamaño de cuadrado: '))

    for i in range(4):
        make_line_and_turn(dave, length)

def make_line_and_turn(dave, length):
    dave.forward(length)
    dave.left(90)

if __name__ == '__main__':
    main()

"""
Las funciones son un concepto fundamental en programación, una función es una secuencia de comandos que realizan un computo.
En Python las funciones se definen usando la palabra reservada def y luego el nombre de la función con paréntesis y dos puntos que indican que lo que sigue son los comandos, una función debe retornar un valor, para esto se usa la palabra reservada return.

def  suma(num1, num2):

<span class="hljs-keyword">return</span> num1 + num2

Para usar una función simplemente la llamamos por su nombre seguido por paréntesis con los parámetros que recibe.

suma(2,3)
Recuerda:

Si usas Python 3, debes usar la función input() para recibir datos del usuario.
Para definir dónde comenzar el código usamos la línea Screen Shot 2017-08-17 at 4.42.46 PM.png
Para definir un bloque dentro de la función debemos indentar con 4 espacios.
Las funciones nos permiten ejecutar determinado código con diferentes valores.

"""

