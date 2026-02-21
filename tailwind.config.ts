import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",

        // New Pastel Colors
        lamaPink: "#FEC8D8",       // soft pink
        lamaPinkLight: "#FFF1F6",  // very light pink

        lamaGreen: "#C8FACC",      // mint green
        lamaGreenLight: "#EFFDF4", // very light green

        lamaPeach: "#FFD8B5",      // peach/orange
        lamaPeachLight: "#FFF5EB", // very light peach

        lamaLavender: "#E6D8FF",   // pastel lavender
        lamaLavenderLight: "#F8F5FF", // very light lavender

        lamaBlue: "#A0D4FF",       // soft sky blue
        lamaBlueLight: "#E7F7FF",  // very light blue

        lamaGray: "#E2E2E2",       // soft gray for backgrounds
        lamaGrayLight: "#F8F8F8",  // very light gray
      }
    },
  },
  plugins: [],
};
export default config;
