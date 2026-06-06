## Plan

Update the "Featured Products" section in `src/components/Products.tsx` to showcase the two uploaded products.

### Steps

1. Upload both images to Lovable Assets:
   - `/mnt/user-uploads/01_advantage_grey.png` → `src/assets/advantage-grey.png.asset.json`
   - `/mnt/user-uploads/IMG-20260302-WA0000-removebg-preview.png` → `src/assets/adblue-def.png.asset.json`

2. Edit `src/components/Products.tsx`:
   - Replace the old `productAdvantage` / `productActive` imports used by `featuredProducts` with the two new asset pointers.
   - Update the `featuredProducts` array to the two new entries:
     - **Advantage+** — tagline "Feel Its Power", grade "20W40 4T", type "4-Stroke Engine Oil", specs "API-SN • JASO MA-2 • 100% Syn Technology", CTA → `/products/engine-oils`.
     - **AdBlue® (DEF)** — tagline "BS6 Engine Protection", grade "DEF / AdBlue®", type "Diesel Exhaust Fluid", specs "ISO 22241 • Pure & Reliable", CTA → `/products/coolants`.
   - Extend the card layout to render the extra spec line under the existing grade/type text (small muted tag row). No other layout changes.

### Notes
- Only the featured-products block changes; the 5-category grid above stays as-is.
- Existing `product-advantage.png` / `product-active.png` imports remain for the category grid cards that still reference them.
