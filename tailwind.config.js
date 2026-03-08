/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'psych-bg': '#F9F8F6',
        'psych-primary': '#4A5D4E',
        'psych-accent': '#8E7C93',
        'psych-card': '#EFEBE4',
      },
      fontFamily: {
        serif: ['"Lora"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}