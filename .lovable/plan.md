# Inline CDN assets for self-hosting

Replace 10 `.asset.json` pointer files with the actual binary images committed to `src/assets/` and `src/assets/products/`, then rewrite every import that currently reads the pointer's `.url` so Vite bundles the real files. This makes the build portable off Lovable's `/__l5e/...` infrastructure.

## Files to materialize

Download each from its current CDN `url` (recorded in the `.asset.json`) and write the binary to the path next to the existing stub:

- `src/assets/products/engine-hero.jpg`
- `src/assets/products/coolant-hero.jpg`
- `src/assets/products/gear-hero.png`
- `src/assets/products/grease-hero.png`
- `src/assets/products/hydraulic-hero.png`
- `src/assets/yzol-logo.png`
- `src/assets/yzol-banner.png`
- `src/assets/products02.png`
- `src/assets/advantage-grey.png`
- `src/assets/adblue-def.png`

## Import rewrites

For every file in the project that does:

```ts
import heroAsset from '@/assets/.../foo.png.asset.json';
const heroImg = heroAsset.url;
```

replace with a direct bundler import:

```ts
import heroImg from '@/assets/.../foo.png';
```

Known call sites (will grep for the full set before editing, but at minimum):
- `src/pages/products/EngineOilsPage.tsx`
- `src/pages/products/CoolantsPage.tsx`
- `src/pages/products/GearBrakeOilsPage.tsx`
- `src/pages/products/GreasesPage.tsx`
- `src/pages/products/HydraulicOilsPage.tsx`
- `src/pages/brands/YzolLubricantsPage.tsx` (yzol-logo, yzol-banner)
- Any component referencing `products02`, `advantage-grey`, `adblue-def` (likely `Hero`, `WhyUs`, `Products`, or home sections — searched and updated).

## Cleanup

Delete the 10 `.asset.json` stub files after all imports compile against the real binaries.

## Verification

Run the build. Confirm no unresolved imports and that all 10 images appear in the Vite output as hashed assets (proving they're bundled locally, not referenced via `/__l5e/`).

## Technical notes

- Real PNG/JPG files imported via `import x from '...'` are processed by Vite and emitted into `dist/assets/` with content hashes — fully portable.
- The `.asset.json` files are tiny JSON stubs; their CDN URLs (`/__l5e/assets-v1/...`) require Lovable's edge worker to resolve, which doesn't exist on a self-hosted server. Removing the indirection fixes self-hosting.
- No visual, layout, or behavior changes — purely a build-portability fix.
