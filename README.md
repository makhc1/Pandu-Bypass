# Pandu Bypass API

The developer API for bypassing the Delta Executor key system in Roblox. Built for high volume, direct protocol-level token resolution, and integration into Discord bots and websites.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-Animated-88CE02?style=for-the-badge&logo=greensock)

---

## Key Features

- **~7-10s Global Latency:** The routed request pool minimizes TTFB. Links are solved instantly through optimized HTTP pathways, bypassing headless browsers.
- **24-Hour Lifecycle:** Tokens are locked and valid for a full 24 hours.
- **Rate Limit Handling:** Automatic backoff and retry logic handles vendor rate limits natively.
- **Native SDKs:** Official support for Node.js, Python, and Luau (Roblox).
- **Bilingual Interface:** Includes a built-in dictionary for full English (EN) and Indonesian (ID) localization.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/) & ScrollTrigger
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** Lucide React & Custom Brand SVGs

## Getting Started

To run the development server locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `src/app/page.tsx` - The main GSAP-animated landing page with localization.
- `src/app/docs/page.tsx` - The complete interactive API reference documentation.
- `src/app/globals.css` - Custom styling rules, variables, and Tailwind overrides for the documentation layout.

## License

&copy; 2026 Pandu Bypass. All rights reserved.
