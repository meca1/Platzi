## ¿Por qué aprender Programación Orientada a Objetos?

-   **Vas a programar más rápido**. Tener un análisis previo de lo que estás realizando te ayudará a generar código mucho más veloz
    
-   **Dejas de ser Programador Jr**. Podrás responder preguntas como ¿Qué es encapsulamiento?, ¿Qué es Abstracción?, ¿Qué es Herencia?, ¿Qué es Polimorfismo? en futuras entrevistas de trabajo
    
-   **Dejar de Copiar y Pegar Código**.

## ¿Qué resuelve la Programación Orientación a Objetos?

La programación Orientada a Objetos nace de los problemas creados por la programación estructurada y nos ayuda a resolver cierto problemas como:

-   Código muy largo: A medida que un sistema va creciendo y se hace más robusta el código generado se vuelve muy extenso haciéndose difícil de leer, depurar, mantener.
    
-   Si algo falla, todo se rompe: Ya que con la programación estructurada el código se ejecuta secuencialmente al momento de que una de esas líneas fallara todo lo demás deja de funcionar.
    
-   Difícil de mantener.

## Paradigma Orientado a Objetos

La  **Programación Orientada a Ojetos**  viene de una filosofía o forma de pensar que es la  **Orientación a Objetos**  y esto surge a partir de los problemas que necesitamos plasmar en código.

Es analizar un problema en forma de objetos para después llevarlo a código, eso es la  **Orientación a Objetos**.

Un  **paradigma**  es una teoría que suministra la base y modelo para resolver problemas. La paradigma de Programación Orientada a Objetos se compone de 4 elementos:

-   Clases
-   Propiedades
-   Métodos
-   Objetos

Y 4 Pilares:

-   Encapsulamiento
-   Abstracción
-   Herencia
-   Polimorfismo
Lenguajes Orientados a Objetos

Algunos de los lenguajes de programación Orientados a Objetos son:

-   **Java**:  
    – Orientado a Objetos naturalmente  
    – Es muy útilizado en Android  
    – Y es usado del lado del servidor o Server Side
-   **PHP**  
    – Lenguaje interpretado  
    – Pensado para la Web
-   **Python**  
    – Diseñado para ser fácil de usar  
    – Múltiples usos: Web, Server Side, Análisis de Datos, Machine Learning, etc
-   **Javascript**  
    – Lenguaje interpretado  
    – Orientado a Objetos pero basado en prototipos  
    – Pensado para la Web
-   C#
-   Ruby
-   Kotlin

## Diagramas de Modelado

**OMT**: Object Modeling Techniques. Es una metodología para el análisis orientado a objetos.

**UML**: Unified Modeling Language o Lenguaje de Modelado Unificado. Tomó las bases y técnicas de OMT unificándolas. Tenemos más opciones de diagramas como lo son Clases, Casos de Uso, Objetos, Actividades, Iteración, Estados, Implementación.
![UML.jpg](https://static.platzi.com/media/user_upload/UML-a235cec9-9058-46e6-adf3-978742e0b001.jpg)

## Objetos

Los Objetos son aquellos que tienen propiedades y comportamientos, también serán sustantivos.

-   Pueden ser Físicos o Conceptuales

Las  **Propiedades**  también pueden llamarse atributos y estos también serán sustantivos. Algunos atributos o propiedades son nombre, tamaño, forma, estado, etc. Son todas las características del objeto.

Los  **Comportamientos**  serán todas las operaciones que el objeto puede hacer, suelen ser verbos o sustantivos y verbo. Algunos ejemplos pueden ser que el usuario pueda hacer login y logout.

### Nota de clase:

Un  **Objeto**: Son aquellos que tienen  **propiedades**  y  **comportamientos**. Un objeto puede ser algo físico o conceptual.

Una  **Propiedad**: También llamado atributo, son las características o las propiedades que describen a un objeto. Estas propiedades siempre deben ser de forma sustantiva. ej: color, tamaño, etc.

Un **Comportamiento **o método: Son las acciones que puede realizar un objeto, es decir lo que puede hacer dicho objeto.
## Abstracción y Clases

Una  **Clase**  es el modelo por el cual nuestros objetos se van a construir y nos van a permitir generar más objetos.

Analizamos Objetos para crear  **Clases**. Las  **Clases**  son los modelos sobres los cuales construiremos nuestros objetos.

**Abstracción**  es cuando separamos los datos de un objeto para generar un molde.

Nota de clase:

En el vídeo anterior Anahi hablo muy bien de lo que es un Objeto y como esta compuesto por atributos o propiedades y a su vez estos tienen acciones o métodos.

Ahora el concepto se aumenta cuando todo esto se ve como una sola cosa llamada Clase.

Una  **Clase**  Es el modelo sobre el cual nuestros objetos se construyen.

Es decir si tenemos un objeto llamado perro y este tiene sus atributos que lo describen generalmente y a su vez tiene métodos donde se define las acciones que pueda hacer ese perrito. Una clase me permite generar mas objetos (mas perros) con mismos atributos y métodos pero con resultados diferentes. ej:

Objeto #1 llamado “Rocky”:  
tributo_1: color = marrón  
atributo_2: taman’o = pequen’o  
atributo_3: raza = chiguagua

metodo_1: ladrar  
metodo_2: comer  
metodo_3: dormir

Objeto #2 llamado "Max"  
atributo_1: color = blanco  
atributo_2: taman’o = grande  
atributo_3: raza = hunky siberiano

metodo_1: ladrar  
metodo_2: comer  
metodo_3: dormir

Para no repetir esto muchas veces de acuerdo a la cantidad de perros que es mi ejemplo de objeto, la idea es analizar todos estos objetos extraemos todos esos atributos y entonces generamos modelos. Esos modelos se le llaman Clases.

Una Clase son los modelos sobre los cuales construiremos Objetos

A este análisis se le conoce como  **Abstracción**, simplemente consiste en generar un molde en base a esas propiedades y métodos de los objetos, abstraemos todos esos datos para generar dicho molde.

Resumen: Una clase es un molde para generar un objeto y este análisis se llama Abstracción

Los objetos son elementos de nuestra realidad con los que interactuamos(pueden ser físicos o conceptuales).

Los patrones o aspectos comunes que hallamos al observar objetos similares nos forman un concepto de lo que ese objeto representa para nosotros, como lo percibimos o representamos. La obtención las ideas principales o esencia común de los objetos analizados se llama abstracción; El concepto idealizado, generalizado de dichos objetos viene a ser representado por la “Clase”.

La clase es un modelo del objeto, algo así como un sello o molde y los objetos serían como la estampa o elemento elaborado por el molde; Los objetos son ejemplares de una clase. Entendemos a estas “clases” como dos conjuntos de: atributos o propiedades y comportamientos. (Las clases son sustantivos)

Los atributos (también son sustantivos, generalmente descriptivos) son características o propiedades, rasgos, adjetivos que definen al modelo. Por ejemplo, los atributos de una clase serian: id, nombre, raza, color; y los de un objeto serían: 101, Rocky, Dálmata, Blanco moteado negro.

Los comportamientos también definen la clase o al objeto mediante acciones que puede realizar (por tanto, son verbos o sustantivo_verbo)

El contexto es clave para realizar una abstracción útil que realmente ayude a resolver el problema planteado.

## Modularidad

La  **modularidad**  va muy relacionada con las clases y es un principio de la Programación Orientado a Objetos y va de la mano con el Diseño Modular que significa dividir un sistema en partes pequeñas y estas serán nuestros módulos pudiendo funcionar de manera independiente.

La  **modularidad**  de nuestro código nos va a permitir

-   Reutilizar
-   Eviatar colapsos
-   Hacer nuestro código más mantenible
-   Legibilidad
-   Resolución rápida de problemas

Una buena práctica es separando las clases en archivos diferentes.

Modular: Dividir un sitema y así crear módulos independientes, lo que permite evitar un colapso masivo en nuestro código y mejorar la legibilidad.

La modularidad nos permite:  
Reutilizar código  
Evitar Colapsos  
Mantenible  
Legibilidad  
Resolución Rápida de Problemas

Una buena práctica es separando las clases en archivos diferentes

## Analizando Uber en Objetos

![](https://static.platzi.com/media/public/uploads/analizando-uber-en-objetos_7648b008-b099-4b0c-a511-a8be36bcd240.png)
### Modelando nuestros objetos Uber

![](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-2_02bc1a0c-3810-48e4-947a-d05d00e3c230.png)
![](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-1_311f8882-9610-4198-aa89-3b86c2de62b2.png)
[https://www.uber.com/es-MX/drive/mexico-city/vehicle-requirements/](https://www.uber.com/es-MX/drive/mexico-city/vehicle-requirements/)
## Recursos
[https://static.platzi.com/media/public/uploads/programacion-orientada-a-objetos-poo_c4774196-cfdb-412e-bae5-210a97d78f8b.pdf](https://static.platzi.com/media/public/uploads/programacion-orientada-a-objetos-poo_c4774196-cfdb-412e-bae5-210a97d78f8b.pdf)
  
The Object-Oriented Thought Process Developer's Library: Amazon.es: Matt A. Weisfeld: Libros en idiomas extranjeros
Para reforzar sus conocimientos en UML recomiendo el siguiente  
[http://descargavariable.blogspot.com/2018/01/aprendiendo-uml-en-24-horas-joseph.html](http://descargavariable.blogspot.com/2018/01/aprendiendo-uml-en-24-horas-joseph.html)
