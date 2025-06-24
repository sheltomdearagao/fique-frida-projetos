
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
        "frida-coral": "#E85A4F",
        "frida-orange": "#F9844A",
        "frida-blue": "#2B7A78",
        "frida-teal": "#4D908E",
        "frida-green": "#52796F",
        "frida-yellow": "#F4A261",
        "frida-beige": "#F7EDE2",
        "frida-warm": "#F5E6D3",
        "frida-dark": "#3C2A21",
        "frida-brown": "#5D4E37",
      },
      backgroundImage: {
        "texture-paper": "url('/assets/texture-paper.png')",
        "gradient-warm": "linear-gradient(135deg, #F7EDE2 0%, #F5E6D3 50%, #F4A261 100%)",
        "gradient-cool": "linear-gradient(135deg, #2B7A78 0%, #4D908E 50%, #52796F 100%)",
      },
      boxShadow: {
        "frida": "0 6px 24px 0 rgba(230,57,70,0.07)",
        "frida-warm": "0 8px 32px 0 rgba(244,162,97,0.12)",
        "frida-cool": "0 8px 32px 0 rgba(43,122,120,0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
