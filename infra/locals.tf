locals {
  account_id   = "909969506256"
  region       = "us-east-1"
  bucket_name  = "pluralty-homepage-site-${local.account_id}"
  github_sub   = "repo:${var.github_org_repo}:ref:refs/heads/${var.github_branch}"
}
