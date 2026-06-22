# Resumen Proyecto
Vamos a construir la landing page de mi empresa (https://pluralty.com), que es una consultora cloud, enfocada en empresas que necesitan:
- Escalá tu infraestructura cloud sin gastar de más ni poner en riesgo tus servicios
- Acompañamos a empresas en crecimiento a optimizar costos, estabilidad y performance en cloud, para que puedan operar con más control, menos sobrecostos y mayor tranquilidad.
- Empresas medianas

# Infraestructura
Necesito hacer el deploy de la infra en AWS (a traves del profile pluralty, cuenta 047038669648), pasa a la cuenta llamada "homepage" (909969506256), entra desde el profile que te mencione antes y con el rol de la Organizations por defecto, salta a la de homepage.

# Skills
A partir de los skills que tenes aca en este proyecto, usalos para armar una landing page statica que funcione perfecto para desplegar en s3 + cloudfront.

# Referencia de landing
Armamos una landing page de demo con una empresa de marketing, usala de referencia para los mensajes, bloques y todo eso: https://plurality-sv-sef2xjze.manus.space/
Pero no copies y pegues los estilos, ahi definilo todo con los Skills.

# Pipeline
Necesito que configures un OIDC con la cuenta de "Homepage" y la org de Pluralty para implementar un CICD que por cada commit a main, se despliegue en AWS.

# Idiomas
Quiero que tenga Español e Ingles, si es posible, depende desde que pais entren, cargue el idioma por defecto, y si eso es muy complejo, vamos por defecto con ingles.

# Imagenes
te deje una carpeta llamada "assets" donde tenes las imagenes/isologo de la marca para que las uses

# Stack
Necesito que sea una static landing page, asi que no uses nada que requiera un server-side. Solo archivos estaticos y como mucho algun js para animaciones, pero que siempre corra en un s3 + cloudfront.

# Archivos temporales
Te deje en la carpeta "tmp" del repo, archivos para que los analises y que los tengas de referencia para algunos sectores de la pagina web (como casos de exito, o entender el publico objetivo, etc). No es necesario que pongas explicitamente esa informacion en la pagina, sino que la uses vos como justamente informacion adicional.

# Casos de exito
Me gustaria que eso este en una seccion aparte, o sea, en la landing, mostrar informacion o una parte de los casos de existo, pero luego, cada cliente tenga su sitio web puntual.
Hay varios casos de exito en la ppt, pero solo quiero poner los que te aclaro en la siguiente lista:
- Stabled.co (https://stabled.co), saca informacion de ahi para comentar que es el producto y el cliente. Por el lado de la infra, usa lo que esta en el PDF (Se desplegó la infraestructura del cliente bajo un esquema de organizations. Stack: AWS Organizations + ALB + ECS + RDS +Github Actions + Terraform), le podes poner mas "humo" marketinero como a vos te guste.
- Tradeprentice (https://dev.tradeprentice.io/), idem que Stabled. PERO la url y el nombre deberia ser el de prod (solo que ahora mismo esta solo en dev, pero vos arma la pagina simulando o asumiento que ya esta en produccion y la url de prod en realidad es sin del "dev" adelante)
- Muchticket (https://www.muchticket.com/MT/index_ES.html), usa ese sitio para sacar la info marketinera, pero el detalle tecnico esta en la ppt.
- PGSA (no tengo web), este no esta tampoco en el PDF. Aca desplegamos workspace (AWS Workspace) para escritorios remotos en AWS para la empresa.
Ahora que lo pienso, podemos configurar todos los perfiles de cada cuenta de cada cliente, para que vos entres y revises bien todos los servicios desplegado y con eso capaz puedas mejorar el detalle a nivel marketinero... eso lo prometo hacer.
TODO: Configurar los profiles de todos los clientes asi vos podes entrar y revisar servicios, configuraciones, landing zone, etc para que puedas tener mas detalle de que se hizo, que se desplego, como, y poder dar mas definicion a cada caso de exito.

# Partnerships
Te cuento que tengo un partnership con TD Synnex (http://tdsynnex.com/), esto es algo super importante para mencionar, porque gracias a este partnership, podemos mencionar que podemos ofrecer comercialmente muchos beneficios y ventajas en los principales proveedores de nube.
Ademas, soy partner de AWS y eso me permite ejecutar proyectos con AWS, eso deberiamos mencionarlo como un mensaje que de confianza en las empresas que nos van a contactar sobre todo las que trabajan con AWS.

# Certificaciones
Conta que somos una empresa certificada en AWS (en el pdf esta aclarado)

# Founder
Contar quien es el founder, que me parece super importante esto.
Ariel Molina, Ingeniero en Informatica, Solution ARchitect certificacdo en AWS con una especializacion en Seguridad (security specialty).
Trabajando hace mas de 8 años en el rubro.
Con experiencia de sysadmin, desarrollo de software, y sobre todo de DevOps y de SRE. 
Esta bueno contar que el founder de Pluralty, es community builder de aws en la categoria de containers. (https://builder.aws.com/community/@arieldevops?tab=badges)
Podemos contar que significa eso, y ademas compartir las redes del founder
- Youtube (https://www.youtube.com/@arieldevops)
- Tiktok (https://www.tiktok.com/@arieldevops)
- Instagram (https://www.instagram.com/arieldevops)
- X (https://x.com/ariel_devops)
- Linkedin (https://www.linkedin.com/in/arieldevops/)
Todo el chamuyo extra que quieras poner, sentite libre de hacerlo.

# IaC
Necesito que todo se despleigue con Terraform, guardando el state en la cuenta de destino la de homepage.

# URL
la homepage deberia estar en (https://pluralty.com) y tambien obvio en www.pluralty.com, dentro de AWS obviamente necesito obtener la URL del cloudfront para reemplazarlo en el DNS.

# DNS
Hoy en dia, el DNS esta en cloudflare, por lo que necesito que me des la URL del CNAME para modificarlo alla (lo hago yo manualmente).

# Odoo
Tengo una integracion hoy en dia con Odoo para mis clientes, y por eso me gustaria que haya un boton en algun lado que diga "Portal Clientes" y lo rediriga hacia https://pluralty.odoo.com/

# Nuestro Equipo
Esta seccion por temas de confidencialiddad mejor no la pongamos (por el moemnto)

# Servicios y modalidad
Esto me gustaria que no lo pongas en base a lo del PDF sino en base a lo que del landing que te pase de IA (lo que hizo marketing)

# Cloud Optimization Assessment
Esta parte, esta bueno que remarques que este assessment es gratuito!

# Mail de contacto
Para el formulario de contacto, me gustaria que usemos SES de AWS, para eso necesito validar el dominio de pluralty.com en SES, una vez que despliegues lo hago.
Y el correo interno podria ser cualquiera que quieras, podemos uno que sea "contacto@pluralty.com" si te parece bien.
Recordemos que es un correo interno, que una vez que el cliente llena el form, tiene que llamar a una lambda o algo asi para que dispare el correo.
IMPORTANTE: al ser un sitio web estatico, el cliente no deberia poder ver ninguna informacion sensible en el formulario, por eso me gustaria que esta parte no tenga ninguna informacion sensible que el usuario con inspeccionar la pagina pueda obtener

# Cloud providers
Esta bueno aclarar que trabajamos con las 3 nubes principales (AWS, Azure, GCP)