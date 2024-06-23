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
        "primary-color-500": "#8A42DB",
        "primary-color-400": "#9955E8",
        "secondary-color": "#7DFFAF",

        "surface-background": "#171023",
        "surface-primary": "#2C243B",
        "surface-secondary": "#413A4F",
        "surface-tertiary": "#4E4563",

        "text-primary": "#F5F6F6",
        "text-secondary": "#CDD0D4",
      },
    },
    fontFamily: {
      body: ["var(--font-body)"],
      heading: ["var(--font-heading)"],
    },
  },
  plugins: [],
};

export default config;
