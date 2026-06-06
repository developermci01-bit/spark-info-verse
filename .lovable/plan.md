## Plan

1. Upload `products02.png` to Lovable Assets as `src/assets/products02.png.asset.json`.
2. In `src/components/home/ProductsPreview.tsx`, swap the `all-products.png.asset.json` import for the new `products02.png.asset.json` pointer and use its URL in the existing image block (no other layout changes).
3. Delete the now-unused `src/assets/all-products.png.asset.json` asset.