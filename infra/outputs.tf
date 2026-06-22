# ─── Outputs: everything the user needs to paste into Cloudflare + GitHub ────

# ── CloudFront ──────────────────────────────────────────────────────────────

output "cloudfront_domain_name" {
  description = "Add this as a CNAME for both @ (apex) and www in Cloudflare (proxy OFF / DNS-only)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  description = "Used by GitHub Actions for cache invalidation. Store as a repo variable."
  value       = aws_cloudfront_distribution.site.id
}

output "site_bucket_name" {
  description = "S3 bucket to sync assets into. Store as a repo variable."
  value       = aws_s3_bucket.site.bucket
}

# ── ACM certificate validation ───────────────────────────────────────────────
# Add these as CNAME records in Cloudflare (DNS-only, proxy OFF).
# Apex and www may share the same target — deduplicate before pasting.

output "acm_validation_records" {
  description = "CNAME records to add in Cloudflare so ACM can validate the certificate."
  value = [
    for dvo in aws_acm_certificate.site.domain_validation_options : {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  ]
}

# ── SES DNS records ──────────────────────────────────────────────────────────

output "ses_verification_txt" {
  description = "TXT record to add in Cloudflare to verify the pluralty.com SES domain."
  value = {
    name  = "_amazonses.${var.site_domain}"
    type  = "TXT"
    value = aws_ses_domain_identity.pluralty.verification_token
  }
}

output "ses_dkim_records" {
  description = "3 CNAME records for SES DKIM signing. Add in Cloudflare (DNS-only)."
  value = [
    for token in aws_ses_domain_dkim.pluralty.dkim_tokens : {
      name  = "${token}._domainkey.${var.site_domain}"
      type  = "CNAME"
      value = "${token}.dkim.amazonses.com"
    }
  ]
}

# ── Contact API ──────────────────────────────────────────────────────────────

output "contact_api_endpoint" {
  description = "Public API Gateway URL for the contact form. Set as PUBLIC_CONTACT_API_URL repo variable (not a secret)."
  value       = "${aws_apigatewayv2_api.contact.api_endpoint}/contact"
}

# ── OIDC deploy role ─────────────────────────────────────────────────────────

output "github_deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions OIDC. Paste into the workflow role-to-assume."
  value       = aws_iam_role.github_deploy.arn
}

# ── Summary table ────────────────────────────────────────────────────────────

output "dns_handoff_summary" {
  description = "Quick reference: all DNS records to add in Cloudflare, and GitHub repo variables."
  value = <<-SUMMARY
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  CLOUDFLARE DNS (all proxy OFF / DNS-only / grey cloud)                 │
  ├─────────────────────────────────────────────────────────────────────────┤
  │  Apex @      CNAME  →  ${aws_cloudfront_distribution.site.domain_name}
  │  www         CNAME  →  ${aws_cloudfront_distribution.site.domain_name}
  │  (+ ACM validation CNAMEs from output acm_validation_records)           │
  │  (+ SES TXT + 3 DKIM CNAMEs from outputs ses_*)                        │
  ├─────────────────────────────────────────────────────────────────────────┤
  │  GITHUB REPO VARIABLES (Settings → Secrets & variables → Variables)    │
  ├─────────────────────────────────────────────────────────────────────────┤
  │  DISTRIBUTION_ID       = ${aws_cloudfront_distribution.site.id}
  │  PUBLIC_CONTACT_API_URL = ${aws_apigatewayv2_api.contact.api_endpoint}/contact
  │  AWS_ROLE_ARN          = ${aws_iam_role.github_deploy.arn}
  └─────────────────────────────────────────────────────────────────────────┘
  SUMMARY
}
