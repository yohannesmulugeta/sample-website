# Sample Social — Scroll-Driven Agency Website

A lightweight, original creative-agency website inspired by bold social-first agency experiences. It is built with plain HTML, CSS and JavaScript so it can run directly on GitHub Pages without a build step.

## Included

- Animated loading screen
- Full-screen hero reveal
- Scroll-scrubbed hero movement
- Long pinned manifesto section
- Progressive word highlighting
- Sticky stacked project cards
- Desktop horizontal project scrolling
- Responsive vertical project layout on mobile
- Scroll-controlled shapes and typography
- Animated services marquee
- Full-screen contact section
- Mobile navigation
- Reduced-motion accessibility fallback
- Direct GitHub Pages publishing from `main`

## Edit the content

Most text is inside `index.html`.

Important placeholders to replace:

- `SAMPLE / SOCIAL` — agency name
- `hello@example.com` — email address
- `251900000000` — WhatsApp number
- Project titles, descriptions and services
- Addis Ababa location text if needed

## Change the design

The main colours are at the top of `styles.css`:

```css
:root {
  --black: #0a0a0a;
  --white: #f4f0e8;
  --orange: #ff4d00;
  --green: #d8ff43;
  --violet: #9d7cff;
}
```

Scroll animations are controlled in `script.js` using GSAP and ScrollTrigger loaded from a CDN.

## GitHub Pages

This project is prepared for direct branch publishing. The repository root contains `index.html` and `.nojekyll`.

In the repository settings:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main**.
4. Select folder **/(root)**.
5. Click **Save**.

Expected URL:

`https://yohannesmulugeta.github.io/sample-website/`

## Local preview

Opening `index.html` directly works, but a local server is better:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Media

The first version uses original CSS-generated artwork instead of copied campaign images. Real project images and videos can be added later without changing the scroll architecture.
