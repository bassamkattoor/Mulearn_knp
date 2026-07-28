/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Deep navy/near-black
        surface: '#1e293b',
        primary: '#8b5cf6', // Purple
        secondary: '#3b82f6', // Blue
        accent: '#a3e635', // Neon Lime (Gamification/Karma)
        textMain: '#f8fafc',
        textMuted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
