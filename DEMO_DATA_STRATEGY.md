# Demo Data Strategy for Screen Recordings
**Purpose:** Create production-quality demos without exposing real customer data

---

## 🎯 THE PROBLEM

You want Screen Studio-quality animated demos but need to:
- Hide real customer data (GDPR, privacy)
- Show realistic workflows
- Demonstrate actual product capabilities
- Create multiple industry-specific demos

---

## ✅ SOLUTION: Demo Mode + Seed Data

### **Approach 1: URL Parameter Demo Mode** (Fastest)

Add `?demo=true` parameter to load fake data instead of real data.

**Implementation:**

```typescript
// lib/demo-mode.ts
export function isDemoMode(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('demo') === 'true';
}

export function getDemoFlag(): string {
  return isDemoMode() ? ' 🎬 DEMO MODE' : '';
}
```

**In Your Components:**

```typescript
// app/shiftiq/page.tsx
'use client';

import { isDemoMode } from '@/lib/demo-mode';
import { demoChurnPredictions, realChurnPredictions } from '@/lib/data';

export default function ShiftIQPage() {
  const churnPredictions = isDemoMode()
    ? demoChurnPredictions
    : realChurnPredictions;

  // Rest of component...
}
```

**Usage:**
- Production: `http://localhost:3000/shiftiq`
- Demo: `http://localhost:3000/shiftiq?demo=true`

---

### **Approach 2: Separate Demo Database** (Most Realistic)

Create a separate Supabase project or database with fake data.

**Setup:**

```bash
# .env.demo
NEXT_PUBLIC_SUPABASE_URL=https://demo-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_demo_key
```

**Switch Environment:**
```bash
# Record demos
cp .env.demo .env.local
npm run dev

# Back to production
cp .env.production .env.local
```

---

### **Approach 3: Static Demo Build** (Cleanest)

Build a static demo version that doesn't connect to any database.

**Create Demo Config:**

```typescript
// config/demo.config.ts
export const DEMO_CONFIG = {
  isDemo: true,
  companyName: "Acme Corp",
  customerCount: 127,
  arr: "$2.4M",
  nrr: 118,
  // ... all demo data
};
```

**Separate Demo Pages:**

```
app/
  demo/              # Demo-only pages
    shiftiq/
    dashboard/
    accounts/
```

**Benefits:**
- No risk of accidentally showing real data
- Can deploy to separate domain (demo.coreshift.io)
- Perfect for embedding in marketing site

---

## 📊 CREATING REALISTIC FAKE DATA

### **Tools for Generating Fake Data**

**1. Faker.js** (Most Popular)
```bash
npm install @faker-js/faker
```

```typescript
import { faker } from '@faker-js/faker';

export function generateDemoCustomers(count: number) {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    industry: faker.helpers.arrayElement(['SaaS', 'FinTech', 'E-commerce']),
    arr: faker.number.int({ min: 10000, max: 500000 }),
    healthScore: faker.number.int({ min: 20, max: 95 }),
    churnRisk: faker.number.int({ min: 10, max: 90 }),
    mrr: faker.number.int({ min: 1000, max: 50000 }),
    contacts: faker.number.int({ min: 2, max: 15 }),
    lastEngagement: faker.date.recent({ days: 30 }),
  }));
}
```

**2. Chance.js** (Alternative)
```bash
npm install chance
```

**3. Manual Seed Data** (Most Control)

Create realistic industry-specific data:

```typescript
// lib/demo-data/automotive.ts
export const automotiveDemoData = {
  customers: [
    {
      name: "AutoNation Dealership Network",
      type: "Enterprise",
      vehicles: 2847,
      monthlyTransactions: 1243,
      processingTime: "45 seconds avg",
      accuracy: "98.5%",
    },
    {
      name: "CarMax Regional Hub",
      type: "Mid-Market",
      vehicles: 892,
      monthlyTransactions: 456,
      processingTime: "38 seconds avg",
      accuracy: "97.2%",
    },
    // ... more realistic examples
  ],
  metrics: {
    totalVehiclesProcessed: 12847,
    avgProcessingTime: "42 seconds",
    accuracyRate: "98.1%",
    timeSaved: "1,240 hours/month",
  }
};

// lib/demo-data/saas.ts
export const saasDemoData = {
  customers: [
    {
      name: "TechFlow Solutions",
      arr: 145000,
      healthScore: 42,
      churnRisk: 83,
      reasoning: "Declining engagement (-40% in 30 days), support tickets up 3x",
      recommendations: [
        "Schedule executive alignment meeting within 48 hours",
        "Activate Account Recovery playbook",
        "Review success plan"
      ]
    },
    // ... more examples
  ]
};
```

---

## 🎬 SCREEN STUDIO RECORDING WORKFLOW

### **Pre-Recording Checklist**

**1. Clean Environment**
```bash
# Close unnecessary apps
# Quit Slack, email, notifications
# Clean desktop
# Use focused browser profile
```

**2. Browser Setup**
```bash
# Create "Demo" Chrome profile
# Install extensions:
  - Video Speed Controller (for smooth playback)
  - Window Resizer (consistent sizing)
  - Hide scrollbars extension (cleaner look)
```

**3. Demo Data Prep**
- Load demo mode: `?demo=true`
- Verify no real data visible
- Check all tabs/sections
- Test workflows beforehand

**4. Screen Studio Settings**
- Resolution: 1920x1080 or 2560x1440
- Frame rate: 60fps
- Auto-zoom: ON
- Cursor smoothing: ON
- Padding: 40-60px
- Background: Gradient or solid color

---

## 🎨 CREATING INDUSTRY-SPECIFIC DEMOS

### **Demo 1: Automotive (GaadiSaathi)**

**Fake Data Profile:**
```typescript
// demo-data/gaadisaathi-demo.ts
export const gaadisaathiDemo = {
  dealership: "Premium Auto Gallery",
  location: "Mumbai, Maharashtra",

  // RC Document Samples (fake but realistic)
  rcDocuments: [
    {
      registrationNumber: "MH02XX1234",
      ownerName: "Rajesh Kumar",
      vehicleMake: "Toyota Fortuner",
      registrationDate: "2021-03-15",
      chassisNumber: "MHTXX00XX00XXXXXX",
      engineNumber: "1GDXXXXXXXXXXXX",
      status: "Processed",
      accuracy: "99.2%",
      processingTime: "42 seconds"
    },
    // ... 10-15 more examples
  ],

  metrics: {
    documentsToday: 47,
    avgProcessingTime: "38 seconds",
    accuracy: "98.7%",
    timeSavedToday: "6.2 hours",
    manualErrorsAvoided: 12
  }
};
```

**Recording Script:**
1. Show dashboard with metrics
2. Upload sample RC document
3. Watch AI extraction in progress
4. Show validated results
5. Highlight time saved metric
6. Pan to accuracy chart

---

### **Demo 2: SaaS CS Platform (ShiftIQ)**

**Fake Data Profile:**
```typescript
// demo-data/shiftiq-demo.ts
export const shiftIQDemo = {
  portfolio: {
    totalCustomers: 127,
    totalARR: "$2.4M",
    atRiskARR: "$340K",
    expansionPipeline: "$185K",
  },

  churnAlerts: [
    {
      company: "TechFlow Solutions",
      healthScore: 42,
      churnRisk: 83,
      arr: "$145K",
      reasoning: "Declining engagement (-40% in 30 days), support tickets increased 3x, executive sponsor left company",
      confidence: 92,
      daysToRenewal: 47
    },
    {
      company: "DataStream Inc",
      healthScore: 58,
      churnRisk: 64,
      arr: "$78K",
      reasoning: "Product usage dropped 25%, missed last 2 QBR meetings",
      confidence: 87,
      daysToRenewal: 31
    },
    // ... more
  ],

  smartRecommendations: [
    {
      priority: "critical",
      title: "Address TechFlow Churn Risk",
      impact: "$145K ARR at risk",
      confidence: 94,
      actions: [
        "Schedule executive call",
        "Deploy recovery playbook",
        "Review contract terms"
      ]
    }
  ]
};
```

**Recording Script:**
1. Show portfolio dashboard
2. Scroll to churn predictions
3. Click into high-risk account
4. Show AI reasoning
5. Highlight recommended actions
6. Show trend over time
7. Pan to smart recommendations

---

### **Demo 3: FinTech (Generic)**

**Fake Data Profile:**
```typescript
// demo-data/fintech-demo.ts
export const fintechDemo = {
  transactions: [
    {
      id: "TXN-2024-001234",
      amount: 25000,
      type: "International Wire",
      status: "Pending Review",
      riskScore: 23,
      complianceChecks: [
        { name: "AML Screening", status: "Passed" },
        { name: "Sanctions Check", status: "Passed" },
        { name: "PEP Screening", status: "Clear" },
        { name: "Document Verification", status: "Pending" }
      ]
    }
  ],

  metrics: {
    avgProcessingTime: "4.2 minutes",
    automationRate: "87%",
    complianceScore: "99.2%",
    manualReviewsReduced: "76%"
  }
};
```

---

## 🎥 SCREEN STUDIO BEST PRACTICES

### **Recording Tips**

**1. Multiple Takes**
- Record same workflow 3-5 times
- Pick the smoothest one
- Don't worry about perfection on first take

**2. Slow Down**
- Move cursor deliberately
- Pause 1-2 seconds between clicks
- Let animations complete
- Screen Studio will smooth it out

**3. Workflow Chunks**
- Record in 15-30 second segments
- Easier to edit
- Can rearrange later
- Splice perfect moments together

**4. Highlight Key Moments**
- Use Screen Studio's auto-zoom
- Slow down on important data
- Add pauses at key insights
- Let viewers absorb information

**5. Export Settings**
- MP4 format
- 1080p or 1440p
- 60fps
- H.264 codec (best compatibility)

---

## 🚀 IMPLEMENTATION PLAN

### **Phase 1: ShiftIQ Demo (1-2 days)**

**Day 1: Prep**
1. ✅ Create `lib/demo-data/shiftiq-demo.ts`
2. ✅ Add demo mode toggle
3. ✅ Test with `?demo=true`
4. ✅ Verify no real data leaks

**Day 2: Record**
1. ✅ Purchase Screen Studio ($89)
2. ✅ Set up clean browser profile
3. ✅ Record 5 takes of ShiftIQ workflow
4. ✅ Export best take as MP4

**Deliverables:**
- ShiftIQ demo video (60-90 seconds)
- 3-5 high-res screenshots
- GIF preview for landing page

---

### **Phase 2: GaadiSaathi Demo (1 day)**

1. ✅ Create automotive demo data
2. ✅ Set up sample RC documents (fake but realistic)
3. ✅ Record upload → extraction → validation flow
4. ✅ Export video + screenshots

---

### **Phase 3: Integration (1 day)**

1. ✅ Create video showcase section on landing
2. ✅ Grid layout like Screen Studio's "Made With" section
3. ✅ Auto-play on scroll (muted)
4. ✅ Click to view full demo

---

## 📐 VIDEO SHOWCASE COMPONENT

```tsx
// components/landing/VideoShowcase.tsx
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface DemoVideo {
  id: string;
  title: string;
  industry: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  description: string;
}

const demoVideos: DemoVideo[] = [
  {
    id: 'shiftiq',
    title: 'AI-Powered Churn Prevention',
    industry: 'SaaS',
    thumbnail: '/demos/shiftiq-thumb.jpg',
    videoUrl: '/demos/shiftiq-demo.mp4',
    duration: '1:20',
    description: '90 days early churn warning with ML predictions'
  },
  {
    id: 'gaadisaathi',
    title: 'Document Processing Automation',
    industry: 'Automotive',
    thumbnail: '/demos/gaadisaathi-thumb.jpg',
    videoUrl: '/demos/gaadisaathi-demo.mp4',
    duration: '0:45',
    description: '90% faster RC extraction with AI'
  },
  {
    id: 'fintech',
    title: 'Compliance Workflow Automation',
    industry: 'FinTech',
    thumbnail: '/demos/fintech-thumb.jpg',
    videoUrl: '/demos/fintech-demo.mp4',
    duration: '1:05',
    description: 'Automated compliance checks & risk scoring'
  }
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          See Our Work
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Real transformations we've delivered across industries.
          Watch how AI-powered automation changes everything.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video">
                {/* Video */}
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  loop
                  muted
                  playsInline
                  autoPlay={activeVideo === video.id}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Play className="w-5 h-5 text-brand-orange" />
                      <span className="text-sm text-white font-medium">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-orange/90 text-white text-xs font-semibold rounded-full">
                    {video.industry}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 FINAL DELIVERABLES

### **Video Assets**
- `/public/demos/shiftiq-demo.mp4` (1-2min)
- `/public/demos/gaadisaathi-demo.mp4` (45-60s)
- `/public/demos/fintech-demo.mp4` (1min)

### **Thumbnail Images**
- `/public/demos/shiftiq-thumb.jpg` (1920x1080)
- `/public/demos/gaadisaathi-thumb.jpg` (1920x1080)
- `/public/demos/fintech-thumb.jpg` (1920x1080)

### **Static Screenshots** (for case studies)
- 5-7 high-res screenshots per product
- WebP format, optimized for web
- Various stages of workflow

---

## ✅ NEXT STEPS

**Today:**
1. Purchase Screen Studio ($89) - https://screen.studio
2. Create demo data file for ShiftIQ

**Tomorrow:**
3. Record ShiftIQ demo (multiple takes)
4. Export video + screenshots
5. Create thumbnail images

**This Week:**
6. Repeat for GaadiSaathi
7. Build VideoShowcase component
8. Add to landing page

---

**Investment:**
- Screen Studio: $89 (one-time)
- Time: 3-4 days for all 3 demos
- Result: Apple-quality product showcase

Ready to make CoreShift look like a $100M company! 🚀

---

## 📋 PROJECT SEPARATION STRATEGY (RECOMMENDED APPROACH)

### **✅ CLEAN ARCHITECTURE: Separate Demo Instances**

**Decision:** Create demo instances in respective product folders, NOT in landing page project.

**Rationale:**
- **Separation of Concerns** - Landing is pure marketing, products handle their own demos
- **Independent Development** - Work on products separately from marketing site
- **Better Deployment** - Each project has its own demo environment
- **Easier Maintenance** - Demo data lives with the product it represents
- **Cleaner Codebases** - No cross-contamination between projects

---

## 🗂️ PROJECT STRUCTURE

```
Projects/
├── coreshift-transformation/          # THIS PROJECT - Pure Landing/Marketing
│   ├── components/landing/
│   │   ├── VideoShowcase.tsx         # Showcase component (I build)
│   │   ├── AICapabilitiesShowcase.tsx # AI section (I build)
│   │   └── CaseStudyDetailCard.tsx   # Reusable card (I build)
│   ├── app/
│   │   ├── page.tsx                  # Main landing
│   │   └── case-studies/             # Case study pages (I build)
│   │       ├── page.tsx              # Overview
│   │       ├── automotive/page.tsx   # GaadiSaathi story
│   │       ├── saas/page.tsx         # ShiftIQ story
│   │       └── fintech/page.tsx      # Generic FinTech
│   └── public/demos/                 # Assets YOU export here
│       ├── shiftiq-demo.mp4
│       ├── shiftiq-thumb.jpg
│       ├── shiftiq-1.jpg
│       ├── gaadisaathi-demo.mp4
│       └── ... (all exported assets)
│
├── coreshift-template/                # ShiftIQ Product
│   ├── lib/demo-mode.ts              # Demo toggle (YOU build)
│   ├── lib/demo-data/                # Fake data (YOU build)
│   │   └── shiftiq-demo.ts
│   └── app/shiftiq/page.tsx          # Uses demo mode
│
├── gaadisaathi-platform/              # GaadiSaathi Product
│   ├── lib/demo-mode.ts              # Demo toggle (YOU build)
│   ├── lib/demo-data/                # Fake automotive data (YOU build)
│   │   └── gaadisaathi-demo.ts
│   └── app/                          # Your existing pages
│
└── [other-projects]/                  # Future products
```

---

## 🔄 WORKFLOW: Your Side → My Side

### **YOUR TASKS (In Product Projects with Claude Code)**

**For coreshift-template (ShiftIQ):**
1. ✅ Open project with Claude Code
2. ✅ Say: "Add demo mode with `?demo=true` parameter"
3. ✅ Say: "Create realistic fake data for ShiftIQ churn predictions"
4. ✅ Test: `http://localhost:3000/shiftiq?demo=true`
5. ✅ Record with Screen Studio:
   - Dashboard overview (60-90s)
   - Churn risk predictions
   - Smart recommendations
   - Portfolio trends
6. ✅ Export:
   - `shiftiq-demo.mp4` (main video)
   - `shiftiq-thumb.jpg` (thumbnail 1920x1080)
   - 5-7 screenshots as `shiftiq-1.jpg`, `shiftiq-2.jpg`, etc.
7. ✅ Copy to: `/Users/srinathsridharan/Projects/coreshift-transformation/public/demos/`

**For gaadisaathi-platform:**
1. ✅ Repeat same process
2. ✅ Create automotive-specific demo data (fake RC documents, dealerships)
3. ✅ Record RC extraction workflow
4. ✅ Export `gaadisaathi-demo.mp4` + screenshots
5. ✅ Copy to this project's `/public/demos/`

**For fintech example:**
1. ✅ Either use existing project or create generic demo
2. ✅ Record compliance/workflow automation
3. ✅ Export assets

---

### **MY TASKS (In coreshift-transformation - This Project)**

**When You Have Assets:**
1. ✅ Build `VideoShowcase.tsx` component
   - Grid layout like Screen Studio's "Made With" section
   - Auto-playing videos on hover
   - Industry badges
   - Links to case studies

2. ✅ Build `AICapabilitiesShowcase.tsx`
   - Dark background with gradients
   - Large ShiftIQ screenshot
   - 3-column feature grid
   - Animated metrics counters

3. ✅ Create case study pages:
   - `/case-studies/page.tsx` - Overview grid
   - `/case-studies/automotive` - GaadiSaathi deep dive
   - `/case-studies/saas` - ShiftIQ deep dive
   - `/case-studies/fintech` - Generic FinTech

4. ✅ Update main landing:
   - Add VideoShowcase after ProductVideoSection
   - Add AICapabilitiesShowcase
   - Link to case studies
   - Update ThreePathSection with real screenshots

5. ✅ Optimize all assets:
   - Convert to WebP
   - Lazy loading
   - Image zoom on click
   - Dark mode support

---

## 📁 ASSET EXPORT CHECKLIST

### **What to Export from Each Product:**

```
Per Product Export:
├── [product]-demo.mp4          # Main demo video (60-90s, 1080p)
├── [product]-thumb.jpg         # Video thumbnail (1920x1080)
├── [product]-1.jpg             # Screenshot: Dashboard/Overview
├── [product]-2.jpg             # Screenshot: Key Feature 1
├── [product]-3.jpg             # Screenshot: Key Feature 2
├── [product]-4.jpg             # Screenshot: Results/Metrics
└── [product]-5.jpg             # Screenshot: Workflow (optional)
```

**Naming Convention:**
- `shiftiq-demo.mp4`, `shiftiq-thumb.jpg`, `shiftiq-1.jpg`
- `gaadisaathi-demo.mp4`, `gaadisaathi-thumb.jpg`, `gaadisaathi-1.jpg`
- `fintech-demo.mp4`, `fintech-thumb.jpg`, `fintech-1.jpg`

**Specs:**
- Videos: MP4, H.264, 1080p or 1440p, 60fps
- Images: JPG or WebP, 1920x1080 or 2560x1440
- Thumbnails: First frame or most visually appealing moment

---

## 🚀 IMPLEMENTATION TIMELINE

### **Phase 1: Product Demo Setup** (YOU handle in product projects)
**Timeline:** 2-3 days

**Day 1: coreshift-template**
- ✅ Add demo mode to ShiftIQ
- ✅ Create fake churn prediction data
- ✅ Test demo mode works
- ✅ Purchase Screen Studio ($89)

**Day 2: Record ShiftIQ**
- ✅ Clean browser setup
- ✅ Record 3-5 takes
- ✅ Pick best take, export
- ✅ Create screenshots (5-7)
- ✅ Copy to coreshift-transformation/public/demos/

**Day 3: gaadisaathi-platform**
- ✅ Add demo mode
- ✅ Create fake automotive data
- ✅ Record RC extraction workflow
- ✅ Export video + screenshots
- ✅ Copy to coreshift-transformation/public/demos/

---

### **Phase 2: Landing Page Integration** (I handle in this project)
**Timeline:** 2-3 days
**Trigger:** You say "Assets are ready in /public/demos/"

**Day 1: Components**
- ✅ Build VideoShowcase component
- ✅ Build AICapabilitiesShowcase component
- ✅ Test with your exported assets

**Day 2: Case Study Pages**
- ✅ Create /case-studies structure
- ✅ Build automotive page (GaadiSaathi story)
- ✅ Build saas page (ShiftIQ story)
- ✅ Build fintech page (generic example)

**Day 3: Integration & Polish**
- ✅ Add components to main landing
- ✅ Update ThreePathSection with real screenshots
- ✅ Optimize images (WebP conversion)
- ✅ Mobile responsive check
- ✅ Dark mode testing
- ✅ Performance audit

---

## 💡 PLACEHOLDER STRATEGY (OPTIONAL)

**Option A: Wait for Assets** (Recommended)
- I wait until you have videos/screenshots
- Then build everything at once
- Faster, cleaner implementation

**Option B: Build with Placeholders Now**
- I create component structure now
- Use placeholder images/videos
- You swap in real assets later
- Benefit: Structure ready, just plug-and-play

**Your Choice:** Which approach do you prefer?

---

## 📞 HANDOFF COMMUNICATION

### **When You're Ready, Just Say:**

**Example 1:**
> "I've added ShiftIQ demo assets to /public/demos/. Ready to build VideoShowcase."

**Example 2:**
> "ShiftIQ and GaadiSaathi demos are in /public/demos/. Let's integrate."

**Example 3:**
> "All 3 demo videos are ready. Build the showcase components."

**I'll Respond With:**
- Build VideoShowcase component
- Build AICapabilitiesShowcase
- Create case study pages
- Integrate everything on landing
- Test & optimize

---

## ✅ NEXT STEPS (IMMEDIATE)

**Before System Reboot:**
1. ✅ This context saved in DEMO_DATA_STRATEGY.md
2. ✅ MASTER_CONTEXT.md has full project overview
3. ✅ AI_SHOWCASE_STRATEGY.md has detailed plan
4. ✅ All documents committed to git (optional but recommended)

**After Reboot:**
1. ✅ Open coreshift-template with Claude Code
2. ✅ Say: "Add demo mode for ShiftIQ with fake data"
3. ✅ Test demo mode works
4. ✅ Purchase Screen Studio
5. ✅ Record first demo

**When Assets Ready:**
6. ✅ Return to coreshift-transformation
7. ✅ Say: "Assets ready, build showcase components"
8. ✅ I build everything

---

## 📚 CONTEXT DOCUMENTS (All Safe)

**In This Project:**
- ✅ `MASTER_CONTEXT.md` - Complete project overview, all pages, decisions
- ✅ `TRANSFORMATION_STATUS_UPDATE.md` - Current status, recent updates
- ✅ `AI_SHOWCASE_STRATEGY.md` - AI positioning, ShiftIQ features
- ✅ `DEMO_DATA_STRATEGY.md` - **THIS FILE** - Demo recording strategy
- ✅ `TRANSFORMATION_LANDING_BLUEPRINT.md` - Original blueprint
- ✅ `TRANSFORMATION_IMPLEMENTATION_CHECKLIST.md` - Implementation tasks

**Everything is documented. You can reboot safely!** 🛡️

---

## 🎯 QUICK REFERENCE

**Project Split:**
- **coreshift-transformation** = Marketing/Landing (this project, I handle)
- **coreshift-template** = ShiftIQ product (you handle demo mode)
- **gaadisaathi-platform** = Automotive product (you handle demo mode)

**Asset Flow:**
- Product projects → Export videos/screenshots → This project's /public/demos/

**Communication Trigger:**
- You: "Assets ready in /public/demos/"
- Me: Build showcase components + case studies

**Tools Needed:**
- Screen Studio: $89 (purchase when ready to record)
- Faker.js: Free (for generating demo data)
- Claude Code: In each product project for demo setup

---

**Everything is documented. Context is safe. Ready when you are! 🚀**
