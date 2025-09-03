/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#fdfaf6",
          DEFAULT: "#f5f5dc",
          dark: "#e5e5c7",
        },
        mint: {
          light: "#a8e6cf",
          DEFAULT: "#98ff98",
          dark: "#77dd77",
        },
      },
    },
  },
  plugins: [],
};
