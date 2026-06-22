# ─── CloudFront OAC + distribution ──────────────────────────────────────────

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "pluralty-homepage-oac"
  description                       = "OAC for the Pluralty homepage S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Cache policy: use AWS-managed CachingOptimized (no query strings, long TTL).
data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

# Origin request policy: forward nothing extra (S3 OAC uses SigV4).
data "aws_cloudfront_origin_request_policy" "cors_s3" {
  name = "Managed-CORS-S3Origin"
}

resource "aws_cloudfront_response_headers_policy" "security" {
  name    = "pluralty-homepage-security-headers"
  comment = "Security headers for Pluralty homepage"

  security_headers_config {
    strict_transport_security {
      override                   = true
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
    }
    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "DENY"
      override     = true
    }
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
    content_security_policy {
      # Allow same-origin resources + the API Gateway endpoint for the form.
      # Fonts self-hosted; no external CDN.
      content_security_policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self' https://*.execute-api.us-east-1.amazonaws.com; frame-ancestors 'none';"
      override                = true
    }
  }
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  comment             = "Pluralty homepage"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  aliases             = [var.site_domain, var.www_domain]

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "S3-${local.bucket_name}"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "S3-${local.bucket_name}"
    viewer_protocol_policy     = "redirect-to-https"
    compress                   = true
    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    origin_request_policy_id   = data.aws_cloudfront_origin_request_policy.cors_s3.id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
  }

  # 404: serve the 404 page.
  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }
  # 403 (S3 returns 403 for missing objects): also serve the 404 page.
  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/404.html"
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
