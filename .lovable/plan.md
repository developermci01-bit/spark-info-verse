## Add GA4 Page-View Tracking + Realtime Verification

### What we're building
Wire up Google Analytics 4 so every React-Router route change fires a `page_view` event, and add a lightweight on-screen verification panel so you can confirm hits land in GA4 Realtime without leaving the site.

### Pages / surfaces affected
- `index.html` – inject the GA4 `gtag.js` snippet  
- `src/App.tsx` – mount a new route-tracking component next to `<ScrollToTop />`  
- `src/components/AnalyticsTracker.tsx` (new) – listens to `useLocation()` and sends `page_view` events  
- `src/components/AnalyticsDebugger.tsx` (new) – small floating panel that logs each fired event with timestamp and path

### Technical approach
1. **Base script in `<head>`**  
   Load `https://www.googletagmanager.com/gtag/js?id=G-MK0G2S0DKH` and the standard `dataLayer` bootstrap. Because this is a SPA, the initial page load is enough to create the tracker; subsequent “pages” are handled in JS.

2. **Route-change tracker**  
   A component that uses `useLocation()` from `react-router-dom`. On every `pathname` change it calls:
   ```
   gtag('event', 'page_view', {
     page_location: window.location.href,
     page_path: pathname,
     page_title: document.title,
   })
   ```
   This mirrors GA4’s native `page_view` and works inside BrowserRouter.

3. **Realtime verification panel**  
   A fixed-position, collapsible widget (bottom-left, styled with existing project tokens) that prints the last 10 fired events with:
   - Event name  
   - Route path  
   - Timestamp  
   - Status ("Sent to GA4")
   It only renders in development/preview builds so it never appears on the live site.

### No other changes
- No backend or database work.  
- No modification to existing page components, SEO tags, or Tawk.to script.

### Acceptance criteria
- [ ] Navigating from `/` → `/about` → `/products/engine-oils` fires a `page_view` event for each route.  
- [ ] The debugger panel shows each event immediately after navigation.  
- [ ] No console errors from `gtag` being undefined.  
- [ ] Debugger is absent in production builds.