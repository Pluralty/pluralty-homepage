/**
 * Contact form handler.
 *
 * Security: no secrets are in the static site — only the public API URL.
 * This function reads TO/FROM addresses from Lambda env vars set by Terraform.
 *
 * Anti-spam:
 *  1. Honeypot field (company_url): if filled, silently drop.
 *  2. Basic field validation.
 *  3. API Gateway throttling (configured in Terraform).
 */

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

const TO   = process.env.TO_ADDRESS;
const FROM = process.env.FROM_ADDRESS;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://pluralty.com,https://www.pluralty.com')
  .split(',').map(s => s.trim());

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
  };
}

function respond(statusCode, body, origin) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
    body: JSON.stringify(body),
  };
}

export const handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || '';

  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors(origin), body: '' };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return respond(400, { error: 'Invalid JSON' }, origin);
  }

  // 1. Honeypot
  if (body.company_url && String(body.company_url).trim().length > 0) {
    // Silently accept to waste the bot's time.
    return respond(200, { ok: true }, origin);
  }

  // 2. Validation
  const name    = String(body.name    || '').trim().slice(0, 200);
  const email   = String(body.email   || '').trim().slice(0, 320);
  const company = String(body.company || '').trim().slice(0, 200);
  const spend   = String(body.spend   || '').trim().slice(0, 50);
  const message = String(body.message || '').trim().slice(0, 4000);
  const locale  = body.locale === 'es' ? 'ES' : 'EN';

  if (name.length < 2)       return respond(422, { error: 'name too short' },    origin);
  if (!EMAIL_RE.test(email)) return respond(422, { error: 'invalid email' },     origin);
  if (message.length < 5)    return respond(422, { error: 'message too short' }, origin);

  // 3. Send internal notification
  const subject = `[Pluralty] New assessment request — ${name} (${locale})`;
  const textBody = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || '—'}`,
    `Spend:   ${spend   || '—'}`,
    `Locale:  ${locale}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const htmlBody = `
<html><body style="font-family:sans-serif;max-width:600px;margin:40px auto;color:#1a1a2e">
<h2 style="color:#4B0076">New assessment request</h2>
<table style="border-collapse:collapse;width:100%">
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${esc(name)}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${esc(company) || '&mdash;'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Cloud spend</td><td style="padding:8px;border:1px solid #ddd">${esc(spend) || '&mdash;'}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Locale</td><td style="padding:8px;border:1px solid #ddd">${locale}</td></tr>
</table>
<h3 style="color:#4B0076;margin-top:24px">Message</h3>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:8px">${esc(message)}</p>
</body></html>`;

  try {
    await ses.send(new SendEmailCommand({
      Source: FROM,
      Destination: { ToAddresses: [TO] },
      Message: {
        Subject: { Data: subject, Charset: 'UTF-8' },
        Body: {
          Text: { Data: textBody, Charset: 'UTF-8' },
          Html: { Data: htmlBody, Charset: 'UTF-8' },
        },
      },
    }));
    return respond(200, { ok: true }, origin);
  } catch (err) {
    console.error('SES send error:', err);
    return respond(500, { error: 'Failed to send' }, origin);
  }
};

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
