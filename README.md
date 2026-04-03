# Mercy Mbao — Portfolio

A modern, creative developer portfolio built with React, Vite, and Framer Motion. Features a Neo Brutalism design system, GSAP scroll-driven stack card animations, and a custom cursor.

## Live Site

[mercy mbao](https://mercymbao.netlify.app/)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Animations | Framer Motion + GSAP (ScrollTrigger) |
| Icons | Lucide React |
| Fonts | Archivo + Space Grotesk (Google Fonts) |
| Styling | Inline CSS with CSS custom properties |
| Design System | Neo Brutalism — thick borders, hard offset shadows, spring interactions |

## Features

- **Custom cursor** — pink dot + trailing ring with hover scale, hidden on touch devices
- **Animated hero** — staggered text reveal, scrolling ticker, parallax
- **GSAP stack cards** — sticky cards that scale down and stack as you scroll through projects
- **Animated skill bars** — scroll-triggered progress bars with percentage labels
- **Contact form** — with success state animation
- **Fully responsive** — 375px → 768px → 1024px → 1440px

## Projects Featured

- **GrowthFullCirle** — Mental wellness platform (Next.js, Python, SQLite3)
- **Mkulima** — Farmer crop tracking app (React, PostgreSQL, Node.js)
- **Farm Produce** — Agricultural e-commerce (Next.js, MongoDB)
- **Momversation AI** — GPT-powered wellness chat for mothers (TypeScript, OpenAI)
- **Telegram AI Bot** — Gemini-powered personal assistant bot (Python, Flask)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx       # Custom cursor (desktop only)
│   ├── Navbar.jsx       # Fixed navbar with scroll state
│   ├── Hero.jsx         # Landing section with ticker + CTA
│   ├── Projects.jsx     # Projects section wrapper
│   ├── StackCards.jsx   # GSAP sticky stack card animation
│   ├── About.jsx        # Skills, stats, bio
│   ├── Contact.jsx      # Contact form + social links
│   └── Footer.jsx       # Footer with back-to-top
├── data/
│   └── portfolio.js     # All personal info, projects, skills, socials
└── index.css            # CSS custom properties + global reset
```

## Customisation

All personal content lives in [`src/data/portfolio.js`](src/data/portfolio.js) — update name, bio, email, phone, projects, skills, and social links there.

To add your CV, place the file in the `public/` folder and update the download link in `Hero.jsx`.

## Contact

- **Email:** njerimercy77@gmail.com
- **GitHub:** [mercie-ux](https://github.com/mercie-ux)
- **LinkedIn:** [Mercy Njeri](https://www.linkedin.com/in/mercy-njeri-979201162/)
- **Twitter/X:** [@junearsenic7](https://x.com/junearsenic7)
