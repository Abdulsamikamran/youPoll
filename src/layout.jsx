import { Box, Flex, Container, Text, Stack } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MobileNav from "./components/MobileNav";
import MobileFooter from "./components/MobileFooter";
import BottomNav from "./components/BottomNav";

const Layout = ({ children }) => {
  return (
    <Flex position={"relative"} direction="column" minH="100vh">
      <Box display={{ base: "none", lg: "block" }}>
        <Navbar />
      </Box>
      <Box display={{ base: "block", lg: "none" }}>
        <MobileNav />
      </Box>
      <Box flex="1">{children}</Box>

      <BottomNav />

      <Box display={{ base: "none", md: "block" }}>
        <Footer />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <MobileFooter />
      </Box>
    </Flex>
  );
};

export default Layout;
