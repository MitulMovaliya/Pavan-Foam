/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8225",
        secondary: "#F8EDED",
        hoverBg: "#B43F3F",
        background: "#173B45",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 30s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
