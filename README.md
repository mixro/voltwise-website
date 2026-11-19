# VOLTWISE Engineering — Website

Public website for **VOLTWISE Engineering Limited** (Sparking Change). Built with Vite + React, deployed on Netlify.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home: hero, the two service pillars, why VOLTWISE, process, call-to-action |
| `/services` | All nine services — Electrical (`#electrical`) and ICT & Digital (`#ict`) — plus integrated solutions and sectors |
| `/about` | Who we are, vision, mission, values, how we work, health & safety |
| `/team` | Leadership and engineering team |
| `/contact` | Phone, WhatsApp, office and a form that opens WhatsApp |

Routing is handled by a small built-in router (`src/Router.jsx`) — no extra package. `netlify.toml` sends every URL to `index.html` so direct links work.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
npm run lint
```

## Edit the content

All text, contact details, services, team and photo paths are in **`src/data/site.js`**. Pages are in `src/pages/`.

- **Phone / WhatsApp:** `contact.phoneDisplay`, `contact.phoneHref` and `contact.whatsappNumber` (international format without `+`).
- **Services:** `electricalServices` and `ictServices`.
- **Sectors, process, values, team:** the arrays of the same names.
- **Photos:** the `images` object.

The contact form has no backend: it opens WhatsApp with the visitor's message already filled in, ready to send to the company number.

## Photos

All photos are free-to-use stock photos (no attribution required) stored in `public/images/`. To change one, replace the file (keep the name) or add a new file and update its path in the `images` object in `src/data/site.js`. Photos of your own team and projects will make the site stronger still.

## Deploy on Netlify

1. In Netlify: **Add new project → Import an existing project** and pick this repository.
2. Build settings come from `netlify.toml` (`npm run build`, publish `dist`).
3. Deploy. Every push to `main` redeploys automatically.
