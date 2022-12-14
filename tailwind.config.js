/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./apps/lean/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["night"],
    logs: false
  }
};
