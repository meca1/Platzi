La velocidad de internet es muy importante ya que las conecciones son muy caras

**Cuando queremos conectarnos a puntos muy lejanos**  por ejemplo el otro lado del mundo  **para nuestro proveedor de internet es muy costoso**  por lo tanto  **prioriza las conexiones usando un QoS (Quality of Service)**

Cuando la conexión esta cerca nuestro proveedor de internet hace una  **red MAN (Metropolitan Area Network)**  y el costo de eso es casi nulo.
El principio nace de las MAN (Red de Área Local), que suministra la información entre clientes de un sitio común) vecinos pasando la información entre el ISP y los modem de los ISP ubicados en cada sitio sin necesidad de pasar por los IXP.

Hay un forma de burlar el QoS y simular una la conexión más cercana y esto es a través del CDN (Content Delivery Network) que funcionan solamente para mostrar contenido estático como imagenes, videos etc.
Los proveedores de internet les pagan a los IXP para poder conectarse. Las conexiones son muy costosas.  
Conexiones con redes locales.  
Lo que hacen los ISP es QoS o Internet Shaping /Throttling. Regulan la velocidad según el servicio al quieres acceder.  
Para hacer que la conexión sea más corta sirven los CDN (content delivery network), cuando los datos no tienen que ser procesados (archivos estáticos) los replican por todo el planeta.

Mi resumen:

La velocidad es muy importante en internet, y es muy costosa, los ISP les tiene que pagar a los IXP,

Este pago se hace en la última milla (conexión entre los distribuidores de ISP y el cableado de las casas u empresas).

El principio nace de las MAN (Red de Área Local), que suministra la información entre clientes de un sitio común) vecinos pasando la información entre el ISP y los modem de los ISP ubicados en cada sitio sin necesidad de pasar por los IXP.

Cuando la transmisión se hace entre IXP de diferente partes del mundo se hace más costosa por la inversión en cableado submarino y demás.

Para ello los proveedores establecen prioridades sobre la red, entonces reducen la conexión, enfocándose en los clientes que dan más dinero que son las empresas y manejando los servicios más solicitados (email, archivos, llamadas), entonces configuran los routers internos a través de una tecnología llamada firewalls y otras como network shaping.

El Quality of Service (QoS), consiste en que funcionen óptimamente ciertos servicios y otros no, también se le conoce como Network Shaping (Forma de la red u organización de la red) o throttling (estrangulamiento).

El throttling consiste en acelerar y desacelerar la conexión en ciertos puntos.

Debido a este Throttling empresas como google, Facebook, twitter, incluso platzi, etc… , se inventaron una forma de hacer que el throtling no sea tan malo. Cómo el tráfico en el país es más barato que el internacional, entonces para hacer que la conexión sea más corta y saltarse todos estos problemas, crearon un concepto llamado CDN (Content Delivery Network) o Red de entrega de contenidos. Los CDN son servidores que cuando los datos no tienen que ser manejados por algoritmos como los videos, una imagen, una foto (archivos estáticos) los replican por todo el planeta, entonces normalmente cada CDN está conectado al IXP más cercano al punto que lo ubican en el mismo data center del IXP, de manera que al recibir las peticiones regresan la IP del servidor CDN más cercano. Entonces p.e en el caso de twitter no hay un solo servidor, sino que hay muchos que están replicando constantemente la información usando CDN, y son estos los que realmente dan acceso a esta información.

Y gracias a estos CDN es posible que internet funcione de manera óptima (veloz).
