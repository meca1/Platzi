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

## Definiendo áreas de contenido
Para definir las areas
Si vamos a usar area en más de una columna colocamos el mismo donde del area donde la queramos. Ejemplo:

```css
grid-template-areas: "header header"
                     "left contenido"
                     "footer footer";
```
Para usar estas areas:
```css
.header {
	grid-area: header:
}
```
**grid-column**: Define cuántos espacios de columna va a tomar un grid item. El inicio toma desde la primera línea del grid. 

```css
grid-column-start: 1;
grid-column-end: 3;
grid-column: inicio / final;
```

Para definir por fracciones (columnas): `span #fracciones`

Para usar el espacio de toda la fila usamos -1 al final.  
**Ejemplo**: `grid-column: 1/ -1;`

**grid-row**: Define cuántos espacios de fila va a tomar un grid item. El inicio toma desde la primera línea del grid. 

```css
grid-row-start: 1;
grid-row-end: 3;
grid-row: inicio / final;
```

Para definir por fracciones (columnas): `span #fracciones`
Para usar el espacio de toda la fila usamos -1 al final.  
**Ejemplo**: `grid-column: 1/ -1;`

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## nombrar a las líneas

Para definir las líneas se definen en el grid-template y se ponen los nombres entre [].

```css
grid-template-columns: [inicio] 1fr [linea2] 1fr [final];
grid-template-rows: [inicio] 200px [inicio2] 200px [final];
```

Luego para usarlos es en el grid-column y grid-row

```css
grid-column: destacado-end / destacado2-end;
grid-row: inicio / final;
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Grid Implícito

Para cambiar el flujo automático de mi grid:

```css
grid-auto-flow: column;
```

Por defecto viene: *grid-auto-flow: row;*

Para asignar el valor por defecto de el espacio de las columnas o filas que no han sido asignadas:

```css
grid-auto-columns: valores;
grid-auto-rows: valores;
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Alinear Grid Items 

### Las del contenedor padre:

Para alinear contenido, en el contenedor grid agregar:

```css
justify-items: valor; /*para alineación horizontal*/
align-items: valor; /*para alineación vertical*/
```
El valor que toman por defecto es stretch

Los valores que toman por defecto es stretch el cual hace que tomen todo el valor asignado en la fila o columna.

### Las de los items dentro del padre:

Para asignar la alineación de un solo elemento, agregar las siguientes propiedades en el grid item a modificar:

```css
align-self: valor; /*Horizontal*/
justify-self: valor; /*vertical*/
```

Los valores que se pueden usar son los siguientes:
* **Stretch**: Estira el contenido al espacio que nos de el grid.
* **Start**: Coloca el contenido hacia el inicio(izquierda), y los elementos ocupan el ancho que tienen de contenido.
* **End**: Coloca el contenido hacia la derecha, igual que start los elementos ocuparán el ancho que tienen de contenido.
* **Center**: Los elementos quedarán al centro de la pantalla.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Alinear el Grid

Para alinear el contenido de filas y columnas:

```css
justify-content: valor; /*Para alineación horizontal*/
align-content: valor; /*Para alineación vertical*/
```

Estos son los valores que se pueden usar:
* **start**: Todo el grid se alinea a la izquierda
* **center**: Todo el grid se alinea al centro 
* **end**: Todo el grid se alinea a la derecha
* **stretch**: Cambia el tamaño de los grid items para que el llenen el ancho máximo del contenedor grid. 
* **space-around**: Los items tienen el mismo espacio a su alrededor.
* **space-evenly**: Hay un espacio mas homogeneo entre items.
* **space-between**: Hay un mismo espacio entre items pero se eliminan el espacio inicial y final.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Funciones

`repeat(cantidad de columnas, valor)` para usar el mismo valor varias veces.
`minmax(min, max)` agregar un valor mínimo y maximo para el tamaño al hacer responsive.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Recursos Complementarios
* [Proyecto Smart Contracts](docs/css-grid-layout.pdf)

## Enlaces de Interés
* [Curso de CSS Grid Layout](https://platzi.com/clases/css-grid-layout)
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)