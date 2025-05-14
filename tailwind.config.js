/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sourceCode: ["Source Code Pro", "monospace"],
      },
      colors: {
        primary: "#FF3366",
        primaryCyan: "#07DDDA",
        black: "#010101",
        white: "#f5f5f5",
      },
      keyframes: {
        "fade-pulse": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-pulse": "fade-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
