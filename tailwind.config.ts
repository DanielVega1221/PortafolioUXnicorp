import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink:    "#F37AA6",
          blue:    "#CADEF9",
          purple:  "#E0A6D8",
          peach:   "#FEE0D6",
          neutral: "#DBC9C9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 80% at 70% 40%, #E0A6D8 0%, #CADEF9 40%, #FEE0D6 80%, #ffffff 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
