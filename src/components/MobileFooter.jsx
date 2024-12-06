import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link href="#">Terms & Conditions</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Contact us</Link>
        <Link href="#">About us</Link>
      </VStack>
    </Flex>
  );
};

export default MobileFooter;
