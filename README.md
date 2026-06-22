# Pluralty Homepage

Landing page estática de [pluralty.com](https://pluralty.com) — consultora cloud especializada en optimización de costos, estabilidad y performance en AWS, Azure y Google Cloud.

## Stack

- **[Astro](https://astro.build)** — generador de sitios estáticos (`output: 'static'`)
- **pnpm** — package manager
- **Terraform** — infraestructura en AWS (S3 + CloudFront + Lambda + SES)
- **GitHub Actions** — CI/CD con OIDC hacia AWS

## Desarrollo local

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo con hot-reload
pnpm dev

# Build de producción
pnpm build

# Preview del build localmente
pnpm preview
```

El formulario de contacto requiere la variable de entorno `PUBLIC_CONTACT_API_URL`. Copiá `.env.example` a `.env` y completá con el endpoint de API Gateway desplegado.

## Deploy

Cada push a `main` dispara el workflow en `.github/workflows/deploy.yml`, que:

1. Hace `pnpm build`
2. Asume el rol de AWS vía OIDC (sin credenciales estáticas)
3. Sincroniza `dist/` al bucket S3
4. Invalida la caché de CloudFront

Variables requeridas en GitHub Actions: `PUBLIC_CONTACT_API_URL`, `AWS_ROLE_ARN`, `SITE_BUCKET`, `DISTRIBUTION_ID`.

## Infraestructura

El directorio `infra/` contiene todos los recursos Terraform:

- **S3** — bucket para los assets estáticos
- **CloudFront** — distribución CDN con certificado TLS (ACM)
- **Lambda + API Gateway** — backend del formulario de contacto
- **SES** — envío de emails desde `contacto@pluralty.com`
- **OIDC** — rol de GitHub Actions sin credenciales de larga duración

El estado de Terraform se guarda en S3 en la cuenta `homepage` (909969506256). Para inicializar:

```bash
cd infra
terraform init
terraform plan
terraform apply
```

## Internacionalización

El sitio se sirve en inglés (locale canónica para SEO) y permite cambiar a español desde el toggle en la nav, sin recarga. Los strings están en `src/i18n/en.ts` y `src/i18n/es.ts`.

## DNS

El sitio vive en `pluralty.com` y `www.pluralty.com`. El DNS está en Cloudflare — agregar el CNAME al output `cloudfront_domain` de Terraform.
