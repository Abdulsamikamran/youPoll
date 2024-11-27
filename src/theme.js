// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#e52000",
      900: "#9B9B9B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  sizes: {
    container: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1900px",
    },
  },
  breakpoints: {
    sm: "23.4375em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  styles: {
    global: {
      body: {
        bg: "#f9f9f9",
        color: "gray.800",
        fonts: "Poppins",
      },
    },
  },
});

export default theme;
