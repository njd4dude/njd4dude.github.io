/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'bubble':  ['Rubik Bubbles', 'sans-serif'],
    },
    extend: {
      animation: {
        wiggle: "1s ease-in-out wiggle ",
        zoom: "zoom 0.2s ease-in-out",
      },

      keyframes: {
        openDoor: {
          "0%" :{

          },
        },
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
            transform: "rotate(0deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
