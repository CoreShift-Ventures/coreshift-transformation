# v2 Rebuild Session Notes

## Session Date: May 8, 2026

### What was done:
1. **Git setup complete:**
   - Created `v1-archive` branch (snapshot of live site)
   - Created `v2-rebuild` branch (working branch)
   - Both pushed to origin

2. **Project structure:**
   - `v1-archive/` folder created with reference copy of v1 code
   - `v2-rebuild/v2/` contains the Simple template (running on port 3004)
   - `v2-rebuild/templates/simple/` and `templates/gray/` contain original Cruip templates for reference

3. **Servers:**
   - v1 (current production): http://localhost:3003
   - v2 (Simple template): http://localhost:3004

4. **Step 2 partial - Brand customization:**
   - Added CoreShift logo files to `public/images/logos/`
   - Updated header nav links (Architecture, Templates, Case Studies, About)
   - Updated footer with CoreShift links
   - Added brand colors to CSS variables
   - Updated layout metadata

### IMPORTANT - Design Direction (User Feedback):
**DO NOT** rewrite Cruip components from scratch. The user purchased Cruip templates specifically for their:
- Typography and font styling
- Animations (AOS, transitions)
- Layout patterns
- Visual polish

**CORRECT APPROACH:**
1. Keep all Cruip styling, fonts, animations intact
2. Only change TEXT CONTENT (headlines, copy, CTAs, links)
3. Use Cruip's existing component patterns
4. Reference `templates/simple/` and `templates/gray/` for components to lift
5. Swap colors minimally (orange accent #EC5F2B used sparingly)

### What needs to be reverted:
- `components/hero-home.tsx` - revert to original Simple template hero, only change text
- `components/trust-band.tsx` - delete this file, use Cruip's existing section patterns instead

### Next Steps (Step 2 completion):
1. Revert hero to Simple template version
2. Update ONLY the text content in hero (not styling/structure)
3. Use existing Cruip section components for trust band
4. Verify home page looks polished like the original template

### Build Order (per v2-brief.md):
1. ~~Set up project~~ ✓
2. Brand customization (in progress - needs hero text update)
3. Build `/architecture` page
4. Build `/templates` index + 3 detail pages
5. Build `/implementation`
6. Build `/case-studies` index + 4 detail pages
7. Build `/diagnostic`
8. Build `/about`
9. Build `/contact`
10. Build `/` (home) LAST

### Reference:
- Full spec: `v2-rebuild/v2-brief.md`
- Original templates: `v2-rebuild/templates/simple/` and `v2-rebuild/templates/gray/`
