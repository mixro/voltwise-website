# VOLTWISE Engineering — Website

Public website for **VOLTWISE Engineering Limited** (Sparking Change): services, how we work, company profile, team and contact. Built with Vite + React, deployed on Netlify.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
npm run lint
```

## Edit the content

All text, contact details, services, team and photo links are in **`src/data/site.js`**.

- **Phone / WhatsApp:** `contact.phoneDisplay`, `contact.phoneHref` and `contact.whatsappNumber` (international format without `+`).
- **Services, sectors, process, values, team:** the arrays of the same names.
- **Photos:** the `images` object.

The contact form has no backend: it opens WhatsApp with the visitor's message already filled in, ready to send to the company number.

## Photos

The photos are from [Pexels](https://www.pexels.com/) and are free to use, including commercially, without attribution, under the [Pexels License](https://www.pexels.com/license/). They load from the Pexels image service. To host them yourself (recommended for full control), download each photo, save it in `public/images/`, and change its URL in `src/data/site.js` to `/images/<file>.jpg`.

Replacing them with photos of your own team and projects will make the site stronger still.

## Deploy on Netlify

1. In Netlify: **Add new project → Import an existing project** and pick this repository.
2. Build settings come from `netlify.toml` (`npm run build`, publish `dist`).
3. Deploy. Every push to `main` redeploys automatically.
