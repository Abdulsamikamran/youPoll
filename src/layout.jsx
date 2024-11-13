import { Box, Flex, Container } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./theme";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Box flex="1">{children}</Box>

      <Footer />
    </Flex>
  );
};

export default Layout;
