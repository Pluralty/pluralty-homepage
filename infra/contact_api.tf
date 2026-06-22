# ─── Contact form: Lambda + API Gateway HTTP API ─────────────────────────────

# Package the Lambda source into a zip for deployment.
data "archive_file" "contact_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/contact"
  output_path = "${path.module}/builds/contact.zip"
}

# Lambda execution role.
resource "aws_iam_role" "contact_lambda" {
  name = "pluralty-homepage-contact-lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "contact_lambda_logs" {
  role       = aws_iam_role.contact_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "contact_lambda_ses" {
  name = "pluralty-contact-ses"
  role = aws_iam_role.contact_lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid      = "SendContactEmail"
      Effect   = "Allow"
      Action   = ["ses:SendEmail"]
      Resource = aws_ses_domain_identity.pluralty.arn
      Condition = {
        StringEquals = {
          "ses:FromAddress" = var.internal_from_address
        }
      }
    }]
  })
}

resource "aws_cloudwatch_log_group" "contact_lambda" {
  name              = "/aws/lambda/pluralty-contact"
  retention_in_days = 14
}

resource "aws_lambda_function" "contact" {
  function_name    = "pluralty-contact"
  description      = "Handles contact form submissions and sends SES notifications"
  filename         = data.archive_file.contact_lambda.output_path
  source_code_hash = data.archive_file.contact_lambda.output_base64sha256
  handler          = "index.handler"
  runtime          = "nodejs22.x"
  timeout          = 10
  memory_size      = 128
  role             = aws_iam_role.contact_lambda.arn

  environment {
    variables = {
      TO_ADDRESS      = var.internal_to_address
      FROM_ADDRESS    = var.internal_from_address
      ALLOWED_ORIGINS = "https://${var.site_domain},https://${var.www_domain}"
    }
  }

  depends_on = [aws_cloudwatch_log_group.contact_lambda]
}

# ─── API Gateway HTTP API ────────────────────────────────────────────────────

resource "aws_apigatewayv2_api" "contact" {
  name          = "pluralty-contact"
  protocol_type = "HTTP"
  description   = "Contact form endpoint for Pluralty homepage"

  cors_configuration {
    allow_origins = ["https://${var.site_domain}", "https://${var.www_domain}"]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age       = 3600
  }
}

resource "aws_apigatewayv2_integration" "contact" {
  api_id                 = aws_apigatewayv2_api.contact.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "contact_post" {
  api_id    = aws_apigatewayv2_api.contact.id
  route_key = "POST /contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact.id}"
}

resource "aws_apigatewayv2_stage" "contact" {
  api_id      = aws_apigatewayv2_api.contact.id
  name        = "$default"
  auto_deploy = true

  default_route_settings {
    throttling_burst_limit = 5
    throttling_rate_limit  = 2
  }
}

resource "aws_lambda_permission" "contact_apigw" {
  statement_id  = "AllowAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact.execution_arn}/*/*"
}
