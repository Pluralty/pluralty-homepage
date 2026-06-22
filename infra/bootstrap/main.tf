# ─── Bootstrap: state bucket ───────────────────────────────────────────────
# Run ONCE from the management account (profile pluralty → assumes
# OrganizationAccountAccessRole into homepage 909969506256).
# This root has LOCAL state (the file is disposable/reproducible).
#
# Usage:
#   AWS_PROFILE=homepage terraform init
#   AWS_PROFILE=homepage terraform apply

terraform {
  required_version = ">= 1.11"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.70"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  # Credentials come from: eval $(aws configure export-credentials --profile homepage --format env)
  # The homepage profile already assumes OrganizationAccountAccessRole into 909969506256.
  default_tags {
    tags = {
      Project   = "pluralty-homepage"
      ManagedBy = "terraform"
    }
  }
}

resource "aws_s3_bucket" "tfstate" {
  bucket = "pluralty-tfstate-909969506256"
}

resource "aws_s3_bucket_versioning" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "tfstate" {
  bucket                  = aws_s3_bucket.tfstate.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_lifecycle_configuration" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id
  rule {
    id     = "expire-old-versions"
    status = "Enabled"
    filter {}
    noncurrent_version_expiration {
      noncurrent_days = 90
    }
  }
}

output "state_bucket_name" {
  value = aws_s3_bucket.tfstate.bucket
}
