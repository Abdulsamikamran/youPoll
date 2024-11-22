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
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1900px",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
        fonts: "Poppins",
      },
    },
  },
});

export default theme; // Correct export
