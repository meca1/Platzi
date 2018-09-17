# -*- coding: utf-8 -*-
import random

def run():
    number_found = False
    primer_numero = int(raw_input('ingresa un numero desde donde quieres que comience a iterar'))
    segundo_numero = int (raw_input('ingresa un numero para el rango mas alto de la iteracion'))
    random_number = random.randint(primer_numero ,segundo_numero)

    while not number_found:
        number = int(raw_input('intenta un numero:'))

        if  number == random_number:
            print('felicitaciones')
            number_found = True
        elif number > random_number:
            print('el numero es mas pequeño')
        else:print('el numero es mas grnade')    

if __name__ == '__main__':
    run()