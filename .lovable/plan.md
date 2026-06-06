## Plan

Replace the YZOL page hero banner with a new design that features the uploaded product lineup image instead of the current full-bleed background photo.

### Steps

1. Upload the new image to Lovable Assets:
   - `/mnt/user-uploads/yzol_multi_banner.png` → `src/assets/yzol-products-banner.png.asset.json`

2. Edit `src/pages/brands/YzolLubricantsPage.tsx` hero section:
   - Remove the `yzolBanner` background image and dark navy overlay.
   - Rebuild the hero as a two-column layout on a navy gradient background:
     - **Left column**: existing badge ("Other Brands"), white YZOL logo card, H1 heading, and intro paragraph (unchanged copy).
     - **Right column**: the uploaded product lineup image, displayed on the navy hero with a soft blue glow behind it (matching the MICRO MOLECULE style — `bg-primary/20` blur).
   - Stack to single column on mobile (image below text).
   - Keep the `yzolBanner` import removable if no longer used.

### Notes
- Only the hero section of `YzolLubricantsPage.tsx` changes. Highlights, About, and Product Lineup sections remain untouched.
