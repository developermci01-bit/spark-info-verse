# Product Catalog Plan

Add the full April 2026 rate list (~114 SKUs) to the website as a clean, browsable catalog grouped under the existing 5 categories. Keep it minimal: no prices, no per-SKU images — just grade, application, and available pack sizes.

## Mapping to existing categories

- **Engine Oils** — Bike & Scooty (20W40 / 20W50 / 10W30 in API SL, SM, SN, SN+; 15W50 SN) and Car / Bus / Tractor / Truck / Auto (Multigrade, CH-4, CI-4, CI-4 Plus, 5W30 / 5W40 / 10W40 SN & SN/CF, PSO SAE-40)
- **Gear & Brake Oils** — EP-90 / 140 / 220 / 320 / 460, Fork Oil, DOT-4 Brake Oil, TQ Fluid (steering), UTTO transmission
- **Greases** — Red / Golden Calcium Wheel Bearing Chassis (500g – 18kg)
- **Hydraulic Oils** — AW-68 / 38 / 42 Hydraulic Oil
- **Coolants** — Coolant, Coolant Extra Cool, AD Blue (DEF)

## Approach

1. Create one shared data file `src/data/products.ts` listing every SKU from the PDF as structured rows: `{ category, subCategory?, grade, application?, packs: string[] }`. Pack sizes for a grade are collapsed into an array (e.g. `20W40 API SL` → `["900ml", "1L", "50L", "210L"]`).
2. Refactor the 5 existing category pages (`EngineOilsPage`, `GearBrakeOilsPage`, `GreasesPage`, `HydraulicOilsPage`, `CoolantsPage`) to read from this data file and render a clean **product table** instead of the current hardcoded card grid.
   - Columns: Grade | Application | Available Packs
   - Sub-section headings where useful (e.g. "Bike & Scooty" vs "Commercial Vehicles" inside Engine Oils; "DEF / AD Blue" inside Coolants)
   - Keep the existing hero + benefits sections at the top of each page
3. Add a small reusable "pack size" pill (navy/accent chip) so available sizes render as chips per row — clean and scales to 100+ SKUs without clutter.
4. No route changes, no header/footer changes, no new images.

## Out of scope

- Prices (PDF has none)
- Per-product detail pages
- Search / filter / sort
- New images or icons per SKU

## Technical notes

- Data shape:
  ```ts
  type Product = {
    category: 'engine-oils' | 'gear-brake-oils' | 'greases' | 'hydraulic-oils' | 'coolants';
    subCategory?: string;
    grade: string;
    application?: string;
    packs: string[];
  };
  ```
- Built with the existing `@/components/ui/table` and Tailwind semantic tokens.
- ~115 rows total → renders instantly; no pagination needed.
