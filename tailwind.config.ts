import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      lm_max: { max: "450px" },
      lm_min: { min: "450px" },
      // => @media (max-width: 360px) { ... }
      sm: "360px",
      // => @media (min-width: 360px) { ... }
      md_max: { max: "768px" },
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg_max: { max: "1024px" },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl_max: { max: "1280px" },
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl_max": { max: "1440px" },
      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-primary":
          "background: linear-gradient(114.44deg, #7433FF 0%, #FFA3FD 100%);",
        "gradient-secondary":
          "background: linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%);",
        "gradient-accent":
          "background: linear-gradient(114.44deg, #EB0055 0%, #FFFA80 100%);",
        "main-bg": "url('/bg-main.png')",
      },
      boxShadow: {
        main: " 0px 0px 20px 1px #DFE2E44D",
        secondary: "0px 4px 40px 0px #3C88F71A",
        "main-dark": " 0px 35px 40px 0px #0000000F",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F7F7FC",
        "title-active": "#14142B",
        body: "#4E4B66",
        label: "#6E7191",
        placeholder: "#A0A3BD",
        line: "#D6D8E7",
        "input-main": "#EFF0F6",
        "off-white": "#D6D8E7",
        primary: {
          main: "#F35D74",
          dark: "#DF4960",
        },
        secondary: {
          main: "#001D23",
          dark: "#001013",
        },
        error: "#ED2E50",
        success: "00BA88",
        warning: "F4B740",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
