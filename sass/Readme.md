# Curso de Sass<!-- omit in toc -->

## Tabla de Contenido<!-- omit in toc -->
- [Diferencias entre Sass, Stylus y Less](#diferencias-entre-sass-stylus-y-less)
- [Estructura de CSS](#estructura-de-css)
- [Variables](#variables)
  - [Escapar una variable](#escapar-una-variable)
- [Anidaciones](#anidaciones)
- [Mixins](#mixins)
  - [Content](#content)
- [Extend](#extend)
- [Funciones](#funciones)
  - [Crear funciones](#crear-funciones)
- [Array](#array)
- [Controles de Flujo](#controles-de-flujo)
  - [each](#each)
  - [for](#for)
  - [if](#if)
- [Enlaces de Interés](#enlaces-de-interés)


es un preposesador los ma utilizados son sass, stylus, y less
su objetivo es simplificar el css pero cadad uno de ellos asu manera

elegir simple un procesador va adepender del proyecto en el que estemos.

## Diferencias entre Sass, Stylus y Less

### Compilación de código en archivos CSS

compiladores mas utilizados:
* Codekit 
* Preposs

estos organizan nuestro sass

todo lo que creemos en sass va a ser compilado en un archivo CSS 

SASS funciona más parecido a stylus, removiendo el uso de los {} y los ;
SCSS funciona como css pero añade las opciones de como variables entre otras.

Al final del día te quedas con la que más te guste.

Existen muchos preprocesadores css. Entre ellos podemos encontrar:

* `Less` es un preprocesador muy simple.
* `Sass` es una herramienta muy interesante gracias a su comunidad.
* `Stylus` es muy completo pero a la vez incluso complejo.

Elegir cuál es el mejor procesador depende de lo que queremos lograr con el proyecto. Algunas de las razones están relacionadas con el equipo y las necesidades que tenemos con el proyecto.

Cuando trabajamos con preprocesadores se tiene que compilar el código para transformarlo en css y las páginas html lo puedan entender.

los archivos de sass tienen las extensión `.scss`.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Estructura de CSS

Una ventaja que trae Sass es el poder organizar mejor nuestros archivos. Esto lo podemos lograr separando nuestros estílos en múltiples archivos. De tal modo, ya no tenemos que revisar un archivo muy amplio, sino que podemos separar nuestros estilos en varios módulos haciendo el trabajo mucho más fácil.

Para organizar e importar archivos usamos `@import`
```scss
@import "nombre_archivo.scss"
```
La forma de nombrar los archivos que van a ser importados es con un _ al inicio

el ` _ ` lo que hace es identificar que es un parcial y lo une todo en el archivo si no tiene el ` _`  entonces SASS va a compilar el archivo de variables aparte y su contenido no va a estar en el archivo principal.

```scss
@import "_nombre-archivo.scss"
```
con los compiladores ya no es necesario utilizar

```scss
.scss
```
con lo cual es codigo quedaria asi 
```scss
@import "_nombre-archivo"
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Variables

Las variables son una forma de almacenar la información que se desea reutilizar a lo largo de la hoja de estilo. 

Se puede almacenar cosas como colores, pilas de fuentes o cualquier valor de CSS que que se desea reutilizar. Sass usa el símbolo `$` para hacer que algo sea una variable. 

Aquí hay un ejemplo:

```scss
$font-stack: Helvetica, sans-serif
$primary-color: #333

body {
  font: 100% $font-stack
  color: $primary-color
}
```

`BEM` — Block Element Modifier o Modificador de Bloques de Elementos

En proyectos grandes cuya finalidad es crear componentes reutilizables, la metodología BEM juega un papel muy importante.

Como su nombre indica, BEM distingue claramente 3 conceptos: el Bloque, el Elemento y el Modificador.

SASS:

```scss
.Block {

  &__Element {

    &--Modifier {

    }
  }
}
```
CSS:
```css
.Block__Element-Modifier{}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Escapar una variable

Para escapar una variable se usa el comodín `#`. 

Esto es necesario en casos como, por ejemplo, cuando la variable está rodeada por comillas y de no ponerse el escape la variable pasaría como una cadena de caracteres..

```scss
$size: 10;

div {
  content: "#{$size}"
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Anidaciones

```scss
.btn {  
  font-size: 15pt;
  &__icon {
    font-size: .6em;
  }
  &.btn--info {
    background-color: $color-info;
  }
}
```

El comodín `&` se usa para hacer referencia al padre.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Mixins

Los mixins nos ayudan a reciclar declaraciones para evitar mucho trabajo. Para esto vamos a usar @`mixin`.

Cuando se define un mixin, los argumentos se definen como una serie de variables separadas por comas, y todo ello encerrado entre paréntesis.

Los mixins permiten definir estilos reutilizables en toda la hoja de estilos.

Se definen con la directiva `@mixin` seguida del nombre del mixin

Los mixins se incluyen en las hojas de estilos mediante la directiva `@include mixin-name;` seguida del nombre del mixin y opcionalmente por una lista de argumentos

```scss
@mixin max-width($max-width: 800px) {
  max-width: $max-width
  margin-left: auto
  margin-right: auto
}
```

En este caso le estamos definiendo un valor por defecto. Si deseamos cambiar ese valor, cuando lo llamemos se lo podemos cambiar de esta forma:

```scss
@mixin max-width(1200px)
```
Notas:

La variable que definamos como primer parámetro dentro del mixin sera usada únicamente dentro del mixin.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Content

Una de las características que tienen los mixins es la directiva content. Esta nos permite incluir un bloque de contenido dentro de un mixin.

```scss
@mixin response-to($width) {
  @media only screen and (min-width: $width) {
    @content;
  }
}
```

Se usa de esta forma:

```scss
section {
  background: blue;
  @include response-to(800px) {
    background-color: red;
  };
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Extend

`@extend` le indica a Sass que un determinado selector debería heredar todos los estilos de otro selector

Permiten que una declaración herede estilos declarados por otra regla o placeholder. Los extend se declaran con el símbolo de porcentaje `%`.

```scss
%btn {
  color: red;
  width: 50px;
}

.btn-info {
  @extend %btn;
  background: blue;
}
```
El resultado en css sería el siguiente:

```css
.btn-info {
  color: red;
  width: 50px;
  background: blue;
}
```
y el  `%btn`  podría usarlo en varias partes. La idea del placeholder es crear un bloque de estilos que se reutilicen en varias clases.

Si aparte de .btn-info tengo otro estilo, por ejemplo, .btn-danger, entonces podría reutilizar %btn.

```css
.btn-danger {
  @extend %btn;
  background: orange;
}
```

y el resultado sería:

```css
.btn-danger {
 color: red;
 width: 50px;
 background: orange;
}
```

## En resumen:
<hr/>

- **Mixings:** permiten insertar estilos en una declaración, con la ventaja de que permite parametrizar valores (colores, font-sizes, etc).

- **Contents:** muy útiles para definir breakpoints de estilo.

- **Extends:** permiten que una declaración herede estilos declarados por otra regla o placeholder (%).


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Funciones

Sass tiene muchas funciones que podemos usar cuando estamos modificando CSS. Muchas de estas funciones son muy útiles como por ejemplo aclarar un color u oscurecerlo. 

```scss
darken(#ffffff, 25%)
lighten(#ffffff, 25%)
invert(#ffffff)
```

La lista completa de funciones se pueden ver aquí:
https://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Crear funciones

```scss
@function suma($numero-uno, $numero-dos) {
  @return $numero-uno + $numero-dos;
}

.div {
  padding: suma(10px, 5px);
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Array

```scss
$fs: (
  big: 24px,
  normal: 16px,
  small: 14px,
  x-small: 12px
);

p {
  font-size: map-get($fs, normal);
}

small {
  font.size: map-get($fs, x-small);
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Controles de Flujo

### each

```scss
$font-weights: normal bold italic;

@each $font in ($font-weights) {
  .#{$font} {font.weight: $font;}
}
```

y esto da como resultado:

```css
.normal {
  font-weight: normal;
}

.bold {
  font-weight: bold;
}

.italic {
  font-weight: italic;
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### for

```scss
@for $i from 1 to 5 {
  .class-#{$i} {
    &:before {
      content: "#{$i}"
    }
  }
}
```

Resultado:

```css
.class-1:before {
  content: "1";
}

.class-2:before {
  content: "2";
}

...

.class-5:before {
  content: "5";
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### if

```scss
$background-color: black;

@if $background-color == black {
  p {
    text-color: white;
  }
}
@else {
  p {
    text-color: black;
  }
}
```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Enlaces de Interés
* [Curso de Sass](https://platzi.com/clases/sass/)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>