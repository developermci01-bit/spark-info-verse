## Goal

Enhance the YZOL Lubricants page with an image hero banner at the top and the full product lineup (same as the Wieser catalog) below.

## Changes

### 1. Generate a YZOL hero banner image
- Create a wide industrial banner image (navy/orange theme matching the site) saved to `src/assets/yzol-banner.jpg`.
- Style: premium lubricant bottles / industrial backdrop, dark navy with orange accents, space for overlaid text.

### 2. Update `src/pages/brands/YzolLubricantsPage.tsx`
- Replace the current plain gradient hero with a full-width **image hero banner**: background image + dark navy overlay, with the "Other Brands" tag, "YZOL Lubricants" heading, and intro paragraph overlaid on top.
- Keep the existing highlights grid (Premium Quality, Reliable Protection, Optimized Performance) and About section.
- Add the **full product lineup** below using the existing `ProductCatalog` component, rendering all 5 categories:
  - Engine Oils
  - Gear & Brake Oils
  - Greases
  - Hydraulic Oils
  - Coolants
- Each rendered as `<ProductCatalog category="..." title="..." />`, identical to the Wieser category pages, reusing the shared `src/data/products.ts` data.

## Notes
- Reuses existing `ProductCatalog` and product data — no new data structures or business logic.
- No prices, no detail pages (consistent with project catalog rules).
- Banner respects the navy/orange industrial design tokens.
