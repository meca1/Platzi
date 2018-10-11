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


```css
grid-template: filas / columnas;
```
## Grids identados y tipos de displays

Display subgrid para heredar la configuración del grid padre (cuando se esten anidando grids).
```css
display: subgrid; // No disponible aun
```
Display inline-grid muestra el grid en una sola linea:
```css
display: inline-grid; // No disponible aun
```
Escoje desde el untimo elemento hacia adelante
```css
.item:nth-last-of-type(4){
	background: blue;
```
## Espaciado entre filas y columnas

```css

  grid-column-gap:30px; /*Espaciado entre columnas*/
  grid-row-gap:30px; /*Espaciado entre filas*/

  grid-gap: filas  columnas;
  gap: 10px 50px;/*espaciado entre columnas*/

```
## Repetidores, unidades de medida y funciones

* **Unidad de medida:** fracciones **fr** distrubuye el espacio disponible en formas iguales.
* **Funciones:** <br>
**repeat(cantidad, valor)** para usar el mismo valor varias veces
* **minmax(min, max)** agregar un valor minimo y maximo para el tamaño al hacer responsive

* Se pueden utilizar funciones dentro de otras funciones 

```css
grid-template:300px 150px 100px/repeat(4, minmax(30px, 1fr));
```
* **Auto:** es lo mismo que **fr** pero al mismo tiempo no lo es, porque auto distribuye el espaciado que tiene la columna pero con referencia a su contenido.