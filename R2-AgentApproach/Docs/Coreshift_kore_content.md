Update coreshift-kore-clone-v2.html. Keep all existing CSS, 
fonts, layout structure, and component patterns exactly. 
Update content and restructure two specific sections only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 1: REMOVE ALL FABRICATED CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remove these fake client names entirely from the site:
HDFC, ICICI, Axis, Kotak, Accel, Sequoia, Matrix, Peak XV,
Freshworks, Zoho, Chargebee, Maruti

Replace ALL client logo areas with industry descriptors only:
Instead of logos, show:
"Tier-1 Auto-parts Manufacturer, India"
"Global B2B Media Company, UK"
"AIF Category II VC Fund, India"
"$191M ARR B2B SaaS, Global"
"Indian Automotive Service Chain"

Remove all fabricated stats:
- "$2B+ AUM" → "₹277 Cr AUM managed"
- "25% NRR improvement" → "4–6 hrs/week reporting eliminated"
- "3x faster month-end close" → "94% invoice auto-match rate"
- "99.5% compliance accuracy" → "~95% automation rate"
- "60% reduction in reporting time" → "8–12 hrs/month reclaimed"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 2: HERO — update text only
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Eyebrow: "Agents as a Service  ·  AI Agents for Enterprise Operations"

Hero title (keep font/size exactly):
  "We build it.
   You run it.
   We maintain it."

Subtitle:
  "AI agents tailored to your exact operation — deployed on 
   your infrastructure, monitored 24/7, one monthly 
   subscription. Any process. Any system. Any industry."

Primary CTA: "Book a Discovery Call →"
Secondary CTA: "See Live Agents ↓"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 3: CAPABILITY CARDS — text update only
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Card 1 title: "Live Agents"
Card 1 desc: "Proven agents running in production — 
              adaptable to your stack, deployable in weeks."
Keep inner panel content (prebuilt-tags), update tags to:
  "GRN Reconciliation"  "AP/AR Automation"
  "SAP Data Access"     "Fund Operations"
  "CS Intelligence"     "Vehicle Compliance"
Label: "6 live in production"

Card 2 title: "Agent Blueprints"
Card 2 desc: "We've solved this class of problem before. 
              Faster build, lower risk, known patterns."
Update blueprints-tags to:
  "Finance Ops"  "Supply Chain"  "Compliance"
  "Reporting"    "Customer Success"  "+more"

Card 3 title: "Custom Agents"
Card 3 desc: "Any operation. Any system. Scoped after 
              a 2-week Discovery Sprint."
Keep code panel, update code content to:
  Line 1: def grn_agent(vendor_portal):
  Line 2:     records = extract_grn_data()
  Line 3:     validated = run_sap_rules()
  Line 4:     if validated:
  Line 5:         update_vbrk_table()
  Line 6:     return "81 records updated"
Keep Run + Deploy buttons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 4: INDUSTRY SOLUTIONS — full rebuild
(keep existing CSS classes and tab structure)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep the left panel text. Update to:
  Eyebrow: "Industry Solutions"
  Title: "Every agent is built for how your
          industry actually operates."
  Desc: "We don't sell generic AI. We build agents 
         that know your SAP transaction codes, your 
         vendor portal quirks, and your compliance 
         requirements. Six industries live. More 
         added every quarter."
  CTA 1: "Book a Discovery Call →"
  CTA 2: "See All Agents"

Tabs (keep 5, update labels):
  Manufacturing  |  Finance & Media  |  VC & PE  |  
  B2B SaaS  |  Automotive

RESTRUCTURE THE VERTICAL CARD LAYOUT:
Each vertical-card should now have 3 zones stacked:

ZONE A — GIF placeholder (top, ~45% card height)
  A dark container with:
  - Dashed border: 1px dashed rgba(255,255,255,0.2)
  - Background: keep existing gradient (vertical-card-bg)
  - Centred content:
      Small label in mono: "[ agent animation ]"
      Below: the agent name in white, 18px bold
      Below: a "LIVE" or "POC" badge
  - This zone = where the GIF drops in later
  - Add a CSS class "gif-zone" for easy targeting

ZONE B — Use Case (middle, ~30% card height)
  White/light bg panel with:
  - Small eyebrow: "WHAT IT DOES"
  - 3 bullet lines (use existing vertical-stat style):
      Each bullet: icon + one-line description

ZONE C — Case Study (bottom, ~25% card height)
  Slightly darker bg panel with left accent border:
  - Small eyebrow: "REAL RESULT"  
  - Quote text in italic
  - Attribution: industry + company size (no names)

Now apply this structure to all 5 tabs:

─────────────────────────────────────
TAB 1: Manufacturing
─────────────────────────────────────
ZONE A:
  Agent name: "GRN Reconciliation Agent"
  Badge: LIVE (green)
  Gradient: keep existing manufacturing gradient

ZONE B — What It Does:
  • Logs into 19+ OEM vendor portals (TAFE, SML, DICV, Mahindra) daily
  • Extracts GRN data, validates against 14 SAP business rules
  • Updates VBRK billing documents — zero human intervention

ZONE C — Real Result:
  Quote: "Revenue recognition delays ended. GRN updates 
          now happen before the finance team arrives."
  Attribution: Tier-1 auto-parts manufacturer · 
               ₹200–2,000 Cr revenue · SAP ECC

Stats row (keep vertical-stat style):
  19+  Vendor portals  |  154  Extraction runs logged  |  ~100%  Automation rate

─────────────────────────────────────
TAB 2: Finance & Media
─────────────────────────────────────
ZONE A:
  Agent name: "AP/AR Automation Agent"
  Badge: POC COMPLETE (amber)
  Gradient: warm amber-to-rose

ZONE B — What It Does:
  • Reads vendor emails, extracts 12 fields from invoice PDFs
  • Matches to POs and posts vendor bills to NetSuite automatically
  • Applies BACS/SWIFT bank payments to open invoices — 94% auto-match

ZONE C — Real Result:
  Quote: "Every invoice that arrives by email now goes 
          to NetSuite without a human in the loop."
  Attribution: Global B2B media company · 
               £100M+ revenue · UK-headquartered

Stats row:
  94%  Auto-match rate  |  8 min  Saved per transaction  |  40–80 hrs  Finance hours/month saved

─────────────────────────────────────
TAB 3: VC & PE
─────────────────────────────────────
ZONE A:
  Agent name: "Fund Operations Agent"
  Badge: LIVE (green)
  Gradient: keep existing vcpe gradient

ZONE B — What It Does:
  • Ingests Tally Prime exports, calculates 3 allocation ratio types
  • Generates 6 compliance-ready reports: CAS, IRR, Management Fees, Expenses
  • Handles 117 investors across 2 funds with 97.3% accuracy vs Power BI

ZONE C — Real Result:
  Quote: "Capital Account Statements that used to take 
          a weekend now run in minutes, with audit-ready 
          reconciliation built in."
  Attribution: AIF Category II VC fund · 
               ₹277 Cr AUM · ₹600 Cr target corpus

Stats row:
  117  Investors managed  |  ₹277 Cr  AUM  |  97.3%  Reconciliation accuracy

─────────────────────────────────────
TAB 4: B2B SaaS
─────────────────────────────────────
ZONE A:
  Agent name: "CS Command Center Agent"
  Badge: LIVE (green)
  Gradient: keep existing saas gradient

ZONE B — What It Does:
  • Syncs from Salesforce every 6 hours via SOQL, tracks 200+ accounts
  • Classifies 15 pipeline stages into churn risk buckets (S12–S14 = at risk)
  • Calculates NRR, surfaces at-risk accounts before revenue is lost

ZONE C — Real Result:
  Quote: "Leadership stopped asking 'is this data right?' 
          The agent has a single source of truth 
          that refreshes automatically."
  Attribution: $191M ARR B2B SaaS · 
               200+ enterprise accounts · Global

Stats row:
  $191M  ARR monitored  |  200+  Accounts tracked  |  4–6 hrs  Weekly reporting eliminated

─────────────────────────────────────
TAB 5: Automotive
─────────────────────────────────────
ZONE A:
  Agent name: "Vehicle Compliance Agent"
  Badge: LIVE (green)
  Gradient: keep existing automotive gradient

ZONE B — What It Does:
  • Validates 10,000+ vehicles against Parivahan/RTO government databases
  • Auto-flags 6 compliance issue types: insurance, fitness, challans, 
    hypothecation, blacklist, PUC expiry
  • Generates daily prioritised call centre campaign list for renewals

ZONE C — Real Result:
  Quote: "Proactive renewal outreach is now automatic. 
          The call centre works from a daily 
          agent-generated list."
  Attribution: Indian automotive service chain · 
               500–10,000 vehicles · PUCC test centres

Stats row:
  10K+  Vehicles validated  |  ~95%  Automation rate  |  60+  Fields per vehicle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 5: AGENTS SECTION — update card text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep card layout exactly. Update descriptions only:

Card 1 — GRN Reconciliation Agent:
  Desc: "Logs into 19+ OEM portals daily, extracts 
         GRN data, updates SAP VBRK billing documents 
         — without anyone touching a keyboard."
  Tags: SAP ECC/S4HANA · Playwright · Supabase

Card 2 — AP/AR Automation Agent:
  Desc: "Extracts 12 fields from invoice PDFs, matches 
         POs, applies BACS/SWIFT bank payments to open 
         invoices with 94% auto-match rate."
  Tags: NetSuite · Claude Vision · BACS/SWIFT

Card 3 — SAP Query Agent:
  Desc: "Self-service access to 10,000+ SAP tables for 
         finance dashboards — no IT tickets, no ABAP 
         developer, real-time via OData."
  Tags: SAP S4/HANA · OData 2.0 · Power BI

Card 4 — Fund Operations Agent:
  Desc: "End-to-end investor reporting for VC/PE — 
         6 compliance-ready reports, 117 investors, 
         97.3% accuracy vs legacy Power BI."
  Tags: Tally Prime · Supabase · FBIL API

Card 5 — CS Intelligence Agent:
  Desc: "Monitors churn risk and NRR across 200+ 
         enterprise accounts syncing from Salesforce 
         — surfaces at-risk revenue before it's lost."
  Tags: Salesforce · SOQL · Google Apps Script

Card 6 — Vehicle Compliance Agent:
  Desc: "Validates 10,000+ vehicles against government 
         RTO databases, auto-flags compliance issues, 
         generates renewal campaigns daily."
  Tags: Signzy API · SurePass · Parivahan/Vahan

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FIX 6: FOOTER — small additions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add "Agents as a Service" as a tagline under the logo.
Footer tagline: "Agents as a Service · Built for enterprise 
                operations · Deployed on your infrastructure"

Update footer Platform links to:
  Live Agents · Agent Blueprints · Custom Builds · 
  Command Center · Pricing

Update copyright: © 2026 CoreShift Ventures LLP