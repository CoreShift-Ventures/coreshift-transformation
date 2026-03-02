# CoreShift Website Content Update Brief
**For Claude Code — cshift.io codebase**
**Date: February 2026**

---

## INSTRUCTIONS FOR CLAUDE CODE

This document contains all new content for the CoreShift (cshift.io) website. Your job is to:

1. Read the existing codebase first and identify the component/file structure
2. Map each section below to the corresponding existing component
3. Replace content exactly as written — do NOT change styling, layout, CSS classes, or component structure
4. Preserve all existing animations, interactions, and design elements
5. Only add new sections if explicitly called out as "NEW SECTION" below

If a data item listed below doesn't match the current component shape (e.g., existing card has 2 metrics but new content has 4), keep the existing card shape and use the most important metrics only.

---

## SECTION 1: META / SEO

```
Title:        CoreShift | AI Agents for Operations
Description:  CoreShift builds AI agents for any enterprise operation — deployed on your infrastructure, monitored 24/7, one monthly subscription. Live across manufacturing, finance, VC, SaaS, and automotive.
OG Title:     Any operation your team does manually today, an agent can do better.
OG Description: CoreShift builds, deploys, and maintains AI agents tailored to your exact business processes. Real data. Real systems. Real results.
```

---

## SECTION 2: NAVIGATION

```
Logo text:        CoreShift   (keep existing logo/icon if present)
Nav links:
  - Why CoreShift    → #why
  - Agents Built     → #agents
  - How It Works     → #process
  - Pricing          → #pricing
  - FAQ              → #faq
CTA button:       "Talk to Us →"   href="mailto:srinath@cshift.io"
```

---

## SECTION 3: HERO

### Eyebrow / Badge
```
Text:   AI Agents for Operations — Live Across 6 Clients
Style:  Keep existing badge/pill styling. Add a green pulsing dot before text if feasible.
```

### Headline (H1)
```
Any operation your team
does manually today,
an agent can do better.
```
*(If headline has a highlighted/gradient span, apply to "an agent can do better")*

### Sub-headline
```
CoreShift builds AI agents tailored to your exact processes, deployed on your infrastructure, monitored 24/7 — one monthly subscription.
```

### Primary CTA
```
Button text:    Book a Discovery Call →
href:           mailto:srinath@cshift.io
```

### Secondary CTA
```
Button text:    See Agents Built
href:           #agents
```

### Live Agent Pills (below CTAs)

Label: `Live now`

| Pill Text | Dot Colour |
|-----------|------------|
| GRN Reconciliation · Auto-parts Manufacturing | Green |
| AP/AR Automation · Global Media | Green |
| SAP Data Agent · Manufacturing | Green |
| Fund Ops Reporting · Venture Capital | Amber |
| CS Command Center · B2B SaaS | Green |
| Vehicle Compliance · Automotive | Green |

---

## SECTION 4: STATS / SOCIAL PROOF BAR

Replace all stats with:

| Number | Label |
|--------|-------|
| 6 | Agents in production |
| 19+ | Systems integrated (SAP, NetSuite, Tally, Salesforce) |
| 94% | Average automation rate across agents |
| ₹30K | Monthly subscription starting from |

---

## SECTION 5: "WHY AI ALONE ISN'T ENOUGH" — THE GAP

**Section eyebrow:** `The Gap`
**Section headline:** `AI alone isn't enough.`
**Section sub-headline:** `ChatGPT knows everything about your process in theory. Our agents know how yours actually works.`

### 5 Gap Cards

Replace existing differentiator/feature cards with these 5. Keep existing card component styling.

---

**Card 1**
- Number/label: `01 / 05`
- Icon: 🧠
- Title: `Process Knowledge`
- Body: `ChatGPT has no idea that Vendor 47 uses a non-standard date format, or that your 15th-of-month run is 3× larger than usual. We build agents after a 2-week Discovery Sprint that encodes exactly how your operation runs.`
- Callout line: *"ChatGPT knows GRN reconciliation in theory. Our agent knows yours."*

---

**Card 2**
- Number/label: `02 / 05`
- Icon: 🔌
- Title: `System Integration`
- Body: `ChatGPT lives in a chat window. Your agent needs to connect to SAP via VPN, handle API rate limits, authenticate with 6 portals, and recover gracefully when NetSuite times out. We build and maintain all of that.`
- Callout line: *"AI can describe the bridge. We build it — and we maintain it."*

---

**Card 3**
- Number/label: `03 / 05`
- Icon: ⏱️
- Title: `Scheduled Execution`
- Body: `Every AI tool waits for a human to press go. Our agents run on cron schedules — processing records, posting heartbeats, flagging exceptions — while your team is at lunch, on a holiday, or asleep.`
- Callout line: *"AI tools wait for instructions. Agents don't."*

---

**Card 4**
- Number/label: `04 / 05`
- Icon: 🛡️
- Title: `Production Reliability`
- Body: `A wrong ChatGPT answer is an inconvenience. A wrong agent run at 3am touching SAP billing documents is a business problem. Every CoreShift agent has error handling, retry logic, anomaly detection, and Command Center monitoring.`
- Callout line: *"We engineer for the difference between inconvenience and disaster."*

---

**Card 5**
- Number/label: `05 / 05`
- Icon: 🔄
- Title: `Permanent Maintenance`
- Body: `When SAP updates, a vendor changes their portal UI, or a new business rule is added — someone must update the agent. Our subscription model means we own maintenance permanently. Your agent keeps working because our revenue depends on it.`
- Callout line: *"Any developer can build an agent. Nobody wants to maintain it forever. We do."*

---

### Comparison Table (below Gap cards)
If the site has a comparison/vs table component, use this content. If not, skip this block.

| ChatGPT / Copilot | Dimension | CoreShift Agent |
|---|---|---|
| Needs human to initiate every run | runs | Scheduled 24/7, no human needed |
| No access to your SAP, ERP, portals | integrates | Native connection to your actual systems |
| No memory of your process edge cases | knows | Built from 2-week deep process discovery |
| No error handling or alerting | monitors | Command Center + Slack/email alerts |
| Breaks when systems change — forever | maintains | We own maintenance on subscription |

---

## SECTION 6: AGENTS / PORTFOLIO

**Section eyebrow:** `Agents Built`
**Section headline:** `Six live agents. Six different operations.`
**Section sub-headline:** `We haven't found an operation we couldn't agent-ify. Don't see yours? That's the point — tell us about it.`

Replace all existing portfolio/project cards with the 6 cards below. Match the exact number of fields your existing card component supports (name, tagline, metrics, tags, quote). Don't restructure the card.

---

### Agent Card 1 — GRN Reconciliation

```
Status badge:     LIVE  (green)
Industry tag:     Automotive Manufacturing
Name:             GRN Reconciliation Agent
Tagline:          Logs into 19+ OEM vendor portals daily, extracts invoice GRN data, and updates SAP billing documents — without anyone touching a keyboard.

Metrics (pick up to 4):
  - 19+     Vendor portals automated
  - 2–4 hrs Daily manual work eliminated
  - 154     Extraction runs logged
  - ~100%   Automation rate (no-CAPTCHA portals)

System tags:      SAP ECC/S4HANA · Playwright · Supabase · FastAPI · Cisco VPN

Client quote:
"Revenue recognition delays ended. GRN updates now happen before the finance team arrives in the morning."
— Tier-1 Indian auto-parts manufacturer, ₹200–2,000 Cr revenue
```

---

### Agent Card 2 — AP/AR Automation

```
Status badge:     POC COMPLETE  (amber)
Industry tag:     Global Media / B2B
Name:             AP/AR Automation Agent
Tagline:          Reads invoice emails, extracts 12 fields from PDFs, matches to POs, and posts to NetSuite. On the AR side, matches BACS/SWIFT bank transactions to open invoices with a 94% auto-match rate.

Metrics (pick up to 4):
  - 94%      Auto-match rate on cash application
  - 8 min    Saved per transaction vs. manual
  - 12       Fields extracted per invoice PDF
  - 40–80 hrs Finance hours saved per month

System tags:      NetSuite · Claude Vision · BACS/SWIFT · Outlook/Gmail · HSBC

Client quote:
"Every invoice that arrives by email now goes to NetSuite without a human in the loop."
— £100M+ B2B media company, UK-headquartered
```

---

### Agent Card 3 — SAP Data Query

```
Status badge:     LIVE  (green)
Industry tag:     Manufacturing / SAP
Name:             SAP Data Query Agent
Tagline:          Self-service access to any SAP table for finance dashboards — no IT tickets, no ABAP developer, no waiting. Queries 10,000+ SAP tables in 2–5 seconds via secure OData endpoints.

Metrics (pick up to 4):
  - 10,000+   SAP tables accessible
  - 2–5 sec   Query response time (5,000 rows)
  - Zero       IT involvement after setup
  - 4–6 hrs/wk Finance analyst time saved

System tags:      SAP S4/HANA · OData 2.0 · Power BI · Excel · FortiVPN

Client quote:
"The Finance Controller stopped filing IT tickets. Every dashboard refreshes directly from SAP, real-time."
— ₹100–500 Cr Indian manufacturer, on-premise SAP
```

---

### Agent Card 4 — Fund Operations

```
Status badge:     LIVE  (green)
Industry tag:     Venture Capital
Name:             Fund Operations Agent
Tagline:          End-to-end investor reporting for VC fund operations. Ingests Tally exports, calculates 3 types of allocation ratios across 117 investors, generates 6 compliance-ready reports with 97%+ accuracy.

Metrics (pick up to 4):
  - 117       Investors across 2 funds
  - 97.3%     Validation accuracy vs Power BI
  - ₹277 Cr   AUM under management
  - 8–12 hrs  Monthly reporting time reclaimed

System tags:      Tally Prime · Supabase · FBIL API · Vercel · Power BI

Client quote:
"Capital Account Statements that used to take a weekend now run in minutes, with audit-ready reconciliation built in."
— AIF Category II VC fund, ₹600 Cr target corpus
```

---

### Agent Card 5 — CS Command Center

```
Status badge:     LIVE  (green)
Industry tag:     B2B SaaS
Name:             CS Command Center Agent
Tagline:          Real-time churn risk, NRR forecasting, and upsell pipeline visibility across 200+ enterprise accounts — syncing directly from Salesforce every 6 hours, with stage-based early warning alerts.

Metrics (pick up to 4):
  - $191M     ARR portfolio monitored
  - 200+      Enterprise accounts tracked
  - 4–6 hrs   Weekly reporting time eliminated
  - S12–S14   Early churn detected before accounts are lost

System tags:      Salesforce · SOQL · Google Apps Script · Chart.js · OAuth2

Client quote:
"Leadership stopped asking 'is this data right?' The agent has a single source of truth that refreshes automatically."
— $191M ARR B2B SaaS, global enterprise accounts
```

---

### Agent Card 6 — Vehicle Compliance

```
Status badge:     LIVE  (green)
Industry tag:     Automotive Services
Name:             Vehicle Compliance Agent
Tagline:          Validates 10,000+ vehicles against Indian government RTO databases, auto-flags expired insurance, fitness certificates, and challans — then generates prioritised call centre campaigns for renewals.

Metrics (pick up to 4):
  - 10K+    Vehicles validated per instance
  - ~95%    Automation rate
  - 60+     Fields per vehicle record
  - 6 types Compliance issues auto-flagged

System tags:      Signzy API · SurePass KYC · Parivahan/Vahan · Supabase · Next.js

Client quote:
"Proactive renewal outreach is now automatic. The call centre works from a daily agent-generated list."
— Indian automotive service chain, 500–10,000 vehicles managed
```

---

### Invite / "Don't See Your Operation" Card

Add as the last item in the agents grid. Use existing empty-state or CTA card styling if available.

```
Heading:    Don't see your operation?
Body:       That's the point. We've never met an operation we couldn't agent-ify. Finance, supply chain, compliance, customer success, fund ops — if your team does it manually, we can build an agent for it.
CTA button: Tell us about your operation →   href="mailto:srinath@cshift.io"
```

---

## SECTION 7: HOW IT WORKS / PROCESS

**Section eyebrow:** `How It Works`
**Section headline:** `From spreadsheet chaos to running agent in 6 weeks.`

### Step 1
```
Step label:   Step 01 — Discover
Title:        Discovery Sprint
Price/duration: ₹50,000 – ₹75,000 · One-time · 2 weeks
Description:  We spend 2 weeks inside your operation. Mapping the exact process, documenting edge cases, identifying system touchpoints, defining exception logic. The output is a signed-off Agent Design Document.
Bullet points:
  - Process walkthroughs with your team
  - System access and integration mapping
  - Edge case and exception documentation
  - Agent Design Document delivered
  - Signed-off ROI model with confirmed numbers
```

### Step 2
```
Step label:   Step 02 — Deploy
Title:        Build & Deploy
Price/duration: ₹1,00,000 – ₹3,00,000 · One-time · 4–6 weeks after Discovery
Description:  We build the agent, connect to your live systems, run validation sprints, and deploy on your infrastructure. Agent is registered in CoreShift Command Center from day one.
Bullet points:
  - Agent built to the Design Document
  - Staging environment validation
  - Live system integration testing
  - Command Center monitoring setup
  - Handover, documentation, team training
```

### Step 3
```
Step label:   Step 03 — Operate
Title:        Monthly Subscription
Price/duration: ₹30,000 – ₹75,000 / month · Per agent
Description:  We own the agent permanently. Monitoring, maintenance, updates when systems change, new business rule additions — all included. You get a running agent, we stay accountable for keeping it running.
Bullet points:
  - 24/7 Command Center monitoring
  - Slack/email alerts on anomalies
  - Updates when upstream systems change
  - Monthly performance report
  - New business logic additions included
```

---

## SECTION 8: PRICING

**Section eyebrow:** `Pricing`
**Section headline:** `Transparent. No surprises.`
**Section sub-headline:** `Every engagement follows the same three-phase structure. Discovery de-risks the build. Subscription keeps the agent running and maintained — permanently.`

### Pricing Card 1
```
Tier label:       Phase 01
Card title:       Discovery Sprint
Tagline:          Understand your operation in depth before a single line of code is written.
Price:            ₹50K – 75K
Duration note:    One-time · 2 weeks
Featured badge:   (none)
Features:
  - Process walkthroughs and documentation
  - System integration mapping
  - Edge case and exception catalogue
  - Agent Design Document
  - Signed-off ROI model
CTA:              Start Discovery   href="mailto:srinath@cshift.io"
```

### Pricing Card 2  (FEATURED — "Most Impactful" badge)
```
Tier label:       Phase 02
Card title:       Build & Deploy
Tagline:          Agent built, tested, and live on your infrastructure in 4–6 weeks.
Price:            ₹1L – 3L
Duration note:    One-time · 4–6 weeks after Discovery
Featured badge:   Most Impactful
Features:
  - Agent built to Design Document
  - Live system integration and validation
  - Command Center monitoring setup
  - Staging → Production deployment
  - Team training and handover documentation
  - Your data stays on your infrastructure
CTA:              Get a Quote   href="mailto:srinath@cshift.io"  (primary/filled button)
```

### Pricing Card 3
```
Tier label:       Phase 03
Card title:       Monthly Subscription
Tagline:          We own the agent. Monitoring, maintenance, updates — included forever.
Price:            ₹30K – 75K
Duration note:    Per month · Per agent · Ongoing
Featured badge:   (none)
Features:
  - 24/7 Command Center monitoring
  - Slack/email anomaly alerts
  - Updates when systems change
  - New business logic additions
  - Monthly performance reporting
  - Permanent accountability
CTA:              Talk to Us   href="mailto:srinath@cshift.io"
```

### Note below pricing cards
```
Heading:   All prices are estimates. Every engagement is scoped after Discovery.
Body:      Complexity, system integrations, and volume determine final pricing. Discovery Sprint fee is applied against Build cost if you proceed.
CTA:       Request a Scoping Call   href="mailto:srinath@cshift.io"
```

---

## SECTION 9: FAQ

**Section eyebrow:** `FAQ`
**Section headline:** `Questions we hear from every prospect.`

Replace all existing FAQ items with these 7. Keep existing accordion/expand component.

---

**Q1** — *Lead with this one, it's the most common*
```
Q:  Can't I just use ChatGPT or Copilot for this?
A:  ChatGPT and Copilot are reasoning engines. They're brilliant — and we use them inside our agents. But they don't connect to your SAP, they don't know your vendor quirks, they don't run on a schedule, and they don't send alerts when something breaks at 3am. CoreShift agents are built around those tools. We're the team that makes them work in your specific operation.
```

**Q2**
```
Q:  Our data is sensitive. Where does it go?
A:  Your data stays on your infrastructure. Agents are deployed on your servers, your cloud account, or your SAP system. CoreShift's Command Center receives heartbeat signals and operational metadata only — not your financial records, customer data, or proprietary information. We can walk through the architecture in detail during Discovery.
```

**Q3**
```
Q:  What happens when the agent breaks?
A:  You get a Slack or email alert before it becomes a problem — that's what Command Center monitoring is for. If an agent run fails, we're notified automatically, we investigate, and we fix it. This is exactly why the subscription model exists: we have a direct financial incentive to keep every agent running. If it's broken, we're not getting paid.
```

**Q4**
```
Q:  Can our IT team build this instead?
A:  Probably, yes. Any competent developer can build an agent. The question is: who maintains it when your SAP upgrades, a vendor portal changes its UI, or a new business rule is added? Internal IT teams build things and move on. CoreShift's subscription model means we own maintenance permanently — because that's how we get paid.
```

**Q5**
```
Q:  How long does it take to go live?
A:  Discovery Sprint is 2 weeks. Build and Deploy is typically 4–6 weeks after a signed Design Document. First agent live within 8–10 weeks of kickoff. We've delivered faster for simpler operations and scoped longer for complex ones like SAP + 19 vendor portals.
```

**Q6**
```
Q:  Do you work with companies outside India?
A:  Yes. One of our live agents is for a UK-headquartered global company — processing GBP invoices, BACS/SWIFT bank feeds, and posting to NetSuite. We integrate with SAP, NetSuite, Salesforce, and most enterprise systems regardless of geography. Billing is available in INR or USD.
```

**Q7**
```
Q:  What operations are you best suited for?
A:  Operations that are rule-based (there's a defined process), high-volume (manual work is significant), connected to enterprise systems (SAP, ERP, CRM, portals), and consequential enough that errors matter. Finance operations, supply chain reconciliation, compliance tracking, and customer success reporting are our strongest areas — but we've never encountered a well-defined operation that couldn't be agent-ified.
```

---

## SECTION 10: FINAL CTA / BOTTOM SECTION

**Section headline:** `Ready to stop doing work that machines should do?`
**Section sub-headline:** `Book a 30-minute call. Tell us one process your team does manually. We'll tell you exactly what an agent for it would look like.`

**Primary CTA:**
```
Text:   Book a Discovery Call →
href:   mailto:srinath@cshift.io
```

**Secondary CTA:**
```
Text:   See All 6 Agents
href:   #agents
```

### Trust stats below CTAs (if the section supports a mini-stat row)
```
6          Live Agents
5+         Industries
20+        Years Enterprise Experience
₹0         Upfront unless we scope it
```

---

## SECTION 11: FOOTER

```
Logo/brand:   CoreShift

Footer links:
  - Why CoreShift   → #why
  - Agents           → #agents
  - Process          → #process
  - Pricing          → #pricing
  - Contact          → mailto:srinath@cshift.io

Copyright line:   cshift.io · © 2026
```

---

## NEW SECTION: COMMAND CENTER LIVE TICKER
*Add this if feasible — it's a high-impact trust signal. Place it between the Stats Bar (Section 4) and the Gap section (Section 5).*

This is a horizontal scrolling ticker bar that simulates live agent activity from the Command Center. It should:
- Have a left label: `COMMAND CENTER` in monospace/small caps
- Display a continuously scrolling row of agent activity events
- Each event has: a coloured dot (green = success, blue = info) + event text + timestamp

### Event content (loop these):
```
🟢  GRN Agent — processed 81 TAFE records, 0 failures         2m ago
🔵  CS Command Center — 3 accounts moved to At-Risk, alerts sent   14m ago
🟢  Vehicle Compliance Agent — 240 vehicles validated, 6 flagged   1h ago
🟢  SAP Data Agent — 5,000 ACDOCA rows returned in 3.2s           4m ago
🟢  Fund Operations Agent — 6 reports generated, 97.3% match rate  6h ago
🔵  AP/AR Agent — 94% auto-match on bank feed, 12 invoices extracted  38m ago
```

---

## CONTENT REMOVAL LIST

Remove or empty these sections if they exist in the current site:

- Any section titled "What We Do" or "Who This Is For" that lists fixed service categories → Replace with the Gap section (Section 5) and Agents section (Section 6)
- Any WIP or "coming soon" project cards → Remove entirely; only the 6 live/POC agents above
- Any pricing section that does not show the 3-phase (Discover / Build / Operate) structure → Replace with Section 8
- Any generic "our team" or "about" section that doesn't mention the 20+ years enterprise background → Update to: "CoreShift was founded by operators who spent 20+ years at SAP, IBM, HCL, HP, and Talend — who then moved into startups to learn what fast looks like. We build agents the way enterprise demands, and ship the way startups do."
- Any FAQ questions that are not in the list above → Remove and replace with Section 9

---

## WRITING VOICE — CONSISTENCY NOTES FOR CLAUDE CODE

When filling in any gaps or writing micro-copy (tooltips, alt text, error states, labels), follow this voice:

- **Confident, not salesy.** Never "we're excited to" or "leverage cutting-edge AI."
- **Specific, not vague.** Prefer "19 vendor portals" over "multiple portals." Prefer "₹277 Cr AUM" over "large fund."
- **Enterprise-aware.** Our prospects know what SAP, ACDOCA, NetSuite, and SOQL are. Don't explain them.
- **The punchline goes last.** Build to the payoff. "Manual process took 3 hours a day. The agent takes 3 minutes." Not the reverse.
- **First-person plural: "we."** CoreShift is a team, not a product.

---

*End of content brief. Questions or gaps → ping srinath@cshift.io*
