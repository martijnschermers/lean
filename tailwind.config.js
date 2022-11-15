/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/lean/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night']
  }
}
