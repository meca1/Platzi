
# ¿Qué podemos hacer con Webpack? 

**WP**  es un Module Bundler for Modern JS Applications, es decir un empaquetador de módulos para el desarrollo de aplicaciones modernas en  **JavaScript**.

![](https://image.slidesharecdn.com/gulpwebpack-160717091758/95/gulpjs-webpack-15-638.jpg?cb=1468747259)

**¿Por qué usar Webpack? **

-   Aunque hay otras alternativas  **WP**  es un la forma mas sofisticada para cargar y transformar módulos.  **WP**  trae todas las formas de importación de módulos, en resumen trae lo mejor de todos los mundos.
## Conseptos básicos de webpack
    
-   **Entry Points:**  Este archivo le dice a Webpack de donde partirá a requerir a los demás archivos.
-   **Output:**  Así como existe un punto de entrara, existe el de salida, este es sencillo de entender, básicamente sera el archivo final que estará transformado, agrupado o empaquetado 😃
-   **Loaders:**  ¿Quieres algo sencillo entender? Chevere, una analogía de los loaders son los drivers que instalas en tu computador con el fin de el sepa que va a hacer con cada componente conectado, no es lo mismo una Radeon (CSS) que una GeForce (JavaScript).
-   **Plugins:**  Imagina que Webpack es como Wall-E (el robot de una pelicula antigua de Disney), pero en este caso empaqueta cosas geniales (y no basura), bueno, ahora con los plugins Wall-E internamente puede agregarle características a ese paquete final, por ejemplo, un color nuevo
    
-   **WP**  es developer experience.

## Modulos en javascript 

* primera forma de utilizar modulos en javascript es **AMD**
Asynchronous module definition
la libreria que importa mas famosa es REQUIRE.JS
* Segunda forma es utilizar **CommonJS** Sistema de modulos de node.js

**¿Por qué utilizar webpack?**
por que trae los mejor de dos mundos 
AMD + CommonJS
<hr>
**Gulp y Grunt**: Automatizador de tareas, prácticamente tu configuras la herramienta y este hace varias cosas por ti, minificar, transpilar, compilar código, etc. Grunt salio primero y Gulp mejoro varias cosas de este, como por ejemplo es mucho más veloz.

Grunt:

```
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};

```

Gulp:

```
gulp.task('nombreDeLaTarea', function(){
  return gulp.src('./ruta/del/archivo.css')
    .pipe(minifiCSS())
    .pipe(gulp.dest('./lugar/de/destino'))
});

```

**Browserify**: Solo nos permite usar “require” en el navegador, agrupando todas nuestra dependencias.

**Webpack**: Viene siendo un empaquetador de módulos, y también nos permite hacer una que otra cosa que hace gulp o grunt. Lo padre de webpack es que nos permite dividir cada módulo en distas maneras haciendo que el dev. tenga un mejor control para distintas situaciones yproblemas.

![Gulp, grunt, webpack](https://i.pinimg.com/564x/c8/93/25/c8932591ffd0f9c908f70589a182e177.jpg)

Todo depende de su proyecto y sus necesidades, cada herramienta tiene su sventajas y desventajas, pero desde mi punto de vista Webpack tiene lo mejor de varios mundos y lo une en una sola y poderosa herramienta.
