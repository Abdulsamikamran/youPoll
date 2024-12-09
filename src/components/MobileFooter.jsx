import { Button, Flex, Link, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const MobileFooter = () => {
  return (
    <Flex
      as="footer"
      bg="brand.100"
      color="white"
      pt={10}
      pb={24}
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <VStack spacing={4} align="center" p={4}>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/about">About us</Link>
      </VStack>
    </Flex>
  );
};

export default MobileFooter;
