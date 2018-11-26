# GPUs, tarjetas de video y sonido
En conclusión:

CPU = Procesamiento secuencial.
GPU = Procesamiento paralelo.

Como al darle clic la informacion es mostrada en patalla: se hace por medio de la GPU tarjeta grafica o tarjeta de video 

Es mas sefectiva para el procesamiento paralelizado

Sabemos cómo los archivos se cargan en memoria pero ¿Cómo veo en pantalla que el archivo se ha abierto?

Esto se logra gracias a la Graphic Processing Unit o GPU.

La CPU puede ejecutar cualquier proceso, incluido el dibujado en pantalla de ciertos datos. Pero no es ella quien se encarga, sino la GPU: tarjetas especialmente fabricadas para realizar estas tareas.

La comunicación entre la CPU y la GPU se realiza actualmente a través de un socket llamado PCI-Express.

Estas placas de vídeo tienen sus propias unidades o núcleos de procesamiento y su propia memoria RAM.

Lo que sucede es que la GPU divide la pantalla en una matriz y cada núcleo se encarga de dibujar una parte de esa matriz, para lograr una mejor performance.

Esto es mucho más rápido de lo que podría lograr la CPU sola ya que debería dibujar pixel por pixel ella sola.

De manera aparte, se concretará mediante un bridge o un puerto llamado PCI express que es el socket entre la CPU y GPU.
Tiene varios factores
•	Giga Hertz (velocidad) Que es menor al que tiene la CPU
•	Cores (núcleos) Tiene muchos más Cores que la CPU
•	VRAM (RAM de video)
La GPU convierte la pantalla (imagen, video, etc.) en una matriz de múltiples opciones y la divide en segmentos que la asignará a los diversos núcleos y habla con el software de la memoria RAM (concetada por bridges) para preguntar cómo quiere representar los datos. Algunas veces viene con operaciones 3D, códecs, etc. para hacer más veloz el procesamiento gráfico.
La CPU iría pixel por pixel
![GPUs, tarjetas de video y sonido](./clase7.png)