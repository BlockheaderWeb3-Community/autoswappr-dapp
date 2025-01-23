import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      backgroundImage: {
        "new-bg": "url('/new-background.png')",
        "main-bg": "url('/background1.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
