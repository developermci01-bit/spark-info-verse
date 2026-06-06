## Plan

Replace the two product images in the MICRO MOLECULE Technology section on the home page with a single image (the uploaded "all products" composite).

### Changes
1. Upload `all products.png` to Lovable Assets → `src/assets/all-products.png.asset.json`.
2. In `src/components/home/ProductsPreview.tsx`:
   - Remove the two existing product image blocks (Advantage+ and Active+) and their imports (`productAdvantage`, `productActive`).
   - Replace with a single centered image using the new uploaded asset, keeping the soft glow backdrop and float animation, sized larger (e.g. h-72 md:h-96) to fill the column nicely.
   - Keep the right-side content (heading, paragraph, bullets, CTA) unchanged.

No other components or pages are affected.