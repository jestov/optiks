import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('/img/bg-pattern.svg'), url('/img/climber.jpg')",
      },
      fontFamily: {
        monument: ["Monument Extended"],
      },
      colors: {
        primary: "#4B57F4",
        secondary: "#1B294F",
        tertiary: "#f9f9f9",
        fourth: "#9AD1D4",
        fifth: "#008BCC",
        secondaryBlue: "#3b46ba",
        greenLight: "#AEFFB2",
        greenLighter: "#befac1",
      },
    },
  },
  plugins: [],
};
export default config;
