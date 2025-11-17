# CoreShift Landing Page - Pre-Launch Checklist
**Target Domain:** coreshift.io
**Last Updated:** January 10, 2025

---

## 📊 ANALYTICS & TRACKING

### Google Analytics
- [ ] Create Google Analytics 4 property for coreshift.io
- [ ] Install GA4 tracking code in `app/layout.tsx`
- [ ] Set up conversion goals:
  - [ ] Free audit form submission
  - [ ] Blueprint CTA clicks
  - [ ] Platform CTA clicks
  - [ ] Advisory CTA clicks
  - [ ] Contact form submissions
  - [ ] Demo request submissions
- [ ] Test GA4 tracking in development
- [ ] Verify events firing correctly
- [ ] Set up custom events for:
  - [ ] Three paths card interactions
  - [ ] Pricing comparison views
  - [ ] FAQ expansions
  - [ ] Video plays
  - [ ] External link clicks

### Additional Tracking (Optional)
- [ ] Hotjar or Microsoft Clarity for heatmaps
- [ ] Mixpanel for funnel analysis
- [ ] PostHog for product analytics

---

## 📅 SCHEDULING & CALENDAR

### Calendly Integration
- [ ] Create Calendly account (or use existing)
- [ ] Set up appointment types:
  - [ ] Blueprint Discovery Call (30 min)
  - [ ] Platform Demo (45 min)
  - [ ] Advisory Consultation (30 min)
  - [ ] General Consultation (15 min)
- [ ] Customize booking pages with CoreShift branding
- [ ] Add Calendly links to:
  - [ ] Advisory page CTAs
  - [ ] Platform page CTAs
  - [ ] Contact page
  - [ ] Navigation menu
- [ ] Set up email notifications
- [ ] Connect to Google Calendar
- [ ] Add team members (if applicable)
- [ ] Test booking flow end-to-end

---

## 📧 EMAIL & FORMS

### Email Service Provider
- [ ] Choose ESP (Mailchimp, ConvertKit, SendGrid, etc.)
- [ ] Set up CoreShift sender email (hello@coreshift.io)
- [ ] Configure SPF and DKIM records
- [ ] Create email sequences:
  - [ ] Welcome/thank you after audit
  - [ ] Follow-up after consultation
  - [ ] Drip campaign for leads
  - [ ] Newsletter signup
- [ ] Design email templates matching brand

### Forms Implementation
- [ ] **Revenue Leak Audit Form**
  - [ ] Design form UI
  - [ ] Fields: Name, Email, Company, ARR, Churn Rate, Team Size
  - [ ] Connect to ESP
  - [ ] Add to hero CTA
  - [ ] Thank you page
  - [ ] Auto-email with audit results

- [ ] **Contact Form** (`/contact` page)
  - [ ] Fields: Name, Email, Company, Message, Path Interest
  - [ ] Spam protection (reCAPTCHA)
  - [ ] Email notification to your inbox
  - [ ] Auto-reply to submitter

- [ ] **Demo Request Forms**
  - [ ] Blueprint request
  - [ ] Platform demo request
  - [ ] Advisory consultation request

- [ ] **Newsletter Signup**
  - [ ] Footer signup form
  - [ ] Connect to ESP

---

## 💳 PAYMENT PROCESSING

### Stripe Integration
- [ ] Create Stripe account
- [ ] Set up products:
  - [ ] Blueprint - $1,000 one-time
  - [ ] Platform Starter - $10,000
  - [ ] Platform Growth - $12,500
  - [ ] Platform Enterprise - $15,000
- [ ] Create payment links or Stripe Checkout
- [ ] Add Buy Now buttons to:
  - [ ] Blueprint page
  - [ ] Platform pricing section
  - [ ] Three paths section
- [ ] Set up webhooks for payment confirmation
- [ ] Configure success/cancel URLs
- [ ] Test in Stripe test mode
- [ ] Enable production mode
- [ ] Set up tax collection (if applicable)

---

## 🔍 SEO OPTIMIZATION

### On-Page SEO
- [ ] **Meta Tags** (in `app/layout.tsx` and individual pages):
  - [ ] Title tags (50-60 chars)
  - [ ] Meta descriptions (150-160 chars)
  - [ ] Open Graph tags (og:title, og:description, og:image)
  - [ ] Twitter Card tags
  - [ ] Canonical URLs

- [ ] **Homepage SEO**:
  - Title: "CoreShift | AI Transformation Partner for Post-Sales Teams"
  - Description: "Transform post-sales operations with AI-powered blueprints, platform ownership, and expert advisory. Stop revenue leak, predict churn, automate workflows."

- [ ] **Platform Page SEO**:
  - Title: "CoreShift Engine | Own Your AI-Powered CS Platform"
  - Description: "Build and own your customer intelligence infrastructure. Predictive churn, expansion signals, automated workflows. One-time cost, lifetime ownership."

- [ ] **Blueprint Page SEO**:
  - Title: "Transformation Blueprint | Strategic CS Roadmap - CoreShift"
  - Description: "Get a custom post-sales transformation blueprint. Maturity assessment, 3-year roadmap, AI framework. $1,000, 7-10 days delivery."

- [ ] **Advisory Page SEO**:
  - Title: "Fractional CS Leadership | Expert Advisory Services"
  - Description: "Fractional Customer Experience Architect at 1/10th the cost. 20+ years enterprise CS expertise, hands-on execution support."

### Technical SEO
- [ ] Generate `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Set up 301 redirects (if migrating from old site)
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Add alt text to all images
- [ ] Implement structured data (JSON-LD):
  - [ ] Organization schema
  - [ ] Product schema
  - [ ] FAQ schema
  - [ ] BreadcrumbList schema
- [ ] Mobile-friendly test
- [ ] Page speed optimization
- [ ] Core Web Vitals check

### Search Console
- [ ] Add site to Google Search Console
- [ ] Submit sitemap
- [ ] Verify ownership
- [ ] Monitor indexing status
- [ ] Set up Bing Webmaster Tools

---

## 🎨 DESIGN & ASSETS

### Brand Assets
- [ ] Favicon (16x16, 32x32, 180x180)
- [ ] Apple touch icon
- [ ] Social media preview image (1200x630)
- [ ] Logo files (SVG, PNG)
- [ ] Company logos (SAP, IBM, Talend, HP, Algonomy) ✅

### Content Assets
- [ ] Product demo video
- [ ] Platform screenshots
  - [ ] Churn prediction dashboard
  - [ ] Expansion signals
  - [ ] Workflow automation
  - [ ] Customer segmentation
  - [ ] Revenue forecasting
  - [ ] Compliance tracking
- [ ] Founder photo (professional headshot)
- [ ] Blueprint sample/template preview
- [ ] POC interactive examples

---

## 🔐 SECURITY & COMPLIANCE

### Security
- [ ] HTTPS/SSL certificate (automatic with Vercel)
- [ ] Environment variables secured (.env.local)
- [ ] API keys protected
- [ ] Rate limiting on forms
- [ ] CAPTCHA on public forms

### Legal Pages
- [ ] **Privacy Policy** (`/privacy`)
  - [ ] Data collection practices
  - [ ] Cookie policy
  - [ ] Third-party services (GA, Calendly, Stripe)
  - [ ] GDPR compliance
  - [ ] Contact information

- [ ] **Terms of Service** (`/terms`)
  - [ ] Service description
  - [ ] Payment terms
  - [ ] Refund policy (14-day Blueprint, 90-day Platform)
  - [ ] Liability limitations
  - [ ] Intellectual property

- [ ] **Refund Policy** (can be part of Terms)
  - [ ] Blueprint: 14-day money-back guarantee
  - [ ] Platform: 90-day ROI guarantee (with conditions)

- [ ] Cookie consent banner
- [ ] GDPR compliance check
- [ ] Add legal page links to footer

---

## 📱 TECHNICAL TESTING

### Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge
- [ ] iOS Safari
- [ ] Android Chrome

### Device Testing
- [ ] Desktop (1920x1080, 1440x900)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 390x844, 414x896)

### Functionality Testing
- [ ] All internal links work
- [ ] All external links work (open in new tab)
- [ ] CTAs lead to correct destinations
- [ ] Forms submit successfully
- [ ] Calendly embeds work
- [ ] Payment links work
- [ ] Dark mode toggle works
- [ ] Navigation menu works (mobile & desktop)
- [ ] Animations don't cause jank
- [ ] Images load correctly
- [ ] Videos play properly
- [ ] No console errors

### Performance Testing
- [ ] Lighthouse audit (aim for 90+ on all metrics)
- [ ] PageSpeed Insights
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Check bundle size
- [ ] Optimize images
- [ ] Lazy load images
- [ ] Code splitting check

---

## 🌐 DOMAIN & HOSTING

### Domain Setup (coreshift.io)
- [ ] Purchase domain (if not owned)
- [ ] Update nameservers to Vercel
- [ ] Configure DNS records
- [ ] Add A records
- [ ] Add CNAME records
- [ ] Set up email forwarding (hello@coreshift.io)
- [ ] SSL certificate provisioned
- [ ] WWW redirect configured

### Vercel Deployment
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set environment variables:
  - [ ] GA4_MEASUREMENT_ID
  - [ ] STRIPE_PUBLIC_KEY
  - [ ] STRIPE_SECRET_KEY
  - [ ] EMAIL_API_KEY
  - [ ] etc.
- [ ] Add custom domain (coreshift.io)
- [ ] Enable automatic deployments
- [ ] Set up preview deployments
- [ ] Configure redirects (if needed)
- [ ] Test production build

---

## 📣 MARKETING SETUP

### Social Media
- [ ] Create/update LinkedIn company page
- [ ] Create/update Twitter profile
- [ ] Share launch announcement
- [ ] Add social media links to footer

### Email Signature
- [ ] Update email signature with coreshift.io link
- [ ] Add CTA (e.g., "Get Your Free Revenue Leak Audit")

### Launch Announcement
- [ ] Draft LinkedIn post
- [ ] Draft Twitter thread
- [ ] Email existing contacts
- [ ] Post in relevant communities

---

## ✅ FINAL PRE-LAUNCH CHECKLIST

### Content Review
- [ ] Proofread all copy
- [ ] Check for typos
- [ ] Verify all stats/claims
- [ ] Ensure consistent terminology ("Post-Sales" not "CS")
- [ ] Check all pricing is accurate
- [ ] Verify company credentials (SAP, IBM, etc.)

### User Journey Testing
- [ ] Walk through as first-time visitor
- [ ] Test all conversion paths:
  - [ ] Hero → Audit → Email
  - [ ] Three Paths → Blueprint → Payment
  - [ ] Three Paths → Platform → Demo Request
  - [ ] Three Paths → Advisory → Consultation
- [ ] Verify mobile experience
- [ ] Test forms end-to-end
- [ ] Confirm payment flow works

### Backup & Rollback
- [ ] Git commit all changes
- [ ] Tag release version (v1.0.0)
- [ ] Document rollback procedure
- [ ] Keep old site accessible (if applicable)

---

## 🚀 POST-LAUNCH MONITORING

### Week 1
- [ ] Monitor analytics daily
- [ ] Check form submissions
- [ ] Respond to inquiries within 24h
- [ ] Monitor Vercel logs for errors
- [ ] Track conversion rates
- [ ] Collect initial feedback

### Week 2-4
- [ ] A/B test CTAs
- [ ] Review heatmaps
- [ ] Optimize based on data
- [ ] Add testimonials as they come
- [ ] Update content based on questions

---

## 📊 SUCCESS METRICS TO TRACK

### Traffic
- [ ] Unique visitors
- [ ] Page views
- [ ] Bounce rate
- [ ] Time on site
- [ ] Traffic sources

### Conversions
- [ ] Audit form submissions
- [ ] Blueprint purchases
- [ ] Platform demo requests
- [ ] Advisory consultations booked
- [ ] Newsletter signups
- [ ] Conversion rate by traffic source

### Engagement
- [ ] Three paths interaction rate
- [ ] Video play rate
- [ ] FAQ expansion rate
- [ ] Scroll depth
- [ ] CTA click rates

### Revenue
- [ ] Revenue per visitor
- [ ] Average order value
- [ ] Path preference (Blueprint vs Platform vs Advisory)
- [ ] Upgrade rate (Blueprint → Platform)

---

## 🔧 TOOLS & SERVICES NEEDED

### Essential
- [ ] Vercel (hosting) - FREE ✅
- [ ] Google Analytics 4 - FREE ✅
- [ ] Calendly - FREE or $10/mo
- [ ] Email service (SendGrid/Mailchimp) - FREE tier available
- [ ] Stripe - Pay per transaction (2.9% + 30¢)

### Recommended
- [ ] Hotjar or Microsoft Clarity - FREE tiers available
- [ ] Grammarly for copy proofing - FREE tier
- [ ] Canva for graphics - FREE tier
- [ ] Loom for demo videos - FREE tier

### Optional
- [ ] Intercom/Drift for live chat - $$$
- [ ] HubSpot CRM - FREE tier
- [ ] Zapier for automations - FREE tier limited
- [ ] SEMrush for SEO - $$$

---

## ESTIMATED TIMELINE

**If working full-time:**
- Content & Forms: 2-3 days
- Integrations (Analytics, Calendly, Stripe): 1-2 days
- Testing & QA: 1-2 days
- SEO & Legal: 1 day
- **Total: 5-8 days**

**If working part-time:**
- **Total: 2-3 weeks**

---

## PRIORITY LEVELS

### 🔴 MUST HAVE (Launch Blockers)
- Analytics setup
- Contact forms working
- Payment processing
- Domain/hosting configured
- Mobile responsive
- No broken links
- Legal pages (Privacy, Terms)

### 🟡 SHOULD HAVE (Launch Soon After)
- Calendly integration
- Audit calculator
- SEO optimization
- Social media setup

### 🟢 NICE TO HAVE (Post-Launch)
- Heatmaps
- A/B testing
- Live chat
- Advanced analytics

---

**Current Status:** ~30% complete on this checklist
**Estimated Time to Launch-Ready:** 1-2 weeks with focused work
