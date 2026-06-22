# S3 backend with native locking (no DynamoDB — requires TF >= 1.11).
# The backend block does NOT inherit the provider assume_role, so run with:
#   AWS_PROFILE=homepage terraform init / plan / apply
# where `homepage` is the profile that assumes OrganizationAccountAccessRole.
terraform {
  backend "s3" {
    bucket       = "pluralty-tfstate-909969506256"
    key          = "homepage/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
