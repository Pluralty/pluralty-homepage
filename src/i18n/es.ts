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
    'Los workloads de la aplicación corren en ECS Fargate detrás de un Application Load Balancer, permitiendo al equipo desplegar imágenes de contenedores sin administrar instancias EC2. RDS maneja el estado persistente en una subred VPC sin exposición pública. Cada recurso está definido en Terraform, versionado en Git y desplegable sin acceso manual a la consola.',
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
};

export default es;
