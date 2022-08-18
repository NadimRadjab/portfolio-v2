/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "start-navbar": {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0))" },
        },
      },
    },
  },
  plugins: [],
};
