import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210, 40%, 98%)',
        foreground: 'hsl(222, 47%, 11%)',
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222, 47%, 11%)'
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222, 47%, 11%)'
        },
        primary: {
          DEFAULT: 'hsl(217, 91%, 60%)',
          foreground: 'hsl(210, 40%, 98%)'
        },
        secondary: {
          DEFAULT: 'hsl(214, 32%, 91%)',
          foreground: 'hsl(222, 47%, 11%)'
        },
        muted: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(215, 16%, 47%)'
        },
        accent: {
          DEFAULT: 'hsl(45, 93%, 47%)',
          foreground: 'hsl(222, 47%, 11%)'
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(210, 40%, 98%)'
        },
        border: 'hsl(214, 32%, 91%)',
        input: 'hsl(214, 32%, 91%)',
        ring: 'hsl(221, 83%, 53%)',
        chart: {
          '1': 'hsl(217, 91%, 60%)',
          '2': 'hsl(45, 93%, 47%)',
          '3': 'hsl(201, 96%, 32%)',
          '4': 'hsl(41, 96%, 40%)',
          '5': 'hsl(224, 76%, 48%)'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
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
    }
  },
  plugins: [animatePlugin],
} satisfies Config;
