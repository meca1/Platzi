# Ionic
framework de aplicaciones hibritas escrito en typescript
typescript esta basado en java
node.js lo utlizamps por el manejador de paquetes mvn
trabaja con html 5

### IONIC CLI 
 - set de herramientas para el desarrollo de aplicaciones móviles
 -  nos permite correr nustra app localmente, 
 -  hacer testing, 
 - preparar nuestra app para produccion
 -  nos permite compilar nuestra app para hacerla nativa
 
## comandos importantes

 - `node -v`
   
 -     npm install -g @angular
    
 -     npm install -g ionic
   
 -     ng --version
   
 -     ionic stard myapp blank
   
 -    `ionic serve`

 - `ionic generate` aprece la occion de crear componentes paginas etc.
 - `ionic start --help manual` de ayuda para ionic start
### estrutura de archivos generados
node_modules directorio mas pesado de nuestro proyecto donde se guardan todas la librerias tanto las que vienen por defecto como las que vayamos creando

**src**  esta toda la interafaz es la parte que nos intereza para el desarrollo de nuestro proyecto

 **app** vamos a tener el  home nuestra primera vista me crea un 

 -module.ts nos ayuda a inicializarlo   
 - **html** el contenido de la vista
 - sccs  reglas css que solo afectaran esta pagina
 - ts tendra toda la logica
 - ts

al tener estos 5 archivos idetentificamos qeu estamos trabajndo con la version 4 de ionic
### Herramientas de desarrolador 
Network veremos la peticiones que hagamos a la cloud
sources ver el codigo funte de lo que nos intereza
## TEORIA
La parte principal que compone a una app son las vistas o las paginas nos permiten visualizar la informacion y tambien dar entrada de informacion la app es muy importante saber como se componen.

tiene  dos componentes principales 

    ion-header
    ion-content
`<ion-header> </ios-header>`  
Encabezado  
El encabezado es un componente principal que contiene la barra de navegación y el componente de la barra de herramientas. Es importante tener en cuenta que ion-header debe ser uno de los tres elementos raíz de una página

`<ion-navbar> </ios-navbar>`  
Navegación  
Es la clase base para componentes de controlador de navegación como Nav

`<ion-content></ion-content>`  
Contenido de la pagina  
El componente Contenido proporciona un área de contenido fácil de usar con algunos métodos útiles para controlar el área desplazable.

Opcional  
`<ion-footer></ion-footer>`  
Pie de página  
Footer es un componente raíz de una página que se encuentra en la parte inferior de la página.

