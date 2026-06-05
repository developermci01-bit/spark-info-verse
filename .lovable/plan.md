## Changes

### 1. Hero — remove "Watch Video" button
`src/components/Hero.tsx`: remove the `Watch Video` `Button` and unused `Play` import. Keep the "Explore Products" CTA as the sole hero button.

### 2. Why Choose Us preview — more attractive cards
`src/components/home/WhyUsPreview.tsx`: refresh the 6 feature cards while staying within the navy/accent palette.
- Add a soft top gradient bar (accent → primary) that reveals on hover.
- Larger circular icon badge with gradient background (`from-accent/15 to-primary/10`), ring on hover.
- Card hover: deeper shadow, slight scale, accent border glow.
- Subtle decorative blurred accent blob behind icon.
- Tighter typography hierarchy; numbered/iconed layout retained.

### 3. Quality Assurance cards — subtle mixed color variation
`src/components/home/CertificationsSection.tsx`: keep the same primary/accent palette but rotate per-card subtle tints so the 4 cards don't look identical.
- Card 1: `bg-primary/5`, icon badge `bg-primary/10`, icon `text-primary`
- Card 2: `bg-accent/5`, icon badge `bg-accent/10`, icon `text-accent`
- Card 3: `bg-primary/10`, icon badge `bg-primary/15`, icon `text-primary`
- Card 4: `bg-accent/10`, icon badge `bg-accent/15`, icon `text-accent`
Apply via an index-based array of token classes; keep hover lift and border.

### 4. Remove "Trusted by Leading Brands" strip
- `src/pages/HomePage.tsx`: remove `<ClientsSection />` and its import.
- Delete `src/components/home/ClientsSection.tsx`.

### 5. Phone number update → `+91 8130324944`
- `src/components/home/CTASection.tsx`: update displayed number and `tel:` href.
- `src/components/Contact.tsx`: update phone input placeholder to `+91 8130324944` (the contact info card already uses the correct number).

No other files touched. No business-logic changes.
