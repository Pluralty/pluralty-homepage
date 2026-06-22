# All resources are in us-east-1 (required for ACM + CloudFront).
# Run all terraform commands with credentials pre-exported from the homepage profile:
#   eval $(aws configure export-credentials --profile homepage --format env)
# The homepage profile (source_profile=pluralty) already assumes OrganizationAccountAccessRole
# into account 909969506256 — no double-hop needed here.
provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      Project   = "pluralty-homepage"
      ManagedBy = "terraform"
    }
  }
}
