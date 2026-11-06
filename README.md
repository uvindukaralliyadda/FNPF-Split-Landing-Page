# FNPF Split Landing Page

Next.js (App Router, TypeScript) version of the FNPF split landing page: New Members on the left, Existing Members on the right, logo on the centre line.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For production:

```bash
npm run build
npm start
```

## Where things are

| What | File |
|---|---|
| Page title, meta description, Open Graph tags | `app/layout.tsx` |
| Font (Montserrat via `next/font`) | `app/layout.tsx` |
| Favicon | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` (picked up automatically by Next.js) |
| Split layout, copy and CTA links | `components/SplitLanding.tsx` (edit the `SIDES` array) |
| Styles and brand colours | `app/globals.css` |
| Background photos and logo | `public/images/` |

## Before going live

- Replace the CTA links `/new-members` and `/members` in `components/SplitLanding.tsx` with the real page URLs.
- `public/images/new-members.jpg` was cropped from an incomplete download. Replace it with the full-resolution photo for best quality.
"# FNPF-Split-Landing-Page" 
