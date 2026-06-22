# ─── ACM certificate (us-east-1, required by CloudFront) ────────────────────
# We do NOT use aws_acm_certificate_validation here — that resource would
# block the apply forever waiting for Cloudflare DNS records that the user
# must add manually. Instead we output the validation CNAMEs and let ACM
# auto-validate once the records propagate. CloudFront can reference the cert
# while it is PENDING_VALIDATION; HTTPS works as soon as ACM issues it.

resource "aws_acm_certificate" "site" {
  domain_name               = var.site_domain
  subject_alternative_names = [var.www_domain]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
