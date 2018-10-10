## ¿Qué es Responsive Design?

Responsive design son todas esas técnicas que usamos para adaptar nuestras aplicaciones web a la mayor cantidad de pantallas.

##  meta viwport
wiewport: Es el area visible de navegador

Para setear el viewport, se va a hacer desde una etiqueta meta.

esta es una etiqueta de metadatos que te ayudará a configurar tu website para que sea visible en dispositivos de menor tamaño. 

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Uno de los objetivos principales al usar esta etiqueta será que conserves la legibilidad de tu página web, al variar el escalado de tus contenidos.

* `width=device-width` para que se adapte según la pantalla del dispositivo

* `initial-scale=1.0` para indicar el escalado según el dispositivo (1 = 100% del zoom)

## Medidas relativas útiles en Responsive Design

### pixel:
 unidad de color minima dentro de medios digitales 

### porcentaje:
 longitud referente al tamaño del padre

### em

unidad relativa al tamaño de fuente especificada mas cercana

```html
<nav> font-zise: 16px;
  <ul> font-size: 2em, 32px;
    <li> font-size: 1em, 32px;
    <a href=""> hola </a> font-size: .5em; 16px; padding: 2em; 32px;
    <li>
  <ul>
<nav> 
```
### rem

unidad relativa al tamaño de fuente especificada en el ancestro mas lejano (html o body)
```html
<!DOCTYPE html>
<html lang="en">font-size: 32px;
<head>
</head>
<body>font-size: 16px;
  <ul>font-size: 2rem; 64px
    <li>font-size: 1rem; 32px;
      <a href=""></a> font-size:.5rem; 16px;
    </li>
  </ul>
</body>
</html>
```
### vw / vh

unidad relativa porcentual con respecto al viweport 

100vw = 1024 viewport

## media Queries
gracias a este modulo exite responsive desing

mudulo CSS3S que permite adaptar la representacion del contenido a caracteristicas del dispositivo

```css
@media media type and (condición) { }
```
se compone de un media type y una o mas condiciones

#### ejemplo

```css
@media screen type and (max-width: 768px) { }
```
todas las pantallas con un ancho inferior o igual a 768px cumplen con esta funcion
```css
@media screen type and (max-width: 768px) and (min-width: 480px) { }
```
todas las pantallas con un ancho de 480px hasta 768px cumplen con esta funcion

### Mobile Firts

```css
@media screen type and (max-width: 320px) { }
@media screen type and (max-width: 480px) { }
@media screen type and (max-width: 768px) { }
@media screen type and (max-width: 1024px) { }
```
usa min-width (min-width = desde)
### Desktop Firts

```css
@media screen type and (min-width: 1024px) { }
@media screen type and (min-width: 768px) { }
@media screen type and (min-width: 480px) { }
@media screen type and (min-width: 320px) { }
```
usa max-width (max-width = hasta)

## Breakpoints estandarizados
 que debemos de tener en cuenta:

#### Móviles:
  entre 320 y 480 píxeles. 
#### Tablets:
 entre 768 y 1024 píxeles.

#### Pantallas grandes:
 más de 1024 píxeles o más.

 se utlizan mas que todo en la hoja de estilos

  Por otro lado, para hacer esto posible, aprenderás a aplicar las etiquetas de max-width y flex- wrap; éstas también te ayudarán a evitar que tu usuario necesite navegar la página de forma horizontal, pues la información se organizará en forma vertical para facilitar la experiencia.

## CSS Positions
* **static:** es la propiedad por defecto.
Con las otras opciones, se activan las propiedades de top, bottom, left, right y z-index.

* **relative:** el objeto se mueve en base al lugar donde se encuentra originalmente.

* **absolute:** el objeto se ubica de manera absoluta con el elemento más cercano que tenga posición relativa o con el body.

* **fixed:** El elemento se muestra de manera fija en el viewport.

* **sticky:** El elemento se queda de manera fija una vez que aparece en pantalla.

## Video Responsive
Para que un video se ajuste al tamaño de pantalla, se puede hacer lo siguiente:

```css

.html-video  {
  width: 100%;
  height: auto;
}

```
### Video Insertado

### la etiqueta iframe.

Ésta etiqueta hará posible que el video que insertes tenga la posibilidad de adaptarse a distintas formas de visualización, aunque, a pesar de ellas, aprenderás cuáles son las diferencias entre usar un video inserto y hacerlo desde html5.



```html
<div class="flexible-video">
  <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/LoKvxCSZw5w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```
```css
.youtube-video {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.flexible-video {
  width: 100%;
  height: 0;
  /* height * 100 / width */
  padding-top: 56.25%;
  position: relative;
}
```

```html
<!-- HTML -->
<i class="icon-menu burger-button"></i>
```
```css
/* CSS */
.burger-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.8);
  display: none;
  line-height: 40px;
  text-align: center;
  position: fixed;
  z-index: 4;
  left: 5px;
  top: 5px;
  color: #fff;
}
```
```css
@media screen and (max-width: 767px) {
  .burger-button {
    display: block;
  }
.menu {
        position: fixed;
        background-color: rgba(5, 111, 255, .9);
        z-index: 3;
        top: 0;
        left:-100vw; /* Para que el menu se oculte a la izquierda y se cree el efecto al hacer click*/
        width: 100vw;
        bottom: 0;/* height: 100vw; *//*A partir de aqui para centrar*/
        display: flex;
        align-items: center;
        justify-content: center; /* centrar hasta aqui */
        transition: .3s; /* Para crear efecto de transición */
    }
    .menu.is-active {
        left: 0;
    }
```
```js

// Javascript
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-button');
burgerButton.addEventListener('click', () => {
  menu.classList.toggle('is-active');
})
```
## Media Queries con JavaScript

Hay ocaciones en las que solo se van a usar eventos dependiendo del tamaño de pantalla. Por ejemplo, en los burger menu. Para estos casos, se puede usar media queries en javascript

```js
//Media query
const ipad = window.matchMedia('screen and (max-width: 767px)');

//Activa la primera vez que se entra
if(ipad.matches)
  burgerButton.addEventListener('click', hideShow);

//Activa o desactiva al hacer resize de la pantalla
ipad.addListener((event) => {
  if(event.matches)
    burgerButton.addEventListener('click', hideShow);
  else
    burgerButton.removeEventListener('click', hideShow);
});
```
## Propiedades CSS Útiles
**Flex-Wrap**

Pone un elemento debajo de otro si no entran en el viewport.

```css
flex-wrap: wrap; 

```

## Remote Debugging
### **Servidor Estático en Node**
Para poder hacer debugging se necesita un servidor statático.

1. Instalar static-server

```bash
npm i -g static-server
```
2. ir a la carpeta del proyecto en la terminal.

3. Ejecutar el comando 
```bash
 static-server
 ```
. Se va a generar una dirección con la aplicación.

4. Verificar la ip de la computadora con:

```bash
$ ipconfig
```
5. Ingresar desde el dispositivo móvil ingresando **ip:puerto**

***192.168.0.10:9080***

### Remote Debugging en iOS

Para esto es necesario tener una Mac.

1. Conectar el celular con la computadora via USB.
2. Abrir Safari.
3. Ir a Preferencias de Safari.
4. Habilitar "Mostrar el menú de Desarrollo en la barra de menús". Aparecerá un nuevo menú de desarrollo.
5. Abrir el menú de desarrollo. Aparecerá el dispositivo en la lista.
6. Abrir la ip del proyecto.

### Remote Debugging en Android

1. Conectar el celular con la computadora via USB.
2. Activar el menú de desarrolldor en Android.
  1. Ir a acerca del contenido
  2. Hacer tab en **número de compilación** varias veces hasta que se active el menú de programnador.
3. Ir al menú de programación.
4. Activar la opción de **Depuración por USB**.
5. Abrir Chrome en la computadora.
6. Ir a **chrome://inspect**. Aparecerá una lista de los teléfonos con las ventanas que está navegando.
7. Hacer click en inspect.

## Recursos Complementarios
* [Diapositivas del Curso](docs/responsive-design.pdf)



## Enlaces de Interés
* [Curso de Responsive Design](https://platzi.com/clases/responsive-design/)
* [Repositorio de Github](https://github.com/LeonidasEsteban/responsive-design-portafolio)
* [Mediaqueri](https://mediaqueri.es/)
* [Codepen: CSS Positions](https://codepen.io/LeonidasEsteban/pen/VGWzWK)
* [Icomoon](https://icomoon.io/)

