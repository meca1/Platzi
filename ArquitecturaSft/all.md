# Introducción al curso de Fundamentos de Arquitectura de Software
Invito a cualquier usuario a revisar y editar libremente mis apuntes de este curso.  
[Aquí](https://docs.google.com/document/d/1f1zCTqEMOph8GjDlTaA1TUvpLXdEncK9NBVoGNfMxTQ/edit?usp=sharing).

1.- En la arquitectura del software se habla de:

• Estructuras.  
• Modelos con diagramas.  
• Se suelen hablar de la comunicación entre diferentes sistemas o incluso entre diferentes módulos del sistema.

2.- En este curso va atravesar todo el camino para atender que es el proceso de desarrollo y como la arquitectura está involucrada en cada uno de los pasos del proceso de desarrollo del software.

3.- Entenderemos cuál es el rol del arquitecto y como el arquitecto puede ayudar al éxito o fracaso de un sistema.

4.- Este curso va hacer evidente decisiones que a veces son implícitas y nos va ayudar a ser consiente de cuando estamos tomando una decisión arquitectónica en un sistema y cómo hacer para tomar la mejor decisión posible en ese momento.

El sistema elegido es el que permite la interacción entre el cajero y la facturación en los supermercados Carrefour.

**Problemas que resuelve**:

-   Sumatoria manual de los precios de los productos comprados por cada cliente.
-   Calculo de total y vuelto manual.
-   Utilización de Postnet para realizar pagos con tarjeta de crédito.

**Requerimientos no funcionales**:

-   Seguridad en el ingreso de datos sensibles del cliente.
-   Seguridad en la transacción de cada compra.
-   Capacidad de leer varios códigos de barra en el menor tiempo posible.
-   Velocidad al realizar la transacción.
-   Ubicación favorable de la interfaz gráfica para la salud del cajero (que puede pasar muchas horas utilizándola).

Si tuviera que hacer de este sistema un “producto reutilizable” en otros escenarios:

**¿Como cambiaría su arquitectura?**  Agregaría portabilidad para poder transportar la infraestructura externa libremente de un lado a otro, y la infraestructura principal pasaría a ubicarse en la nube para ahorro de gastos y posibilidad de escalabilidad.

**¿En que otro escenario debería repensarse completamente?**  Debería repensarse completamente en un contexto en el que la competencia utiliza sistemas automatizados y veloces sin intervención humana para la facturación de cada compra, ya que esto supondría la futura obsolescencia en mi negocio.

**¿En que otros escenarios se mantendría?**  Podría mantenerse en puntos de venta de mercadería no relacionada con un supermercado, como de autopartes o componentes electrónicos.
## Etapas del proceso de desarrollo de software
![proceso de desarrollo.png](https://static.platzi.com/media/user_upload/proceso%20de%20desarrollo-e1aacf1b-561a-4ee2-b622-8ebd721b1d8d.jpg)

**Etapas del proceso de desarrollo de software**
https://drive.google.com/open?id=1Vg-JXVTqH2lROj76ojmQYrBbnbXH-XvdhZj0PIp8nd4
-   El proceso de desarrollo tradicional tiene etapas muy marcadas, que tienen entradas, procesos y salidas que funcionan como entradas de la siguiente etapa.
    -   Análisis de requerimientos: Todo nace de un disparador que nos crea la necesidad de crear un artefacto o un sistema.
        -   Necesitamos entender cuál es el problema que queremos resolver. Hay requerimientos de negocio, requerimientos funcionales, requerimientos no funcionales.
        -   Al terminar esta etapa debemos tener una comprensión bastante clara del problema que vamos a resolver.
    -   Diseño de la solución: Análisis profundo de los problemas para trabajar en conjunto y plantear posibles soluciones. El resultado de esto debe ser el detalle de la solución, a través de requerimientos, modelado (UML), documentació. Resuelve preguntas tales como:
        -   ¿Cómo va el usuario a utilizar la aplicación?
        -   ¿Como se va a implementar la aplicación en producción y como será esto administrado?
        -   ¿Cuales son los atributos requeridos por la aplicación? (rendimiento, seguridad, concurrencia, internacionalización, configuración)
        -   ¿Cómo se puede diseñar la aplicación para que sea mantenible y flexible con el paso del tiempo?
        -   ¿Cuales son las tendencias a nivel de arquitectura que pueden afectar la aplicación actualmente o una vez que ha sido implantada?
        -   ¿Cuáles son las partes fundamentales de la arquitectura que representan el riesgo más grande si se hacen mal?  
            -¿Cuáles son los principales supuestos y como van a ser probados?
        -   ¿Cuáles son las partes de la arquitectura que tienen más probabilidad de cambiar?
        -   ¿Qué condiciones pueden llevar a que se tenga que refactorizar el diseño realizado?
        -   ¿Porqué es esta la mejor opción de arquitectura?
        -   ¿Qué medidas estamos tomando para mitigar los riesgos?
    -   Desarrollo y evolución: Implementación de la solución, para garantizar que lo que se esta construyendo es lo que se espera. Al finalizar esta etapa tendremos un artefacto de software.
        -   Es donde plasmamos en “código” las dos anteriores etapas, ademas de realizar test a dicho código
        -   Debemos tener claros cuales son los criterios de aceptación de la solución, osea cual es el set de requerimientos necesario para construir esta solución y como hacemos para evaluarlos (TDD), el resultado de esta etapa es un artefacto de software.
        -   Despliegue: Aquí vamos a necesitar de infraestructura y de roles de operación para poder poner el artefacto a disponibilidad.
            -   Debemos implementar la solución (artefacto) que ya tenemos construida en productivo, AWS, GCP, Heroku, github-pages, hosting, play store, etc
    -   Mantenimiento y evolución: Desarrollo + despliegue + mantenimiento, en esta etapa estamos atentos a posible mejoras que se hacen al sistema. En esta etapa el software se mantiene hasta que el software ya deja de ser necesario.

Conceptos extraídos de:

-   [https://www.icesi.edu.co/i2t/driso/process/proceso_desarrollo_sw/images/RA.GIF](https://www.icesi.edu.co/i2t/driso/process/proceso_desarrollo_sw/images/RA.GIF)
-   [http://www.pmoinformatica.com/2016/08/tecnicas-analisis-requerimientos.html](http://www.pmoinformatica.com/2016/08/tecnicas-analisis-requerimientos.html)
-   [https://www.scribd.com/doc/7994185/2-4-DiseNo-de-La-Arquitectura-Del-Software](https://www.scribd.com/doc/7994185/2-4-DiseNo-de-La-Arquitectura-Del-Software)
-   [http://decc.javerianacali.edu.co/wiki/lib/exe/fetch.php?media=materias:s2_conceptosdemodelado.pdf](http://decc.javerianacali.edu.co/wiki/lib/exe/fetch.php?media=materias:s2_conceptosdemodelado.pdf)

>Requerimientos funcionales son todos aquellos servicios o cosas que debe hacer la aplicación o sistema que se esta creando.
> Requerimientos no funcionales son requerimientos que no son
> relacionados directamente al objeto del sistema como puede ser
> fiabilidad, estabilidad del sistema, capacidad de almacenamiento,
> tiempo de respuesta etc.
Etapas del proceso de desarrollo de software

El proceso de desarrollo tradicional tiene etapas muy marcadas, que tienen entradas, procesos y salidas que funcionan como entradas de la siguiente etapa.

**Análisis de requerimientos:**  Todo nace de un disparador que nos crea la necesidad de crear un artefacto o un sistema. Necesitamos entender cuál es el problema que queremos resolver. Hay requerimientos de negocio, requerimientos funcionales, requerimientos no funcionales.

**Diseño de la solución:**  Análisis profundo de los problemas para trabajar en conjunto y plantear posibles soluciones. El resultado de esto debe ser el detalle de la solución, a través de requerimientos, modelado, etc.

**Desarrollo y evolución:**  Implementación de la solución, para garantizar que lo que se esta construyendo es lo que se espera. Al finalizar esta etapa tendremos un artefacto de software.

**Despliegue:**  Aquí vamos a necesitar de infraestructura y de roles de operación para poder poner el artefacto a disponibilidad.

**Mantenimiento y evolución:**  Desarrollo + despliegue + mantenimiento, en esta etapa estamos atentos a posible mejoras que se hacen al sistema. En esta etapa el software se mantiene hasta que el software ya deja de ser necesario.

## Dificultades en el desarrollo de software

En la etapa de diseño y desarrollo estamos concentrados en encontrar cuáles son los problemas que queremos resolver. Estos problemas los podemos dividir en dos grandes tipos de problemas.

**Esenciales:**  Los podemos dividir en 4.

1.  La complejidad, cuándo lo que tenemos que resolver es complejo en si mismo, por ejemplo calcular la mejor ruta entre ciudades.
2.  La conformidad.
3.  Tolerancia al cambio.
4.  Invisibilidad.

**Accidentales:**Está relacionado con la plataforma que vamos a implementar, tecnología, lenguajes, frameworks, integraciones, etc.
Existen dos tipos de problemas: Los problemas  **esenciales**  y los problemas  **accidentales**.

**Esenciales**: Se dividen en 4 tipos de problemas  
•  **Complejidad**: cuando un dominio de un problema es complejo en sí mismo. En el caso de adiciones y todas las acciones que conlleven al sistema a ser más complejo.  
Manejo del problema de complejidad: No desarrollar: Comprar - OSS  
•  **Conformidad**: en qué contexto se usa el software y cómo debe adecuarse al mismo. Se incluyen todo lo que le compete. Ej: Ambiente, conectividad, impuestos, etc.  
_Manejo del problema_:  **Prototipado rápido**, feedback y ciclos rápidos para soluciones pequeñas.  
•  **Tolerancia al Cambio**: Posibilidad del cambio en el mismo y que sea responsivo a diferentes contextos.  
_Manejo del problema_:  **Desarrollo Evolutivo**, desarrollos pequeños. Paso a paso pero de manera firme e ir haciendo crecer el software.  
•  **Invisibilidad**: Problemas de tangibilidad nula.  
_Manejo del problema_:  **Grandes diseñadores**, Arquitectos que saben abtraer el problema y que realiza soluciones elegantes, de manera simple, con la mejor calidad posible en los componentes que lo  **necesitan**.

**Accidentales**: Está relacionado con la plataforma que vamos a implementar, tecnología, lenguajes, frameworks, integraciones, entre otros, que tienen  _3 Entornos_:  
•  **Lenguajes de alto nivel**  
•  **Multi-procesamiento**  
•  **Entornos de programación**  
“Concidero a la especificación, diseño y comprobación del **concepto **la parte difícil de hacer  _software_. (…) Si esto es cierto, hacer software siempre será difícil. No existe la bala de plata.” - Del libro  _**No Silver Bullet **_(**Frederick P. Brooks Jr., 1986**)

> El desarrollo evolutivo hace referencia a las iteraciones rápidas en
> el desarrollo y va muy de la mano de las metodologías ágiles. Las
> metodologías ágiles hablan más de los procesos como tal y el que
> hacer, el desarrollo evolutivo se refiere en si al concepto de iterar
> rápido y hacer entregas que se puedan evaluar par saber que estamos
> cumpliendo con los requerimientos.
> 
> Son conceptos complejos de diferenciar, pero los problemas esenciales
> tienen que ver con la aplicación, funcionalidades, diseño, estructura.
> Los problemas accidentales van relacionados con las herramientas,
> lenguajes de programación, infraestructura de servidores, etc.
> 
> Un problema  **esencial**  es uno que proviene del trabajo  _per se_,
> como por ejemplo que una vez terminado el software no pueda escalarse
> o adaptarse a las necesidades del usuario. Digamos un punto de venta
> para un restaurant que no permite agregar ofertas o descuentos.
> 
> Un problema  **accidental**  pueden ser aquellos que ocurre sobre la
> marcha del mismo proyecto. Como al realizar  _deploy_  de tu proyecto
> y que este no funcione correctamente por la falta de librerías,
> frameworks, etc.

## Roles

Es importante que diferenciemos el ROL del puesto de trabajo, hay roles que pueden ser desarrollados por la misma persona.

**Experto del dominio:**  En una metodologia tradicional, es la persona a la que acudimos para entender las necesidades del negocio. En metodologias Agiles --> stakeholders.

**Analista:**  funcional/de negocio, la persona responsable de definir los requerimientos que van a llevar al software a u buen puerto. En el caso de Agiles el dueño del producto es quien arma las historias y que nos acompaña en el proceso de construcción del software.

**Administrador de sistemas / DevOps:**  Es el rol de operaciones y desarrollo, son las personas responsables de la infraestructura que alojara nuestra aplicación.

**Equipo de desarrollo:**  QA / Testing se encargan de la evaluación de nuestro software, comprobar que lo que se esta haciendo es lo que se espera que se haga. Desarrolladores involucrados en la construcción del software. Arquitecto, diseña la solución y analisis de los requerimientos, es un papel mas estrategico. La arquitectura emerja del trabajo de un equipo bien gestionado.

**Gestor del proyecto / facilitador:**  Llevan al equipo a través del proceso iterativo e incremental, entender lo que pasa con el equipo y motivar el avance en el desarrollo del producto.

### Principios del Manifiesto Ágil

-   Nuestra mayor prioridad es satisfacer al cliente  
    mediante la entrega temprana y continua de software  
    con valor.
    
-   Aceptamos que los requisitos cambien, incluso en etapas  
    tardías del desarrollo. Los procesos Ágiles aprovechan  
    el cambio para proporcionar ventaja competitiva al  
    cliente.
    
-   Entregamos software funcional frecuentemente, entre dos  
    semanas y dos meses, con preferencia al periodo de  
    tiempo más corto posible.
    
-   Los responsables de negocio y los desarrolladores  
    trabajamos juntos de forma cotidiana durante todo  
    el proyecto.
    
-   Los proyectos se desarrollan en torno a individuos  
    motivados. Hay que darles el entorno y el apoyo que  
    necesitan, y confiarles la ejecución del trabajo.
    
-   El método más eficiente y efectivo de comunicar  
    información al equipo de desarrollo y entre sus  
    miembros es la conversación cara a cara.
    
-   El software funcionando es la medida principal de  
    progreso.
    
-   Los procesos Ágiles promueven el desarrollo  
    sostenible. Los promotores, desarrolladores y usuarios  
    debemos ser capaces de mantener un ritmo constante  
    de forma indefinida.
    
-   La atención continua a la excelencia técnica y al  
    buen diseño mejora la Agilidad.
    
-   La simplicidad, o el arte de maximizar la cantidad de  
    trabajo no realizado, es esencial.
    
-   Las mejores arquitecturas, requisitos y diseños  
    emergen de equipos auto-organizados.
    
-   A intervalos regulares el equipo reflexiona sobre  
    cómo ser más efectivo para a continuación ajustar y  
    perfeccionar su comportamiento en consecuencia.


**Las Metodologías Ágiles Redifinieron los Roles para acomodarlos a su filosofia de Trabajo (_Tradicional vs Metodologías Ágiles_).**

**Experto de Dominio: (tradicional)**  Era la persona que acudiamos para resolver las necesidades de los REQUERIMIENTOS{Que se requiere para este Software}

**Experto de Dominio: (Metodologías Ágiles)**  Hace un analisis de los stakeholders (Que resolver de su Producto?)

**Analista (Tradicional)**: Es la Persona que indaga en Que es lo que hay q resolver, define un problema…

**Analista (Metodologías Ágiles)**: Es la persona que define los requerimientos es El Cliente, el va ir definiendo como sera el software a medida Cual es su Problematica.

**Administrador de sistemas (Tradicional)**: Se encargaban de toda la operacion del sistma(Si había servidores, actualizar librerias, Encontrar Errores en los logs y dar el Feedback al equipo de desarrollo)

**Administrador de sistemas (Metodologías Ágiles)**  Fue reemplazado por el DevOps (Operaciones y Desarrollo unidos) Es la persona Responsable de Entender la Infraestructura a la que va nuestra app y Entender los Requerimientos de ese lado del mundo

**Administrador de sistemas (Metodologías Ágiles)**  Fue reemplazado por el SRE (Ing de la Confianza del Sitio) es similar al Administrador de Sistemas pero Conectando el mundo de sistemas con el mundo del dia-dia de la app

**QA - Equipo de Texting (Tradicional)**: Evaluación de Software

**QA - Equipo de Texting (Metodologías Ágiles):**  Fueron Unidos en un Solo Equipo de Desarrollo (QA-Tester, Desarrollador, Aquitecto) Se Encarga de Tomar las decisiones arquitectonicas (La arquitectura Emergera de un Equipo Autogestionado)

**Gestor del Proyecto (Tradicional)**: Se ecargaba de todo lo que era la entrega, Cumplir con toda la gestion del ciclo de Vida del Proyecto

**Gestor del Proyecto (Metodologías Ágiles)**: Se conoce como Facilitador (SCRUM Master) lleva al equipo atraves de el ciclo de (Entender que es lo nos Para)
  

La importancia de la comunicación - Ley de Conway

## ¿Qué es arquitectura de software?

“_La estructura del sistema, compuesta por elementos de**software**, sus propiedades visibles y sus relaciones_”

-   Software Architecture in Practice

“_El conjunto de decisiones principales de diseño tomadas para el sistema_”

-   Software Architecture: Foundations, Theory and Practice
![](http://cursa.ihmc.us/rid=1MJ5DTSBT-22SMXPB-1SW3/ARQUITECTURA%20DE%20SOFTWARE.cmap?rid=1MJ5DTSBT-22SMXPB-1SW3&partName=htmljpeg)  
[http://cursa.ihmc.us/rid=1MJ5DTSBT-22SMXPB-1SW3/ARQUITECTURA DE SOFTWARE.cmap?rid=1MJ5DTSBT-22SMXPB-1SW3&partName=htmljpeg](http://cursa.ihmc.us/rid=1MJ5DTSBT-22SMXPB-1SW3/ARQUITECTURA%20DE%20SOFTWARE.cmap?rid=1MJ5DTSBT-22SMXPB-1SW3&partName=htmljpeg)

## La importancia de la comunicación - Ley de Conway
**Ley de Conway**

“Cualquier pieza de software refleja la estructura organizacional que la produjo.”
“Cualquier organización que diseñe un sistema producirá un diseño que copia la estructura de comunicación de dicha organización.”

Conway no dijo esta afirmación como una broma, sino con una justificación real por detrás. Este hecho es causado porque dos componentes software (p.e A y B), no pueden conectarse correctamente a menos que quien diseña y quien implementa el módulo A se comunique con quien diseñe e implemente el módulo B. Así, este problema en la forma de comunicación de la empresa se refleja en el software, ya que el desarrollo es una actividad intelectual que depende mucho de las propias personas que lo desarrollan.

![](http://www.javiergarzas.com/wp-content/uploads/2015/06/2011.06.27_organizational_charts.png)

[http://www.javiergarzas.com/2015/06/conway.html](http://www.javiergarzas.com/2015/06/conway.html)
**Relacionar la estructura de un equipo con las estructuras de comunicación resultantes del software.**  
**Monolítico:**  
Un solo equipo, se comunica informalmente sin restricciones.  
**Distribuido:**  
Múltiples equipos. Vías definidas de comunicación, dependencias más evidentes (idealmente, evitadas).}



## Objetivos del arquitecto

El arquitecto conecta los stakeholder con el sistema a construir. Cada uno de los roles que tienen los SH afectan de diferente forma el sistema.

Cada uno de los stakeholder tiene que ser conectado por el Arquitecto con sus requerimientos.  
**_Stakeholder -> Arquitecto -> Requerimientos = Implementaciónes en el Sistema._**

Los Requerimientos de cada stakeholder afectan de forma única el sistema.

-   **Cliente**: Entrega a tiempo y dentro del presupuesto.
-   **Manager**: Permite equipos independientes y comunicación clara.
-   **Dev**: Que sea fácil de implementar y de mantener.
-   **Usuario**: Es confiable y estará disponible cuando lo necesite.
-   **QA**: Es fácil de comprobar.

La unión de todos estos requerimientos (funcionales o no funcionales) van a llevar al arquitecto a tomar decisiones que impacten sobre el sistema.

## Arquitectura y metodologías

En el contexto de método tradicional … Las decisiones de arquitectura es en la  **ETAPA DEL DISEÑO**

En el contexto de Método ágil … Las decisiones de arquitectura es  **EN CADA ITERACIÓN**

Una metodología de desarrollo de software es un conjunto de procedimientos, técnicas, herramientas y un soporte documental que ayuda a los desarrolladores a realizar nuevo software.

![](https://is1blog.files.wordpress.com/2016/04/metodologias-agiles.jpg)

[https://is1blog.wordpress.com/2016/04/07/metodologia-agil-o-metodologia-tradicional/](https://is1blog.wordpress.com/2016/04/07/metodologia-agil-o-metodologia-tradicional/)

La arquitectura nace en metodologías tradicionales en donde su objetivo era principalmente encontrar los problemas y diseñar una solución a gran escala que ataque a esos problemas esenciales, como también a los de alto riesgo del desarrollo a realizar.

Las metodologías Agiles plantean que la arquitectura emerge de un equipo auto-gestionado y por ende ven al diseño de una solución como algo evolutivo y que se va dando de sprint a sprint.

**Diferencias:**

-   **Tradicional:**  En la etapa de diseño es donde se tiene la definición del problema, requerimientos, restricciones y riesgos todos estos son los agentes que van ayudar al arquitecto a tomar decisiones, el arquitecto contara con herramientas de diseño para poder tomar esto como entrada, para luego tener un modelo de la arquitectura y la documentación para implementar ese modelo, la etapa de diseño no implementa software, sino que le da a la etapa de desarrollo las herramientas para implementar lo que se analizó, al modelo tradicional lo que le falta es el feedback ya que el arquitecto no tiene nociones de lo que el sistema ya hace y como el usuario interactúa con ese sistema, hasta que el arquitecto no hace toda esa solución y la solución no se implementa y se despliega no se tiene feedback de como esas decisiones son tomadas o si son buenas decisiones.
    
-   **Agile:**  En la metodología ágil todo se trata de momentos en donde podemos evaluar o reevaluar nuestras decisiones, esto se realiza en el planeamiento del spring que es donde planeamos los momentos arquitectónicos importantes. Una vez planeado el spring y se define lo que se tiene que definir arquitectónicamente se ejecuta en base a las prioridades que se tienen y luego se le lleva al usuario haciendo el despliegue y gracias a eso se obtiene feedback, cabe destacar que una vez que se obtiene feedback se pueden reevaluar las decisiones de la arquitectura.
## Entender el problema
**El espacio del problema**  
Detalla que es lo que se va a resolver sin entrar en detalles del “cómo”.

**El espacio de la solución**  
Brinda el detalle del “cómo”, reflejando los detalles del problema detectado, evitando resolver problemas que no se quiere resolver.
A la hora de tomar requerimientos y procesarlos es muy importante entender el problema a resolver.

La parte más importante es separar la comprensión del problema de la propuesta de solución, ya que si no se separan estos dos puntos se tiende a confundir varios aspectos.

**¿Cómo hacemos para entender bien un problema?**

A la hora de tomar requerimientos y analizarlos es muy importante entender el problema que estamos resolviendo.  
Lo más importante es separar la comprensión del problema de la propuesta de solución. Cuando no separamos esto, tendemos a ver cómo parte del problema ciertas cuestiones tecnológicas, cuando en realidad son detalles de implementación.

•  **Espacio del Problema:**  Es la idea que se va hacer y que se quiere resolver.

El espacio del problema nos ayuda a entender que es lo que vamos a resolver y exactamente como imaginamos como esto va agregar un valor a nuestros usuarios sin entrar en detalle de cómo lo va a resolver el sistema.

• Idea  
• Criterios de éxito  
• Historias de usuario

•  **Espacio de Solución:**  Consta de un desarrollo, diseño, evaluación de desarrollo.

Se refleja en el espacio del problema y trata de resolverlo teniendo en cuenta todos los detalles técnicos necesarios.

• Diseño  
• Desarrollo  
• Evaluación  
• Criterios de aceptación  
• Despliegue
## Requerimientos
Una vez que entendemos el espacio del problema y el espacio de la solución, vamos a entrar a analizar los requerimientos de nuestro sistema.

**Requerimientos de producto**  
Los podemos dividir en tres (03):

**• Capa de requerimientos de negocio**, son reglas del negocio que alimentan los requerimientos del negocio.  
**• Capa de usuario**, tienen que ver en cómo el usuario se desenvuelve usando el sistema, qué atributos del sistema se deben poner por encima de otros.  
**• Capa Funcional**, se ven alimentados por requerimientos del sistema, ¿qué cosas tienen que pasar operativamente?  
Esta capa se ve afectada por las restricciones que pueden afectar operativamente a lo funcional.

**Requerimientos Significativos para la Arquitectura del Producto:**

**• Requerimientos funcionales:** (Funciones indispensables) Tienen que ver con las historias de usuarios, que hablan sobre específicamente lo que hace el sistema, por ejemplo que usuario ingrese al sistema.  
**• Requerimientos no funcionales:** (Atributos de calidad): son aquellos que agregan cualidades al sistema, por ejemplo que el ingreso de ese usuario sea de manera segura.

**Requerimientos de proyecto**

• Tienen que ver más con el rol de gestor de proyectos, se usan para dar prioridad a los requerimientos del producto.  
• Estos dos mundos de requerimientos hablan de las prioridades del equipo de trabajo del proyecto.  
• Tiene que ver con requerimientos logísticos, que no tienen que ver con el desarrollo del software.

## Los Riesgos
Los riesgos son importantes para priorizarlos y atacarlos en orden y asegurar que las soluciones arquitectónicas que propongamos resuelvan los problemas más importantes.

Intenta tratar los riesgos con posibles escenarios de fracaso y que pasaría en caso de que ese riesgo se haga real.

Veamos como identificar los riesgos:

**En la toma de requerimientos -->**  dificultad / complejidad  
**En los atributos de calidad -->**  incertidumbre, cuanto mas incertidumbra hay, mas alto es el riesgo.  
**Conocimiento del dominio -->**  Riesgo prototípico, son aquellos que podemos atacar de forma estándar.

Una vez que tenemos los riesgos identificados, debemos priorizarlos, recuerda que no es necesario mitigarlos todos, debemos siempre tener en cuenta y dar prioridad a aquellos riesgos que ponen en peligro la solución que se esta construyendo.

Es necesario identificar los riesgos para poder priorizarlos y atacarlos en orden y asegurar que las soluciones arquitectónicas que propongamos resuelvan los problemas más importantes.

**Identificación de los riesgos:**

**• Toma de Requerimientos (Requerimientos funcionales):**  
Se calificará su riesgo de acuerdo a su dificultad o complejidad.  
**• Atributos de calidad (Requerimientos NO funcionales):**  
Se calificará su riesgo de acuerdo a la incertidumbre que genere, cuanto mas incertidumbre hay, mas alto es el riesgo.  
**• Conocimiento del dominio:**  
Riesgo prototípico, son aquellos que podemos atacar de forma estándar.

**Pregunta de examen:**  
Los riesgos hay que identificados para poder priorizarlos, recuerda que no es necesario mitigarlos todos, debemos siempre tener en cuenta y dar prioridad a aquellos riesgos que ponen en peligro la solución que se está construyendo.

Restricciones

Las restricciones en el contexto de un proceso de desarrollo de software se refiere a las restricciones que limitan las opciones de diseño o implementaciones disponibles al desarrollar.

Los SH nos pueden poner limitaciones relacionadas con su contexto de negocio, limitaciones legales.

También hay limitaciones técnicas relacionadas con integraciones con otros sistemas.

El ciclo de vida del producto va a agregar limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.

El arquitecto debe balancear entre los requerimiento y las restricciones.

**Las Restricciones**

Las restricciones en el contexto de un proceso de desarrollo de software se refiere a las restricciones que limitan las opciones de diseño o implementaciones disponibles al desarrollar.

Los StakeHolders, nos pueden poner limitaciones relacionadas con su contexto de negocio, ejemplo:

**• Las limitaciones legales**, la implementación de un producto podría tener restricciones en algún país, y esto seria una limitante a considerar para el desarrollo del producto.  
**• Limitaciones técnicas**, relacionadas con integraciones con otros sistemas.  
**• El ciclo de vida del producto**, agregará limitaciones al producto, por ejemplo a medida que avanza el proceso de implementación el modelo de datos va a ser más difícil de modificar.

**Nota:**  
El arquitecto debe balancear entre los requerimientos y las restricciones.

## RETO
El reto que tienes es tomar un sistema conocido (del trabajo, algún proyecto propio o un sistema que hayas usado del que conozcas su arquitectura).

Describir qué problemas resuelve y cuáles son sus requerimientos no funcionales.

Si tuvieras que hacer de este sistema un “producto reutilizable” en otros escenarios:

¿Cómo cambiaría su arquitectura?  
¿En qué otro escenario debería repensarse completamente?  
¿En qué otros escenarios se mantendría?

**Ejemplo**
El proyecto es un sistema POS (Punto de venta)  
El sistema permite administrar las ventas y el inventario y esta enfocado a restaurantes y bares.

Los requerimientos no funcionales de este sistema son seguridad , portabilidad, sincronización.

¿Cómo cambiaría su arquitectura?  
El sistema actualmente tiene una arquitectura monolitica, lo cambiaría a una arquitectura de capas y mas adelante a una arquitectura orientada a microservicios.

¿En qué otro escenario debería repensarse completamente?  
El sistema a pesar de ser un POS, no sirve para ser utilizado en otro tipo de negocios diferentes a restaurantes y bares por eso debe ser rediseñado completamente.

¿En qué otros escenarios se mantendría?  
Es importante tener en cuenta las experiencias ya vividas y debe adaptarse fácilmente a los tipos de negocios que actualmente soporta.
## Arquitectura, panorama y definición
**Panorama Arquitectónico**  
Hay muchas librerías, muchos frameworks, mucho conocimiento arquitectónico implícito entre las comunidades.

**¿Qué es un estilo de arquitectura?**  
Cuando hablamos de estilo de arquitectura hablamos de algo genérico.

Un estilo de arquitectura es una  **colección de decisiones de diseño**, aplicables a un contexto determinado, que  **restringen las decisiones arquitectónicas específicas**  en ese contexto y  **obtienen beneficios**  en cada sistema resultante.  
_Software Architecture: Foundations, Theory and Practice (Taylor, 2010)

## Estilos: Llamado y retorno

-   **Programa principal y subrutinas:**  Es el estilo más básico donde se tiene una rutina y se manda a llamar otra subrutina en donde la subrutina puede retornar o no un resultado, pero la rutina principal continua hasta que acabe la subrutina.
    
-   **Orientada a Objetos:**  Una versión con esteroides del estilo anterior. Se utiliza para aplicaciones que vamos a mantener por mucho tiempo. Tratamos de juntar el estado de la aplicación creando objetos los cuales tienen una interfaz publica (interfaz en este caso se refiere a una definición de funciones o estructura que esta clase puede implementar) donde la llamada no es solo una subrutina, sino objetos que interactuán entre si.
    
-   **Arquitectura multinivel:**  Son diferentes componentes que se van a comunicar en un orden en especifico donde un componente principal crea el llamado a un componente inferior en algún momento, un ejemplo de esto son las aplicaciones cliente-servidor.

* Cada uno de los componentes hacen invocaciones a los componentes externos y estos retornan información.

Cada componente hace un llamado y espera una respuesta

**Programa y subrutinas -->**  Instrucciones secuenciales que el programa ejecutba una por una. Luego se hacian instrucciones de salto, de aqui surgieron las funciones que son bloques de codigo que podemos invocar en cualquier momento.

**Orientado a objetos -->**  la abstracción es mayor en comparación con el paradigma anterior, se usa para aplicaciones que ya sabemos que vamos a usar durante mucho tiempo. La abstracción ya no es la subrutina, ahora tenemos objetos que se hacen llamados entre si y esperan respuestas.
![](https://image.slidesharecdn.com/descomposicinmodularyestilosdecontrol-110927094454-phpapp01/95/descomposicin-modular-y-estilos-de-control-22-728.jpg?cb=1317116788)  
[https://es.slideshare.net/jpbthames/descomposicin-modular-y-estilos-de-control](https://es.slideshare.net/jpbthames/descomposicin-modular-y-estilos-de-control)  
[https://ugc.kn3.net/i/origin/http://3.bp.blogspot.com/-](https://ugc.kn3.net/i/origin/http://3.bp.blogspot.com/-)  
![](http://1.bp.blogspot.com/-qMiiLckqeGs/Uyu0In1BwRI/AAAAAAAAAFQ/eLTBd8gR5Ew/s1600/008.jpg)  
![](https://ugc.kn3.net/i/origin/http://3.bp.blogspot.com/-Xjm09xrI618/TZoYCfZV60I/AAAAAAAAAJ4/jwTRC84axAY/s1600/prog2-objetos.gif)  
[https://www.taringa.net/posts/apuntes-y-monografias/10716721/Programacion-Orientada-a-Objetos-Corto-y-Basico-Parte-1.html](https://www.taringa.net/posts/apuntes-y-monografias/10716721/Programacion-Orientada-a-Objetos-Corto-y-Basico-Parte-1.html)  
![](http://3.bp.blogspot.com/-JqsGC0Ttg4M/T7_5jFb5Y7I/AAAAAAAAAKs/JZ17njwLSZ0/s1600/2-tier.gif)  
[http://iutll-abdd.blogspot.com/2012/05/arquitectura-de-n-capas.html](http://iutll-abdd.blogspot.com/2012/05/arquitectura-de-n-capas.html)
## Estilos: Flujo de datos

En este caso no estamos tan preocupados por cual es la secuencia de ejecución sino como los datos fluyen de un punto a otro.

**Flujo de datos:**

•  **Lote secuencial:**  Lo importante es ejecutar una pieza de código y que el final de esa pieza ya procesada pase a una siguiente etapa.

•  **Tubos y filtros:**  Se tiene un string o un flujo de datos continuo en donde cada aplicación recibe continuamente esos datos los procesa y los hace como salida a otra aplicación o al final de la ejecución.

**Nota:**

En el estilo de flujo de datos lo que se tiene son diferentes aplicaciones que van a estar conectadas en general en tiempo real por lo tanto ya no se necesita interacción con el usuario para decidir cuándo empieza un proceso o cuando termina otro.

**Cuando usamos el estilo de arquitectura de flujo de datos:**

• Cuando tenemos un proceso que tiene que tener una salida clara pero que puede ser separado en partes en donde tenemos parte a parte lo que necesitamos hacer.  
• Cuando necesitamos un string de entrada parte a parte ir procesándolo y tener una salida al final del túnel.
## Recursos
[https://docs.google.com/presentation/d/14_HifWbpVoGcXavIR-2s1zAd1aRH89gUgIaMQ0D5x-Y/edit#slide=id.p](https://docs.google.com/presentation/d/14_HifWbpVoGcXavIR-2s1zAd1aRH89gUgIaMQ0D5x-Y/edit#slide=id.p)

[http://www.cessi.org.ar/perfilesit/detalle-de-arquitecto-de-software-3](http://www.cessi.org.ar/perfilesit/detalle-de-arquitecto-de-software-3)

