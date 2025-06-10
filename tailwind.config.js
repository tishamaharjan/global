import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
    },
    colors: {
      green: "var(--green)",
      darkergreen: "var(--darkergreen)",
      greenyellow: "var(--greenyellow)",
      lightbackground: "var(--lightbackground)",
      blackbackground: "var(--blackbackground)",
      darkinput: "var(--darkinput)",
      lightblack: "var(--lightblack)",
    },
  },
  plugins: [],
};
