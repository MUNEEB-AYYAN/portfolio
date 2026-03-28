# Mohammed Muneebuddin — Portfolio Website

A modern, dark-themed personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Tech Stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations
- **React Icons** — icon library

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with active section highlight
│   ├── Hero.jsx          # Landing section with CTA
│   ├── About.jsx         # Bio, stats, education
│   ├── Skills.jsx        # Tech stack badges + skill categories
│   ├── Projects.jsx      # Project cards with filter
│   ├── Experience.jsx    # Timeline + achievement bullets
│   ├── Contact.jsx       # Contact form + socials
│   └── Footer.jsx
├── data/
│   └── portfolio.js      # ← ALL your content lives here
├── hooks/
│   └── useScrollSpy.js   # Active section tracking
├── App.jsx               # Root with loader + scroll-to-top
├── main.jsx
└── index.css             # Tailwind + custom utilities
```

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## ✏️ How to Customize

### Update your info
Edit **`src/data/portfolio.js`** — this is the single source of truth for:
- Personal info (name, email, GitHub, LinkedIn)
- Projects (title, description, tech, links)
- Skills categories
- Experience bullets

### Add live project links
In `src/data/portfolio.js`, find each project and update:
```js
live: "https://your-deployed-url.vercel.app",
github: "https://github.com/MUNEEB-AYYAN/your-repo",
```

### Connect the contact form
In `Contact.jsx`, replace the `handleSubmit` function with:
- **Formspree**: https://formspree.io (free, no backend needed)
- **EmailJS**: https://emailjs.com (free tier available)

### Update Resume link
In `src/data/portfolio.js`:
```js
resumeUrl: "https://your-resume-link-here.com",
```

## 🚢 Deploy (Free)

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /dist folder to netlify.com/drop
```

## 🎨 Design System

Colors are defined in `tailwind.config.js`:
- `bg` — #080C14 (page background)
- `accent` — #3B82F6 (electric blue)
- `card` — #111827 (card background)
- `text` — #E2E8F0 (primary text)
- `text-dim` — #8899AA (muted text)

Change `accent` to any color to instantly re-theme the whole site.
