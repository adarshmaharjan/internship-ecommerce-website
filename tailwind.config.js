/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#7E7E7E",
      black: "#000000",
      white: "#FFFFFF",
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
