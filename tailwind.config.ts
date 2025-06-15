
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        "frida-red": "#E63946",
        "frida-orange": "#F6861F",
        "frida-blue": "#2067AC",
        "frida-green": "#19A974",
        "frida-yellow": "#FFD600",
        "frida-beige": "#FFF5E1",
        "frida-dark": "#3C2A21",
      },
      backgroundImage: {
        "texture-paper": "url('/assets/texture-paper.png')", // caso deseje usar textura
      },
      boxShadow: {
        "frida": "0 6px 24px 0 rgba(230,57,70,0.07)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
