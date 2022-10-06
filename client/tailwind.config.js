/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'lofi',
      'wireframe',
      'cyberpunk',
      'aqua',
      'winter',
      'coffee',
      'retro',
      'dracula',
      'valentine',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'pastel',
      // 'fantasy',
      // 'black',
      // 'luxury',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
