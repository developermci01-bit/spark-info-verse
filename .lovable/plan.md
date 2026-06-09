## Goal

Prevent layout shift across every product image surface by giving each image container a fixed aspect ratio, so the space is reserved before the image loads.

## Changes

**1. Hero images on category + brand pages** (`EngineOilsPage`, `GreasesPage`, `HydraulicOilsPage`, `GearBrakeOilsPage`, `CoolantsPage`)
- The hero `<img>` currently uses `w-full h-auto max-h-[400px] object-cover` — height is intrinsic, so it shifts when the image swaps in.
- Wrap the hero `<img>` in a `<div className="relative aspect-[4/3] lg:aspect-[16/10] max-h-[400px]">` and make the image `absolute inset-0 w-full h-full object-cover`. Container reserves space immediately.

**2. YZOL hero banner** (`YzolLubricantsPage` line 29 section)
- The banner is already absolutely positioned inside a section whose height comes from inner content, so no shift — leave as-is. (Verified.)

**3. YZOL logo card** (`YzolLubricantsPage` line 51)
- Logo `<img>` has explicit `width={240} height={96}` but uses `h-20 md:h-24 w-auto`, which produces variable width. Wrap in a fixed-size box `h-20 md:h-24 w-[200px] md:w-[240px]` with the image at `h-full w-full object-contain`.

**4. Gallery thumbnails on the 5 category pages**
- Already wrapped in `aspect-[4/3]` containers — no shift. Leave as-is.

**5. Featured-products image — `Products.tsx` (line 150)**
- `<img>` uses `h-48 object-contain` with no width reservation. Wrap in `<div className="relative w-48 h-48 shrink-0">` and set image to `absolute inset-0 w-full h-full object-contain animate-float`.

**6. Featured product image — `home/ProductsPreview.tsx` (line 65)**
- `<img>` uses `h-72 md:h-96 object-contain` (height fixed, width fluid → shifts). Wrap in `<div className="relative w-72 h-72 md:w-96 md:h-96">` and set image to `absolute inset-0 w-full h-full object-contain animate-float`.

## Notes
- No visual or copy changes — same rendered sizes once images load. Only difference: the space is reserved before paint, so nothing jumps.
- All `loading`, `decoding`, `sizes`, `width`, `height`, and `fetchPriority` attributes already added in the prior pass are preserved.
