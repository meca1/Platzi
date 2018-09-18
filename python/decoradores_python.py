# -*- coding: utf-8 -*-
def protected(func):

    def wrapper (password):
        
        if password == 'platzi':
            return func()
        else:
            print('la contraseña es incorecta')
    return wrapper

@protected
def protected_func():
    print('tu contraseña es corecta')




    pass

if __name__ == '__main__':
    password = str(raw_input('ingresa tu contraseña'))

    protected_func(password)
   