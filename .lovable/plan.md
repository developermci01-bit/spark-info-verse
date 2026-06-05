## Goal
Add visual imagery to all 5 product category pages (Engine Oils, Hydraulic Oils, Gear & Brake Oils, Greases, Coolants) using two image placements per page:
1. **Hero side-by-side** — a primary image next to the heading/description
2. **Gallery before catalog** — a 3-image showcase strip just above the product table

## Image generation
Generate AI images in the industrial Wieser brand style (navy + orange/red accents, clean, professional) and save them to `src/assets/products/`. Per category:

- **Engine Oils** — 1 hero (modern engine bay with oil bottle), 3 gallery (motorcycle engine, car under hood, heavy truck engine)
- **Hydraulic Oils** — 1 hero (excavator/hydraulic ram closeup), 3 gallery (industrial press, construction machinery, hydraulic system schematic-style shot)
- **Gear & Brake Oils** — 1 hero (gearbox/transmission), 3 gallery (manual gearbox internals, brake disc + caliper, differential)
- **Greases** — 1 hero (grease cartridge + bearing), 3 gallery (wheel bearing, industrial machinery joint, grease gun in use)
- **Coolants** — 1 hero (radiator + coolant pour), 3 gallery (engine cooling system, coolant bottles, radiator closeup)

Total: 20 images, generated in parallel via `imagegen--generate_image` (fast tier, .jpg).

## Page changes (apply to all 5 pages)
For each `src/pages/products/*.tsx`:

1. **Hero section** — convert single-column hero into a 2-column grid (`lg:grid-cols-2`):
   - Left: existing label, H1, description (unchanged)
   - Right: hero image in a rounded card with subtle border, accent glow blur behind it, `animate-fade-in`
2. **Gallery section** — new section inserted just before `<ProductCatalog />`:
   - Small accent bar + heading "In Action" / "Applications"
   - 3-image responsive grid (`md:grid-cols-3`) with `aspect-[4/3]`, rounded corners, hover scale effect, captions overlay
3. Imports: add image imports at top of each file.

Benefits section stays unchanged. ProductCatalog stays unchanged.

## YZOL Lubricants brand page
Out of scope for this round (it already has imagery in its hero). Only the 5 product category pages get the treatment, per the user's wording "every product page."

## Files
- Create: 20 images in `src/assets/products/`
- Edit: `src/pages/products/EngineOilsPage.tsx`, `HydraulicOilsPage.tsx`, `GearBrakeOilsPage.tsx`, `GreasesPage.tsx`, `CoolantsPage.tsx`
