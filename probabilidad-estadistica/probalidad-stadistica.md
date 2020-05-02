## Conceptos – Clase 1

-   **Probabilidad:**  Que tan probable es que ocurra un evento. Es un número entre 0 y 1, nunca es negativa. Cuando encontramos la notación P(A) significa, la probabilidad de un evento A
-   **Experimento:**  Proceso para la obtención de datos estadísticos y pueden ser numéricos  _(cuantitativos)_  o no numéricos  _(cualitativos)_
-   **Espacio Muestral:**  Conjunto de valores de un determinado experimento  _(Se simboliza con Omega)_
-   **Suceso Elemental:**  Es una opción del espacio muestral. Se divide en tres opciones que son:

1.  Posible
2.  Seguro
3.  Imposible


## Cálculo de Probabilidades – Clase 2

-   **Experimentos Equiprobables:**  Cada suceso del espacio muestral tiene la misma probabilidad de ocurrencia  _(la misma posibilidad de aparecer como resultado)_
    
-   **Regla de Laplace:**  Casos favorables sobre el total de casos posibles.
    

**Ejercicio de Dado**  
Espacio Muestral =  _{1, 2, 3, 4, 5, 6}_  
A) Numero Par = 3/6  
B) Múltiplo de 3 = 2/6  
C) Mayor a 2 = 4/6

**Ejercicio de Balotas**  
Espacio Muestral =  _{7 Blancas, 3 Negras, 5 Rojas}_  
A) Sacar Balota Blanca = 7/15  
B) Sacar Balota Negra = 3/15  
C) Sacar Balota NO sea Roja = 10/15

**Ejercicio de Personas en el Salón**  
Espacio Muestral =  _{6 Mujeres con Gafas, 6 Mujeres sin Gafas, 3 Hombres con Gafas, 10 Hombres sin Gafas}_  
A) Sea Mujer = 22/35  
B) Sea Hombre sin Gafas = 10/35  
C) Sea Hombre o Mujer = 35/35

## Probabilidad Compuesta - Clase 3

-   **Probabilidad Compuesta o Condicional:**  Es la probabilidad que depende de un evento anterior.

## Probabilidad compuesta: Unión clase 4

-   **Sucesos Compatibles:**  
    Dos sucesos “A” y “B”, son compatibles cuando tienen algún suceso elemental en común.  
    _Ejemplo: _Si “A” es sacar puntuación par al tirar un dado y “B” es obtener múltiplo de 3, “A” y “B” son compatibles porque el 6 es un suceso elemental común.
-   **Sucesos Incompatibles:**  
    Dos sucesos “A” y “B”, son incompatibles cuando no tienen ningún elemento en común.  
    _Ejemplo: _Si “A” es sacar puntuación par al tirar un dado y “B” es obtener múltiplo de 5, “A” y “B” son incompatibles.
-   **Sucesos Complementarios:**  
    Si al unir dos o mas sucesos elementales en un solo grupo, conforman el espacio muestral.  
    _Ejemplo:_  
    Ω= {1,2,3,4,5,6}  
    A={1,3,2} B={4,6,5} C={6,1}  
    Entonces  **A**  y  **B**  son complementarios.

----------

-   **Intersección de sucesos:**  
    Si A∩B, es el suceso formado por todos los elementos que son,  **a la vez**, de A y de B.  
    Es decir, el suceso A∩B se verifica cuando ocurren simultáneamente A y B.
    
-   **Unión de sucesos:**  
    Si A∪B, es el suceso formado por  **todos**  los elementos que son, de A y de B.  
    Es decir, el suceso A∪B se verifica cuando ocurren uno de los dos: A, B o Ambos.
    

_Ejemplo de intersección y unión de sucesos_  
El experimento consiste en lanzar un dado, si A=“Saca par” y B=“Sacar múltiplo de 3”.  
_Para calcular la intersección, A∩B:_  
A ={2,4,6}  
B ={3,6}  
A∩B ={6}  
_Para calcular la unión, A∪B:_  
A ={2,4,6}  
B ={3,6}  
A∪B ={6}

## Probabilidad compuesta: Intersección clase 5

Si **A** y **B** son eventos independientes (es decir, que sus probabilidades no cambien si pasa uno u otro), se puede calcular la probabilidad de que puedan ocurrir ambos mediante:  
  
**P(A∩B) = P(A) * P(B)**  
  
Sin embargo, si un evento afecta la probabilidad de otro (a lo que llamamos probabilidad condicional), debe calcularse usando alguna de estas fórmulas:  
  
**P(A∩B) = P(A | B) * P(B)**  
**P(A∩B) = P(A) * P(B | A)**  
  
Entendiendo a las probabilidades condicionales como:  
  
**P(A | B):** La probabilidad de A si B ha ocurrido  
**P(B | A):** La probabilidad de B si A ha ocurrido  
  
Entonces, como queremos hallar **P(B | A)** y tenemos **P(A∩B)** y **P(A)**, simplemente despejamos de la segunda fórmula:  
  
**P(A∩B) = P(A) * P(B | A)** —> (dividimos **P(A)** en ambos lados)  
  
**P(B | A) = P(A∩B) / P(A)**

[Mejor explicacion aqui](https://www.superprof.es/apuntes/escolar/matematicas/probabilidades/combinatoria/interseccion-de-sucesos.html)
