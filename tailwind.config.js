// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./secondTemplate/src/**/*.{js,jsx,ts,tsx}"  // هذا المهم عندك
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
