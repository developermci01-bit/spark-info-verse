Tighten image loading across all product surfaces. The category pages already have width/height and lazy gallery thumbs; this pass adds the missing hints and applies the same pattern to the home/products surfaces that lack them.

## Changes

**1. Hero images on the 5 category pages + YZOL brand page**
Files: `EngineOilsPage.tsx`, `GreasesPage.tsx`, `HydraulicOilsPage.tsx`, `GearBrakeOilsPage.tsx`, `CoolantsPage.tsx`, `brands/YzolLubricantsPage.tsx`
- Add `loading="eager"`, `fetchpriority="high"`, `decoding="async"` (heroes are LCP — must load fast, not lazy).
- Add `sizes="(min-width: 1024px) 50vw, 100vw"` so the browser knows the rendered width.

**2. Gallery thumbnails on the 5 category pages**
Already have `loading="lazy"` + width/height. Add:
- `decoding="async"`
- `sizes="(min-width: 768px) 33vw, 100vw"` (3-col grid on md+, full width on mobile).

**3. Featured product image — `src/components/home/ProductsPreview.tsx` (line 65)**
Below-the-fold on `/`. Add `loading="lazy"`, `decoding="async"`, explicit `width`/`height`.

**4. Featured products image — `src/components/Products.tsx` (line 150)**
Add `loading="lazy"`, `decoding="async"`, explicit `width`/`height`.

**5. YZOL logo (line 47 of YzolLubricantsPage)**
Add `loading="lazy"`, `decoding="async"`, `width`/`height` to prevent CLS.

## Notes

- True responsive `srcset` would require multiple resized variants per image; the project's CDN serves a single original per asset, so we use the `sizes` hint + browser-native lazy loading instead. This gives most of the win (defer off-screen work, set fetch priority correctly, avoid layout shift) without a build-pipeline change.
- No layout, copy, or visual changes — purely loading attributes.
