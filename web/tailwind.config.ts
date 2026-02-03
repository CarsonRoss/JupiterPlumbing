import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // From Canva scrape "branding" output
          primary: "#00235B",
          accent: "#002F69",
          background: "#F3F4F7",
        },
      },
      borderRadius: {
        // From Canva scrape "branding" output
        brand: "8px",
      },
    },
  },
  plugins: [],
};

export default config;

