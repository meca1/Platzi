# PostCSS

¿Qué es PostCSS?

Es una herramienta para manipular archivos CSS usando JavaScript.

para ver el repositorio de PostCSS

https://github.com/postcss/postcss-cli

### COMANDOS PARA LA TERMINAL
1. Requisitos:
    * Tener instalado NodeJS
2. Para empezar debemos crear un archivo package.json inicial rápido:

    * `npm init -y`

3. Ahora tenemos que instalar el postcss-cli en el entorno de trabajo y no global.
 

    * `npm install postcss-cli --save-dev`

4. Para ejecutar el comando en el entorno de trabajo ejecutamos:

   * `npx postcss-cli --version`

### Transformar Estilos
Los comandos del PostCSS se encuentran en el Repositorio Oficial

1. Para transformar un archivo en ser ejecuta el siguiente comando:

   * `npx postcss src/css/home.css -o dist/css/home.css`

La primera ruta indica el archivo base en PostCSS

`-o` indica la salida

La segunda ruta es donde se guardara el archivo transformado

2. Transformar un ves que se realice un cambio:

   * `npx postcss src/css/home.css -o dist/css/home.css -w`

[ -w | --watch] revisa los cambios

3. Uso de Plugins de PostCSS:

   * `npx postcss src/css/home.css -o dist/css/home.css -w -u`

[ -u | --use] uso de plugins de PostCSS

4. Cambiar la ruta en nuestro index.html al archivo transformado.

```html
<linkrel="stylesheet"href="dist/css/home.css" />
```