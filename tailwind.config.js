/* eslint-disable import/no-extraneous-dependencies */
const typography = require("@tailwindcss/typography");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Inter",
      mono: "JetBrains Mono",
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "900px",
      xl: "1200px",
      "2xl": "1536px",
      "only-hover": { raw: "(hover: hover)" },
    },
    extend: {},
  },
  plugins: [typography, aspectRatio],
};
