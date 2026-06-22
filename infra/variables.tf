variable "site_domain" {
  description = "Apex domain served by this site."
  default     = "pluralty.com"
}

variable "www_domain" {
  description = "www subdomain."
  default     = "www.pluralty.com"
}

variable "internal_to_address" {
  description = "Destination address for contact form notifications."
  default     = "contacto@pluralty.com"
}

variable "internal_from_address" {
  description = "Sender address for contact form notifications (must be verified in SES)."
  default     = "no-reply@pluralty.com"
}

variable "github_org_repo" {
  description = "GitHub org/repo trusted for OIDC deploy."
  default     = "Pluralty/pluralty-homepage"
}

variable "github_branch" {
  description = "Branch allowed to assume the deploy role."
  default     = "main"
}
