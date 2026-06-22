// English dictionary (reference locale + SEO canonical). Flat dot-keys so the
// client-side swap is a trivial lookup. Values may contain minimal trusted HTML.
const en: Record<string, string> = {
  // Meta
  'meta.title': 'Pluralty · Cloud consultancy for growing companies',
  'meta.desc':
    'We help growing companies optimize cost, stability and performance in the cloud. AWS certified partner across AWS, Azure and GCP.',

  // Nav
  'nav.services': 'Services',
  'nav.cases': 'Case studies',
  'nav.founder': 'Founder',
  'nav.contact': 'Contact',
  'nav.portal': 'Client Portal',
  'nav.cta': 'Free assessment',
  'nav.menu': 'Menu',

  // Hero
  'hero.badge': 'AWS Certified Partner',
  'hero.title': 'Scale your cloud without overspending or risking your services',
  'hero.sub':
    'We help growing companies optimize cost, stability and performance in the cloud, so you operate with more control and less stress.',
  'hero.cta1': 'Get your free assessment',
  'hero.cta2': 'See case studies',

  // Trust strip
  'trust.m1.v': '99%',
  'trust.m1.l': 'platform availability',
  'trust.m2.v': '40-60%',
  'trust.m2.l': 'lower cloud cost',
  'trust.m3.v': '10x',
  'trust.m3.l': 'deploy frequency',
  'trust.m4.v': '−80%',
  'trust.m4.l': 'security findings',

  // Services
  'services.eyebrow': 'What we do',
  'services.title': 'Engineering that keeps your cloud fast, stable and lean',
  'services.sub':
    'From a single overloaded server to a multi-account platform, we take ownership of the parts that keep you up at night.',
  'services.s1.t': 'Cloud optimization',
  'services.s1.d':
    'We tune compute, storage and networking so your platform handles growth without paying for headroom you never use.',
  'services.s2.t': 'FinOps & cost control',
  'services.s2.d':
    'Every solution is designed with the bill in mind. We cut waste and make cloud spend predictable, often by 40 to 60 percent.',
  'services.s3.t': 'Infrastructure modernization',
  'services.s3.d':
    'Outdated servers become containerized, auto-scaling infrastructure, defined as code and built to recover on its own.',
  'services.s4.t': 'DevOps & SRE',
  'services.s4.d':
    'CI/CD pipelines, observability and on-call discipline that take you from one deploy a week to many a day, safely.',
  'services.s5.t': 'Cloud security',
  'services.s5.d':
    'Least-privilege access, hardened networks and continuous findings reduction, led by an AWS Security Specialty architect.',
  'services.mode':
    'We work as an extension of your team: monthly retainer or focused project, always with documentation you keep.',

  // Assessment
  'assess.eyebrow': 'No cost, no commitment',
  'assess.title': 'Cloud Optimization Assessment',
  'assess.free': 'free',
  'assess.body':
    'A senior architect reviews your AWS, Azure or GCP setup and hands you a clear report: where money leaks, where stability breaks, and what to fix first.',
  'assess.p1': 'Cost and waste analysis',
  'assess.p2': 'Stability and scaling review',
  'assess.p3': 'Security quick-scan',
  'assess.cta': 'Request your free assessment',

  // Cases
  'cases.eyebrow': 'Case studies',
  'cases.title': 'Production infrastructure we run every day',
  'cases.sub':
    'Real platforms, real load. Each one runs on infrastructure as code, under its own AWS Organizations account.',
  'cases.visit': 'Visit site',
  'cases.soon': 'Detailed case coming soon',
  'cases.stack': 'Stack',

  'cases.stabled.tag': 'Fintech · cross-border payments',
  'cases.stabled.desc':
    'Stabled moves money across borders in seconds using USDC, settling at a fraction of traditional bank fees. We built fintech-grade infrastructure able to move value the moment a transaction lands.',

  'cases.tradeprentice.tag': 'SaaS · trading education',
  'cases.tradeprentice.desc':
    'Tradeprentice is a live platform where traders learn and prove their edge. We run its production environment so sessions stay fast and available, even during market-hour spikes.',

  'cases.muchticket.tag': 'Ticketing · high concurrency',
  'cases.muchticket.desc':
    'Muchticket sells tickets for events across Latin America and Europe, with virtual queues that hold up when a hundred thousand fans hit "buy" at once. We keep that infrastructure standing through every on-sale.',

  // Partnerships
  'partners.eyebrow': 'Why teams trust us',
  'partners.title': 'Backed by the partnerships that matter',
  'partners.tdsynnex.t': 'TD SYNNEX partner',
  'partners.tdsynnex.d':
    'Through our TD SYNNEX partnership we unlock commercial benefits and pricing advantages across the major cloud providers, and pass them on to you.',
  'partners.aws.t': 'AWS Partner',
  'partners.aws.d':
    'As an AWS Partner we are cleared to design and run production projects on AWS, the assurance teams already on AWS look for.',
  'partners.cert.t': 'AWS Certified',
  'partners.cert.d':
    'A certified company with Solutions Architect and Security Specialty credentials behind every architecture we ship.',

  // Cloud providers
  'clouds.eyebrow': 'Provider agnostic',
  'clouds.title': 'We work across the three major clouds',
  'clouds.sub': 'AWS, Azure and Google Cloud, chosen for your workload and not the other way around.',

  // Founder
  'founder.eyebrow': 'Founder',
  'founder.name': 'Ariel Molina',
  'founder.role': 'Founder · Solutions Architect, AWS Security Specialty',
  'founder.bio1':
    'Informatics Engineer and AWS-certified Solutions Architect with a Security Specialty, Ariel has spent more than eight years across sysadmin, software development, DevOps and SRE work, the full path from keeping servers alive to designing platforms that keep themselves alive.',
  'founder.bio2':
    'That range is the point: Pluralty is led by someone who has been on every side of the incident, so the architecture we propose is the one we would want to be paged for.',
  'founder.cb.t': 'AWS Community Builder · Containers',
  'founder.cb.d':
    'AWS recognizes Ariel as a Community Builder in the Containers category, a program for practitioners who actively share knowledge and shape the ECS, EKS and container ecosystem. It means our container expertise is vouched for by AWS itself.',
  'founder.social': 'Follow Ariel',

  // Contact
  'contact.eyebrow': 'Start here',
  'contact.title': 'Request your free Cloud Optimization Assessment',
  'contact.sub':
    'Tell us a little about your setup. A senior architect gets back to you within 24 hours, no sales script.',
  'contact.f.name': 'Name',
  'contact.f.email': 'Work email',
  'contact.f.company': 'Company',
  'contact.f.spend': 'Monthly cloud spend',
  'contact.f.message': 'What would you like to improve?',
  'contact.spend.0': 'Select a range',
  'contact.spend.1': 'Under US$1k',
  'contact.spend.2': 'US$1k - US$5k',
  'contact.spend.3': 'US$5k - US$20k',
  'contact.spend.4': 'Over US$20k',
  'contact.spend.5': 'Not sure yet',
  'contact.submit': 'Request free assessment',
  'contact.sending': 'Sending...',
  'contact.success.t': 'Request received',
  'contact.success.d': 'Thanks. A senior architect will reach out within 24 hours.',
  'contact.error': 'Something went wrong. Please try again later.',
  'contact.err.name': 'Please enter your name.',
  'contact.err.email': 'Please enter a valid work email.',
  'contact.err.message': 'Please add a short message.',
  'contact.privacy': 'We only use your details to prepare your assessment. No spam, ever.',

  // Footer
  'footer.tagline': 'Cloud consultancy for companies that want to grow without surprises.',
  'footer.nav': 'Navigate',
  'footer.connect': 'Connect',
  'footer.portal': 'Client Portal',
  'footer.rights': 'All rights reserved.',
  'footer.built': 'AWS Certified Partner · AWS, Azure & GCP',

  // Language
  'lang.label': 'Language',
};

export default en;
