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

  // Problem
  'problem.eyebrow': 'The problem',
  'problem.title': 'Did you know you could be overpaying for cloud by up to 60% without realizing it?',
  'problem.p1': 'Many companies grow on cloud infrastructure that works — but isn\'t necessarily optimized.',
  'problem.p2': 'Over time, oversized resources appear, costly configurations accumulate, security risks build up, and technical decisions are never revisited.',
  'problem.result.label': 'The result',
  'problem.result.text': 'A growing cloud bill, services that can become unstable, and teams starting to solve infrastructure problems on the fly.',

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

  'cases.pgsa.tag': 'Remote workspaces',
  'cases.pgsa.desc':
    'PGSA migrated its entire workforce to cloud-hosted workstations using AWS Workspaces, eliminating on-premise desktop infrastructure and enabling secure remote access from any device, anywhere.',

  'cases.read': 'Read case study',

  // Partnerships
  'partners.eyebrow': 'Why teams trust us',
  'partners.title': 'Backed by the partnerships that matter',
  'partners.tdsynnex.t': 'TD SYNNEX partner',
  'partners.tdsynnex.d':
    'Through our TD SYNNEX partnership we unlock commercial benefits and pricing advantages across the major cloud providers, and pass them on to you.',
  'partners.aws.t': 'AWS Partner',
  'partners.aws.d':
    'As an AWS Partner we are cleared to design and run production projects on AWS, the assurance teams already on AWS look for.',
  'partners.cert.t': 'AWS Certifications',
  'partners.cert.d':
    'Each certification is concrete evidence that the person designing your infrastructure knows what they are doing — not a marketing claim, but a tested credential.',
  'certs.clf.t': 'Cloud Practitioner',
  'certs.clf.d': 'Mastery of AWS fundamentals: core services, shared responsibility model and architectural best practices.',
  'certs.saa.t': 'Solutions Architect Associate',
  'certs.saa.d': 'Design of secure, resilient and cost-efficient architectures. The reference certification for teams building on AWS.',
  'certs.sap.t': 'Solutions Architect Professional',
  'certs.sap.d': 'The most demanding AWS architecture credential: complex migrations, multi-account strategies and optimisation at scale.',
  'certs.scs.t': 'Security Specialty',
  'certs.scs.d': 'Specialisation in data security, IAM, infrastructure and incident response. The cert that matters when security is non-negotiable.',

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

  // Case study — Stabled
  'case.stabled.meta.title': 'Stabled · Fintech-grade cloud infrastructure — Pluralty',
  'case.stabled.meta.desc':
    'How Pluralty built production infrastructure for Stabled, a cross-border payments platform using USDC.',
  'cases.back': '← Back to case studies',
  'case.stabled.tag': 'Fintech · Cross-border payments',
  'case.stabled.tagline': 'Moving money across borders in seconds — at a fraction of bank fees.',
  'case.stabled.challenge.label': 'The challenge',
  'case.stabled.challenge.title': 'Building payments infrastructure that earns trust',
  'case.stabled.challenge.p1':
    'Stabled needed a platform capable of settling cross-border USDC transactions the moment they landed — with the reliability and security posture that a fintech demands. The infrastructure had to be auditable, multi-environment, and built from day one as infrastructure as code.',
  'case.stabled.challenge.p2':
    'The team was moving fast, but they needed a foundation that could grow without being rewritten — one that separated concerns at the AWS account level, and gave developers clear deployment paths from every commit.',
  'case.stabled.solution.label': 'The solution',
  'case.stabled.solution.title': 'Multi-account architecture for isolation and speed',
  'case.stabled.solution.p1':
    'We structured Stabled under AWS Organizations from day one, giving production its own account isolated from staging and tooling. A misconfiguration in a non-prod environment literally cannot reach production — the blast radius is bounded by the account boundary.',
  'case.stabled.solution.p2':
    'Application workloads run on ECS Fargate behind an Application Load Balancer, letting the team ship container images without managing EC2 instances. RDS handles persistent state in a VPC subnet with no public exposure. Every resource is defined in Terraform, versioned in Git, and deployable without manual console access.',
  'case.stabled.solution.p3':
    'GitHub Actions drives CI/CD — on every push to the main branch, images are built, tested, pushed to ECR, and deployed to ECS with a zero-downtime rolling update. The pipeline also applies Terraform changes after plan approval, so infrastructure drift is caught before it reaches production.',
  'case.stabled.results.label': 'Results',
  'case.stabled.results.title': 'Production-grade from the start',
  'case.stabled.r1.v': '99.9%',
  'case.stabled.r1.l': 'uptime SLA',
  'case.stabled.r2.v': '<2s',
  'case.stabled.r2.l': 'settlement latency',
  'case.stabled.r3.v': '0',
  'case.stabled.r3.l': 'production incidents at launch',
  'case.stabled.r4.v': '100%',
  'case.stabled.r4.l': 'infrastructure as code',
  'case.stabled.cta.label': 'Want the same for your platform?',
  'case.stabled.cta.title': 'Let\'s talk about your infrastructure',
  'case.stabled.cta.sub':
    'Whether you\'re starting fresh or modernizing an existing setup, we\'ll tell you exactly what to build and in what order.',
  'case.stabled.cta.btn': 'Get your free assessment',
};

export default en;
