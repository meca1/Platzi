Secure Shell (SSH) is a UNIX-based command interface and protocol for securely getting access to a remote computer.
Use those connection settings to login to your personal server:

-   **Your public IP**:  `3.80.49.234`
-   **Your port**:  `22`
-   **Your login**:  `root`
-   **Your password**:  `Bc2127feF66FA89?7`

**Absolutely never give your password to anyone.**

Una vez que haya iniciado sesión, ingrese aquí el código de registro que ve (________)


Bienvenido a Ubuntu 16.04.5 LTS (GNU / Linux 4.4.0-1072-aws x86_64)

* Documentación:   https://help.ubuntu.com * Gestión:      https://landscape.canonical.com * Soporte:         https://ubuntu.com/advantage



  Obtenga soporte en la nube con Ubuntu Advantage Cloud Guest: http://www.ubuntu.com/business/services/cloud
    

0 paquetes pueden ser actualizados. 0 actualizaciones son actualizaciones de seguridad.


Nueva versión '18 .04.2 LTS 'disponible. Ejecute 'do-release-upgrade' para actualizarlo.



*** Se requiere reinicio del sistema *** --- Su código de registro es df45551d ---



#### Consejos y enlaces

-   Su servidor es una máquina distante. Todo lo que ejecutará una vez que haya iniciado sesión NO se ejecutará en su computadora, sino en esta computadora distante, que se encuentra en un centro de datos, en algún lugar de los Estados Unidos. -   Una dirección IP es una cadena única de números separados por paradas completas que identifica a cada computadora que utiliza el Protocolo de Internet para comunicarse a través de una red. La dirección IP que le proporcionamos es la dirección de su servidor en Internet, al igual que su dirección postal es la dirección de su hogar en el planeta Tierra. -   Necesitará iniciar sesión en su servidor muchas veces para completar el Nivel 2. Asegúrese de entender cómo funciona esto. -   Cuando desee salir de su servidor, simplemente ingrese "exit" y presione enter. -



  Sus configuraciones de conexión siempre estarán visibles en el menú de la izquierda después de este desafío. -   Si está en Windows, le recomendamos que utilice PuTTY para iniciar sesión a través de SSH. Puede   [ descargarlo desde esta página ] (http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) . -   Si se encuentra en Mac OS o Linux, abre un terminal (si en Mac OS, la aplicación llamada "Terminal") y escriba este comando para acceder a su servidor:   ` root@3.80.49.234 ssh ' . Presione enter para ejecutar el comando, el terminal le pedirá su contraseña. Presione enter nuevamente después de su contraseña, y ahora está conectado! -   La primera vez que inicie sesión en su servidor a través de   ` ssh


` , probablemente verá un mensaje de advertencia. Leerlo Puedes confiar en el host (servidor) que te damos. -   Tenga en cuenta que, por razones de seguridad, cuando se le solicita una contraseña, los caracteres escritos no aparecen en un terminal de Linux o Mac OS. -   Una vez que haya iniciado sesión, debería ver un indicador de shell. Debería verse algo como esto:   ` root @ production-679b9140: ~ # ` . Es donde escribirás tus comandos. -   Su código de registro se mostrará en el terminal cuando inicie sesión. Debería verse así: 1337B377y.




## uname
ow that you are logged-in, you first need to check what operating system your server is running.

`uname`  (short for unix name) is a software program in Unix and Unix-like computer operating systems that prints the name, version and other details about the current machine and the operating system running on it.
## man
When you are not sure how to use a command, or when you need to learn more about available options, you can use the `man` command to display the manual of a command. For instance, if you want to display the manual of the program `ls` (that you already read for Level 1) you can use this command line: `man ls`.
Use  `man`  to display the  `uname`  manual.

What is the  `uname`  option that prints the kernel version? *

####   
Tips and links

-   Learn more about the  [command man](http://www.linfo.org/man.html)
-   `man man`
-   You probably do not see the entire manual at once on your terminal window.
## pwd
`pwd` stands for "print working directory". This command outputs the full path of the directory you are currently in, called the working directory.

What is the path of the current working directory you are in after you just logged in? *

#### Tips and links

-   [Linux navigation](http://linuxcommand.org/lc3_lts0020.php)
-   `man pwd`
-   If you changed directory before doing this challenge, exit and log in again.

 ## ls
 You should already know this command as you did read the manual on level 1. It permits you to list files and directories (folders) contained in a specific directory. If you do not specify which directory to list, `ls`lists files and directories contained in your working directory.

Exit and log in again to your server. List files and directories, in the working directory. In the list that you see, what is the name of the directory starting with 'h'? *

#### Tips and links

-   [Linux navigation](http://linuxcommand.org/lc3_lts0020.php)
-   [Linux - looking around](http://linuxcommand.org/lc3_lts0030.php)
-   `man ls`
-   In your terminal, when you use  `ls`, you can notice that files are different colors depending on whether they're regular files, executables, or directories.
## cd

`cd`  stands for "change directory".  `cd`  permits you to navigate the linux filesystem and moves you into the directory you specify, changing your working directory.

Si no se especifica un directorio,   ` cd '   se desplazará de nuevo a su directorio de trabajo predeterminado (el mismo directorio se inicia en la primera vez que ingrese al sistema). Escriba ` cd ' y pulse Enter. Una vez hecho esto, ¿cuál es la ruta a su directorio de trabajo? *


Escriba   ` cd '   y pulse Enter. Una vez hecho esto, ¿cuál es la ruta a su directorio de trabajo? *

Vaya al directorio   ` holbertonschool `   escribiendo   ` cd holbertonschool ' . Una vez hecho esto, responde a estas preguntas:

¿Cuál es su directorio de trabajo? *

¿Cuál es el nombre del archivo contenido en el   ` holbertonschool `   directorio? *

Escriba   ` cd ' . Una vez hecho esto, ¿cuál es la ruta a su directorio de trabajo? *

#### Consejos y enlaces

- [ navegación Linux ] (http://linuxcommand.org/lc3_lts0020.php) - ` cd hombre ` - ` hombre pwd ' - ` man ls ` -   El archivo contenido en la carpeta holbertonschool tiene un nombre extraño. Debería verse algo así: 7c393f0a5fcf402. -   Tenga en cuenta que el indicador de comandos de su shell podría cambiar cuando navegue por el sistema de archivos de Linux y mostrar el nombre de su directorio de trabajo actual.  
  
  
  


## menos

`less` is a Linux command that permits you to view text files.
Use the less command to read the file contained in the  `holbertonschool`  folder. Enter the content of the file here: *
#### Tips and links

-   [Linux - Looking around](http://linuxcommand.org/lc3_lts0030.php)
-   `man less`
-   The text inside the file should look something like this: d254501c321d4a02
## touch
Change your working directory to `/root/holbertonschool`. Then create an empty file called `hello_world`using the `touch` command. Check that the file has been created using the `ls` command. Once done press the button "Done!".
#### Tips and links

-   `man touch`
## cp

Copy the file `hello_world` to the directory `/tmp`. Check that the file has been copied using the `ls` command. Once done press the button "Done!".

#### Tips and links

-   Linux -  [Manipulating Files](http://linuxcommand.org/lc3_lts0050.php)
-   `man cp`
-   [Read more about /tmp](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/tmp.html)

## mv

`mv` is a command that permits you to move and rename files and directories.

0.  Rename the file  `hello_world`  which is in the  `/tmp`  directory to  `hello_holberton`
1.  Move the file  `hello_world`  from  `/root/holbertonschool`  to  `/root`

Once done press the button "Done!".
#### Tips and links

-   `man mv`
## rm

Delete the file `/tmp/hello_holberton` using the `rm` command. Once done press the button "Done!".

####   
Tips and links

-   `man rm`
## mkdir

Create a directory called  `Betty`  in  `/root/holbertonschool`  using the  `mkdir`  command. Once done press the button "Done!".

## rmdir

Remove the directory  `/root/holbertonschool/Betty`. Once done press the button "Done!"

## install

Emacs is an extensible, customizable text editor. It is a text editor you can use to edit your text, HTML, CSS, and JavaScript files. Emacs is not installed yet on your server, so you first need to install it yourself. To do so you will use the  `apt-get`  command.

Use this exact command to install Emacs on your server:  `apt-get install emacs`

Check that emacs is installed by typing  `emacs`  in your shell. Exit Emacs. Once done, press the button "Done!".

####   
Tips and links

-   Te animamos a que hagas el tutorial de Emacs. Ingrese a Emacs y lea lo que está en la pantalla para averiguar cómo ejecutar el tutorial de Emacs ... dentro de Emacs. -   Al principio Emacs podría ser confuso. No te preocupes, te acostumbrarás. Aquí hay una   [ tarjeta de referencia ] (https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf) para ayudarlo a encontrar los atajos de teclado de Emacs más rápido. -   Para los siguientes desafíos, puede utilizar cualquier editor de texto que desee que funcione en un terminal. Pero le recomendamos Emacs. -



## my_emacs_file

Crear un archivo llamado   ` my_emacs_file `   siguiendo los pasos:

0. Ejecutar   ` cd / tmp ' . Compruebe que está ahora en   ` / tmp '   utilizando el comando   ' pwd ' . 1. Ejecutar   ` emacs my_emacs_file ' . Ahora deberías estar en Emacs. 2. Escriba algo 3. Guarde el archivo no vacío y luego salga. 4. Compruebe que ha creado el archivo   ` my_emacs_file `   en   ` / tmp '   utilizando el   ` ls `   comando.




#### Consejos y enlaces

- [ Tarjeta de referencia de GNU Emacs ] (https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf) ctrl + xcy  


## cita

0. Cambie el nombre del archivo   ` / root / hola_mundo `   en   ` / root / quote_dora ` 1. Abrir el archivo   ` / root / quote_dora `   con Emacs tecleando   ` emacs / root / quote_dora ` 2. Escribir esto en el archivo:



"Programar es como construir un rompecabezas multilingüe con la gramática adecuada, pero el resultado es una obra de arte, y esa pieza de arte es útil" - Dora Korpar, 2015-10-19

4.  Save the file and exit Emacs.
5.  Make sure the content of the file is correct by using the  `less`  command.

Once done press the button "Done!".

## install

Now let’s move on to building your website! Your website will be hosted on your server, and people will be able to access it using your IP address:  [http://3.80.49.234](http://3.80.49.234/).

Right now, if you type your IP address in the address bar of your browser, you will get an error. You can try it by clicking on this link:  [http://3.80.49.234](http://3.80.49.234/). The reason why it is displaying an error is that you first need to install a web server on your machine.

There are a lot of different web servers available for Linux. During Level 2 we will use the free Apache web server. It is  [the most used web server on the planet](http://news.netcraft.com/archives/2015/03/19/march-2015-web-server-survey.html). Let’s install it!

Install the Apache web server by using the command  `apt-get install apache2`. Once done, go back to your browser and type your IP address again in the address bar (or click  [this link](http://3.80.49.234/)). You should see this text:

Apache2 Ubuntu Default Page   ¡Funciona!  Esta es la página de bienvenida predeterminada utilizada para probar el funcionamiento correcto del servidor Apache2 después de la instalación en los sistemas Ubuntu. Se basa en la página equivalente en Debian, de la que se deriva el empaquetamiento de Ubuntu Apache. Si puede leer esta página, significa que el servidor HTTP Apache instalado en este sitio funciona correctamente. Debe reemplazar este archivo (ubicado en /var/www/html/index.html) antes de continuar operando su servidor HTTP.  ...




** ¡Felicidades! Acaba de instalar su primer servidor web, en un servidor Linux **   y cualquiera puede ver su página usando esta URL:   [ http://3.80.49.234 ] (http://3.80.49.234/) .

Una vez que hayas instalado Apache, presiona el botón "¡Listo!".

#### Consejos y enlaces

-   La palabra "servidor" se puede utilizar para una máquina o un software. En nuestro caso, usted tiene un servidor (una máquina) en el que tiene que instalar y ejecutar el servidor web Apache (un software). Generalmente, usar la palabra "servidor" solo se refiere a una máquina. Y usar el "servidor" con un adjetivo (es decir, un servidor web) se refiere a un software.

## config

Modifiquemos la página que la gente ve cuando escribe su dirección IP en su navegador. Pero primero tenemos que ubicarlo en su servidor.

Apache mantiene sus principales archivos de configuración dentro de la   ` / etc / apache2 `   directorio.

Al igual que cualquier otro sitio web gestionado por Apache, el sitio web por defecto que se ve en su navegador tiene su propio archivo de configuración:   ` /etc/apache2/sites-available/000-default.conf ' . Dentro de este archivo de configuración se puede encontrar una opción llamada   ` DocumentRoot ' , que especifica el directorio contiene los archivos de la página web por defecto.

Utilizar el   ` menos '   comando para encontrar la ruta del directorio donde se almacenan los archivos de su sitio web. La línea que busca debe comenzar con   ` DocumentRoot ' , seguido de la ruta del directorio.

¿Cuál es el directorio que es DocumentRoot para su sitio web? *

Ve a ese directorio. ¿Cuál es el nombre del archivo contenido en este directorio? *

#### Consejos y enlaces

- [ Página de proyecto del servidor http Apache ] (https://httpd.apache.org/)  


## index.html 1/2

Ahora vamos a jugar un poco con el   ` index.html `   archivo y personalizar su página web!

` Index.html '   es un archivo HTML. Como cualquier otro archivo HTML, se describe mediante etiquetas HTML. Aprenderá HTML pronto, cuando construya su sitio web durante el desafío "Proyecto". Vamos a jugar con   ` index.html `   por ahora.

El uso de Emacs, abierta   ' index.html '   y cambiar el texto   ` Funciona! `   A   ` Hola, Holberton! `

Una vez hecho esto, debería ver el cambio en su sitio web visitando   [ http://3.80.49.234 ] (http://3.80.49.234/) .

Una vez que haya terminado, presione el botón "¡Listo!".

## index.html 2/2

Let’s modify the rest of  `index.html`!

0.  Change the text  `<title>Apache2 Ubuntu Default Page: It Works</title>`  to  `<title>Holberton Default Page: It Works</title>`
1.  Change the text  `<span class="floating_element">Apache2 Ubuntu Default Page</span>`  to  `<span class="floating_element">Holberton Default Page</span>`

Once you are done, refresh your webpage at  [http://3.80.49.234](http://3.80.49.234/)  to check that your changes are up to date there, and then press the button "Done!"

