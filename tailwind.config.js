// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/ArbitratorRegistration/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan your component files
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1B2A',    // Midnight Blue
        'brand-secondary': '#1B263B', // Darker Blue-Gray
        'brand-gray': '#415A77',     // Steel Blue/Gray
        'brand-light': '#E0E1DD',   // Off-white
        'brand-accent': '#32E0C4',   // Electric Aqua/Teal
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}