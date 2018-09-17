countries = {
    'mexico' : 122,
    'colombia' : 49,
    'argentina' : 43,
    'chile' : 18,
    'peru' : 31, }

while True:
    country = str(input('Escribe el nombre de un pais')).lower()

    try:
        print('la poblacion de {} es: {} millones'.format(country, countries[country]))
        
    except :
        print('notenemos el dato de la poblacion del {}'.format(country))