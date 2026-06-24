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
    'We work as an extension of your team: projects or recurring services.',

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
  'cases.title': 'Production infrastructure',
  'cases.sub': 'Real platforms, real load.',
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

  // Stabled arch caption
  'case.stabled.arch.caption': 'Each AWS account is a blast-radius boundary — production cannot be touched by staging accidents.',

  // Tradeprentice arch labels
  'case.tradeprentice.via': 'Via',
  'case.tradeprentice.arch.dev.note': 'Auto-deploy on push to develop',
  'case.tradeprentice.arch.prod.note': 'Manual approval gate',
  'case.tradeprentice.arch.caption': 'Each AWS account is a hard blast-radius boundary — dev activity cannot touch production, billing, or IAM in the prod account.',

  // Muchticket arch caption
  'case.muchticket.arch.caption': 'Prometheus pulls metrics from every node. BlackBox probes endpoints from the outside. Alerts fire before any end user notices degradation.',

  // PGSA arch caption
  'case.pgsa.arch.caption': 'All 15 desktops are domain-joined and managed centrally — no VPN, no on-site hardware, no manual patching. Each user connects from any device with their existing credentials.',

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
    'Three independent microservices — the landing page, the customer-facing web app, and the backend API — each run as a separate ECS Fargate service, scaling independently behind a unified Application Load Balancer. Aurora PostgreSQL Serverless v2 handles persistent state, automatically scaling database compute with workload demand rather than requiring manual resizing. Every resource is defined in Terraform, versioned in Git, and deployable without manual console access.',
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

  // Shared case study labels
  'case.stack.eyebrow': 'Tech stack',
  'case.stack.title': 'Tools we used',
  'case.pgsa.stack.title': 'Services we deployed',

  // Stabled testimonial
  'case.stabled.quote':
    '"With Pluralty we deployed our platform\'s infrastructure in an organized way, following cloud best practices from day one. The multi-account structure gave us the confidence to ship fast without breaking things."',
  'case.stabled.quote.name': 'Nikolaus Seiguer',
  'case.stabled.quote.role': 'CEO, Stabled',

  // Case study — Tradeprentice
  'case.tradeprentice.meta.title': 'Tradeprentice · Multi-account AWS for SaaS — Pluralty',
  'case.tradeprentice.meta.desc':
    'How Pluralty built production-grade, multi-account AWS infrastructure for Tradeprentice, a live trading education SaaS platform.',
  'case.tradeprentice.tag': 'SaaS · Trading Education',
  'case.tradeprentice.tagline': 'Production-grade infrastructure for a live trading platform — delivered in weeks.',
  'case.tradeprentice.challenge.label': 'The challenge',
  'case.tradeprentice.challenge.title': 'From dev environment to production-grade platform',
  'case.tradeprentice.challenge.p1':
    'Tradeprentice already had a working development environment, but moving to production meant solving for real availability: multi-AZ redundancy, autoscaling during market-hour spikes, and zero-downtime deploys for a live audience of active traders.',
  'case.tradeprentice.challenge.p2':
    'SpinLab, the software team behind the platform, needed a cloud architecture that could grow without being redesigned — with full account isolation between dev and prod, and a CI/CD pipeline that matched their Git workflow exactly.',
  'case.tradeprentice.solution.label': 'The solution',
  'case.tradeprentice.solution.title': 'Multi-account AWS Organizations with full pipeline automation',
  'case.tradeprentice.solution.p1':
    'We structured the platform under AWS Organizations from day one, with DEV and PRD in separate accounts under a dedicated Workload OU. Each environment has its own billing boundary, IAM scope, and security perimeter — a misconfiguration in dev literally cannot reach production.',
  'case.tradeprentice.solution.p2':
    'Five independent containerized services run on ECS Fargate: frontend, backend API, a dedicated WebSocket server for real-time trading signals and price feeds, a backoffice portal, and a scheduled job runner — each deployed and scaled independently with zero server management. RDS PostgreSQL Multi-AZ provides automatic failover. ElastiCache Redis handles session state and query caching, keeping response times fast even during market-hour spikes.',
  'case.tradeprentice.solution.p3':
    'GitHub Actions drives CI/CD with OIDC — no long-lived AWS credentials anywhere in the pipeline. Every commit to develop auto-deploys to the dev environment. Production gates on manual approval. Terraform manages all infrastructure across two repositories, with remote state in S3 and DynamoDB table locking.',
  'case.tradeprentice.results.label': 'Results',
  'case.tradeprentice.results.title': 'Dev to production in weeks, not months',
  'case.tradeprentice.r1.v': '100%',
  'case.tradeprentice.r1.l': 'infrastructure as code',
  'case.tradeprentice.r2.v': '2',
  'case.tradeprentice.r2.l': 'fully isolated environments',
  'case.tradeprentice.r3.v': '0',
  'case.tradeprentice.r3.l': 'long-lived credentials',
  'case.tradeprentice.r4.v': 'Multi-AZ',
  'case.tradeprentice.r4.l': 'automatic DB failover',
  'case.tradeprentice.quote':
    '"Working with Pluralty was a turning point. They took full ownership of the cloud layer and handed us back a platform we could actually trust in production from day one."',
  'case.tradeprentice.quote.name': 'Federico Perez',
  'case.tradeprentice.quote.role': 'CEO, SpinLab',
  'case.tradeprentice.cta.label': 'Building something similar?',
  'case.tradeprentice.cta.title': 'Let\'s talk about your platform',
  'case.tradeprentice.cta.sub':
    'Whether you\'re starting fresh or moving an existing app to production, we\'ll design the infrastructure around your actual requirements.',
  'case.tradeprentice.cta.btn': 'Get your free assessment',

  // Case study — Muchticket
  'case.muchticket.meta.title': 'Muchticket · Observability for high-concurrency ticketing — Pluralty',
  'case.muchticket.meta.desc':
    'How Pluralty built a centralized monitoring and alerting stack for Muchticket, a high-concurrency event ticketing platform serving Latin America and Europe.',
  'case.muchticket.tag': 'Ticketing · Observability',
  'case.muchticket.tagline': 'Full visibility across a high-concurrency ticketing platform — before any user notices a problem.',
  'case.muchticket.challenge.label': 'The challenge',
  'case.muchticket.challenge.title': 'Blind spots during the moments that matter most',
  'case.muchticket.challenge.p1':
    'Muchticket sells event tickets across Latin America and Europe, with virtual queues that must hold up when a hundred thousand fans hit "buy" at the same second. Their on-premise infrastructure had no centralized monitoring, no structured alerting, and zero visibility into server health until something broke.',
  'case.muchticket.challenge.p2':
    'The IT team found out about incidents through user complaints — not metrics. By then, tickets were already lost and the on-sale was already in chaos. They needed a system that detected problems before any end user noticed, and got the right people alerted in seconds, not minutes.',
  'case.muchticket.solution.label': 'The solution',
  'case.muchticket.solution.title': 'A centralized observability stack with instant alerting',
  'case.muchticket.solution.p1':
    'We deployed Prometheus as the central metrics engine, scraping every server, queue worker, and process on a fixed interval. This gives the team a continuous time-series record of the entire infrastructure. Grafana sits on top, translating raw metrics into real-time dashboards and historical trend views — a single pane of glass for the full on-premise environment.',
  'case.muchticket.solution.p2':
    'BlackBox Exporter probes every public HTTP endpoint from the outside, measuring uptime and response latency from the perspective that matters: the end user\'s. If a service degrades or goes down, BlackBox detects it in the next scrape cycle — before any ticket buyer notices.',
  'case.muchticket.solution.p3':
    'A Telegram Bot delivers structured alerts to the on-call channel in seconds. Each message includes the affected host, the metric name, the current value, and the threshold crossed — exactly the context needed to act immediately, without digging through dashboards while an on-sale burns.',
  'case.muchticket.results.label': 'Results',
  'case.muchticket.results.title': 'From blind to fully instrumented',
  'case.muchticket.r1.v': '100%',
  'case.muchticket.r1.l': 'server coverage',
  'case.muchticket.r2.v': '<30s',
  'case.muchticket.r2.l': 'alert delivery time',
  'case.muchticket.r3.v': '0',
  'case.muchticket.r3.l': 'missed incidents',
  'case.muchticket.r4.v': '24/7',
  'case.muchticket.r4.l': 'continuous monitoring',
  'case.muchticket.quote':
    '"Pluralty transformed how we operate. Before, we found out about incidents through user complaints. Now our system tells us before anyone notices. That shift alone changed everything for our on-sale events."',
  'case.muchticket.quote.name': 'Luis María Springolo',
  'case.muchticket.quote.role': 'IT Coordinator / SRE, Muchticket',
  'case.muchticket.cta.label': 'Flying blind on your infrastructure?',
  'case.muchticket.cta.title': 'Let\'s fix that — starting with a free assessment',
  'case.muchticket.cta.sub':
    'We\'ll map your monitoring blind spots and show you exactly what to instrument first.',
  'case.muchticket.cta.btn': 'Get your free assessment',

  // Case study — PGSA
  'case.pgsa.meta.title': 'PGSA · AWS WorkSpaces cloud desktop migration — Pluralty',
  'case.pgsa.meta.desc':
    'How Pluralty migrated PGSA\'s entire workforce to cloud workstations using AWS WorkSpaces, eliminating on-premise desktop infrastructure.',
  'case.pgsa.tag': 'Cloud Desktops · AWS WorkSpaces',
  'case.pgsa.tagline': 'From physical desktops tied to one office to fully managed cloud workstations — accessible from anywhere.',
  'case.pgsa.challenge.label': 'The challenge',
  'case.pgsa.challenge.title': 'A workforce tied to physical hardware',
  'case.pgsa.challenge.p1':
    'PGSA\'s team depended entirely on physical desktops fixed to a single office. Remote work was simply not possible. The IT team spent significant time on hardware maintenance, Windows patching, and managing local Active Directory — operational effort with no direct business value attached.',
  'case.pgsa.challenge.p2':
    'As the company grew, scaling the desktop fleet meant ordering hardware, waiting for delivery, and spending hours on per-machine setup. Every new employee added cost and delay before they could start working. They needed a model where provisioning a new user was a matter of minutes, not days.',
  'case.pgsa.solution.label': 'The solution',
  'case.pgsa.solution.title': 'Fully managed cloud workstations on AWS WorkSpaces',
  'case.pgsa.solution.p1':
    'We deployed 16 Amazon WorkSpaces — each running a full Windows desktop on AWS-managed hardware, pre-loaded with a custom corporate image containing all the business software the team already used. No physical machines to buy, set up, or replace. WorkSpaces run in AUTO_STOP mode: each desktop automatically pauses when a user disconnects and resumes in seconds at next login, eliminating idle compute costs entirely.',
  'case.pgsa.solution.p2':
    'Identity is managed through AWS Directory Service, providing domain-joined desktops and centralized credential management using the credentials the team already knew. Every workspace is domain-joined, meaning IT can apply policies and manage access from a single control plane — without touching individual machines or visiting the office.',
  'case.pgsa.solution.p3':
    'AWS Backup runs daily automated snapshots with a 365-day retention policy — a full year of recovery points available at any time, without manual effort. AWS Budgets sends cost alerts before spend crosses defined thresholds, keeping cloud costs predictable. The entire environment is monitored via CloudWatch and managed through AWS Systems Manager, no VPN or on-site visits required for day-to-day administration.',
  'case.pgsa.results.label': 'Results',
  'case.pgsa.results.title': 'A complete office, anywhere',
  'case.pgsa.r1.v': '16',
  'case.pgsa.r1.l': 'cloud workstations',
  'case.pgsa.r2.v': '100%',
  'case.pgsa.r2.l': 'remote access enabled',
  'case.pgsa.r3.v': '0',
  'case.pgsa.r3.l': 'hardware to maintain',
  'case.pgsa.r4.v': '365 days',
  'case.pgsa.r4.l': 'automated backup retention',
  'case.pgsa.cta.label': 'Moving your team to the cloud?',
  'case.pgsa.cta.title': 'Let\'s design your cloud workspace',
  'case.pgsa.cta.sub':
    'From remote work enablement to full desktop virtualization, we\'ll build exactly what your team needs.',
  'case.pgsa.cta.btn': 'Get your free assessment',

  // ── Editorial layout — shared labels ──
  'case.arch.eyebrow': 'Architecture',
  'case.facts.client': 'Client',
  'case.facts.industry': 'Industry',
  'case.facts.services': 'Services',
  'case.facts.platforms': 'Platforms',
  'case.nav.eyebrow': 'More work',
  'case.nav.prev': 'Previous case',
  'case.nav.next': 'Next case',
  'case.pgsa.badge': 'No public website · Privacy protected',

  // ── Project facts — Stabled ──
  'case.stabled.facts.client': 'Stabled',
  'case.stabled.facts.industry': 'Fintech · Cross-border payments',
  'case.stabled.facts.services': 'Cloud architecture · DevOps · IaC',
  'case.stabled.facts.platforms': 'AWS Organizations · ECS Fargate · Aurora Serverless v2',

  // ── Project facts — Tradeprentice ──
  'case.tradeprentice.facts.client': 'SpinLab',
  'case.tradeprentice.facts.industry': 'SaaS · Trading education',
  'case.tradeprentice.facts.services': 'Cloud architecture · DevOps · CI/CD',
  'case.tradeprentice.facts.platforms': 'AWS Organizations · ECS Fargate · RDS Multi-AZ',

  // ── Project facts — Muchticket ──
  'case.muchticket.facts.client': 'Muchticket',
  'case.muchticket.facts.industry': 'Ticketing · High concurrency',
  'case.muchticket.facts.services': 'Observability · SRE · Alerting',
  'case.muchticket.facts.platforms': 'Prometheus · Grafana · BlackBox · Telegram',

  // ── Project facts — PGSA ──
  'case.pgsa.facts.client': 'PGSA (private client)',
  'case.pgsa.facts.industry': 'Cloud desktops',
  'case.pgsa.facts.services': 'Migration · Managed workspaces',
  'case.pgsa.facts.platforms': 'AWS WorkSpaces · Directory Service · AWS Backup',
};

export default en;
