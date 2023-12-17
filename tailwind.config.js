/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bubble: ["Rubik Bubbles", "sans-serif"],
      silkscreen: ["Silkscreen", "sans-serif"],
      mina: ["Mina", "sans-serif"],
      round: ["Crete Round", "sans-serif"],
    },
    extend: {
      animation: {
        wiggle: "0.5s ease-in-out wiggle  ",
        zoom: "zoom 0.2s ease-in-out",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "15%": {
            transform: "rotate(8deg) scale(1.2) ",
          },
          "30%": {
            transform: "rotate(-8deg) scale(1.2) ",
          },

          "45%": {
            transform: "rotate(8deg) scale(1.2)",
          },

          "60%": {
            transform: "rotate(-8deg) scale(1.2)",
          },
          "85%": {
            transform: "rotate(0deg) scale(1.2)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
