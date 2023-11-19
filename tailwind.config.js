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
      backgroundImage: {
        "banner-image": "url(src/assets/images/banner-image.png)",
      },
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
