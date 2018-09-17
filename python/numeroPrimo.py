# -*- coding: utf-8 -*-


def is_prime(number):
    if number < 2:
        return False
    elif number == 2:
        return True
    elif number > 2 and number % 2 == 0:
        return False
    else:
        for i in range(3, number):
            if number % i == 0:
                return False

    return True


def run():
    number = int(input('ingresa un numero: ')) # en la version 3 de python el raw_input e scambiada por solo input
    result = is_prime(number)
    if result is True:
        print('tu numero es primo')
    else:
        print('tu numero no es primo')


if __name__ == '__main__':
    run()
'''
En éste vídeo vamos a construir un programa que nos permite determinar si un número es primo o no, usando expresiones booleanas, operadores relacionales y operadores lógicos.

Recuerda:

Todas las funciones deben declararse con el keyword def
Un bug es un error en el código y requiere ser verificado
'''