/**
 * Email Templates for Resend
 * Professional HTML email templates matching CoreShift V2 branding
 */

import type { ContactFormSubmission } from './supabase'

// Base email styles - V2 theme
const baseStyles = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f5f7fa;
  }
  .email-container {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }
  .header {
    text-align: center;
    padding: 32px 24px;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    border-bottom: 1px solid #e5e5e5;
  }
  .logo {
    font-size: 24px;
    font-weight: 500;
    color: #1a1a1a;
    letter-spacing: -0.02em;
  }
  .logo-dot {
    color: #4d65ff;
  }
  .logo-bold {
    font-weight: 600;
  }
  .tagline {
    margin: 8px 0 0;
    color: #888;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .content {
    padding: 40px 32px;
  }
  .button {
    display: inline-block;
    padding: 14px 28px;
    background: #1a1a1a;
    color: white !important;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 8px 4px;
  }
  .button:hover {
    background: #4d65ff;
  }
  .button-secondary {
    background: #f5f5f5;
    color: #1a1a1a !important;
    border: 1px solid #e0e0e0;
  }
  .info-box {
    background: #f8f9fa;
    padding: 24px;
    border-radius: 12px;
    margin: 24px 0;
    border-left: 3px solid #4d65ff;
  }
  .success-box {
    background: #f0fdf4;
    border-left-color: #22c55e;
  }
  .footer {
    text-align: center;
    padding: 24px 32px;
    background: #1a1a1a;
    color: #ffffff;
  }
  .footer a {
    color: #4d65ff;
  }
  .footer-note {
    margin-top: 16px;
    font-size: 11px;
    color: rgba(255,255,255,0.5);
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
  }
  .data-table td {
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
  }
  .data-table td:first-child {
    font-weight: 500;
    width: 35%;
    color: #888;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .highlight {
    background: #4d65ff;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 11px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  h2 {
    color: #1a1a1a;
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 16px;
    letter-spacing: -0.02em;
  }
  .steps-list {
    margin: 16px 0 0;
    padding-left: 0;
    list-style: none;
  }
  .steps-list li {
    padding: 8px 0 8px 28px;
    position: relative;
    font-size: 14px;
    color: #555;
  }
  .steps-list li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 16px;
    height: 16px;
    background: #4d65ff;
    border-radius: 50%;
  }
`

// Operation type display names
const INTENT_LABELS: Record<string, string> = {
  blueprint: 'Agent Deployment',
  build: 'Agent Deployment',
  advisory: 'Advisory'
}

/**
 * Confirmation email sent TO the lead after form submission
 */
export function getLeadConfirmationEmail(
  submission: Partial<ContactFormSubmission>,
  calendlyLink: string = 'https://calendly.com/srinath-cshift/strategy-session'
) {
  const intentLabel = INTENT_LABELS[submission.intent || 'blueprint'] || 'Agent Deployment'

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your Inquiry</title>
  <style>${baseStyles}</style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        Core<span class="logo-dot">·</span><span class="logo-bold">shift</span>
      </div>
      <p class="tagline">Agents as a Service</p>
    </div>

    <div class="content">
      <h2>Thanks for reaching out, ${submission.name || 'there'}.</h2>

      <p style="color: #555; font-size: 15px;">
        We've received your <strong>${intentLabel}</strong> inquiry from <strong>${submission.company}</strong>.
      </p>

      <div class="info-box">
        <p style="margin: 0 0 12px; font-weight: 600; color: #1a1a1a;">What happens next?</p>
        <ol class="steps-list">
          <li>We'll review your submission within 24 hours</li>
          <li>You'll hear from us at <strong>${submission.email}</strong></li>
          <li>We'll schedule a strategy call to discuss your needs</li>
        </ol>
      </div>

      <p style="color: #555; font-size: 15px;"><strong>Want to schedule right away?</strong></p>
      <p style="color: #666; font-size: 14px;">Skip the wait and book a time that works for you:</p>

      <center style="margin: 24px 0;">
        <a href="${calendlyLink}" class="button">
          Book Your Strategy Call →
        </a>
      </center>

      <p style="margin-top: 32px; font-size: 13px; color: #888;">
        In the meantime, feel free to reply to this email with any questions.
      </p>
    </div>

    <div class="footer">
      <p style="margin: 0;">
        <strong style="color: #fff;">CoreShift Ventures LLP</strong><br>
        <a href="mailto:contact@cshift.io">contact@cshift.io</a>
      </p>
      <p class="footer-note">
        You're receiving this because you submitted an inquiry on coreshift.io
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Notification email sent TO you (admin) when someone submits the form
 */
export function getAdminNotificationEmail(submission: ContactFormSubmission) {
  const intentLabel = INTENT_LABELS[submission.intent || 'blueprint'] || 'Agent Deployment'
  const supabaseLink = `https://app.supabase.com/project/ekffkmcvtjicbwhhvxph/editor/contact_submissions`

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead: ${submission.name}</title>
  <style>${baseStyles}</style>
</head>
<body>
  <div class="email-container">
    <div class="header" style="background: #1a1a1a;">
      <h1 style="margin: 0; color: #4d65ff; font-size: 18px; font-weight: 600;">
        New ${intentLabel} Lead
      </h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.6); font-size: 13px;">Submitted just now</p>
    </div>

    <div class="content">
      <div class="info-box" style="background: #f8f9fa;">
        <table class="data-table">
          <tr>
            <td>Name</td>
            <td><strong style="color: #1a1a1a;">${submission.name}</strong></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><a href="mailto:${submission.email}" style="color: #4d65ff;">${submission.email}</a></td>
          </tr>
          <tr>
            <td>Company</td>
            <td><strong style="color: #1a1a1a;">${submission.company}</strong></td>
          </tr>
          <tr>
            <td>Role</td>
            <td>${submission.role}</td>
          </tr>
          ${submission.interest ? `
          <tr>
            <td>Operation</td>
            <td><span class="highlight">${submission.interest}</span></td>
          </tr>
          ` : ''}
        </table>
      </div>

      ${submission.challenge ? `
      <div class="info-box">
        <p style="margin: 0 0 12px; font-weight: 600; color: #1a1a1a; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Operational Challenge</p>
        <p style="margin: 0; line-height: 1.7; color: #555; font-size: 14px;">${submission.challenge}</p>
      </div>
      ` : ''}

      <center style="margin: 24px 0;">
        <a href="mailto:${submission.email}?subject=Re: Your CoreShift Inquiry" class="button">
          Reply to Lead →
        </a>
        <a href="${supabaseLink}" class="button button-secondary">
          View in Supabase
        </a>
      </center>

      <div style="margin-top: 32px; text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px;">
        <p style="margin: 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Next Steps</p>
        <p style="margin: 8px 0 0; font-size: 14px; color: #555;">
          Review submission → Send personalized follow-up → Schedule strategy call
        </p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.5);">
        CoreShift Website Lead Notification
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Confirmation email sent TO the sender after quick message submission
 */
export function getQuickMessageConfirmationEmail(name: string, email: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your Message</title>
  <style>${baseStyles}</style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        Core<span class="logo-dot">·</span><span class="logo-bold">shift</span>
      </div>
      <p class="tagline">Agents as a Service</p>
    </div>

    <div class="content">
      <h2>Thanks for reaching out, ${name}.</h2>

      <p style="color: #555; font-size: 15px;">
        We've received your message and will respond within 24 hours at <strong>${email}</strong>.
      </p>

      <div class="info-box success-box">
        <p style="margin: 0 0 12px; font-weight: 600; color: #166534;">What happens next?</p>
        <ol class="steps-list">
          <li style="color: #166534;">Our team will review your message</li>
          <li style="color: #166534;">We'll respond within 24 hours (usually sooner)</li>
          <li style="color: #166534;">If needed, we'll schedule a call to discuss further</li>
        </ol>
      </div>

      <p style="margin-top: 32px; font-size: 13px; color: #888;">
        In the meantime, feel free to reply to this email with any additional information.
      </p>
    </div>

    <div class="footer">
      <p style="margin: 0;">
        <strong style="color: #fff;">CoreShift Ventures LLP</strong><br>
        <a href="mailto:contact@cshift.io">contact@cshift.io</a>
      </p>
      <p class="footer-note">
        You're receiving this because you sent us a message on coreshift.io
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}
