import { Box, Flex, Container } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Container py={5} maxW="container.xl" flex="1" mt={8}>
        {children}
      </Container>

      <Footer />
    </Flex>
  );
};

export default Layout;
