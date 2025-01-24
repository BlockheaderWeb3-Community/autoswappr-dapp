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
<<<<<<< HEAD
        "new-bg": "url('/new-background.png')",
        "main-bg": "url('/background1.svg')",
=======
        "main-bg": "url('/background.svg')",
        "main-bg-mobile": "url('/mobile-background.svg')",
>>>>>>> 63448a6afb6f573fbd5a6f03c62332d8708733a3
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
