import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // James Williams, LLC palette (from logo + site)
        forest: {
          DEFAULT: "#3a5a2c", // primary forest green (logo)
          dark: "#2c4420",
          deep: "#243a1a",
          light: "#4f7a3c",
        },
        olive: "#5c7a3f",
        sage: {
          DEFAULT: "#b7c1ad", // page background green
          light: "#d8ddd0",
          lighter: "#eef0ea",
        },
        cream: "#f7f8f4",
        charcoal: "#222820",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
