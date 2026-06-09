Replace the hero banner image on three product category pages with the uploaded images, served via Lovable Assets CDN.

## Steps

1. Upload each image to Lovable Assets from the `/mnt/user-uploads/` mount:
   - `engineoil_hero_fnl.jpeg` → `src/assets/products/engine-hero.jpg.asset.json`
   - `grease_hero_fnl.png` → `src/assets/products/grease-hero.png.asset.json`
   - `hydraulic_oil.png` → `src/assets/products/hydraulic-hero.png.asset.json`

2. Update the three hero `<img>` imports/sources:
   - `src/pages/products/EngineOilsPage.tsx` — swap `engine-hero.jpg` import for the new asset pointer; use `engineHero.url`
   - `src/pages/products/GreasesPage.tsx` — swap `grease-hero.jpg` for the new asset pointer
   - `src/pages/products/HydraulicOilsPage.tsx` — swap `hydraulic-hero.jpg` for the new asset pointer

3. Delete the old in-repo hero files (`src/assets/products/engine-hero.jpg`, `grease-hero.jpg`, `hydraulic-hero.jpg`) so they're no longer bundled. The 3-image gallery thumbnails on each page stay unchanged.

4. Verify the build is clean.

## Notes

Only the top hero banner on each of the three category pages changes. No copy, layout, gallery, or catalog changes.
