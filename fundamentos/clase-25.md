# Cómo funciona el formato JPG

Asumamos que tenemos una foto de 600*800, si esto estuviera en un formato sin compresión pesaría 840KB,solo representando un color por pixel

Para tener una calidad de 32 bit la imagen debe pesar 1.9MB para esto podemos comprimir las imágenes y usar formatos como jpeg

jpg lo que hace es aproximar áreas de color, si un color esta en áreas continuas solo se declara la zona y el color de esa zona, de esta forma se pueden tener imágenes que pesan mucho menos.
El formato PNG funciona diferente a JPG. Y hay mejoras sobre el algoritmo JPG como JPEG2000.

Hay todo un mundo de formatos y estándares de compresión como:

-   DivX en video
-   gzip en el prótocolo HTTP
-   AAC vs. MP3 en sonido
-   MKV como un metaformato contenedor de otros formatos
-   PSD como un formato cerrado gráfico

¿Qué otros formatos especiales de compresión conoces o te intrigan?

![](https://static.platzi.com/media/files/jpgcompression_70f14183-f6ae-48c4-8fd4-b7ebc0395272.png)

**1 Bit**  representa como número máximo es el 256: Por lo tanto en un  **.bmp**  tiene 256 colores y para determinar su tamaño se debe  **multiplicar el ancho por el alto**  de la imagen.

**Para representar colores de 16 bits:**  Se necesitan 2 bytes.  
**Para representar colores (ultra-reales) de 32 bits:**Se necesitan 4 bytes.

**Nota:**  Sí cada  **bite tiene 8 bits**, entonces; 16 bits es igual a 2 bytes y 32 bits es igual a 4 bytes.

