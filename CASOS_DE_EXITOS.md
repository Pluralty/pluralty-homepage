# Casos de Éxito — Pluralty

Documentación completa del contenido publicado en cada página de caso de éxito.
Fuente de verdad para ediciones futuras. Las carpetas `assets/<cliente>` pueden borrarse.

---

## Stabled — `/cases/stabled`

**Web:** https://stabled.co
**Contacto:** Nikolaus Seiguer — CEO ([LinkedIn](https://www.linkedin.com/in/nikolaus-seiguer/))
**AWS Profile:** `stabled-root` (Organizations, asumir rol por defecto en cada cuenta)

### Tags de landing
`Organizations` · `ECS` · `Aurora Serverless v2`

### Tagline
*Moving money across borders in seconds — at a fraction of bank fees.*

### Challenge
**Título:** Building payments infrastructure that earns trust

Stabled needed a platform capable of settling cross-border USDC transactions the moment they landed — with the reliability and security posture that a fintech demands. The infrastructure had to be auditable, multi-environment, and built from day one as infrastructure as code.

The team was moving fast, but they needed a foundation that could grow without being rewritten — one that separated concerns at the AWS account level, and gave developers clear deployment paths from every commit.

### Solution
**Título:** Multi-account architecture for isolation and speed

**01.** We structured Stabled under AWS Organizations from day one, giving production its own account isolated from staging and tooling. A misconfiguration in a non-prod environment literally cannot reach production — the blast radius is bounded by the account boundary.

**02.** Three independent microservices — the landing page, the customer-facing web app, and the backend API — each run as a separate ECS Fargate service, scaling independently behind a unified Application Load Balancer. Aurora PostgreSQL Serverless v2 handles persistent state, automatically scaling database compute with workload demand rather than requiring manual resizing. Every resource is defined in Terraform, versioned in Git, and deployable without manual console access.

**03.** GitHub Actions drives CI/CD — on every push to the main branch, images are built, tested, pushed to ECR, and deployed to ECS with a zero-downtime rolling update. The pipeline also applies Terraform changes after plan approval, so infrastructure drift is caught before it reaches production.

### Arquitectura (diagrama)
```
AWS Organizations
├── Production    ALB · ECS: landing · ECS: app · ECS: api · Aurora Serverless v2 · ECR
├── Staging       ECS Fargate · RDS
└── Tooling       GitHub Actions · ECR shared
```
*Caption:* Each AWS account is a blast-radius boundary — production cannot be touched by staging accidents.

### Tech Stack
| Servicio | Descripción |
|---|---|
| AWS Organizations | Multi-account isolation |
| ECS Fargate | Serverless containers |
| Application Load Balancer | Traffic distribution |
| Aurora PostgreSQL Serverless v2 | Auto-scaling managed database |
| ECR | Container registry |
| GitHub Actions | CI/CD pipeline |
| Terraform | Infrastructure as code |
| VPC + Private subnets | Network isolation |

### Results
| Métrica | Valor |
|---|---|
| Uptime SLA | 99.9% |
| Settlement latency | <2s |
| Production incidents at launch | 0 |
| Infrastructure as code | 100% |

### Testimonial
> "With Pluralty we deployed our platform's infrastructure in an organized way, following cloud best practices from day one. The multi-account structure gave us the confidence to ship fast without breaking things."
>
> **Nikolaus Seiguer** — CEO, Stabled

---

## Tradeprentice — `/cases/tradeprentice`

**Web:** https://tradeprentice.io
**Cliente directo:** SpinLab (https://spinlab.tech)
**Contacto:** Federico Perez — CEO SpinLab ([LinkedIn](https://www.linkedin.com/in/fedeaperez/))
**AWS Profile:** `tradeprentice-root` (Organizations, asumir rol por defecto en cada cuenta)

### Tags de landing
`Organizations` · `ECS` · `ElastiCache`

### Tagline
*Production-grade infrastructure for a live trading platform — delivered in weeks.*

### Challenge
**Título:** From dev environment to production-grade platform

Tradeprentice already had a working development environment, but moving to production meant solving for real availability: multi-AZ redundancy, autoscaling during market-hour spikes, and zero-downtime deploys for a live audience of active traders.

SpinLab, the software team behind the platform, needed a cloud architecture that could grow without being redesigned — with full account isolation between dev and prod, and a CI/CD pipeline that matched their Git workflow exactly.

### Solution
**Título:** Multi-account AWS Organizations with full pipeline automation

**01.** We structured the platform under AWS Organizations from day one, with DEV and PRD in separate accounts under a dedicated Workload OU. Each environment has its own billing boundary, IAM scope, and security perimeter — a misconfiguration in dev literally cannot reach production.

**02.** Five independent containerized services run on ECS Fargate: frontend, backend API, a dedicated WebSocket server for real-time trading signals and price feeds, a backoffice portal, and a scheduled job runner — each deployed and scaled independently with zero server management. RDS PostgreSQL Multi-AZ provides automatic failover. ElastiCache Redis handles session state and query caching, keeping response times fast even during market-hour spikes.

**03.** GitHub Actions drives CI/CD with OIDC — no long-lived AWS credentials anywhere in the pipeline. Every commit to develop auto-deploys to the dev environment. Production gates on manual approval. Terraform manages all infrastructure across two repositories, with remote state in S3 and DynamoDB table locking.

### Arquitectura (diagrama)
```
AWS Organizations
├── IAM Identity Center   SSO · MFA · Access governance
├── DEV Account           ALB · ECS Fargate · RDS PostgreSQL · ElastiCache Redis
│                         (Auto-deploy on push to develop)
└── PRD Account           ALB (public + internal) · ECS: frontend · ECS: backend API
                          ECS: WebSocket · ECS: backoffice · ECS: cronjob
                          RDS Multi-AZ · ElastiCache Redis
                          (Manual approval gate)

CI/CD: GitHub Actions + OIDC → Terraform (S3 + DynamoDB)
```
*Caption:* Each AWS account is a hard blast-radius boundary — dev activity cannot touch production, billing, or IAM in the prod account.

### Tech Stack
| Servicio | Descripción |
|---|---|
| AWS Organizations | Multi-account isolation |
| ECS Fargate | Serverless containers |
| Application Load Balancer | Traffic routing |
| RDS PostgreSQL Multi-AZ | High-availability database |
| ElastiCache Redis | Session & query cache |
| WebSockets | Real-time trading signals |
| WAF | Web application firewall |
| GitHub Actions + OIDC | Keyless CI/CD |
| Terraform | Infrastructure as code |
| Secrets Manager | Auto-rotating credentials |
| IAM Identity Center | SSO & access governance |
| CloudWatch | Metrics & log aggregation |
| ACM | TLS certificate management |

### Results
| Métrica | Valor |
|---|---|
| Infrastructure as code | 100% |
| Fully isolated environments | 2 |
| Long-lived credentials | 0 |
| DB failover | Multi-AZ |

### Testimonial
> "Working with Pluralty was a turning point. They took full ownership of the cloud layer and handed us back a platform we could actually trust in production from day one."
>
> **Federico Perez** — CEO, SpinLab

---

## Muchticket — `/cases/muchticket`

**Web:** https://www.muchticket.com
**Contacto:** Luis María Springolo — Coordinador IT / SRE ([LinkedIn](https://www.linkedin.com/in/luismariaspringolo/))
**Infraestructura:** On-Premise (no corre en AWS)

### Tags de landing
`Grafana` · `Prometheus` · `BlackBox` · `Telegram Bot`

### Tagline
*Full visibility across a high-concurrency ticketing platform — before any user notices a problem.*

### Challenge
**Título:** Blind spots during the moments that matter most

Muchticket sells event tickets across Latin America and Europe, with virtual queues that must hold up when a hundred thousand fans hit "buy" at the same second. Their on-premise infrastructure had no centralized monitoring, no structured alerting, and zero visibility into server health until something broke.

The IT team found out about incidents through user complaints — not metrics. By then, tickets were already lost and the on-sale was already in chaos. They needed a system that detected problems before any end user noticed, and got the right people alerted in seconds, not minutes.

### Solution
**Título:** A centralized observability stack with instant alerting

**01.** We deployed Prometheus as the central metrics engine, scraping every server, queue worker, and process on a fixed interval. This gives the team a continuous time-series record of the entire infrastructure. Grafana sits on top, translating raw metrics into real-time dashboards and historical trend views — a single pane of glass for the full on-premise environment.

**02.** BlackBox Exporter probes every public HTTP endpoint from the outside, measuring uptime and response latency from the perspective that matters: the end user's. If a service degrades or goes down, BlackBox detects it in the next scrape cycle — before any ticket buyer notices.

**03.** A Telegram Bot delivers structured alerts to the on-call channel in seconds. Each message includes the affected host, the metric name, the current value, and the threshold crossed — exactly the context needed to act immediately, without digging through dashboards while an on-sale burns.

### Arquitectura (diagrama)
```
On-Premise Infrastructure
├── Web Server · Queue Worker · DB Server · App Server N
        ↓ metrics scrape (pull)
    Prometheus  (Time-series storage & alerting)
        ├── Grafana          (Dashboards & trends)
        ├── BlackBox Exporter (HTTP endpoint probing)
        └── Telegram Bot     (On-call alerts in seconds)
```
*Caption:* Prometheus pulls metrics from every node. BlackBox probes endpoints from the outside. Alerts fire before any end user notices degradation.

### Tech Stack
| Servicio | Descripción |
|---|---|
| Prometheus | Time-series metrics engine |
| Grafana | Real-time dashboards & alerts |
| BlackBox Exporter | External HTTP endpoint probing |
| Telegram Bot | Instant on-call alerting |
| Node Exporter | Server-level OS metrics |
| Alertmanager | Alert routing & deduplication |

### Results
| Métrica | Valor |
|---|---|
| Server coverage | 100% |
| Alert delivery time | <30s |
| Missed incidents | 0 |
| Monitoring | 24/7 |

### Testimonial
> "Pluralty transformed how we operate. Before, we found out about incidents through user complaints. Now our system tells us before anyone notices. That shift alone changed everything for our on-sale events."
>
> **Luis María Springolo** — IT Coordinator / SRE, Muchticket

---

## PGSA — `/cases/pgsa`

**Sin sitio web público** (cliente privado)
**Contacto:** pendiente de conseguir nombre, LinkedIn y web del cliente
**AWS Profile:** `pgsa` (cuenta única, no Organizations)

### Tags de landing
`WorkSpaces` · `FSx` · `Directory Services`

> **Nota:** FSx NO está desplegado en la cuenta real. El tag de landing menciona FSx por razones históricas del brief, pero la implementación real usa Simple AD + WorkSpaces + AWS Backup. Considerar actualizar el tag de landing si se quiere más precisión.

### Tagline
*From physical desktops tied to one office to fully managed cloud workstations — accessible from anywhere.*

### Challenge
**Título:** A workforce tied to physical hardware

PGSA's team depended entirely on physical desktops fixed to a single office. Remote work was simply not possible. The IT team spent significant time on hardware maintenance, Windows patching, and managing local Active Directory — operational effort with no direct business value attached.

As the company grew, scaling the desktop fleet meant ordering hardware, waiting for delivery, and spending hours on per-machine setup. Every new employee added cost and delay before they could start working. They needed a model where provisioning a new user was a matter of minutes, not days.

### Solution
**Título:** Fully managed cloud workstations on AWS WorkSpaces

**01.** We deployed 16 Amazon WorkSpaces — each running a full Windows desktop on AWS-managed hardware, pre-loaded with a custom corporate image containing all the business software the team already used. No physical machines to buy, set up, or replace. WorkSpaces run in AUTO_STOP mode: each desktop automatically pauses when a user disconnects and resumes in seconds at next login, eliminating idle compute costs entirely.

**02.** Identity is managed through AWS Directory Service (Simple AD), providing domain-joined desktops and centralized credential management using the credentials the team already knew. Every workspace is domain-joined, meaning IT can apply policies and manage access from a single control plane — without touching individual machines or visiting the office.

**03.** AWS Backup runs daily automated snapshots with a 365-day retention policy — a full year of recovery points available at any time, without manual effort. AWS Budgets sends cost alerts before spend crosses defined thresholds, keeping cloud costs predictable. The entire environment is monitored via CloudWatch and managed through AWS Systems Manager, no VPN or on-site visits required for day-to-day administration.

### Arquitectura (diagrama)
```
AWS Account — Single Region
├── AWS Directory Service   Domain Auth · Centralized policies · Domain-joined desktops
├── Amazon WorkSpaces       16 desktops · Windows 10/11 · Custom corporate image · AUTO_STOP billing
├── AWS Backup              Daily snapshots · 365-day retention
└── Ops & Visibility        CloudWatch · Systems Manager · AWS Budgets
```
*Caption:* All 16 desktops are domain-joined and managed centrally — no VPN, no on-site hardware, no manual patching. Each user connects from any device with their existing credentials.

### Tech Stack (Services we deployed)
| Servicio | Descripción |
|---|---|
| Amazon WorkSpaces | Managed cloud desktops (AUTO_STOP) |
| AWS Directory Service | Domain identity & centralized auth |
| AWS Backup | Daily snapshots · 365-day retention |
| CloudWatch | Monitoring & alerting |
| AWS Systems Manager | Remote management & patching |
| AWS Budgets | Cost threshold alerts |

### Results
| Métrica | Valor |
|---|---|
| Cloud workstations | 16 |
| Remote access enabled | 100% |
| Hardware to maintain | 0 |
| Automated backup retention | 365 days |

### Testimonial
*(Sin testimonial — contacto del cliente pendiente)*
