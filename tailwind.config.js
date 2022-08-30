/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        test: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-60px) translateX(60px)" },
        },
      },
      fontFamily: {
        aeonik: ["aeonik", "cursive"],
        aeonikLight: ["aeonikLight", "cursive"],
      },
    },
  },
  plugins: [],
};
