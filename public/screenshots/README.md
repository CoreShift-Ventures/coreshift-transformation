# Screenshots Directory

This directory contains screenshots of the CoreShift platform used throughout the landing page.

## Required Screenshots

Add the following screenshots to this directory:

### 1. `goals-module.png`
- **Source:** http://localhost:3008/goals
- **Recommended size:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Usage:** Goals Module preview in carousel and cards

### 2. `dashboard-module.png`
- **Source:** http://localhost:3008/dashboard
- **Recommended size:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Usage:** Dashboard preview in carousel and cards

### 3. `health-scoring-module.png`
- **Source:** http://localhost:3008/health-scoring
- **Recommended size:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Usage:** Health Scoring preview in carousel and cards

### 4. `tasks-module.png`
- **Source:** http://localhost:3008/tasks
- **Recommended size:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Usage:** Task Management preview in carousel and cards

### 5. `playbooks-module.png`
- **Source:** http://localhost:3008/playbooks
- **Recommended size:** 1200x675px (16:9 aspect ratio)
- **Format:** PNG or WebP
- **Usage:** Playbook Library preview in carousel and cards

## How to Take Screenshots

### Option 1: Browser Screenshot (Recommended)
1. Open each URL in your browser (Chrome recommended)
2. Set browser window to 1920x1080 resolution
3. Use Chrome DevTools (F12) → Device Toolbar → Set to "Responsive" → 1920x1080
4. Take screenshot using:
   - Mac: `Cmd + Shift + 4` (then select area)
   - Chrome: Right-click → "Capture screenshot" (full size)
5. Save with the exact filename listed above

### Option 2: Automated Screenshot Tool
```bash
# Using Puppeteer or similar tool
npm install -g capture-website-cli
capture-website http://localhost:3008/goals --width=1200 --height=675 --output=goals-module.png
```

## Tips for Best Results

- **Clean data:** Ensure demo data looks professional
- **Consistent styling:** Use the same theme (light/dark) for all screenshots
- **No scrollbars:** Hide browser UI and scrollbars
- **High resolution:** Use 2x resolution for retina displays, then scale down
- **Compress images:** Use tools like TinyPNG to reduce file size

## After Adding Screenshots

The landing page will automatically display your screenshots in:
1. ✅ Screenshot carousel in DemoOptionsModal
2. ✅ Preview images in "See What's Inside" section cards
3. ✅ All gated demo entry points

No code changes needed—just drop the files in this directory with the correct names!
