def dactorial (number):
    if number == 0:
        return 1
    return number * dactorial(number - 1 )

if __name__ == '__main__':
    number = int (input('escribe un numero'))
    result = dactorial(number)
    print(result)

'''
recurion factorial es la llamada de una funcion asi misma 

como en este caso 

def dactorial (number):
    if number == 0:
        return 1
    return number * dactorial(number - 1 )

pero siempre con un total cuidado de poner un estado base 
para que no se ejecute infnitas veces el bucle
'''