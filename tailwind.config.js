// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan your component files
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': '#f8f9fa',
        'custom-navy': '#1a2a4d',
        'custom-gold': '#c4a66a',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}