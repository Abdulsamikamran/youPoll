// src/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF5A5E",
      900: "#9B9B9B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
        fonts: "Poppins",
      },
    },
  },
});

export default theme; // Correct export
