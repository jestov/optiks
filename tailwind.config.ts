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
        primary: "#2F71D1",
        secondary: "#272733",
        tertiary: "#f9f9f9",
        fourth: "#9AD1D4",
        fifth: "#008BCC",
        mainGray: "#E1E0DC",
        secondaryBlue: "#2B6DCD",
        greenLight: "#BEFAC1",
        greenLighter: "#A8E5A3",
      },
    },
  },
  plugins: [],
};
export default config;
