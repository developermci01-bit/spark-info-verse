Replace the hero images on two product pages with the newly uploaded photos.

## Changes

1. Upload `coolant_DEF_hero_fnl.jpg` to CDN → `src/assets/products/coolant-hero.jpg.asset.json`. Update `src/pages/products/CoolantsPage.tsx` to import the `.asset.json` and use `.url` for the hero `<img>`. Delete old `coolant-hero.jpg`.

2. Upload `gearoil_hero_fnl_1.png` to CDN → `src/assets/products/gear-hero.png.asset.json`. Update `src/pages/products/GearBrakeOilsPage.tsx` similarly. Delete old `gear-hero.jpg`.

No other layout, copy, or styling changes. All existing loading attributes (`eager`, `fetchPriority`, `sizes`) preserved.