# CoreShift Platform Hosting Model

**Last Updated:** November 2025
**Status:** Strategic Planning Document

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Hosting Model Overview](#hosting-model-overview)
3. [Option 1: CoreShift-Managed Hosting](#option-1-coreshift-managed-hosting)
4. [Option 2: Customer-Owned Hosting](#option-2-customer-owned-hosting)
5. [IP Protection Strategy](#ip-protection-strategy)
6. [Technical Architecture](#technical-architecture)
7. [Implementation Roadmap](#implementation-roadmap)
8. [Pricing Model](#pricing-model)
9. [Legal & Contracts](#legal--contracts)
10. [Step-by-Step Setup Guide](#step-by-step-setup-guide)

---

## Executive Summary

CoreShift offers two hosting models to serve different customer segments:

| Model | Best For | Your Investment | Customer Pays | Your Margin |
|-------|----------|-----------------|---------------|-------------|
| **CoreShift-Managed** | $2M-$15M ARR companies wanting turnkey | $3-10K/year (AWS) | $6-18K/year recurring | 50-80% |
| **Customer-Owned** | $15M+ ARR, compliance-heavy, want control | $0/year (they pay AWS) | $20-40K one-time setup + $6-12K/year support (optional) | 100% margin on services |

**Key Positioning Differences:**

**CoreShift-Managed** = Traditional SaaS subscription model, just 70-80% cheaper than competitors
- Monthly/annual subscription required
- Platform stops if they stop paying
- Positioned as "Managed service at fraction of cost"

**Customer-Owned** = Build once, optional ongoing support
- One-time build fee, not recurring license
- After setup, support is **optional**
- Platform keeps running even if they stop paying for support (just no updates)
- Positioned as "Build once, your infrastructure, your choice"

**Recommendation:** Start with CoreShift-Managed for first 10-20 customers, then offer Customer-Owned as premium option.

---

## Hosting Model Overview

### CoreShift-Managed Hosting
**"Managed CS Platform at 70% Less Than Competitors"**

**What it is:**
- Traditional SaaS subscription model
- You host in YOUR AWS account
- Customer pays monthly/annual recurring fees
- Turnkey solution - zero infrastructure work for them

**What happens when they stop paying:**
- Platform access revoked immediately
- Data export provided (30-day grace period)
- Like any SaaS - pay to play

**Best for:**
- Companies wanting turnkey solution
- $2M-$15M ARR companies
- Teams without DevOps resources
- Fast onboarding (7-10 days)

**Key message:** "All the power of enterprise CS platforms, 70-80% cheaper, fully managed"

---

### Customer-Owned Hosting
**"Build Once, Deploy to Your Cloud, Support is Optional"**

**What it is:**
- One-time build engagement ($20K-40K)
- Deployed to THEIR AWS/GCP/Azure account
- They pay cloud provider directly (~$200-400/month)
- After setup, ongoing support is **OPTIONAL**

**What happens when they stop paying support:**
- ✅ Platform keeps running (on their AWS)
- ✅ All features still work
- ✅ Their data stays accessible
- ❌ No new updates or features
- ❌ No bug fixes or security patches
- ❌ No technical support

**Support packages (optional after Year 1):**
- Basic: $6K/year - Quarterly updates, email support
- Professional: $9K/year - Monthly updates, priority support
- Enterprise: $12K/year - Weekly updates, 24/7 support, dedicated CSM

**Best for:**
- Companies $15M+ ARR
- Regulated industries (HIPAA, SOC2 compliance)
- Companies with DevOps teams
- Long-term strategic investment mindset

**Key message:** "Pay once to build, host on your infrastructure, choose if you want ongoing support"

---

## Option 1: CoreShift-Managed Hosting

### Technical Architecture

```
Your AWS Account (us-east-1)
│
├── VPC: Customer-A (10.0.0.0/16)
│   ├── Public Subnet (Load Balancer)
│   │   └── Application Load Balancer
│   │       └── HTTPS (*.customer-a.coreshift.io)
│   │
│   ├── Private Subnet (Application)
│   │   └── ECS Fargate Cluster
│   │       ├── Web Service (Next.js)
│   │       ├── API Service (Node.js)
│   │       └── Background Jobs (Temporal)
│   │
│   └── Private Subnet (Database)
│       └── RDS PostgreSQL (encrypted)
│
├── VPC: Customer-B (10.1.0.0/16)
│   └── [Same structure as Customer-A]
│
└── Shared Services
    ├── Route 53 (DNS)
    ├── CloudFront (CDN)
    ├── S3 (File Storage)
    └── CloudWatch (Monitoring)
```

### Cost Breakdown (Per Customer)

| Service | Monthly Cost | Annual Cost | What It Does |
|---------|--------------|-------------|--------------|
| ECS Fargate (2 vCPU, 4GB RAM) | $73 | $876 | Runs your application |
| RDS PostgreSQL (db.t4g.small) | $30 | $360 | Database |
| Application Load Balancer | $23 | $276 | Routes traffic |
| Data Transfer (100GB/month) | $9 | $108 | Bandwidth |
| CloudWatch Logs | $5 | $60 | Monitoring |
| S3 Storage (50GB) | $1.15 | $14 | File storage |
| Route 53 | $0.50 | $6 | DNS |
| **TOTAL** | **$141.65** | **$1,700** | |
| **+ 20% Buffer** | **$170** | **$2,040** | Safety margin |

**Your Pricing:**
- Charge customer: **$500-800/month** ($6K-9.6K/year)
- Your profit: **$330-630/month** (66-79% margin)

### What You Need to Set Up

#### 1. AWS Account Setup (One-time, 2 hours)

**Cost:** Free AWS account + $5-10/month for your own resources

**Steps:**
1. Go to https://aws.amazon.com
2. Click "Create an AWS Account"
3. Enter your business email (e.g., admin@coreshift.io)
4. Add credit card (won't be charged until you deploy)
5. Choose "Business" account type
6. Complete identity verification

**Security Setup:**
```bash
# Enable MFA (Multi-Factor Authentication)
1. Install Google Authenticator on phone
2. AWS Console → Your Name → Security Credentials
3. Activate MFA → Virtual MFA Device
4. Scan QR code with app

# Create IAM admin user (don't use root)
1. AWS Console → IAM → Users → Add User
2. Username: admin
3. Enable: "AWS Management Console access"
4. Attach policy: "AdministratorAccess"
5. Save credentials in password manager
```

#### 2. Install Required Tools (One-time, 30 mins)

**On your Mac/PC:**

```bash
# Install Homebrew (Mac) - paste in Terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install AWS CLI
brew install awscli

# Configure AWS credentials
aws configure
# Enter:
# - AWS Access Key ID: [from IAM user]
# - AWS Secret Access Key: [from IAM user]
# - Default region: us-east-1
# - Default output format: json

# Install Docker Desktop
# Download from: https://www.docker.com/products/docker-desktop
# Install and start Docker Desktop

# Install Terraform (infrastructure as code)
brew install terraform

# Verify installations
aws --version        # Should show version 2.x
docker --version     # Should show version 20.x+
terraform --version  # Should show version 1.x
```

#### 3. Prepare Your Application (Per Customer, 4 hours)

**Step 1: Containerize Your App**

Create `Dockerfile` in your project root:

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

**Step 2: Build Docker Image**

```bash
# Navigate to your project
cd /path/to/your/project

# Build image
docker build -t coreshift-platform:latest .

# Test locally
docker run -p 3000:3000 coreshift-platform:latest
# Visit http://localhost:3000 to verify it works

# If it works, push to AWS:
# (We'll set this up in deployment section)
```

#### 4. Deploy to AWS (Per Customer, 2-3 hours first time)

**Option A: Use AWS Console (Beginner-Friendly)**

1. **Create VPC:**
   - AWS Console → VPC → Create VPC
   - Name: `coreshift-customer-a`
   - IPv4 CIDR: `10.0.0.0/16`
   - Click "Create VPC"

2. **Create Database:**
   - AWS Console → RDS → Create Database
   - Engine: PostgreSQL 15
   - Template: Dev/Test (cheaper)
   - DB Instance: db.t4g.micro
   - Username: `coreshift_admin`
   - Auto-generate password (save it!)
   - VPC: Select `coreshift-customer-a`
   - Click "Create Database"

3. **Create ECS Cluster:**
   - AWS Console → ECS → Create Cluster
   - Name: `coreshift-customer-a`
   - Infrastructure: AWS Fargate
   - Click "Create"

4. **Push Docker Image:**
   ```bash
   # Create ECR repository
   aws ecr create-repository --repository-name coreshift-platform

   # Login to ECR
   aws ecr get-login-password --region us-east-1 | \
     docker login --username AWS --password-stdin \
     [YOUR_ACCOUNT_ID].dkr.ecr.us-east-1.amazonaws.com

   # Tag image
   docker tag coreshift-platform:latest \
     [YOUR_ACCOUNT_ID].dkr.ecr.us-east-1.amazonaws.com/coreshift-platform:latest

   # Push image
   docker push [YOUR_ACCOUNT_ID].dkr.ecr.us-east-1.amazonaws.com/coreshift-platform:latest
   ```

5. **Create ECS Service:**
   - ECS → Clusters → coreshift-customer-a
   - Create Service
   - Launch type: Fargate
   - Task definition: Create new
     - Container image: [Your ECR URL]
     - Port: 3000
     - CPU: 512 (.5 vCPU)
     - Memory: 1GB
   - Load balancer: Create new ALB
   - Click "Create"

6. **Setup DNS:**
   - Route 53 → Create Hosted Zone
   - Domain: `customer-a.coreshift.io`
   - Add A record → Alias to ALB

**Option B: Use Terraform (Advanced, Automated)**

We'll provide this script later once you're comfortable with Option A.

---

## Option 2: Customer-Owned Hosting

### How It Works

```
Customer's AWS Account
│
├── You have "PowerUser" IAM access (no billing)
│
├── Deployment Pipeline (GitHub Actions)
│   └── Triggers on your approval → Deploys to their AWS
│
├── Infrastructure (Same as Option 1)
│   ├── ECS Fargate (Docker containers)
│   ├── RDS PostgreSQL
│   └── Load Balancer
│
└── Customer pays AWS directly
    You charge $20-40K setup + $5-12K/year support
```

### IP Protection Strategy

#### 1. Deploy Only Docker Images (Never Source Code)

**What Customer Sees:**
```
❌ Source code (app/, components/, lib/)
✅ Docker image (compiled, obfuscated)
```

**How to Build Protected Image:**

```dockerfile
# Multi-stage build (production)
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Production image (source code removed)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Add obfuscation
RUN npm install -g javascript-obfuscator
RUN javascript-obfuscator .next/server --output .next/server

CMD ["npm", "start"]
```

**What's Protected:**
- ✅ Business logic is compiled
- ✅ AI models/algorithms are binary
- ✅ Database schema only visible via app
- ✅ API keys in encrypted secrets

**What Customer Gets:**
- ✅ Running application
- ✅ All features working
- ✅ Performance metrics
- ❌ Cannot see code
- ❌ Cannot modify code

#### 2. License Key Validation

Add to your application startup:

```typescript
// lib/license.ts
export async function validateLicense() {
  const licenseKey = process.env.CORESHIFT_LICENSE_KEY;

  // Check license with your server
  const response = await fetch('https://license.coreshift.io/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: licenseKey,
      customerId: process.env.CUSTOMER_ID,
      version: process.env.APP_VERSION
    })
  });

  if (!response.ok) {
    console.error('Invalid license. Application will not start.');
    process.exit(1);
  }

  return response.json();
}

// pages/api/health.ts
import { validateLicense } from '@/lib/license';

export default async function handler(req, res) {
  try {
    await validateLicense();
    res.status(200).json({ status: 'healthy' });
  } catch (error) {
    res.status(500).json({ status: 'license_invalid' });
  }
}
```

#### 3. Deployment Process (You Control)

**Setup once per customer:**

```bash
# Customer creates IAM user for you
# They give you these credentials (PowerUser role, not billing):
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_ACCOUNT_ID=123456789012

# You deploy via your CI/CD pipeline
# Customer CANNOT deploy themselves
```

**GitHub Actions Workflow (You trigger):**

```yaml
# .github/workflows/deploy-customer.yml
name: Deploy to Customer AWS

on:
  workflow_dispatch:
    inputs:
      customer_id:
        description: 'Customer ID'
        required: true
      environment:
        description: 'Environment'
        required: true
        default: 'production'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets[format('AWS_KEY_{0}', github.event.inputs.customer_id)] }}
          aws-secret-access-key: ${{ secrets[format('AWS_SECRET_{0}', github.event.inputs.customer_id)] }}
          aws-region: us-east-1

      - name: Build Docker image
        run: |
          docker build -t coreshift:${{ github.sha }} .

      - name: Push to customer's ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin \
            ${{ secrets[format('AWS_ACCOUNT_{0}', github.event.inputs.customer_id)] }}.dkr.ecr.us-east-1.amazonaws.com
          docker tag coreshift:${{ github.sha }} \
            ${{ secrets[format('AWS_ACCOUNT_{0}', github.event.inputs.customer_id)] }}.dkr.ecr.us-east-1.amazonaws.com/coreshift:latest
          docker push ${{ secrets[format('AWS_ACCOUNT_{0}', github.event.inputs.customer_id)] }}.dkr.ecr.us-east-1.amazonaws.com/coreshift:latest

      - name: Deploy to ECS
        run: |
          aws ecs update-service \
            --cluster coreshift-${{ github.event.inputs.customer_id }} \
            --service coreshift-app \
            --force-new-deployment
```

**Customer Agreement:**
- ✅ You have deploy access to their AWS
- ✅ You handle all updates
- ✅ They cannot modify containers
- ❌ You cannot see their billing
- ❌ You cannot delete their account

---

## Pricing Model

### CoreShift-Managed Pricing

| Customer ARR | Monthly Fee | Annual Fee | Your Cost | Your Profit |
|--------------|-------------|------------|-----------|-------------|
| $2M - $5M | $500/mo | $6,000/yr | $2,040/yr | $3,960 (66%) |
| $5M - $10M | $650/mo | $7,800/yr | $2,040/yr | $5,760 (74%) |
| $10M+ | $800/mo | $9,600/yr | $2,040/yr | $7,560 (79%) |

**What's Included:**
- ✅ 99.9% uptime SLA
- ✅ Managed backups (daily)
- ✅ Security patching
- ✅ Monitoring & alerts
- ✅ Platform updates
- ✅ Support (email, 48h response)

**Upgrade Path:**
- Additional environments (staging): +$200/mo
- Priority support (24h response): +$500/mo
- Custom integrations: Quoted separately

### Customer-Owned Pricing

**Important:** After Year 1, support is **OPTIONAL**. Platform keeps running even without support.

| What Customer Pays | Year 1 | Year 2+ (Optional) | Notes |
|-------------------|--------|-------------------|-------|
| **Platform Build (One-time)** | $20,000 - $40,000 | Paid | Includes deployment + training |
| **Year 1 Support (Included)** | Included | - | First year support mandatory |
| **Year 2+ Support (OPTIONAL)** | - | $6,000 - $12,000 | Their choice to continue |
| **AWS Infrastructure** | ~$2,400-4,800 | ~$2,400-4,800 | They pay AWS directly |
| **Year 1 Total** | $22,400 - $44,800 | - | |
| **Year 2+ Total (if they want support)** | - | $8,400 - $16,800 | |
| **Year 2+ Total (if they skip support)** | - | $2,400-4,800 (AWS only) | Platform still works! |

**Pricing Tiers:**

**Starter:** $20K setup + Year 1 support included → Year 2+: $6K/year (optional)
- Standard deployment
- Basic monitoring
- Email support (48h)
- Quarterly updates
- **If they skip support:** Platform frozen, still runs

**Professional:** $30K setup + Year 1 support included → Year 2+: $9K/year (optional)
- Custom deployment config
- Advanced monitoring + alerts
- Priority support (24h)
- Monthly updates
- Dedicated Slack channel
- **If they skip support:** Platform frozen, still runs

**Enterprise:** $40K setup + Year 1 support included → Year 2+: $12K/year (optional)
- Fully custom deployment
- 24/7 monitoring
- Phone + Slack support (4h response)
- Weekly updates available
- Dedicated CSM
- SLA guarantees
- **If they skip support:** Platform frozen, still runs

**3-Year Cost Comparison:**

| Scenario | Year 1 | Year 2 | Year 3 | Total 3 Years |
|----------|--------|--------|--------|---------------|
| **Starter + Keep Support** | $22.4K | $8.4K | $8.4K | **$39.2K** |
| **Starter + Drop Support** | $22.4K | $2.4K | $2.4K | **$27.2K** |
| **Professional + Keep Support** | $32.4K | $11.4K | $11.4K | **$55.2K** |
| **Enterprise + Keep Support** | $42.4K | $14.4K | $14.4K | **$71.2K** |
| **vs Traditional CS SaaS** | $50-120K | $50-120K | $50-120K | **$150-360K** |

**Savings vs Traditional SaaS:** 70-85% over 3 years

---

## Legal & Contracts

### CoreShift-Managed Hosting Agreement

**Key Terms:**

```markdown
## CoreShift Managed Hosting Agreement

### 1. Services Provided
CoreShift will provide:
- Hosting infrastructure on CoreShift-managed AWS account
- 99.9% uptime SLA (excludes scheduled maintenance)
- Daily automated backups (retained 30 days)
- Security patching and monitoring
- Platform updates and improvements

### 2. Customer Obligations
Customer agrees to:
- Pay monthly/annual fees per agreed schedule
- Provide 30 days notice for cancellation
- Use platform in compliance with terms of service
- Not reverse engineer or attempt to access underlying code

### 3. Data Ownership
- Customer owns all their business data
- CoreShift owns platform code and IP
- Data export available anytime (PostgreSQL dump + CSV)
- Upon cancellation, data retained 90 days then deleted

### 4. Intellectual Property
- Customer receives license to USE platform, not own code
- CoreShift retains all IP rights
- Customer cannot sublicense or resell
- Updates included in subscription

### 5. Service Levels
- 99.9% uptime (8.76 hours downtime/year allowed)
- Scheduled maintenance: max 4 hours/month
- Emergency maintenance: as needed with 2h notice
- SLA credits: 5% monthly fee per 1% below SLA

### 6. Support
- Email support: 48 hour response time
- Critical issues: 8 hour response time
- Available: Monday-Friday, 9am-6pm ET
- After-hours: Emergency only

### 7. Pricing & Payment
- Monthly: Due on 1st of month, auto-billed
- Annual: 10% discount, due upfront
- Price increases: 30 days notice, max 10%/year
- Late payment: 1.5% monthly interest + suspension after 15 days

### 8. Termination
- Customer may cancel with 30 days notice
- CoreShift may terminate for non-payment (15 days past due)
- Upon termination: Data export provided, access revoked
- No refunds for partial months

### 9. Limitations
CoreShift not liable for:
- Data loss due to customer error
- Third-party service failures (AWS outages)
- Damages exceeding 3 months fees
- Consequential or indirect damages

### 10. Security & Compliance
- Data encrypted at rest (AES-256)
- Data encrypted in transit (TLS 1.3)
- SOC2 Type II certification (in progress)
- GDPR compliant
- Customer responsible for user access controls
```

### Customer-Owned Hosting Agreement

**Key Terms:**

```markdown
## CoreShift Customer-Owned Hosting Agreement

### 1. Services Provided
CoreShift will:
- Deploy CoreShift Platform to customer's AWS account
- Provide Docker containers (compiled code only)
- Maintain deployment pipeline access
- Provide updates and support per tier selected

### 2. Customer Obligations
Customer will:
- Provide AWS account with PowerUser IAM access
- Pay AWS infrastructure costs directly to AWS
- Pay CoreShift setup + annual support fees
- Not attempt to reverse engineer Docker containers
- Maintain at least 1 year contract (setup fee non-refundable)

### 3. Deployment Access
CoreShift requires:
- IAM PowerUser role (NO billing access)
- Access to deploy via CI/CD pipeline
- Read access to CloudWatch logs for debugging
- Customer cannot deploy platform themselves

### 4. Intellectual Property Protection
- Customer receives USE license, not source code
- Docker containers contain compiled/obfuscated code
- License key required for platform to operate
- CoreShift retains all IP rights
- Customer may not:
  - Reverse engineer containers
  - Share containers with third parties
  - Attempt to extract source code
  - Create derivative works

### 5. License Keys
- Unique license key per customer
- Validated with CoreShift servers on startup
- 30-day grace period for connectivity issues
- Revocation for breach of contract or non-payment

### 6. Updates & Maintenance
Included in annual support:
- Security patches (monthly)
- Feature updates (quarterly)
- Bug fixes (as needed)
- Infrastructure updates

Customer must:
- Accept updates within 30 days of notification
- Maintain infrastructure specifications
- Keep license keys current

### 7. Infrastructure Requirements
Minimum AWS resources:
- ECS Fargate: 2 vCPU, 4GB RAM
- RDS PostgreSQL: db.t4g.small or larger
- Application Load Balancer
- 50GB S3 storage
- Estimated cost: $2,000-5,000/year (customer pays AWS)

### 8. Support Levels
See pricing tiers above. Includes:
- Email support (48h, 24h, or 4h response per tier)
- Access to documentation portal
- Emergency hotline (Professional/Enterprise)
- Deployment assistance

### 9. Data & Security
- Customer owns and controls all data
- Data never leaves customer's AWS account
- CoreShift cannot access production data
- Customer responsible for backups
- Customer responsible for AWS security config

### 10. Warranty & Limitations
CoreShift warrants:
- Platform will function per documentation
- Updates won't break core functionality
- Security vulnerabilities patched within 72h

CoreShift NOT liable for:
- Customer AWS costs
- AWS service failures
- Damages exceeding annual support fee
- Data loss due to customer AWS misconfiguration

### 11. Termination
- Minimum 1 year contract
- After year 1: 90 days notice required
- Setup fee non-refundable
- Upon termination:
  - CoreShift revokes license keys
  - Platform stops functioning within 30 days
  - Customer retains all data
  - Deployment access removed

### 12. Source Code Escrow (Optional Add-on)
For additional $10,000 one-time fee:
- Source code held in escrow (Iron Mountain)
- Released to customer ONLY if:
  - CoreShift goes out of business
  - CoreShift breaches contract
  - CoreShift abandons product
- Customer still bound by IP restrictions
```

---

## Step-by-Step Setup Guide

### Phase 1: Foundation (Week 1)

#### Day 1-2: AWS Account Setup

**Morning (2 hours):**
1. Create AWS account (see instructions above)
2. Enable MFA for root account
3. Create IAM admin user
4. Save credentials in 1Password or LastPass

**Afternoon (2 hours):**
1. Set up billing alerts
   - AWS Console → Billing → Budgets
   - Create budget: $500/month
   - Email alerts at 50%, 80%, 100%

2. Enable AWS Cost Explorer
   - See where money is going
   - Track per-customer costs

#### Day 3-4: Development Environment

**Install Tools (3 hours):**
```bash
# Follow installation section above
- AWS CLI
- Docker Desktop
- Terraform
- Git
- Node.js 18+
```

**Test Deployment Locally (3 hours):**
```bash
# Clone your project
git clone [your-repo]
cd [your-repo]

# Build Docker image
docker build -t coreshift-test .

# Run container
docker run -p 3000:3000 -e DATABASE_URL="postgresql://..." coreshift-test

# Test in browser
open http://localhost:3000
```

#### Day 5: First Customer Deployment (Test)

**Deploy to AWS (6 hours):**

1. **Create VPC (1 hour)**
   - Follow "Create VPC" steps above
   - Name: `coreshift-test`

2. **Create Database (1 hour)**
   - Follow "Create Database" steps above
   - Wait 10-15 mins for provisioning
   - Note down endpoint and password

3. **Push Docker Image (1 hour)**
   - Create ECR repository
   - Build and push image
   - Verify image in ECR console

4. **Create ECS Service (2 hours)**
   - Follow ECS steps above
   - Configure environment variables
   - Wait for service to stabilize

5. **Test Application (1 hour)**
   - Get Load Balancer URL from console
   - Test all major features
   - Check logs in CloudWatch

### Phase 2: Production Customer (Week 2)

**Monday: Customer Kickoff**
- Sales handoff call
- Get customer subdomain preference
- Set expectations (7-10 day delivery)

**Tuesday-Wednesday: Infrastructure Setup**
- Create new VPC for customer
- Provision RDS database
- Run database migrations
- Test database connectivity

**Thursday: Application Deployment**
- Build customer-specific image
- Push to ECR
- Deploy to ECS
- Configure load balancer

**Friday: DNS & SSL**
- Set up Route 53 hosted zone
- Configure SSL certificate (AWS Certificate Manager)
- Point customer's subdomain (or provide ours)
- Test HTTPS access

**Monday: Data Migration & Testing**
- Import customer's sample data
- Run integration tests
- Customer UAT (User Acceptance Testing)
- Fix any issues

**Tuesday: Go Live**
- Switch DNS to production
- Monitor for 24 hours
- Customer training session
- Mark deployment complete

### Phase 3: Scale (Month 2-3)

**Week 3-4: Automate Deployments**
- Set up Terraform templates
- Create deployment scripts
- Document process for team
- Test on 2nd customer

**Week 5-8: Monitoring & Alerts**
- Set up CloudWatch dashboards
- Configure PagerDuty/OpsGenie
- Create runbooks for common issues
- Train support team

**Month 3+: Optimize Costs**
- Review AWS bills per customer
- Right-size resources
- Enable auto-scaling
- Consider Reserved Instances (40% savings)

---

## Monitoring & Operations

### Daily Checks (15 mins)

```bash
# Check all customer health
aws ecs list-services --cluster coreshift-customer-a
aws ecs describe-services --cluster coreshift-customer-a --services coreshift-app

# Check databases
aws rds describe-db-instances --filters "Name=db-instance-id,Values=coreshift-*"

# Check recent errors
aws logs tail /ecs/coreshift-customer-a --follow --since 24h | grep ERROR
```

### Weekly Tasks (1 hour)

- Review AWS costs (actual vs budget)
- Check for security updates
- Review support tickets
- Update documentation

### Monthly Tasks (4 hours)

- Customer health check calls
- Review performance metrics
- Plan infrastructure improvements
- Security audit

---

## Troubleshooting Guide

### Customer Reports "Site is Down"

**Step 1: Check ECS Service (2 mins)**
```bash
aws ecs describe-services \
  --cluster coreshift-customer-a \
  --services coreshift-app

# Look for "runningCount": 1 or more
# If 0, service is down
```

**Step 2: Check Recent Logs (5 mins)**
```bash
aws logs tail /ecs/coreshift-customer-a --follow --since 1h

# Look for:
# - Database connection errors
# - Memory issues
# - Application crashes
```

**Step 3: Check Database (3 mins)**
```bash
aws rds describe-db-instances --db-instance-identifier coreshift-customer-a

# Status should be "available"
# If not, may be maintenance window
```

**Step 4: Restart Service (5 mins)**
```bash
aws ecs update-service \
  --cluster coreshift-customer-a \
  --service coreshift-app \
  --force-new-deployment

# Wait 3-5 minutes
# Check if runningCount increased
```

### High AWS Bill

**Find the culprit:**
```bash
# Check which customer is expensive
aws ce get-cost-and-usage \
  --time-period Start=2024-11-01,End=2024-11-30 \
  --granularity MONTHLY \
  --metrics "BlendedCost" \
  --group-by Type=TAG,Key=Customer

# Common issues:
# - Data transfer costs (use CloudFront)
# - Over-provisioned RDS (downgrade)
# - Logs not expiring (set retention to 30 days)
```

---

## Cost Optimization Tips

### Reduce AWS Bills by 40-60%

1. **Reserved Instances (40% off)**
   ```
   Once you have 5+ stable customers:
   - Buy 1-year Reserved Instances
   - Applies automatically
   - $170/mo → $102/mo per customer
   ```

2. **Right-Size Resources**
   ```
   Check actual usage:
   - If CPU < 30% consistently → Downgrade
   - If memory < 50% → Downgrade
   - Most customers: 0.5 vCPU, 1GB RAM is enough
   ```

3. **Enable CloudWatch Logs Expiration**
   ```bash
   aws logs put-retention-policy \
     --log-group-name /ecs/coreshift-customer-a \
     --retention-in-days 30

   # Saves $5-10/month per customer
   ```

4. **Use CloudFront CDN**
   ```
   - Reduces data transfer costs 80%
   - One-time setup: 30 mins
   - Savings: $50-100/month at scale
   ```

5. **S3 Lifecycle Policies**
   ```
   - Move old files to Glacier after 90 days
   - Delete temp files after 7 days
   - Saves 70% on storage
   ```

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| AWS account compromise | High | Low | MFA, IAM roles, least privilege |
| Customer data breach | High | Low | Encryption, VPC isolation, security audits |
| Runaway AWS costs | Medium | Medium | Billing alerts, resource limits, monitoring |
| Customer tries to extract code | Medium | Low | Obfuscation, license keys, legal terms |
| AWS outage | Medium | Low | Multi-AZ deployment, customer SLA credits |
| You can't keep up with support | Medium | Medium | Hire DevOps engineer at 15 customers |
| Customer doesn't pay | Low | Medium | Auto-suspend after 15 days, contract terms |

---

## When to Hire Help

| Milestone | Role to Hire | Cost | What They Do |
|-----------|--------------|------|--------------|
| **5 customers** | Part-time DevOps consultant | $3-5K/month | Set up automation, monitoring |
| **15 customers** | Full-time DevOps engineer | $120K/year | Manage infrastructure, on-call |
| **30 customers** | Customer success manager | $80K/year | Onboarding, support, renewals |
| **50 customers** | Second DevOps engineer | $130K/year | 24/7 coverage, scaling |

**Break-even analysis:**
- 15 customers × $7K/year = $105K revenue
- AWS costs: $30K/year
- DevOps salary: $120K/year
- **Total costs: $150K**
- **Need 22+ customers to be profitable with full-time help**

---

## Next Steps

### Immediate (This Week)
- [ ] Create AWS account
- [ ] Set up MFA and billing alerts
- [ ] Install required tools
- [ ] Test Docker build locally

### Short-term (This Month)
- [ ] Deploy test environment to AWS
- [ ] Document deployment process
- [ ] Create customer contract templates
- [ ] Set up monitoring dashboard

### Medium-term (Next 3 Months)
- [ ] Automate deployments with Terraform
- [ ] Onboard first 3-5 paid customers
- [ ] Build customer portal for self-service
- [ ] Hire part-time DevOps help

### Long-term (6-12 Months)
- [ ] Reach 15-20 customers
- [ ] Hire full-time DevOps engineer
- [ ] Build multi-tenant version
- [ ] Explore managed Kubernetes

---

## Resources & Tools

### Essential Tools
- **AWS Console**: https://console.aws.amazon.com
- **Docker Desktop**: https://www.docker.com/products/docker-desktop
- **Terraform**: https://www.terraform.io
- **GitHub Actions**: https://github.com/features/actions

### Learning Resources
- AWS Well-Architected Framework: https://aws.amazon.com/architecture/well-architected
- Docker Docs: https://docs.docker.com
- Terraform Tutorials: https://learn.hashicorp.com/terraform

### Cost Calculators
- AWS Pricing Calculator: https://calculator.aws
- Infrastructure Cost Estimator: https://cost.modules.tf

### Support
- AWS Support (if issues): https://console.aws.amazon.com/support
- AWS Forums: https://forums.aws.amazon.com
- Stack Overflow: https://stackoverflow.com/questions/tagged/amazon-web-services

---

## Questions? Need Help?

This is a complex setup! Here's what to do if you get stuck:

1. **AWS Questions**: AWS has great documentation and support
2. **Docker Questions**: Docker docs are excellent
3. **Strategic Questions**: Happy to help refine this plan
4. **Need DevOps Help**: Can recommend contractors

**Remember:** Start small (1-2 test deployments), learn, then scale. Don't try to be perfect on day 1.

---

*Document Version: 1.0*
*Last Review: November 2025*
*Next Review: Monthly as you learn and iterate*
