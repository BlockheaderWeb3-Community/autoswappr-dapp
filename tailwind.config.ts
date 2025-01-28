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
      colors: {
        "accent": "var(--accent)",
        "grey": {
          300: "var(--grey-300)",
          700: "var(--grey-700)",
          900: "var(--grey-900)",
          1100: "var(--grey-1100)",
        }
      },
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
      backgroundImage: {
        "main-bg": "url('/background.png')",
        "main-bg-mobile": "url('/mobile-background.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
