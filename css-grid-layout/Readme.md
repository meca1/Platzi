# CSS Grid Layout

Principalmente vamos a crear Layouts, que son esos recuadros principales donde se encierra o se envuelve todo el contenido y componentes de nuestro sitio web.

* **Grid Container:** va a ser este elemento padre principal que va a tener puesto un nuevo tipo de display llamado grid , el cual nos va a permitir que le podamos poner otras propiedades para manipular nuestro Layout. Los hijos directos de dicho contenedor serán Grid Item’sr .

```css
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"> </p>  /*Este no es un grid item */
  </div>
  <div class="item"></div>
</div>
```

+ **Grid Line:** Líneas divisorias horizontales y verticales.
Divisiones invisibles dentro de nuestro web site.
También serán las que van a contornear nuestro grid.

* **Grid Track:** Es el espacio entre dos lineas adyacentes o mas bien conocido como filas y columnas.

* **Grid Cell:** Espacio entre dos filas adyacentes y dos columnas adyacentes.

* **Grid Area:** Espacio que rodeado por 4 grid lines (Cabe destacar que se puede ampliar a N cantidades)

Grid explicito (explicit grid) es cuando nosotros definimos el numero de filas o columnas.

Grid implicito (implicit grid) es cuando tenemos filas o columnas que no definimos pero son parte de nuestro grid.