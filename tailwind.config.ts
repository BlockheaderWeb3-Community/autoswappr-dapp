import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor:{
        "main-white":"#F9F9F9",
        "dark-blue":"#433B5A"
      },
      backgroundImage: {
        "main-bg": "url('/main-background.png')",
      },
      fontFamily:{
        "open-sans":['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
