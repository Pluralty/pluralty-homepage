# ─── SES domain identity + DKIM ─────────────────────────────────────────────
# The user must add the verification TXT and DKIM CNAMEs to Cloudflare
# manually (Terraform cannot touch Cloudflare). See outputs.tf for the
# records to paste.
#
# SES sandbox is fine: sender (no-reply@pluralty.com) and recipient
# (contacto@pluralty.com) are both @pluralty.com — the verified domain.

resource "aws_ses_domain_identity" "pluralty" {
  domain = var.site_domain
}

resource "aws_ses_domain_dkim" "pluralty" {
  domain = aws_ses_domain_identity.pluralty.domain
}
