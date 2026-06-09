Since the site is hosted on shared Apache hosting, create an `.htaccess` file in the `public/` folder with `mod_rewrite` rules. This file is automatically copied into `dist/` during the Vite build.

The rules will:
- Enable the rewrite engine
- Rewrite all requests that are not actual files or directories to `index.html`
- Preserve existing asset requests (images, JS, CSS) so they still resolve normally
- Include a `RewriteBase` comment for users deploying into a subdirectory

This fixes the 404-on-refresh problem for every React Router route (`/about`, `/products/engine-oils`, `/brands/yzol-lubricants`, etc.).

No other code changes are needed.