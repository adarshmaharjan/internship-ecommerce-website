/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ["product-sans"],
    },
    fontSize: {
      base: [
        "1rem",
        {
          letterSpacing: "0.01em",
          lineHeight: "24px",
        },
      ],
      lg: [
        "0.875rem",
        {
          letterSpacing: "0.01em",
          lineHeight: "1.5",
        },
      ],
      body: [
        // paragraph size
        "1rem",
        {
          lineHeight: "24px",
          letterSpacing: "0.01em",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.4",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "1.4",
          letterSpacing: "-0.005em",
        },
      ],
      "3xl": [
        "2.5rem",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.015em",
        },
      ],
      "4xl": [
        "3rem",
        {
          lineHeight: "1.5",
          letterSpacing: "-0.02em",
        },
      ],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      gray: "#808080",
      light: "#F9F9F9",
      black: "#000000",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "product-sans": "Product Sans",
      },
    },
  },
  plugins: [tailwindTypography],
};
