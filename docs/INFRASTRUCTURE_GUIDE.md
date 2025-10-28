# CoreShift Infrastructure Guide
**A Non-Technical Guide to Hosting Decisions**

Last Updated: October 27, 2025

---

## Executive Summary

**TL;DR**: You don't need to shift away from Vercel + Supabase right now. Start simple, migrate when needed.

**Current Stack**: Next.js + Vercel + Supabase
**Recommendation**: Keep it for MVP and early customers, plan migration path for enterprise needs

---

## The Big Question: Should You Shift?

### Short Answer: Not Yet, But Plan For It

### Why Your Current Stack (Vercel + Supabase) Is Great

✅ **Pros:**
- **Extremely Fast Setup**: Deploy in minutes, not weeks
- **Low Initial Cost**: Free tier, then pay-as-you-grow
- **Zero DevOps**: No server management, automatic scaling
- **Best Developer Experience**: Focus on features, not infrastructure
- **Built-in Best Practices**: CDN, SSL, security handled automatically
- **Perfect for SaaS MVP**: Get to market fast

❌ **Limitations:**
- **Customer Data Center**: Can't deploy on customer infrastructure
- **Enterprise Compliance**: Limited control for SOC2/ISO27001
- **Cost at Scale**: Expensive beyond certain usage ($2K+/month per project)
- **Multi-Tenancy Control**: Less isolation between customers
- **Vendor Lock-in**: Hard to migrate once you're deep

---

## Two-Path Strategy: Start Simple, Scale Smart

```
┌─────────────────────────────────────────────────────────────┐
│                    HOSTING STRATEGY                          │
└─────────────────────────────────────────────────────────────┘

Phase 1 (Now - 6 months)          Phase 2 (6-12 months)
┌──────────────────────┐          ┌──────────────────────┐
│                      │          │                      │
│  VERCEL + SUPABASE   │  ──────> │   AWS/GCP OPTION     │
│                      │          │                      │
│  For: Early customers│          │  For: Enterprise     │
│  Cost: $0-500/mo     │          │  Cost: $500-2K/mo    │
│  Setup: 1 day        │          │  Setup: 1-2 weeks    │
│                      │          │                      │
└──────────────────────┘          └──────────────────────┘
         │                                   │
         │                                   │
         └──────────────┬────────────────────┘
                        │
                        v
              Phase 3 (12+ months)
         ┌──────────────────────────┐
         │                          │
         │  FULL KUBERNETES         │
         │                          │
         │  For: Enterprise +       │
         │       Customer DC        │
         │  Cost: $2K-10K/mo        │
         │  Setup: 4-8 weeks        │
         │                          │
         └──────────────────────────┘
```

---

## Phase 1: Current Stack (Vercel + Supabase)

### What It Is (In Simple Terms)

**Vercel**: Think of it as a "vending machine" for your website
- You put your code in
- It automatically makes it available to users worldwide
- Handles all the technical stuff (servers, speed, security)

**Supabase**: Think of it as "Google Sheets on steroids"
- Stores all your customer data
- Handles user logins
- Provides APIs to read/write data
- Built on PostgreSQL (industry-standard database)

### Cost Breakdown

| Usage Level | Vercel Cost | Supabase Cost | Total/Month |
|-------------|-------------|---------------|-------------|
| **Development** | $0 (free) | $0 (free) | **$0** |
| **1-3 customers** | $20 (Pro) | $25 (Pro) | **$45** |
| **5-10 customers** | $20 | $25-75 | **$45-95** |
| **20-50 customers** | $20 | $100-200 | **$120-220** |
| **100+ customers** | $20-200 | $300-500 | **$320-700** |
| **Enterprise (500+ users)** | $500-2K | $500-1K | **$1K-3K** |

💡 **Tip**: Costs scale with database size, API calls, and bandwidth - not number of users per se.

### Security Features

✅ **What's Included:**
- SSL/TLS encryption (https://)
- DDoS protection
- Automatic backups (Supabase)
- Row-level security (data isolation)
- SOC 2 Type II certified (both platforms)

⚠️ **What's Missing:**
- Can't deploy in customer data center
- Data stored in US/EU regions only
- Limited audit logging
- No air-gapped deployment

### When This Works

✅ Use Vercel + Supabase if:
- You have < 20 customers
- Monthly hosting budget < $500
- Customers don't require on-premise
- You want to move fast
- You're okay with US/EU data hosting

❌ Don't use if:
- Customer requires data in their own data center
- Strict compliance needs (healthcare, finance, government)
- Need >99.99% SLA guarantees
- Hosting costs exceed $1K/month

---

## Phase 2: AWS/GCP Managed Services

### What It Is

**AWS/GCP**: Think of it as "renting a floor in a huge office building"
- You get more control than Vercel
- Still mostly managed for you
- Can customize security and compliance
- More cost-effective at scale

### Architecture

```
┌──────────────────────────────────────────────────────────┐
│                        USERS                              │
└───────────────────────┬──────────────────────────────────┘
                        │
                        v
        ┌───────────────────────────────┐
        │   CloudFront / Cloud CDN      │  <-- Fast global delivery
        │   (Content Delivery Network)  │
        └───────────────┬───────────────┘
                        │
                        v
        ┌───────────────────────────────┐
        │   Vercel (Frontend)           │  <-- Keep this!
        │   OR                          │
        │   AWS Amplify / GCP App Eng.  │  <-- Or switch to this
        └───────────────┬───────────────┘
                        │
                        v
        ┌───────────────────────────────┐
        │   AWS Lambda / Cloud Functions│  <-- Your business logic
        │   (Serverless API)            │
        └───────────────┬───────────────┘
                        │
                        v
        ┌───────────────────────────────┐
        │   RDS PostgreSQL / Cloud SQL  │  <-- Database
        │   (Managed Database)          │
        └───────────────┬───────────────┘
                        │
                        v
        ┌───────────────────────────────┐
        │   S3 / Cloud Storage          │  <-- File uploads
        └───────────────────────────────┘
```

### Setup Complexity

**Time Required**: 1-2 weeks
**Technical Skills Needed**: Medium

**What You Need to Set Up:**

1. **AWS/GCP Account** (30 mins)
   - Sign up for AWS or Google Cloud
   - Set up billing alerts
   - Create IAM users (for security)

2. **Database Setup** (2 hours)
   - Create RDS PostgreSQL instance
   - Configure security groups
   - Set up automatic backups
   - Point-in-time recovery

3. **Storage Setup** (1 hour)
   - Create S3 bucket / Cloud Storage
   - Configure CORS for uploads
   - Set lifecycle policies

4. **Frontend Deployment** (4 hours)
   - Deploy Next.js to AWS Amplify or keep Vercel
   - Configure custom domain
   - Set up CDN

5. **API Setup** (8 hours)
   - Create serverless functions
   - Set up API Gateway
   - Configure authentication

6. **Monitoring** (2 hours)
   - CloudWatch / Stackdriver alerts
   - Error tracking (Sentry)
   - Uptime monitoring

**Total Setup**: ~20 hours (1-2 weeks)

### Cost Breakdown (AWS)

| Component | Usage Level | Monthly Cost |
|-----------|-------------|--------------|
| **RDS PostgreSQL** | db.t3.medium | $60-80 |
| **Lambda Functions** | 1M requests | $0.20 |
| **S3 Storage** | 100GB | $2.30 |
| **CloudFront CDN** | 1TB transfer | $85 |
| **Amplify/Vercel** | Hosting | $0-20 |
| **Backups** | 100GB | $10 |
| **Monitoring** | Basic | $10 |
| **Total** | | **$167-207/mo** |

💡 **At Scale (100+ customers)**:
- Database: db.r5.xlarge = $400-500/mo
- Storage: 1TB = $23/mo
- CDN: 10TB = $850/mo
- **Total: $1,300-1,400/mo**

### Cost Comparison

| Users/Customers | Vercel+Supabase | AWS Managed | Savings |
|-----------------|-----------------|-------------|---------|
| **10 customers** | $95/mo | $170/mo | -$75 (more expensive) |
| **50 customers** | $220/mo | $200/mo | +$20 |
| **100 customers** | $700/mo | $400/mo | +$300 |
| **500 customers** | $2,000/mo | $1,400/mo | +$600 |

**Break-even point**: ~40 customers

### Security Features

✅ **Additional Security:**
- VPC (Virtual Private Cloud) - isolated network
- Custom encryption keys
- Detailed audit logging
- Compliance certifications (HIPAA, PCI-DSS ready)
- IP whitelisting
- Advanced DDoS protection

### When to Switch

✅ Switch to AWS/GCP if:
- Monthly hosting costs exceed $500
- You have > 40 customers
- Need better cost control
- Need compliance certifications
- Want more customization
- Planning to offer on-premise eventually

---

## Phase 3: Kubernetes (Full Control)

### What It Is

**Kubernetes (K8s)**: Think of it as "building your own apartment complex"
- Maximum control and flexibility
- Can deploy anywhere (AWS, GCP, Azure, customer data center)
- Industry standard for enterprises
- Steep learning curve

### Why Kubernetes?

1. **Portability**: Same setup works on AWS, GCP, Azure, or customer servers
2. **Enterprise Ready**: What Fortune 500 companies use
3. **Cost Optimization**: Efficient resource usage at scale
4. **On-Premise Capable**: Can deploy in customer data center
5. **Auto-Scaling**: Handles traffic spikes automatically

### Architecture

```
┌────────────────────────────────────────────────────────────┐
│                     KUBERNETES CLUSTER                      │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              Ingress Controller (nginx)              │  │
│  │              (Traffic Router)                        │  │
│  └──────────────────────┬──────────────────────────────┘  │
│                         │                                   │
│         ┌───────────────┴───────────────┐                  │
│         │                               │                   │
│  ┌──────▼──────┐               ┌───────▼──────┐           │
│  │  Next.js    │               │  API Service  │           │
│  │  Frontend   │               │  (Node.js)    │           │
│  │  (3 pods)   │               │  (5 pods)     │           │
│  └─────────────┘               └───────────────┘           │
│                                         │                   │
│                                         │                   │
│                                 ┌───────▼──────┐           │
│                                 │  PostgreSQL   │           │
│                                 │  (Managed)    │           │
│                                 └───────────────┘           │
└────────────────────────────────────────────────────────────┘

```

**Pod**: Think of it as a "shipping container" - a standardized unit that runs your application

### Setup Complexity

**Time Required**: 4-8 weeks
**Technical Skills Needed**: High (or hire DevOps engineer)

**What You Need:**

1. **Kubernetes Cluster Setup** (1 week)
   - Choose managed K8s (EKS, GKE, AKS) or self-hosted
   - Configure networking
   - Set up cluster autoscaling
   - Security hardening

2. **Application Containerization** (1 week)
   - Create Docker images
   - Write Kubernetes manifests (YAML files)
   - Set up CI/CD pipeline
   - Configure secrets management

3. **Database Setup** (3 days)
   - Deploy PostgreSQL (managed or in-cluster)
   - Set up replication
   - Configure backups
   - Performance tuning

4. **Monitoring & Logging** (3 days)
   - Prometheus (metrics)
   - Grafana (dashboards)
   - ELK Stack (logs)
   - Alerting rules

5. **Security & Compliance** (1 week)
   - Network policies
   - Pod security policies
   - RBAC (access control)
   - Secrets encryption
   - Vulnerability scanning

**Total Setup**: 4-8 weeks (depends on expertise)

### Cost Breakdown

#### Managed Kubernetes (EKS/GKE/AKS)

| Component | Specification | Monthly Cost |
|-----------|---------------|--------------|
| **Cluster Management** | EKS/GKE control plane | $75 |
| **Worker Nodes** | 3x t3.large (testing) | $190 |
| **Worker Nodes** | 5x t3.xlarge (production) | $750 |
| **Database** | RDS PostgreSQL (r5.large) | $200 |
| **Load Balancer** | Network LB | $20 |
| **Storage** | 500GB SSD | $50 |
| **Backups** | 500GB | $50 |
| **Monitoring** | Datadog/New Relic | $100 |
| **CDN** | CloudFront (5TB) | $400 |
| **Total** | | **$1,835/mo** |

#### At Enterprise Scale (1000+ customers)

| Component | Specification | Monthly Cost |
|-----------|---------------|--------------|
| **Cluster Management** | Multi-region | $150 |
| **Worker Nodes** | 20x m5.2xlarge | $4,800 |
| **Database** | RDS Multi-AZ (r5.4xlarge) | $2,000 |
| **Load Balancer** | Application LB x3 | $60 |
| **Storage** | 5TB SSD | $500 |
| **Backups** | 5TB | $500 |
| **Monitoring** | Full stack | $500 |
| **CDN** | 50TB/month | $4,000 |
| **Total** | | **$12,510/mo** |

### Customer Data Center Deployment

**This is where Kubernetes shines** - same setup works everywhere

#### What Customer Needs

**Minimum Requirements**:
- 3 servers (for high availability)
- 16GB RAM each, 8 CPU cores
- 500GB SSD storage each
- Ubuntu 20.04 or RHEL 8
- Static IP addresses
- Firewall rules (ports 80, 443, 6443)

**Network Requirements**:
- Internet access (for pulling container images)
- OR air-gapped setup (you provide USB with all images)
- SSL certificate
- DNS configuration

#### Your Deliverables

1. **Docker Images** (all your code packaged)
2. **Kubernetes Manifests** (YAML files - configuration)
3. **Installation Script** (one-command setup)
4. **Database Migration Scripts**
5. **Backup/Restore Procedures**
6. **Monitoring Dashboards**
7. **Documentation** (100+ page runbook)

#### Installation Process (For Customer)

```bash
# 1. Customer downloads your installer package
wget https://coreshift.ai/releases/coreshift-v1.0.tar.gz

# 2. Run installation script
./install.sh

# 3. Script does everything:
#    - Sets up Kubernetes cluster
#    - Deploys PostgreSQL
#    - Deploys your application
#    - Configures SSL
#    - Sets up monitoring

# 4. Access at https://coreshift.customer-company.com
```

**Installation Time**: 30-60 minutes (automated)

#### Support Model for Customer Deployments

**Option 1: Self-Service** ($0/mo)
- Documentation only
- Community forum
- No SLA

**Option 2: Standard Support** ($500/mo per customer)
- Email support (48hr response)
- Quarterly security patches
- Upgrade assistance
- 99% uptime SLA

**Option 3: Premium Support** ($2,000/mo per customer)
- 24/7 phone support
- 4hr critical issue response
- Monthly health checks
- Proactive monitoring
- 99.9% uptime SLA
- Dedicated support engineer

**Option 4: White Glove** ($5,000+ one-time + $2,000/mo)
- On-site installation
- Custom integration
- Training for customer IT team
- 99.95% uptime SLA

### When You Need Kubernetes

✅ Use Kubernetes if:
- **Customers require on-premise deployment**
- **Managing 5+ separate deployments**
- **Need 99.9%+ uptime SLA**
- **Hosting costs exceed $2K/month**
- **Serving 500+ customers**
- **Need multi-region deployment**
- **Compliance requires infrastructure control**

❌ Don't use if:
- You have < 50 customers
- Monthly hosting budget < $2K
- No DevOps expertise (will cost $120K+/year to hire)
- Customers don't require on-premise

---

## Security Deep Dive

### Data Security (All Approaches)

#### Encryption

**At Rest** (when stored):
- Database: AES-256 encryption
- File storage: AES-256 encryption
- Backups: Encrypted before storage

**In Transit** (when moving):
- TLS 1.3 for all connections
- API calls: HTTPS only
- Database connections: SSL enforced

#### Authentication & Authorization

```
User Login
    │
    ├─> Multi-Factor Authentication (MFA)
    │
    ├─> JWT Token (expires in 1 hour)
    │
    ├─> Role-Based Access Control (RBAC)
    │   ├─> Admin
    │   ├─> Manager
    │   └─> User
    │
    └─> API Rate Limiting (prevent abuse)
```

#### Data Isolation (Multi-Tenancy)

**Row-Level Security** (Supabase/PostgreSQL):
```sql
-- Each customer can only see their own data
CREATE POLICY customer_isolation ON customers
  USING (customer_id = current_user_id());
```

**Database-Per-Customer** (Enterprise):
- Completely separate databases
- Maximum isolation
- Higher cost (~$200/customer/month)

### Compliance Certifications

| Certification | Vercel+Supabase | AWS/GCP | Kubernetes |
|---------------|-----------------|---------|------------|
| **SOC 2 Type II** | ✅ | ✅ | ✅ (if configured) |
| **ISO 27001** | ✅ | ✅ | ✅ (if configured) |
| **GDPR** | ✅ | ✅ | ✅ |
| **HIPAA** | ❌ | ✅ (BAA required) | ✅ (if configured) |
| **PCI-DSS** | ❌ | ✅ | ✅ (if configured) |
| **FedRAMP** | ❌ | ✅ (AWS GovCloud) | ✅ (specialized) |

💡 **Your Certification vs Infrastructure Certification**:
- Vercel/Supabase/AWS are certified (infrastructure)
- You still need to get YOUR application certified
- Costs: $50K-150K for SOC 2, $100K-300K for HIPAA
- Timeline: 6-12 months

### Backup & Disaster Recovery

#### Vercel + Supabase

**Backups**:
- Automatic daily backups (7 day retention)
- Point-in-time recovery (up to 7 days)
- Geo-redundant (data in multiple regions)

**Recovery Time**:
- RTO (Recovery Time Objective): 1-4 hours
- RPO (Recovery Point Objective): Up to 24 hours data loss

#### AWS/GCP

**Backups**:
- Continuous backups
- Point-in-time recovery (35 days)
- Snapshots to separate region
- Custom retention (up to 7 years)

**Recovery Time**:
- RTO: 30 minutes - 2 hours
- RPO: Up to 5 minutes data loss

#### Kubernetes

**Backups**:
- Velero (Kubernetes backup tool)
- Database continuous replication
- Disaster recovery cluster (separate region)
- Immutable infrastructure (rebuild from code)

**Recovery Time**:
- RTO: 15 minutes - 1 hour
- RPO: Near zero (real-time replication)

---

## Cost Comparison Matrix

### 3-Year Total Cost of Ownership (TCO)

| Scenario | Customers | Vercel+Supabase | AWS Managed | Kubernetes | Winner |
|----------|-----------|-----------------|-------------|------------|--------|
| **Startup** | 5 | $3,240 | $6,120 | $66,060 | Vercel+Supabase |
| **Growth** | 50 | $26,400 | $14,400 | $66,060 | AWS Managed |
| **Scale** | 200 | $108,000 | $50,400 | $66,060 | Kubernetes |
| **Enterprise** | 500 | $360,000 | $168,000 | $150,120 | Kubernetes |

*Includes infrastructure + personnel costs (1 DevOps engineer for K8s)*

### Hidden Costs

#### Personnel Costs

| Role | Vercel+Supabase | AWS Managed | Kubernetes |
|------|-----------------|-------------|------------|
| **DevOps Engineer** | Not needed | Part-time ($30K/yr) | Full-time ($120K/yr) |
| **On-Call Engineer** | Not needed | Not needed | Required ($20K/yr extra) |
| **Security Specialist** | Not needed | Consulting ($10K/yr) | Full-time or consultant ($30K/yr) |

#### One-Time Costs

| Item | Vercel+Supabase | AWS Managed | Kubernetes |
|------|-----------------|-------------|------------|
| **Initial Setup** | $0 | $5,000 | $40,000 |
| **Training** | $1,000 | $3,000 | $10,000 |
| **Compliance Audit** | $20,000 | $30,000 | $50,000 |
| **Migration** | $0 | $10,000 | $30,000 |

---

## Migration Path

### When to Migrate

```
Start Here              Migrate When               Final Form
─────────────────────────────────────────────────────────────
Vercel + Supabase  -->  40+ customers      -->  AWS Managed
    ($0-95/mo)          OR $500+/mo              ($200-500/mo)
                        OR compliance needs
                                                      │
                                                      │
                                                      v
                                            Migrate When
                                            ────────────
                                            500+ customers
                                            OR $2K+/mo
                                            OR on-premise needed
                                                      │
                                                      v
                                                  Kubernetes
                                                ($1.8K-12K/mo)
                                                + on-premise option
```

### Migration Steps: Vercel+Supabase → AWS

**Phase 1: Preparation** (Week 1)
- [ ] Export all Supabase data
- [ ] Document all API integrations
- [ ] Set up AWS account
- [ ] Create migration plan

**Phase 2: Infrastructure** (Week 2)
- [ ] Set up RDS PostgreSQL
- [ ] Configure S3 buckets
- [ ] Set up Lambda functions
- [ ] Configure CloudFront CDN

**Phase 3: Data Migration** (Week 3)
- [ ] Migrate database (using pg_dump)
- [ ] Migrate files to S3
- [ ] Test data integrity
- [ ] Set up parallel environments

**Phase 4: Switchover** (Week 4)
- [ ] Run both systems in parallel
- [ ] Test thoroughly
- [ ] Update DNS (gradual rollout)
- [ ] Monitor for issues
- [ ] Decommission old system

**Downtime**: Can be zero with proper planning

### Migration Steps: AWS → Kubernetes

**Phase 1: Containerization** (Weeks 1-2)
- [ ] Create Dockerfiles
- [ ] Build container images
- [ ] Test locally with docker-compose
- [ ] Push to container registry

**Phase 2: Kubernetes Setup** (Weeks 3-4)
- [ ] Create EKS/GKE cluster
- [ ] Write Kubernetes manifests
- [ ] Set up Helm charts
- [ ] Configure ingress

**Phase 3: Deployment** (Weeks 5-6)
- [ ] Deploy to staging cluster
- [ ] Load testing
- [ ] Security scanning
- [ ] Performance tuning

**Phase 4: Production Cutover** (Weeks 7-8)
- [ ] Deploy to production cluster
- [ ] Blue/green deployment
- [ ] DNS switchover
- [ ] Monitor and validate
- [ ] Decommission old infrastructure

---

## Detailed Cost Scenarios

### Scenario 1: Solo Founder, 5 Customers

**Recommended**: Vercel + Supabase

**Monthly Costs**:
```
Vercel Pro:              $20
Supabase Pro:            $25
Domain (coreshift.ai):    $2
Monitoring (UptimeRobot): $0 (free)
Email (SendGrid):         $0 (free tier)
─────────────────────────────
Total:                   $47/month
Annual:                  $564/year
```

**Why**: Focus on product, not infrastructure. $47/month is nothing compared to customer acquisition cost.

### Scenario 2: Growing Startup, 50 Customers

**Recommended**: AWS Managed Services

**Monthly Costs**:
```
RDS db.t3.medium:       $80
Lambda (5M requests):   $1
S3 (200GB):             $5
CloudFront (2TB):      $170
Amplify:                $20
Backups:                $15
Monitoring (Datadog):   $30
DevOps (part-time):    $500
─────────────────────────────
Total:                 $821/month
Annual:               $9,852/year
```

**Break-even**: Saves $1,500/year vs Vercel+Supabase at this scale

### Scenario 3: Established SaaS, 200 Customers

**Recommended**: Kubernetes (Managed)

**Monthly Costs**:
```
GKE Cluster:           $75
Worker Nodes (10x):  $1,200
RDS (r5.xlarge):      $400
CloudFront (10TB):    $850
Storage (1TB):         $100
Backups:               $80
Monitoring:           $200
DevOps Engineer:    $10,000 (full-time)
─────────────────────────────
Total:              $12,905/month
Annual:            $154,860/year
```

**But**: Saves $250K/year vs Vercel+Supabase at this scale

### Scenario 4: Enterprise, 5 Customers (On-Premise)

**Recommended**: Kubernetes (License Model)

**Customer Pays (One-Time)**:
```
3x Servers:          $15,000
Installation:         $5,000
Training:             $3,000
─────────────────────────────
Total:               $23,000
```

**Your Revenue**:
```
License (annual):    $25,000/customer
Support (monthly):    $2,000/customer
─────────────────────────────
Annual per customer: $49,000
Total (5 customers): $245,000/year
```

**Your Costs**:
```
DevOps Engineer:    $120,000/year
Support Engineer:    $80,000/year
Infrastructure:       $5,000/year (development)
─────────────────────────────
Total:              $205,000/year
Profit:              $40,000/year (16% margin)
```

💡 **Insight**: On-premise is profitable at just 5 customers!

---

## Recommended Implementation Plan

### Year 1: MVP Phase (Months 1-6)

**Infrastructure**: Vercel + Supabase

**Focus**: Product-market fit, not infrastructure

**Milestones**:
- [ ] Month 1: Deploy MVP on Vercel
- [ ] Month 2: Get 3 paying customers
- [ ] Month 3: Implement core features
- [ ] Month 4: Reach 10 customers
- [ ] Month 5: Add monitoring and alerts
- [ ] Month 6: Decision point (stay or migrate?)

**Budget**: $50-300/month

### Year 1: Growth Phase (Months 7-12)

**Infrastructure**: AWS Managed Services (if >40 customers)

**Focus**: Scaling reliably

**Milestones**:
- [ ] Month 7: Plan AWS migration
- [ ] Month 8: Set up AWS infrastructure
- [ ] Month 9: Migrate database and data
- [ ] Month 10: Deploy to AWS
- [ ] Month 11: Optimize costs
- [ ] Month 12: Document everything

**Budget**: $500-1,500/month

### Year 2: Enterprise Readiness (Months 13-24)

**Infrastructure**: Kubernetes option available

**Focus**: Enterprise sales

**Milestones**:
- [ ] Q1: Containerize application
- [ ] Q2: Set up Kubernetes staging
- [ ] Q3: First on-premise deployment
- [ ] Q4: SOC 2 certification

**Budget**: $2,000-5,000/month + $120K DevOps engineer

---

## Quick Decision Tree

```
START HERE
│
├─> Do you have < 20 customers?
│   └─> YES → Use Vercel + Supabase
│   └─> NO → Continue ↓
│
├─> Are hosting costs < $500/month?
│   └─> YES → Use Vercel + Supabase
│   └─> NO → Continue ↓
│
├─> Do customers need on-premise deployment?
│   └─> YES → Use Kubernetes
│   └─> NO → Continue ↓
│
├─> Do you have DevOps expertise?
│   └─> YES → Use Kubernetes (cost-effective)
│   └─> NO → Use AWS Managed Services
│
└─> Are you serving > 500 customers?
    └─> YES → Use Kubernetes (required for scale)
    └─> NO → Use AWS Managed Services
```

---

## Action Items for CoreShift

### Immediate (This Month)

1. **Stay on Vercel + Supabase** for now
2. **Document current architecture** (so you can migrate later)
3. **Set up billing alerts** (know when costs spike)
4. **Implement monitoring** (Sentry for errors, UptimeRobot for uptime)
5. **Backup strategy** (test restore procedures)

### Short-Term (3-6 Months)

1. **Containerize application**
   - Create Dockerfile for Next.js app
   - Test with docker-compose locally
   - Store images in Docker Hub
   - *Why*: Makes migration easier later

2. **Abstract database layer**
   - Use ORM (Prisma already does this)
   - Environment-based configuration
   - *Why*: Can switch databases without code changes

3. **Create AWS/GCP accounts**
   - Start with free tier
   - Experiment with services
   - Learn the platform
   - *Why*: Reduce learning curve later

### Medium-Term (6-12 Months)

1. **Hire DevOps engineer** (when revenue > $50K/month)
2. **Set up staging on AWS** (parallel to Vercel)
3. **Build Kubernetes deployment manifests**
4. **Plan compliance certification** (SOC 2)

### Long-Term (12+ Months)

1. **Full AWS/K8s migration** (when costs justify it)
2. **On-premise deployment option**
3. **Multi-region deployment**
4. **Dedicated instances for enterprise**

---

## FAQ

### Q: What if a customer asks for on-premise TODAY?

**A**: You have 2 options:

**Option 1**: Quick & Dirty (1 week)
- Give them docker-compose.yml
- They run `docker-compose up` on their server
- Limited, but works for MVP
- Charge $10K setup + $1K/month support

**Option 2**: Professional (4 weeks)
- Build proper Kubernetes deployment
- Charge $25K setup + $2K/month support
- Requires hiring DevOps consultant ($10K)

### Q: How much does SOC 2 certification cost?

**A**: $30K-80K first time, $15K-30K annual renewal

**Timeline**: 6-9 months

**Required**:
- Security policies documented
- Penetration testing
- Audit by certified firm
- Most enterprise customers require this

### Q: Can I use Vercel for frontend + AWS for database?

**A**: Yes! Hybrid approach:

```
Vercel (Frontend)  →  AWS RDS (Database)
                   →  AWS S3 (Files)
```

**Pros**: Best of both worlds
**Cons**: Two bills to pay, more complexity

**Cost**: ~$200/month (cheaper than pure AWS, more expensive than pure Vercel)

### Q: What about other platforms (Azure, DigitalOcean, Heroku)?

**Azure**:
- Best if customers use Microsoft ecosystem
- Similar to AWS in features/pricing
- Good for enterprise sales

**DigitalOcean**:
- Simpler than AWS (less features)
- Good middle ground
- Managed Kubernetes at $120/month (vs $75 AWS)

**Heroku**:
- Like Vercel (very easy)
- More expensive at scale
- Being sunset by Salesforce - avoid

**Recommendation**: Stick with AWS or GCP (industry standard)

### Q: How do I estimate my costs?

**Use these calculators**:
- AWS: https://calculator.aws/
- GCP: https://cloud.google.com/products/calculator
- Vercel: Fixed pricing tiers
- Supabase: Fixed pricing tiers

**Rule of thumb**:
- $5-10 per customer/month (Vercel+Supabase)
- $2-5 per customer/month (AWS)
- $1-3 per customer/month (Kubernetes at scale)

---

## Conclusion

### The Pragmatic Path

```
┌─────────────────────────────────────────────────────┐
│  MONTH 1-6: Vercel + Supabase                       │
│  Focus: Product, not infrastructure                 │
│  Cost: $50-300/month                                │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│  MONTH 7-18: AWS Managed (if needed)                │
│  Focus: Scaling reliably                            │
│  Cost: $500-2,000/month                             │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│  MONTH 19+: Kubernetes (enterprise)                 │
│  Focus: On-premise + efficiency                     │
│  Cost: $2K-10K/month + $120K DevOps                 │
└─────────────────────────────────────────────────────┘
```

### Key Takeaways

1. **Don't over-engineer early** - Vercel+Supabase is perfect for MVP
2. **Migrate when numbers justify it** - Not before
3. **Plan for on-premise from day 1** - Containerize everything
4. **Enterprise customers pay premium** - On-premise can be very profitable
5. **DevOps is expensive** - Factor in personnel costs

### Next Steps

1. **Review this document with technical advisor**
2. **Create architecture diagram of current setup**
3. **Set up monitoring and alerts**
4. **Document deployment process**
5. **Revisit this decision in 6 months**

---

## Resources

### Learning Resources

**Kubernetes**:
- https://kubernetes.io/docs/tutorials/
- "Kubernetes Up & Running" book
- Linux Academy courses

**AWS**:
- https://aws.amazon.com/getting-started/
- A Cloud Guru courses
- AWS Solutions Architect certification

**Infrastructure as Code**:
- Terraform tutorials
- Pulumi (easier alternative)

### Tools

**Cost Management**:
- AWS Cost Explorer
- Infracost (estimate costs from code)
- CloudHealth

**Security**:
- Snyk (vulnerability scanning)
- AWS Security Hub
- Kubernetes security checklist

**Monitoring**:
- Datadog (all-in-one)
- Prometheus + Grafana (open source)
- Sentry (error tracking)

---

**Questions?** Email: srinath@coreshift.ai

**Last Updated**: October 2025
**Next Review**: April 2026
