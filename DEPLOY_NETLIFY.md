# Deploy scaleo_vibe on Netlify

This app is TanStack Start (React 19 + Vite) and builds through Nitro, so it
runs on Netlify with the `netlify` Nitro preset. Config lives in `netlify.toml`.

## 1. Push the code to GitHub

```sh
git init
git add .
git commit -m "scaleo_vibe portfolio"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## 2. Import on Netlify (UI)

1. app.netlify.com → **Add new site → Import an existing project** → pick the repo.
2. Build command: `npm run build` (already in `netlify.toml`)
3. Publish directory: `dist` (already in `netlify.toml`)
4. Environment variables (already set in `netlify.toml`, no manual work needed):
   - `NITRO_PRESET = netlify`
   - `NODE_VERSION = 22`
5. **Deploy site.**

Netlify picks up the server output that Nitro writes into `.netlify/`
automatically, so SSR routes and `/api/*` endpoints keep working — you do not
need `_redirects` or a manual functions folder.

## 3. Or deploy from the terminal

```sh
npm i -g netlify-cli
netlify login
netlify init      # link to a site
netlify deploy    # draft deploy
netlify deploy --prod
```

## 4. Custom domain

Netlify → Site → **Domain management → Add a domain** → follow the DNS records
Netlify shows (A record / CNAME or Netlify DNS).

## Troubleshooting

- **404 on every route** → the publish directory was overridden in the Netlify
  UI. Clear it there so `netlify.toml` (`dist`) wins.
- **Build succeeds but SSR pages are blank** → make sure `NITRO_PRESET=netlify`
  is present; without it Nitro builds for the wrong platform.
- **Node error during install** → set `NODE_VERSION` to `22` in
  Site configuration → Environment variables.

## Notes

- Booking uses a `mailto:` link to `scaleo.lab4@gmail.com`, so there is no
  backend or secret to configure.
- `public/` files (favicon, robots.txt, sitemap.xml) are served as-is.
- After connecting a real domain, update the `<loc>` URLs in
  `public/sitemap.xml`.
