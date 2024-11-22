import { Box, Flex, Container, Text } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./theme";
import MobileNav from "./components/MobileNav";
import MobileFooter from "./components/MobileFooter";

const Layout = ({ children }) => {
  return (
    <Flex position={"relative"} direction="column" minH="100vh">
      <Box display={{ base: "none", md: "block" }}>
        <Navbar />
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <MobileNav />
      </Box>

      <Box flex="1">{children}</Box>
      {/* <Flex
        w={"full"}
        h={"90px"}
        justify={"space-between"}
        position={"fixed"}
        zIndex={2}
        bottom={0}
        display={{ base: "flex", md: "hidden" }}
        bg={"white"}
        p={4}
        >
        <Text>Home</Text>
        <Text> Create Poll</Text>
        <Text>Search</Text>
        <Text>Profile</Text>
      </Flex> */}

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
