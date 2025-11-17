# Intent-Based Contact Form System

The contact form now intelligently adapts based on the user's intent, providing a personalized assessment experience for different service offerings.

## How It Works

### Two Different Intents

1. **Blueprint Intent** (`intent=blueprint`) - Default
   - For users interested in Strategy & Blueprint Sprint
   - Focuses on immediate operational transformation needs
   - Questions about current bottlenecks and implementation urgency

2. **Advisory Intent** (`intent=advisory`)
   - For users interested in Fractional COO services
   - Focuses on strategic operational needs
   - Questions about leadership gaps and ongoing support

## User Flow

### Blueprint Flow
```
User clicks "Book Free Process Audit" (Hero/Showcase)
    ↓
/contact?intent=blueprint
    ↓
Badge: "🎯 Strategy & Blueprint Assessment"
    ↓
Questions focus on:
- Current operational challenges
- Process automation goals
- Implementation timeline
```

### Advisory Flow
```
User clicks "Talk to your Fractional COO" (What We Do/Advisory Page)
    ↓
/contact?intent=advisory
    ↓
Badge: "👔 Fractional COO Consultation"
    ↓
Questions focus on:
- Strategic leadership needs
- Executive-level support areas
- Engagement duration preferences
```

## Question Differences by Intent

### Step 1 & 2: Same for Both
- Contact Info (Name, Email, Company, Role)
- Business Overview (Industry, Team Size, Business Stage)

### Step 3: Current State
**Blueprint Intent:**
- "Processes are manual and time-consuming"
- "Work gets lost between teams"
- "No single source of truth"
- "Too much firefighting, not enough strategy"
- etc.

**Advisory Intent:**
- "Need strategic operational guidance"
- "Leadership gap in operations function"
- "Cross-functional team alignment issues"
- "Need executive-level process oversight"
- etc.

### Step 4: Goals & Timeline
**Blueprint Intent - Goals:**
- "Automate repetitive tasks"
- "Improve team efficiency"
- "Scale without hiring"
- "Build AI-powered workflows"

**Blueprint Intent - Timeline:**
- "Urgent - Within 1 month"
- "This quarter (3 months)"
- "Next quarter (6 months)"
- "Exploring for future planning"

**Advisory Intent - Goals:**
- "Strategic operational leadership"
- "Team enablement and coaching"
- "Quarterly planning and OKRs"
- "Executive-level decision support"

**Advisory Intent - Timeline:**
- "3-month engagement"
- "6-month engagement"
- "12+ month engagement"
- "Flexible / Exploring options"

## CTA Mappings

### Blueprint Intent (`?intent=blueprint`)
- ✅ Hero CTA: "Book Free Process Audit"
- ✅ Default contact page access (no parameter)
- All Strategy & Blueprint focused CTAs

### Advisory Intent (`?intent=advisory`)
- ✅ "Talk to your Fractional COO" (What We Do section)
- ✅ "Schedule Consultation" (Advisory page - Hero)
- ✅ "Schedule Consultation" (Advisory page - Final CTA)

## Database Storage

All submissions are stored in Supabase with the `intent` field:

```sql
intent TEXT NOT NULL DEFAULT 'blueprint'
-- Values: 'blueprint' or 'advisory'
```

You can filter leads in Supabase by intent:
- **Blueprint leads**: Filter where `intent = 'blueprint'`
- **Advisory leads**: Filter where `intent = 'advisory'`

## Visual Indicators

### Intent Badges
Each form displays a colored badge at the top showing the selected intent:

**Blueprint:**
- 🎯 Orange badge
- "Strategy & Blueprint Assessment"

**Advisory:**
- 👔 Purple badge
- "Fractional COO Consultation"

### Page Titles
The page title adapts based on intent:
- Blueprint: "Business Transformation Readiness"
- Advisory: "Fractional COO Readiness Assessment"

## Testing

### Test Blueprint Flow
1. Visit `/contact` or `/contact?intent=blueprint`
2. Should see orange badge "Strategy & Blueprint Assessment"
3. Questions should focus on operational transformation
4. Timeline asks "When do you need this implemented?"

### Test Advisory Flow
1. Visit `/contact?intent=advisory`
2. Should see purple badge "Fractional COO Consultation"
3. Questions should focus on strategic leadership
4. Timeline asks "Preferred engagement duration?"

## Future Enhancements

Potential improvements to consider:
- [ ] Different Calendly links based on intent
- [ ] Intent-specific email templates
- [ ] Slack/Discord notifications with intent tagging
- [ ] Analytics tracking by intent
- [ ] Intent-specific "What to Expect" content (currently same for both)

## Notes

- Default intent is `blueprint` if no parameter is provided
- Intent is stored in database for lead qualification
- Questions are conditionally rendered based on intent
- All existing functionality (validation, error handling, loading states) works for both intents
