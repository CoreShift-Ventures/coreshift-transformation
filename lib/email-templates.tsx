/**
 * Email Templates for Resend
 * Professional HTML email templates for contact form submissions
 */

import type { ContactFormSubmission } from './supabase'

// Base email styles
const baseStyles = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .header {
    text-align: center;
    padding: 30px 0;
    border-bottom: 3px solid #ec5f2b;
  }
  .logo {
    font-size: 28px;
    font-weight: bold;
    color: #1a1a1a;
  }
  .logo-accent {
    color: #ec5f2b;
  }
  .content {
    padding: 40px 0;
  }
  .button {
    display: inline-block;
    padding: 14px 28px;
    background: #ec5f2b;
    color: white !important;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    margin: 20px 0;
  }
  .button:hover {
    background: #d54f20;
  }
  .info-box {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    border-left: 4px solid #ec5f2b;
  }
  .footer {
    text-align: center;
    padding: 30px 0;
    border-top: 1px solid #e0e0e0;
    font-size: 13px;
    color: #666;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  .data-table td {
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  .data-table td:first-child {
    font-weight: 600;
    width: 40%;
    color: #666;
  }
  .highlight {
    background: #fff4e6;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 600;
    color: #ec5f2b;
  }
`

// Intent display names
const INTENT_LABELS: Record<string, string> = {
  blueprint: 'Blueprint Sprint',
  build: 'Systems & Automation',
  advisory: 'Fractional COO'
}

/**
 * Confirmation email sent TO the lead after form submission
 */
export function getLeadConfirmationEmail(
  submission: Partial<ContactFormSubmission>,
  calendlyLink: string = 'https://calendly.com/your-link'
) {
  const intentLabel = INTENT_LABELS[submission.intent || 'blueprint'] || 'Blueprint Sprint'

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your ${intentLabel} Inquiry</title>
  <style>${baseStyles}</style>
</head>
<body>
  <div class="header">
    <div class="logo">
      Core<span class="logo-accent">Shift</span>
    </div>
    <p style="margin: 10px 0 0; color: #666;">Business Transformation Specialists</p>
  </div>

  <div class="content">
    <h2 style="color: #1a1a1a; margin-bottom: 20px;">
      Thanks, ${submission.name || 'there'}! 👋
    </h2>

    <p>We've received your <strong>${intentLabel}</strong> inquiry from <strong>${submission.company}</strong>.</p>

    <div class="info-box">
      <p style="margin: 0; font-size: 15px;">
        <strong>What happens next?</strong>
      </p>
      <ol style="margin: 15px 0 0; padding-left: 20px;">
        <li>We'll review your submission (usually within 24 hours)</li>
        <li>You'll hear from us at <strong>${submission.email}</strong></li>
        <li>We'll schedule a strategy call to discuss your needs</li>
      </ol>
    </div>

    <p><strong>Want to schedule right away?</strong></p>
    <p>Skip the wait and book a time that works for you:</p>

    <center>
      <a href="${calendlyLink}" class="button">
        📅 Book Your Strategy Call
      </a>
    </center>

    <p style="margin-top: 30px; font-size: 14px; color: #666;">
      <strong>In the meantime,</strong> feel free to reply to this email with any questions or urgent requests.
    </p>
  </div>

  <div class="footer">
    <p>
      <strong>CoreShift</strong><br>
      Email: <a href="mailto:contact@cshift.io" style="color: #ec5f2b;">contact@cshift.io</a><br>
      Website: <a href="https://coreshift.io" style="color: #ec5f2b;">coreshift.io</a>
    </p>
    <p style="margin-top: 20px; font-size: 12px;">
      You're receiving this because you submitted a ${intentLabel} inquiry on our website.
    </p>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Notification email sent TO you (admin) when someone submits the form
 */
export function getAdminNotificationEmail(submission: ContactFormSubmission) {
  const intentLabel = INTENT_LABELS[submission.intent || 'blueprint'] || 'Blueprint Sprint'
  const supabaseLink = `https://app.supabase.com/project/ekffkmcvtjicbwhhvxph/editor/contact_submissions`

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${intentLabel} Lead</title>
  <style>${baseStyles}</style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; color: #ec5f2b;">
      🚀 New ${intentLabel} Lead!
    </h1>
    <p style="margin: 10px 0 0; color: #666;">Submitted just now</p>
  </div>

  <div class="content">
    <div class="info-box" style="background: #fff4e6;">
      <h3 style="margin: 0 0 15px; color: #ec5f2b;">Contact Information</h3>
      <table class="data-table">
        <tr>
          <td>Name</td>
          <td><strong>${submission.name}</strong></td>
        </tr>
        <tr>
          <td>Email</td>
          <td><a href="mailto:${submission.email}">${submission.email}</a></td>
        </tr>
        <tr>
          <td>Company</td>
          <td><strong>${submission.company}</strong></td>
        </tr>
        <tr>
          <td>Role</td>
          <td>${submission.role}</td>
        </tr>
        <tr>
          <td>Interest</td>
          <td><span class="highlight">${intentLabel}</span></td>
        </tr>
      </table>
    </div>

    ${submission.challenge ? `
    <div class="info-box">
      <h3 style="margin: 0 0 15px; color: #333;">Operational Challenge</h3>
      <p style="margin: 0; line-height: 1.6;">${submission.challenge}</p>
    </div>
    ` : ''}

    <center>
      <a href="mailto:${submission.email}?subject=Re: Your ${intentLabel} Inquiry" class="button">
        ✉️ Reply to Lead
      </a>
      <a href="${supabaseLink}" class="button" style="background: #333;">
        📊 View in Supabase
      </a>
    </center>

    <p style="margin-top: 30px; text-align: center; font-size: 14px; color: #666;">
      <strong>Next Steps:</strong><br>
      1. Review the submission<br>
      2. Send personalized follow-up within 24 hours<br>
      3. Schedule strategy call
    </p>
  </div>

  <div class="footer">
    <p style="font-size: 12px;">
      This notification was sent from your CoreShift website contact form.<br>
      <a href="${supabaseLink}" style="color: #ec5f2b;">View all submissions in Supabase</a>
    </p>
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
  <div class="header">
    <div class="logo">
      Core<span class="logo-accent">Shift</span>
    </div>
    <p style="margin: 10px 0 0; color: #666;">Business Transformation Specialists</p>
  </div>

  <div class="content">
    <h2 style="color: #1a1a1a; margin-bottom: 20px;">
      Thanks for reaching out, ${name}! 👋
    </h2>

    <p>We've received your message and will respond within 24 hours at <strong>${email}</strong>.</p>

    <div class="info-box">
      <p style="margin: 0; font-size: 15px;">
        <strong>What happens next?</strong>
      </p>
      <ol style="margin: 15px 0 0; padding-left: 20px;">
        <li>Our team will review your message</li>
        <li>We'll respond within 24 hours (usually sooner!)</li>
        <li>If needed, we'll schedule a call to discuss further</li>
      </ol>
    </div>

    <p style="margin-top: 30px; font-size: 14px; color: #666;">
      <strong>In the meantime,</strong> feel free to reply to this email with any additional information or questions.
    </p>
  </div>

  <div class="footer">
    <p>
      <strong>CoreShift</strong><br>
      Email: <a href="mailto:contact@cshift.io" style="color: #ec5f2b;">contact@cshift.io</a><br>
      Website: <a href="https://coreshift.io" style="color: #ec5f2b;">coreshift.io</a>
    </p>
    <p style="margin-top: 20px; font-size: 12px;">
      You're receiving this because you sent us a message on our website.
    </p>
  </div>
</body>
</html>
  `.trim()
}
