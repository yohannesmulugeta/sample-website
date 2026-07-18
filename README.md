# Admaki Advertising — Creative & Technology Website

A scroll-driven one-page website for Admaki Advertising, an Addis Ababa creative and technology studio offering social media marketing, website development, ERP system development, branding, content production and advertising support.

The website is built with plain HTML, CSS and JavaScript so it can publish directly from GitHub Pages without a build step.

## Main sections

- Animated Admaki loading screen
- Full-screen brand and technology hero
- Scroll-controlled business manifesto
- Three sticky core-solution cards
  - Social media marketing
  - Website development
  - ERP system development
- Horizontal additional-services experience on desktop
- Responsive vertical experience on mobile
- About Admaki section
- Six detailed service rows
- Large contact section
- Mobile menu
- Reduced-motion accessibility fallback

## Ethiopian visual direction

The design uses a modern Ethiopian identity rather than copying a traditional layout:

- Deep coffee background
- Warm cream surfaces
- Gold, terracotta, green and indigo accents
- Ethiopic typography using Noto Sans Ethiopic
- CSS-generated geometric bands inspired by Tibeb and woven Habesha patterns
- Amharic supporting text used selectively

No cultural artwork or external campaign media is copied. The first version uses original CSS-generated graphics.

## Important contact placeholders

Replace these values inside `index.html` before using the website publicly:

- `your-email@example.com`
- `251900000000`

Also review the company description, exact service wording, office location and Amharic copy before the final commercial launch.

## Editing content

Most visible text is inside `index.html`.

The visual system is inside `styles.css`. Main colours are defined at the top:

```css
:root {
  --ink: #170f0b;
  --cream: #f6ecdc;
  --gold: #d5a53d;
  --terracotta: #c34b32;
  --green: #1f6a57;
  --indigo: #4a3f82;
}
```

Scroll animations are controlled in `script.js` using GSAP and ScrollTrigger loaded from a CDN.

## GitHub Pages

The project is prepared for direct branch publishing. The repository root contains `index.html` and `.nojekyll`.

In the repository settings:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main**.
4. Select folder **/(root)**.
5. Click **Save**.

Expected URL:

`https://yohannesmulugeta.github.io/sample-website/`

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Recommended next content upgrade

Replace the CSS-generated service artwork with real Admaki material when available:

- Social media campaign mockups
- Website screenshots
- ERP dashboard screenshots
- Team or behind-the-scenes photographs
- Client logos that Admaki has permission to display
- Measurable project results
