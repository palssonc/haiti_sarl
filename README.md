# Haiti SARL Initiative — Startup landing page + bilingual legislation

Haiti’s current business-form toolkit leaves a gap for small and medium enterprises. This repository now includes a clean GitHub Pages site that presents the case for a modern SARL pathway, explains the reform plan, and links to bilingual legislation pages that are easy to share.

## Quick links
- Live site (after GitHub Pages is enabled): `https://<your-org-or-user>.github.io/<repo-name>/`
- English landing page: `docs/en/index.html`
- French landing page: `docs/fr/index.html`
- English legislation page: `docs/en/legislation/index.html`
- French legislation page: `docs/fr/legislation/index.html`

## What is included
- Startup-style, scrollable pitch layout (hero → problem → solution → plan → FAQ → CTA)
- EN/FR language routes for shareable links (`/en/`, `/fr/`)
- Shared static assets (single CSS + JS)
- Legislation pages scaffolded for ongoing updates to drafted text
- `.nojekyll` in `docs/` for reliable static serving

## Enable GitHub Pages (`main` + `/docs`)
1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`.
5. Save and wait for deployment.

## Custom domain (optional)
You can map a custom domain in **Settings → Pages** and enable HTTPS there once DNS is configured.

## Content maintenance notes
- Source legal and policy materials are in `haiti_laws/deliverables/`.
- If you publish a new official draft, replace the placeholder blocks in:
  - `docs/en/legislation/index.html`
  - `docs/fr/legislation/index.html`
- Optional PDFs can be added at:
  - `docs/assets/legislation-en.pdf`
  - `docs/assets/legislation-fr.pdf`
