/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080C14',
        surface: '#0D1320',
        card: '#111827',
        border: '#1E2D45',
        accent: '#3B82F6',
        'accent-bright': '#60A5FA',
        'accent-glow': '#1D4ED8',
        muted: '#4B6080',
        text: '#E2E8F0',
        'text-dim': '#8899AA',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'accent': '0 0 30px rgba(59,130,246,0.2)',
        'card': '0 4px 40px rgba(0,0,0,0.4)',
        'glow': '0 0 60px rgba(59,130,246,0.15)',
      },
    },
  },
  plugins: [],
}
