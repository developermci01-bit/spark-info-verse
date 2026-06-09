Add comprehensive SEO across all 11 routes of the Wieser Petroleum site. Currently the site ships default Lovable meta tags and has no sitemap or per-route SEO.

## Changes

**1. Sitewide head — `index.html`**
- Replace title with Wieser Petroleum brand title.
- Replace description with brand-level description.
- Remove `<meta name="author" content="Lovable" />`.
- Update `og:title`, `og:description`, `og:url`, drop the Lovable og:image (no replacement unless user provides one).
- Drop `twitter:site="@Lovable"` and the Lovable twitter:image.
- Add sitewide Organization JSON-LD (Wieser Petroleum, logo, contact).

**2. Per-route head — install `react-helmet-async`**
- Add `<HelmetProvider>` wrapper in `src/main.tsx`.
- Add a small reusable `<SEO>` component (`src/components/SEO.tsx`) that takes `title`, `description`, `path`, optional `jsonLd`, and renders the right `<title>`, `<meta description>`, canonical, `og:title/description/url/type`, `twitter:card`.
- Drop `<SEO>` into each of the 10 indexable pages with page-specific title (≤60 chars) and description (≤160 chars):
  - HomePage, AboutPage, WhyUsPage, ContactPage, ProductsPage
  - EngineOilsPage, GearBrakeOilsPage, GreasesPage, HydraulicOilsPage, CoolantsPage
  - YzolLubricantsPage (brand)
- Each product category page also gets `Product`/`ItemList` JSON-LD; ContactPage gets `LocalBusiness` JSON-LD.

**3. Canonical hygiene**
- Remove any sitewide canonical from `index.html` (none currently — good). Each route owns its canonical via Helmet.

**4. Sitemap — `scripts/generate-sitemap.ts` + `predev`/`prebuild` hooks**
- Generate `public/sitemap.xml` with all 10 indexable routes (exclude `*` catch-all).
- BASE_URL = `https://spark-info-verse.lovable.app` (project domain; user can swap to a custom domain later).
- Add `predev` and `prebuild` scripts in `package.json` running `bunx tsx scripts/generate-sitemap.ts`.

**5. `public/robots.txt`**
- Append `Sitemap: https://spark-info-verse.lovable.app/sitemap.xml` so crawlers discover it.

**6. Image alt audit**
- Quick pass to confirm every `<img>` in headers, hero, products, footer has meaningful alt text (skip purely decorative ones with `alt=""`).

**7. Heading structure**
- Verify each page has exactly one `<h1>`. Adjust if any page is missing one or has duplicates.

## What I might need from you

- **Brand info for JSON-LD / contact:** company legal name, full address, phone, email, social URLs (LinkedIn / Facebook / Instagram) — for Organization + LocalBusiness schema. If you don't have these yet, I'll use what's already on the Contact page and you can refine later.
- **OG/social share image:** a 1200×630 branded image for link previews (LinkedIn, WhatsApp, Twitter). I can generate one with the Wieser logo + tagline if you'd like, or skip it (better than a placeholder).
- **Target market for SEO:** primary country (India? Global?) — affects which keywords matter, not the code changes above.
- **Custom domain:** if you have one coming (e.g. wieserpetroleum.com), I'll use it as canonical/base URL instead of the lovable.app domain.

## Out of scope (separate ask if you want it)

- Keyword research and rewriting page copy around target search terms.
- Blog/articles to build topical authority.
- Backlink/off-page work.

## Notes

- Per-route Helmet tags work for Google but not for LinkedIn/Slack/Facebook crawlers (they don't execute JS). Sitewide `og:*` in `index.html` stays as the fallback so social previews still work, with brand defaults.
- After build, the SEO scanner can be re-run from the SEO tab to verify all checks pass.