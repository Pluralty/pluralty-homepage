# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # local dev server (hot-reload)
pnpm build        # production build → dist/
pnpm preview      # serve dist/ locally after build
```

No linter or test suite is configured. TypeScript is type-checked by the Astro build; `astro check` can be run manually for IDE-style diagnostics.

The project uses **pnpm** (see `.nvmrc` for the Node version). Use `pnpm install --frozen-lockfile` to install without touching the lockfile.

## Architecture

**Static Astro site** (`output: 'static'`) deployed to S3 + CloudFront at `https://pluralty.com`. No SSR, no server runtime — all dynamic behavior runs in the browser.

### Page structure

`src/pages/index.astro` is the only page. It assembles a single-page layout from section components in order:

`Nav → Hero → Problem → Assessment → Services → CaseStudies → CloudProviders → Partnerships → Founder → ContactForm → Footer`

Each section is an Astro component in `src/components/`. There is also a `src/layouts/Base.astro` shell that owns `<head>`, SEO tags, the i18n data injection, and the JSON-LD schema.

### i18n

- All strings live in `src/i18n/en.ts` and `src/i18n/es.ts` as flat `Record<string, string>` dictionaries.
- The page is **server-rendered in English** (the canonical locale for SEO). Spanish is swapped in client-side without a reload.
- Use the `<Tr k="some.key" />` component (in `src/components/Tr.astro`) to emit a translatable string. It sets `data-i18n` on the element so the client script can find and replace it.
- For translatable HTML attributes (e.g. `placeholder`, `aria-label`), use `data-i18n-attr="placeholder:some.key"` on the element.
- The client-side swap lives in `src/scripts/i18n-client.ts`. Language preference is detected via `?lang=` query param → `localStorage` → browser language.
- `clientDicts()` in `src/i18n/index.ts` ships only the non-default (Spanish) dictionary to the browser, embedded as JSON in a `<script id="i18n-data">` tag.

### Design system

All design tokens are CSS custom properties in `src/styles/tokens.css`. Key tokens:

- **Colors**: `--ink` (page bg), `--surface` (cards), `--brand` / `--brand-lift` / `--brand-glow` (violet palette), `--paper` (primary text), `--muted` (secondary text)
- **Typography**: `--font-display` (Outfit), `--font-body` (Plus Jakarta Sans), `--font-mono` (JetBrains Mono); fluid scale `--step--1` through `--step-5`
- **Spacing**: `--sp-1` (4px) through `--sp-9` (96px); `--section-y` for vertical section padding; `--content` (1180px) max-width
- The design is **dark-locked** and violet-led. No blue or teal anywhere.

### Contact form

The form in `src/components/ContactForm.astro` is fully client-side (`src/scripts/contact.ts`). It POSTs JSON to `PUBLIC_CONTACT_API_URL` (an API Gateway endpoint) — set this env var at build time. The backend is a Lambda + API Gateway HTTP API that sends email via SES. The API URL is public and not a secret.

Honeypot field (`company_url`, hidden) silently discards bot submissions.

### Infrastructure (Terraform)

All infra lives in `infra/`. Key resources:

- `site.tf` — S3 bucket for static assets
- `cloudfront.tf` — CloudFront distribution
- `acm.tf` — TLS certificate (us-east-1)
- `ses.tf` — SES domain identity for `pluralty.com`
- `contact_api.tf` — Lambda (`pluralty-contact`, Node 22) + API Gateway HTTP API
- `oidc.tf` — GitHub Actions OIDC role for CI/CD
- `backend.tf` — remote state in S3 (account 909969506256, `homepage`)
- `bootstrap/` — one-time state bucket setup (run separately)

### CI/CD

`.github/workflows/deploy.yml` runs on every push to `main`. It builds the site, assumes the OIDC role (`vars.AWS_ROLE_ARN`), syncs to S3 (hashed `_astro/` assets with 1-year cache; everything else with `must-revalidate`), then creates a CloudFront invalidation.

Required GitHub Actions vars: `PUBLIC_CONTACT_API_URL`, `AWS_ROLE_ARN`, `SITE_BUCKET`, `DISTRIBUTION_ID`.

### Assets

Brand images are in `src/assets/` (processed by Astro's image pipeline) and `public/` (copied verbatim). The `assets/` root directory at the repo level contains originals — the working copies used by the site are under `src/assets/`.
