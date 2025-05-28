/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
