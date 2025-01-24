import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      backgroundImage: {
        "main-bg": "url('/background.svg')",
        "main-bg-mobile": "url('/mobile-background.svg')",
        "new-bg": "url('/new-background.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
