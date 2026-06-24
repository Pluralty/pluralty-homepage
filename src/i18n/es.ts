// Spanish dictionary (LATAM voseo). Same keys as en.ts, kept in sync.
const es: Record<string, string> = {
  // Meta
  'meta.title': 'Pluralty · Consultora cloud para empresas en crecimiento',
  'meta.desc':
    'Acompañamos a empresas en crecimiento a optimizar costo, estabilidad y performance en la nube. Partner certificado de AWS, en AWS, Azure y GCP.',

  // Nav
  'nav.services': 'Servicios',
  'nav.cases': 'Casos de éxito',
  'nav.founder': 'Founder',
  'nav.contact': 'Contacto',
  'nav.portal': 'Portal Clientes',
  'nav.cta': 'Assessment gratis',
  'nav.menu': 'Menú',

  // Hero
  'hero.badge': 'Partner certificado de AWS',
  'hero.title': 'Escalá tu infraestructura cloud sin gastar de más ni poner en riesgo tus servicios',
  'hero.sub':
    'Acompañamos a empresas en crecimiento a optimizar costo, estabilidad y performance en la nube, para que operes con más control y menos sobresaltos.',
  'hero.cta1': 'Pedí tu assessment gratis',
  'hero.cta2': 'Ver casos de éxito',

  // Trust strip
  'trust.m1.v': '99%',
  'trust.m1.l': 'disponibilidad',
  'trust.m2.v': '40-60%',
  'trust.m2.l': 'menos costo cloud',
  'trust.m3.v': '10x',
  'trust.m3.l': 'frecuencia de deploy',
  'trust.m4.v': '−80%',
  'trust.m4.l': 'hallazgos de seguridad',

  // Services
  'services.eyebrow': 'Qué hacemos',
  'services.title': 'Ingeniería que mantiene tu nube rápida, estable y eficiente',
  'services.sub':
    'Desde un solo servidor sobrecargado hasta una plataforma multi-cuenta, nos hacemos cargo de lo que no te deja dormir.',
  'services.s1.t': 'Optimización cloud',
  'services.s1.d':
    'Ajustamos cómputo, almacenamiento y red para que tu plataforma soporte el crecimiento sin pagar por capacidad que nunca usás.',
  'services.s2.t': 'FinOps y control de costos',
  'services.s2.d':
    'Cada solución se diseña pensando en la factura. Eliminamos desperdicio y volvemos el gasto cloud predecible, muchas veces entre 40 y 60 por ciento.',
  'services.s3.t': 'Modernización de infraestructura',
  'services.s3.d':
    'Los servidores viejos se vuelven infraestructura contenerizada y auto-escalable, definida como código y lista para recuperarse sola.',
  'services.s4.t': 'DevOps y SRE',
  'services.s4.d':
    'Pipelines CI/CD, observabilidad y disciplina de on-call que te llevan de un deploy por semana a varios por día, con seguridad.',
  'services.s5.t': 'Seguridad en la nube',
  'services.s5.d':
    'Accesos de mínimo privilegio, redes endurecidas y reducción continua de hallazgos, liderado por un arquitecto con Security Specialty de AWS.',
  'services.mode':
    'Trabajamos como una extensión de tu equipo: proyectos o servicios recurrentes.',

  // Problem
  'problem.eyebrow': 'El problema',
  'problem.title': '¿Sabías que podrías estar pagando hasta un 60% de más en cloud sin saberlo?',
  'problem.p1': 'Muchas empresas crecen sobre infraestructura cloud que funciona, pero no necesariamente está optimizada.',
  'problem.p2': 'Con el tiempo aparecen recursos sobredimensionados, configuraciones costosas, riesgos de seguridad y decisiones técnicas que nunca se volvieron a revisar.',
  'problem.result.label': 'El resultado',
  'problem.result.text': 'Una factura cloud que crece, servicios que pueden volverse inestables y equipos que empiezan a resolver problemas de infraestructura sobre la marcha.',

  // Assessment
  'assess.eyebrow': 'Sin costo, sin compromiso',
  'assess.title': 'Cloud Optimization Assessment',
  'assess.free': 'gratis',
  'assess.body':
    'Un arquitecto senior revisa tu setup en AWS, Azure o GCP y te entrega un informe claro: dónde se fuga el dinero, dónde se rompe la estabilidad y qué conviene resolver primero.',
  'assess.p1': 'Análisis de costos y desperdicio',
  'assess.p2': 'Revisión de estabilidad y escalado',
  'assess.p3': 'Quick-scan de seguridad',
  'assess.cta': 'Pedí tu assessment gratis',

  // Cases
  'cases.eyebrow': 'Casos de éxito',
  'cases.title': 'Infraestructura en producción',
  'cases.sub': 'Plataformas reales, carga real.',
  'cases.visit': 'Visitar sitio',
  'cases.soon': 'Caso detallado muy pronto',
  'cases.stack': 'Stack',

  'cases.stabled.tag': 'Fintech · pagos cross-border',
  'cases.stabled.desc':
    'Stabled mueve dinero entre países en segundos usando USDC, liquidando a una fracción de las comisiones bancarias tradicionales. Construimos infraestructura de grado fintech, capaz de mover valor en el instante en que llega la transacción.',

  'cases.tradeprentice.tag': 'SaaS · educación en trading',
  'cases.tradeprentice.desc':
    'Tradeprentice es una plataforma en vivo donde los traders aprenden y demuestran su edge. Operamos su ambiente de producción para que las sesiones sigan rápidas y disponibles, incluso en los picos del horario de mercado.',

  'cases.muchticket.tag': 'Ticketing · alta concurrencia',
  'cases.muchticket.desc':
    'Muchticket vende entradas para eventos en Latinoamérica y Europa, con colas virtuales que aguantan cuando cien mil fans tocan "comprar" al mismo tiempo. Mantenemos esa infraestructura de pie en cada salida a la venta.',

  'cases.pgsa.tag': 'Escritorios remotos',
  'cases.pgsa.desc':
    'PGSA migró toda su plantilla a escritorios en la nube con AWS Workspaces, eliminando la infraestructura física de desktops y habilitando acceso remoto seguro desde cualquier dispositivo.',

  'cases.read': 'Leer caso de éxito',

  // Partnerships
  'partners.eyebrow': 'Por qué confían en nosotros',
  'partners.title': 'Respaldados por los partnerships que importan',
  'partners.tdsynnex.t': 'Partner de TD SYNNEX',
  'partners.tdsynnex.d':
    'Gracias a nuestro partnership con TD SYNNEX desbloqueamos beneficios comerciales y ventajas de precio en los principales proveedores de nube, y te los trasladamos.',
  'partners.aws.t': 'AWS Partner',
  'partners.aws.d':
    'Como AWS Partner estamos habilitados para diseñar y operar proyectos en producción sobre AWS, la garantía que buscan los equipos que ya trabajan en AWS.',
  'partners.cert.t': 'Certificaciones AWS',
  'partners.cert.d':
    'Cada certificación es evidencia concreta de que quien diseña tu infraestructura sabe lo que hace. No es marketing: es la diferencia entre opinar y saber.',
  'certs.clf.t': 'Cloud Practitioner',
  'certs.clf.d': 'Dominio de los fundamentos de AWS: servicios core, modelo de responsabilidad compartida y buenas prácticas de arquitectura.',
  'certs.saa.t': 'Solutions Architect Associate',
  'certs.saa.d': 'Diseño de arquitecturas seguras, resilientes y eficientes en costo. El certificado de referencia para quienes construyen sobre AWS.',
  'certs.sap.t': 'Solutions Architect Professional',
  'certs.sap.d': 'El nivel más exigente de arquitectura en AWS: migraciones complejas, estrategias multi-account y optimización a escala.',
  'certs.scs.t': 'Security Specialty',
  'certs.scs.d': 'Especialización en seguridad de datos, IAM, infraestructura y respuesta a incidentes. La cert que importa cuando la seguridad no es negociable.',

  // Cloud providers
  'clouds.eyebrow': 'Agnósticos de proveedor',
  'clouds.title': 'Trabajamos con las 3 nubes principales',
  'clouds.sub': 'AWS, Azure y Google Cloud, elegidas según tu workload y no al revés.',

  // Founder
  'founder.eyebrow': 'Founder',
  'founder.name': 'Ariel Molina',
  'founder.role': 'Founder · Solutions Architect, AWS Security Specialty',
  'founder.bio1':
    'Ingeniero en Informática y Solutions Architect certificado por AWS con una Security Specialty, Ariel lleva más de ocho años entre sysadmin, desarrollo de software, DevOps y SRE, el camino completo desde mantener servidores vivos hasta diseñar plataformas que se mantienen vivas solas.',
  'founder.bio2':
    'Esa amplitud es justamente el punto: Pluralty está liderada por alguien que estuvo de todos los lados del incidente, así que la arquitectura que proponemos es la que querríamos que nos despierte a nosotros.',
  'founder.cb.t': 'AWS Community Builder · Containers',
  'founder.cb.d':
    'AWS reconoce a Ariel como Community Builder en la categoría Containers, un programa para profesionales que comparten conocimiento y dan forma al ecosistema de ECS, EKS y contenedores. Significa que nuestra experiencia en contenedores está avalada por la propia AWS.',
  'founder.social': 'Seguí a Ariel',

  // Contact
  'contact.eyebrow': 'Empezá acá',
  'contact.title': 'Pedí tu Cloud Optimization Assessment gratis',
  'contact.sub':
    'Contanos un poco sobre tu setup. Un arquitecto senior te responde dentro de las 24 horas, sin guion de ventas.',
  'contact.f.name': 'Nombre',
  'contact.f.email': 'Email de trabajo',
  'contact.f.company': 'Empresa',
  'contact.f.spend': 'Gasto cloud mensual',
  'contact.f.message': '¿Qué te gustaría mejorar?',
  'contact.spend.0': 'Elegí un rango',
  'contact.spend.1': 'Menos de US$1k',
  'contact.spend.2': 'US$1k - US$5k',
  'contact.spend.3': 'US$5k - US$20k',
  'contact.spend.4': 'Más de US$20k',
  'contact.spend.5': 'Todavía no sé',
  'contact.submit': 'Pedir assessment gratis',
  'contact.sending': 'Enviando...',
  'contact.success.t': 'Solicitud recibida',
  'contact.success.d': 'Gracias. Un arquitecto senior te va a contactar dentro de las 24 horas.',
  'contact.error': 'Algo salió mal. Probá de nuevo más tarde.',
  'contact.err.name': 'Ingresá tu nombre.',
  'contact.err.email': 'Ingresá un email de trabajo válido.',
  'contact.err.message': 'Agregá un mensaje breve.',
  'contact.privacy': 'Usamos tus datos solo para preparar tu assessment. Nunca spam.',

  // Footer
  'footer.tagline': 'Consultora cloud para empresas que quieren crecer sin sorpresas.',
  'footer.nav': 'Navegá',
  'footer.connect': 'Conectá',
  'footer.portal': 'Portal Clientes',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.built': 'Partner certificado de AWS · AWS, Azure y GCP',

  // Language
  'lang.label': 'Idioma',

  // Case study — Stabled
  'case.stabled.meta.title': 'Stabled · Infraestructura cloud de grado fintech — Pluralty',
  'case.stabled.meta.desc':
    'Cómo Pluralty construyó la infraestructura de producción de Stabled, una plataforma de pagos cross-border con USDC.',
  'cases.back': '← Volver a casos de éxito',
  'case.stabled.tag': 'Fintech · Pagos cross-border',
  'case.stabled.tagline': 'Moviendo dinero entre países en segundos, a una fracción de las comisiones bancarias.',
  'case.stabled.challenge.label': 'El desafío',
  'case.stabled.challenge.title': 'Construir infraestructura de pagos que genere confianza',
  'case.stabled.challenge.p1':
    'Stabled necesitaba una plataforma capaz de liquidar transacciones USDC cross-border en el instante en que llegaban, con la confiabilidad y postura de seguridad que exige una fintech. La infraestructura tenía que ser auditable, multi-ambiente y construida desde el día uno como código.',
  'case.stabled.challenge.p2':
    'El equipo se movía rápido, pero necesitaban una base que pudiera crecer sin ser reescrita: que separara los concerns a nivel de cuenta AWS y les diera a los desarrolladores caminos de despliegue claros desde cada commit.',
  'case.stabled.solution.label': 'La solución',
  'case.stabled.solution.title': 'Arquitectura multi-cuenta para aislamiento y velocidad',
  'case.stabled.solution.p1':
    'Estructuramos Stabled bajo AWS Organizations desde el día uno, dándole a producción su propia cuenta aislada de staging y tooling. Una mala configuración en un ambiente no productivo literalmente no puede alcanzar producción: el radio de impacto queda acotado por el límite de la cuenta.',
  'case.stabled.solution.p2':
    'Tres microservicios independientes — la landing page, la app web y el backend API — corren cada uno como un servicio ECS Fargate separado, escalando de forma independiente detrás de un Application Load Balancer unificado. Aurora PostgreSQL Serverless v2 maneja el estado persistente, escalando automáticamente la capacidad de cómputo de la base de datos según la demanda sin necesidad de redimensionamiento manual. Cada recurso está definido en Terraform, versionado en Git y desplegable sin acceso manual a la consola.',
  'case.stabled.solution.p3':
    'GitHub Actions conduce el CI/CD: en cada push a la rama main, las imágenes se construyen, testean, suben a ECR y se despliegan en ECS con un rolling update sin downtime. El pipeline también aplica cambios de Terraform tras la aprobación del plan, para que el drift de infraestructura se detecte antes de llegar a producción.',
  'case.stabled.results.label': 'Resultados',
  'case.stabled.results.title': 'Production-grade desde el inicio',
  'case.stabled.r1.v': '99.9%',
  'case.stabled.r1.l': 'SLA de disponibilidad',
  'case.stabled.r2.v': '<2s',
  'case.stabled.r2.l': 'latencia de liquidación',
  'case.stabled.r3.v': '0',
  'case.stabled.r3.l': 'incidentes en producción al lanzar',
  'case.stabled.r4.v': '100%',
  'case.stabled.r4.l': 'infraestructura como código',
  'case.stabled.cta.label': '¿Querés lo mismo para tu plataforma?',
  'case.stabled.cta.title': 'Hablemos de tu infraestructura',
  'case.stabled.cta.sub':
    'Ya sea que estés arrancando de cero o modernizando lo que tenés, te decimos exactamente qué construir y en qué orden.',
  'case.stabled.cta.btn': 'Pedí tu assessment gratis',

  // Shared case study labels
  'case.stack.eyebrow': 'Stack técnico',
  'case.stack.title': 'Herramientas utilizadas',
  'case.pgsa.stack.title': 'Servicios desplegados',

  // Stabled testimonial
  'case.stabled.quote':
    '"Con Pluralty desplegamos la infraestructura de nuestra plataforma de forma ordenada, siguiendo las mejores prácticas de la nube desde el día uno. La estructura multi-cuenta nos dio la confianza para movernos rápido sin romper nada."',
  'case.stabled.quote.name': 'Nikolaus Seiguer',
  'case.stabled.quote.role': 'CEO, Stabled',

  // Stabled arch caption
  'case.stabled.arch.caption': 'Cada cuenta AWS es un límite de radio de impacto — producción no puede ser afectada por accidentes en staging.',

  // Tradeprentice arch labels
  'case.tradeprentice.via': 'A través de',
  'case.tradeprentice.arch.dev.note': 'Deploy automático en cada push a develop',
  'case.tradeprentice.arch.prod.note': 'Requiere aprobación manual',
  'case.tradeprentice.arch.caption': 'Cada cuenta AWS es un límite de radio de impacto — actividad en dev no puede tocar producción, facturación ni IAM en la cuenta de prod.',

  // Muchticket arch caption
  'case.muchticket.arch.caption': 'Prometheus extrae métricas de cada nodo. BlackBox sondea los endpoints desde afuera. Las alertas se disparan antes de que cualquier usuario final note la degradación.',

  // PGSA arch caption
  'case.pgsa.arch.caption': 'Los 15 escritorios están unidos al dominio y gestionados de forma centralizada: sin VPN, sin hardware on-site, sin parcheo manual. Cada usuario se conecta desde cualquier dispositivo con sus credenciales habituales.',

  // Case study — Tradeprentice
  'case.tradeprentice.meta.title': 'Tradeprentice · AWS multi-cuenta para SaaS — Pluralty',
  'case.tradeprentice.meta.desc':
    'Cómo Pluralty construyó infraestructura AWS multi-cuenta de grado productivo para Tradeprentice, una plataforma SaaS de educación en trading.',
  'case.tradeprentice.tag': 'SaaS · Educación en trading',
  'case.tradeprentice.tagline': 'Infraestructura de producción para una plataforma de trading en vivo — entregada en semanas.',
  'case.tradeprentice.challenge.label': 'El desafío',
  'case.tradeprentice.challenge.title': 'Del ambiente de desarrollo a una plataforma production-grade',
  'case.tradeprentice.challenge.p1':
    'Tradeprentice ya tenía un ambiente de desarrollo funcionando, pero pasar a producción implicaba resolver disponibilidad real: redundancia multi-AZ, autoescalado en los picos del horario de mercado y deploys sin downtime para una audiencia activa de traders.',
  'case.tradeprentice.challenge.p2':
    'SpinLab, el equipo de software detrás de la plataforma, necesitaba una arquitectura cloud que pudiera crecer sin ser rediseñada: con aislamiento total entre dev y prod, y un pipeline de CI/CD que se adaptara exactamente a su flujo de trabajo en Git.',
  'case.tradeprentice.solution.label': 'La solución',
  'case.tradeprentice.solution.title': 'AWS Organizations multi-cuenta con pipeline de CI/CD completamente automatizado',
  'case.tradeprentice.solution.p1':
    'Estructuramos la plataforma bajo AWS Organizations desde el día uno, con DEV y PRD en cuentas separadas dentro de un Workload OU dedicado. Cada ambiente tiene su propio límite de facturación, scope de IAM y perímetro de seguridad. Una mala configuración en dev literalmente no puede alcanzar producción.',
  'case.tradeprentice.solution.p2':
    'Cinco servicios contenerizados independientes corren en ECS Fargate: frontend, backend API, un servidor WebSocket dedicado para señales de trading y feeds de precios en tiempo real, un backoffice y un runner de tareas programadas — cada uno desplegado y escalado de forma independiente, sin gestión de servidores. RDS PostgreSQL Multi-AZ provee failover automático. ElastiCache Redis maneja el estado de sesiones y caché de queries, manteniendo los tiempos de respuesta rápidos incluso en los picos del mercado.',
  'case.tradeprentice.solution.p3':
    'GitHub Actions conduce el CI/CD con OIDC — sin credenciales AWS de larga duración en ningún lugar del pipeline. Cada commit a develop se despliega automáticamente al ambiente de dev. Producción requiere aprobación manual. Terraform gestiona toda la infraestructura en dos repositorios, con estado remoto en S3 y bloqueo con DynamoDB.',
  'case.tradeprentice.results.label': 'Resultados',
  'case.tradeprentice.results.title': 'De dev a producción en semanas, no meses',
  'case.tradeprentice.r1.v': '100%',
  'case.tradeprentice.r1.l': 'infraestructura como código',
  'case.tradeprentice.r2.v': '2',
  'case.tradeprentice.r2.l': 'ambientes completamente aislados',
  'case.tradeprentice.r3.v': '0',
  'case.tradeprentice.r3.l': 'credenciales de larga duración',
  'case.tradeprentice.r4.v': 'Multi-AZ',
  'case.tradeprentice.r4.l': 'failover automático de DB',
  'case.tradeprentice.quote':
    '"Trabajar con Pluralty fue un punto de inflexión. Se hicieron cargo de toda la capa cloud y nos devolvieron una plataforma en la que podíamos confiar en producción desde el primer día."',
  'case.tradeprentice.quote.name': 'Federico Perez',
  'case.tradeprentice.quote.role': 'CEO, SpinLab',
  'case.tradeprentice.cta.label': '¿Construyendo algo parecido?',
  'case.tradeprentice.cta.title': 'Hablemos de tu plataforma',
  'case.tradeprentice.cta.sub':
    'Ya sea que estés arrancando de cero o llevando una app existente a producción, diseñamos la infraestructura alrededor de tus requerimientos reales.',
  'case.tradeprentice.cta.btn': 'Pedí tu assessment gratis',

  // Case study — Muchticket
  'case.muchticket.meta.title': 'Muchticket · Observabilidad para ticketing de alta concurrencia — Pluralty',
  'case.muchticket.meta.desc':
    'Cómo Pluralty construyó un stack centralizado de monitoreo y alertas para Muchticket, una plataforma de venta de entradas de alta concurrencia.',
  'case.muchticket.tag': 'Ticketing · Observabilidad',
  'case.muchticket.tagline': 'Visibilidad total sobre una plataforma de ticketing de alta concurrencia — antes de que cualquier usuario note un problema.',
  'case.muchticket.challenge.label': 'El desafío',
  'case.muchticket.challenge.title': 'Puntos ciegos justo en los momentos que más importan',
  'case.muchticket.challenge.p1':
    'Muchticket vende entradas para eventos en Latinoamérica y Europa, con colas virtuales que deben aguantar cuando cien mil fans tocan "comprar" al mismo segundo. Su infraestructura on-premise no tenía monitoreo centralizado, ni alertas estructuradas, ni visibilidad sobre el estado de los servidores hasta que algo se rompía.',
  'case.muchticket.challenge.p2':
    'El equipo de IT se enteraba de los incidentes por quejas de usuarios, no por métricas. Para entonces, las entradas ya estaban perdidas y la salida a la venta ya estaba en caos. Necesitaban un sistema que detectara problemas antes de que cualquier usuario lo notara, y alertara a las personas correctas en segundos.',
  'case.muchticket.solution.label': 'La solución',
  'case.muchticket.solution.title': 'Un stack centralizado de observabilidad con alertas instantáneas',
  'case.muchticket.solution.p1':
    'Desplegamos Prometheus como motor central de métricas, scrapeando cada servidor, worker de cola y proceso en intervalos fijos. Esto le da al equipo un registro continuo de toda la infraestructura. Grafana se ubica encima, convirtiendo esas métricas en dashboards en tiempo real y vistas históricas: un panel único para todo el ambiente.',
  'case.muchticket.solution.p2':
    'BlackBox Exporter sondea cada endpoint HTTP público desde afuera, midiendo uptime y latencia de respuesta desde la perspectiva que importa: la del usuario final. Si un servicio se degrada o cae, BlackBox lo detecta en el próximo ciclo de scraping, antes de que cualquier comprador de entradas lo note.',
  'case.muchticket.solution.p3':
    'Un bot de Telegram entrega alertas estructuradas al canal de on-call en segundos. Cada mensaje incluye el host afectado, el nombre de la métrica, el valor actual y el umbral superado: exactamente el contexto necesario para actuar de inmediato, sin hurgar en dashboards mientras una salida a la venta se incendia.',
  'case.muchticket.results.label': 'Resultados',
  'case.muchticket.results.title': 'De sin visibilidad a totalmente instrumentado',
  'case.muchticket.r1.v': '100%',
  'case.muchticket.r1.l': 'cobertura de servidores',
  'case.muchticket.r2.v': '<30s',
  'case.muchticket.r2.l': 'tiempo de entrega de alertas',
  'case.muchticket.r3.v': '0',
  'case.muchticket.r3.l': 'incidentes no detectados',
  'case.muchticket.r4.v': '24/7',
  'case.muchticket.r4.l': 'monitoreo continuo',
  'case.muchticket.quote':
    '"Pluralty transformó la forma en que operamos. Antes nos enterábamos de los incidentes por las quejas de los usuarios. Ahora nuestro sistema nos avisa antes de que nadie se dé cuenta. Ese cambio solo ya valió cada peso invertido."',
  'case.muchticket.quote.name': 'Luis María Springolo',
  'case.muchticket.quote.role': 'Coordinador IT / SRE, Muchticket',
  'case.muchticket.cta.label': '¿Volando a ciegas sobre tu infraestructura?',
  'case.muchticket.cta.title': 'Arranquemos con un assessment gratis',
  'case.muchticket.cta.sub':
    'Mapeamos tus puntos ciegos de monitoreo y te mostramos exactamente qué instrumentar primero.',
  'case.muchticket.cta.btn': 'Pedí tu assessment gratis',

  // Case study — PGSA
  'case.pgsa.meta.title': 'PGSA · Migración a escritorios cloud con AWS WorkSpaces — Pluralty',
  'case.pgsa.meta.desc':
    'Cómo Pluralty migró a toda la plantilla de PGSA a escritorios en la nube con AWS WorkSpaces, eliminando la infraestructura física de desktops.',
  'case.pgsa.tag': 'Escritorios cloud · AWS WorkSpaces',
  'case.pgsa.tagline': 'De desktops físicos atados a una oficina a workstations cloud completamente gestionadas, accesibles desde cualquier lugar.',
  'case.pgsa.challenge.label': 'El desafío',
  'case.pgsa.challenge.title': 'Una plantilla atada al hardware físico',
  'case.pgsa.challenge.p1':
    'El equipo de PGSA dependía completamente de desktops físicos fijos a una sola oficina. El trabajo remoto simplemente no era posible. El equipo de IT destinaba tiempo significativo al mantenimiento de hardware, parcheo de Windows y gestión del Active Directory local, esfuerzo operativo sin valor de negocio directo.',
  'case.pgsa.challenge.p2':
    'A medida que la empresa crecía, escalar la flota de desktops implicaba comprar hardware, esperar la entrega y dedicar horas a configurar cada máquina. Cada empleado nuevo sumaba costo y demora antes de poder arrancar. Necesitaban un modelo donde aprovisionar un usuario nuevo fuera cuestión de minutos, no de días.',
  'case.pgsa.solution.label': 'La solución',
  'case.pgsa.solution.title': 'Workstations cloud completamente gestionadas en AWS WorkSpaces',
  'case.pgsa.solution.p1':
    'Desplegamos 16 Amazon WorkSpaces, cada uno corriendo un escritorio Windows completo sobre hardware gestionado por AWS, pre-cargado con una imagen corporativa personalizada que incluye todo el software de negocio que el equipo ya usaba. Sin máquinas físicas que comprar, configurar ni reemplazar. Las WorkSpaces corren en modo AUTO_STOP: cada escritorio se pausa automáticamente cuando el usuario se desconecta y retoma en segundos al volver a conectarse, eliminando completamente los costos de cómputo en reposo.',
  'case.pgsa.solution.p2':
    'La identidad está gestionada a través de AWS Directory Service, proveyendo escritorios unidos al dominio y gestión centralizada de credenciales con la autenticación que el equipo ya conocía. Cada workspace está unido al dominio, lo que significa que el equipo de IT puede aplicar políticas y gestionar accesos desde un único panel de control, sin tocar máquinas individuales ni visitar la oficina.',
  'case.pgsa.solution.p3':
    'AWS Backup ejecuta snapshots automáticos diarios con una política de retención de 365 días — un año completo de puntos de recuperación disponibles en cualquier momento, sin intervención manual. AWS Budgets envía alertas antes de que el gasto supere los umbrales definidos, haciendo los costos cloud predecibles. Todo el ambiente es monitoreado via CloudWatch y gestionado mediante AWS Systems Manager, sin VPN ni visitas on-site para la administración diaria.',
  'case.pgsa.results.label': 'Resultados',
  'case.pgsa.results.title': 'Una oficina completa, en cualquier lugar',
  'case.pgsa.r1.v': '16',
  'case.pgsa.r1.l': 'workstations cloud',
  'case.pgsa.r2.v': '100%',
  'case.pgsa.r2.l': 'acceso remoto habilitado',
  'case.pgsa.r3.v': '0',
  'case.pgsa.r3.l': 'hardware que mantener',
  'case.pgsa.r4.v': '365 días',
  'case.pgsa.r4.l': 'retención de backups automatizados',
  'case.pgsa.cta.label': '¿Llevás tu equipo a la nube?',
  'case.pgsa.cta.title': 'Diseñemos tu espacio de trabajo cloud',
  'case.pgsa.cta.sub':
    'Desde la habilitación del trabajo remoto hasta la virtualización total del escritorio, construimos exactamente lo que tu equipo necesita.',
  'case.pgsa.cta.btn': 'Pedí tu assessment gratis',

  // ── Editorial layout — shared labels ──
  'case.arch.eyebrow': 'Arquitectura',
  'case.facts.client': 'Cliente',
  'case.facts.industry': 'Industria',
  'case.facts.services': 'Servicios',
  'case.facts.platforms': 'Plataformas',
  'case.nav.eyebrow': 'Más trabajo',
  'case.nav.prev': 'Caso anterior',
  'case.nav.next': 'Caso siguiente',
  'case.pgsa.badge': 'Sin sitio web público · Privacidad protegida',

  // ── Project facts — Stabled ──
  'case.stabled.facts.client': 'Stabled',
  'case.stabled.facts.industry': 'Fintech · Pagos cross-border',
  'case.stabled.facts.services': 'Arquitectura cloud · DevOps · IaC',
  'case.stabled.facts.platforms': 'AWS Organizations · ECS Fargate · Aurora Serverless v2',

  // ── Project facts — Tradeprentice ──
  'case.tradeprentice.facts.client': 'SpinLab',
  'case.tradeprentice.facts.industry': 'SaaS · Educación en trading',
  'case.tradeprentice.facts.services': 'Arquitectura cloud · DevOps · CI/CD',
  'case.tradeprentice.facts.platforms': 'AWS Organizations · ECS Fargate · RDS Multi-AZ',

  // ── Project facts — Muchticket ──
  'case.muchticket.facts.client': 'Muchticket',
  'case.muchticket.facts.industry': 'Ticketing · Alta concurrencia',
  'case.muchticket.facts.services': 'Observabilidad · SRE · Alertas',
  'case.muchticket.facts.platforms': 'Prometheus · Grafana · BlackBox · Telegram',

  // ── Project facts — PGSA ──
  'case.pgsa.facts.client': 'PGSA (cliente privado)',
  'case.pgsa.facts.industry': 'Escritorios cloud',
  'case.pgsa.facts.services': 'Migración · Workspaces gestionadas',
  'case.pgsa.facts.platforms': 'AWS WorkSpaces · Directory Service · AWS Backup',
};

export default es;
