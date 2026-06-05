## Plan

Use the uploaded YZOL logo on the YZOL Lubricants page only (the global header keeps the Wieser Petroleum logo on all other pages).

### Changes
1. Upload `yzol logo (2).png` to Lovable Assets → `src/assets/yzol-logo.png.asset.json`.
2. In `src/pages/brands/YzolLubricantsPage.tsx`:
   - Import the YZOL logo asset.
   - Display the YZOL logo prominently in the hero banner section (above the "YZOL Lubricants" title), sized appropriately (e.g. h-24/h-28) with a white/light backdrop so the red logo stays legible on the dark hero overlay.
3. Header on this page remains the Wieser logo (no global header swap), preserving brand consistency across the site.

No other pages or files are affected.