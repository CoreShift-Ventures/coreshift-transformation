# Resend Email Setup Guide

This guide will help you set up Resend for sending email notifications from the Quick Message modal.

## What is Resend?

Resend is a modern email API that makes it easy to send transactional emails. We use it to send notifications when someone submits a quick message through the website.

## Setup Steps

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

**Free Tier Includes:**
- 3,000 emails/month
- 100 emails/day
- Perfect for getting started

### 2. Get Your API Key

1. Log into your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "CoreShift Production")
5. Select permissions: **Sending access**
6. Click **Add**
7. **Copy the API key** (you won't be able to see it again!)

### 3. Add API Key to Your Project

#### Local Development

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your Resend API key:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Restart your Next.js development server

#### Production (Vercel)

1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production (and Preview if needed)
4. Click **Save**
5. Redeploy your project for changes to take effect

### 4. Verify Your Domain (Optional but Recommended)

For production use, you should verify your sending domain to improve deliverability and remove the "via resend.dev" label.

#### Option A: Use Your Custom Domain

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `cshift.io`)
4. Add the provided DNS records to your domain:
   - **SPF** record
   - **DKIM** record
   - **DMARC** record (recommended)
5. Wait for DNS propagation (up to 48 hours, usually faster)
6. Verify the domain in Resend dashboard

#### Option B: Use Resend Subdomain (Easier)

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter a subdomain (e.g., `mail.cshift.io`)
4. Follow the DNS setup instructions
5. Update the `from` address in `/app/actions/quick-message.ts`:

```typescript
from: 'CoreShift Notifications <notifications@mail.cshift.io>',
```

### 5. Update Email Addresses

Once your domain is verified, update the email addresses in the code:

#### `/app/actions/quick-message.ts`

```typescript
// Line 56-57
from: 'CoreShift Notifications <notifications@cshift.io>',
to: 'contact@cshift.io',
```

Make sure both addresses use your verified domain.

### 6. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your site (http://localhost:3000)

3. Click the **Mail icon** in the navigation or footer

4. Fill out the quick message form

5. Submit the form

6. Check:
   - Your Supabase `quick_messages` table for the saved message
   - Your email inbox (contact@cshift.io) for the notification
   - Resend dashboard **Logs** section to see if email was sent

### 7. Monitor Email Activity

You can monitor all email activity in the Resend dashboard:

1. Go to **Logs** in the sidebar
2. View all sent emails, their status, and any errors
3. Click on individual emails to see:
   - Delivery status
   - Opens and clicks (if tracking enabled)
   - Raw email content
   - Bounce/complaint information

## Email Template

The current email template includes:
- Clean, professional HTML design
- Sender name and email
- Message content
- Link back to Supabase dashboard
- Mobile-responsive layout

You can customize the template in `/app/actions/quick-message.ts` (lines 60-82).

## Troubleshooting

### Email Not Sending

**Problem**: Form submits but no email is received

**Solutions**:
1. Check Resend dashboard **Logs** for error messages
2. Verify your API key is correct in `.env.local`
3. Make sure you restarted your dev server after adding the API key
4. Check spam/junk folder
5. Verify the `to` email address is correct

### "Domain Not Verified" Error

**Problem**: Emails fail with domain verification error

**Solutions**:
1. Use Resend's default sending domain for testing:
   ```typescript
   from: 'onboarding@resend.dev'
   ```
2. Verify your custom domain DNS records in Resend dashboard
3. Wait for DNS propagation (up to 48 hours)

### Rate Limit Errors

**Problem**: Getting rate limit errors

**Solutions**:
1. Free tier: 100 emails/day, 3,000/month
2. Add delays between test emails
3. Upgrade to paid plan if needed: $20/month for 50,000 emails

### API Key Not Working

**Problem**: Getting authentication errors

**Solutions**:
1. Verify API key is copied correctly (no extra spaces)
2. Make sure it starts with `re_`
3. Regenerate a new API key in Resend dashboard
4. Check API key permissions include "Sending access"

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore` by default
2. **Rotate API keys regularly** - Especially if exposed
3. **Use environment-specific keys** - Different keys for dev/staging/prod
4. **Monitor for abuse** - Check Resend logs for suspicious activity
5. **Set up SPF/DKIM** - Improves deliverability and security

## Upgrading Plans

If you need more emails:

| Plan | Price | Emails/Month | Emails/Day |
|------|-------|--------------|------------|
| Free | $0 | 3,000 | 100 |
| Pro | $20 | 50,000 | Unlimited |
| Business | $80 | 100,000 | Unlimited |

Visit [https://resend.com/pricing](https://resend.com/pricing) for current pricing.

## Support

- **Resend Docs**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: support@resend.com
- **API Reference**: [https://resend.com/docs/api-reference/introduction](https://resend.com/docs/api-reference/introduction)

## Next Steps

1. ✅ Create Resend account
2. ✅ Get API key
3. ✅ Add to `.env.local`
4. ✅ Test the quick message modal
5. ✅ Verify domain for production
6. ✅ Update email addresses in code
7. ✅ Deploy to Vercel with environment variables
8. ✅ Monitor email logs

Once setup is complete, your Quick Message modal will send email notifications to contact@cshift.io whenever someone submits a message!
