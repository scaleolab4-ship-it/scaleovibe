# Deploy scaleo_vibe on Vercel

This project is TanStack Start (React 19 + Vite 7) and builds to Nitro output.
On Vercel it auto-detects the `vercel` preset and writes the Build Output API
folder `.vercel/output`, so no adapter code is needed.

## 1. Push the code to GitHub

```sh
git init
git add .
git commit -m "scaleo_vibe portfolio"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## 2. Import on Vercel

1. vercel.com → **Add New → Project** → import the repo.
2. Framework Preset: **Other** (settings already come from `vercel.json`).
3. Build Command: `npm run build`
4. Install Command: `npm install`
5. Output Directory: leave **empty** (Nitro writes `.vercel/output` itself).
6. Node.js version: **22.x**
7. Deploy.

If a build ever targets the wrong platform, add an env var:

```
NITRO_PRESET = vercel
```

## 3. Or deploy from the terminal

```sh
npm i -g vercel
vercel login
vercel        # preview deploy
vercel --prod # production deploy
```

## 4. Custom domain

Vercel → Project → **Settings → Domains** → add your domain and follow the DNS
records Vercel shows.

## Notes

- Booking uses a `mailto:` link to `scaleo.lab4@gmail.com`, so there is no
  backend or secret to configure.
- `public/` files (favicon, robots.txt, sitemap.xml) are served as-is.
- After you point a real domain at the site, update the `<loc>` URLs in
  `public/sitemap.xml`.
