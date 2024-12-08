import { Box, Flex, Text, Link, Stack, Image } from "@chakra-ui/react";
import logo from "../../assets/logowhite.svg";

const Footer = () => {
  return (
    <Box bg="brand.100" color="white" py="10">
      <Flex
        px={{ md: 8, xl: 32 }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Image src={logo} />
        <Stack
          fontSize={{ md: 10, lg: 16 }}
          direction={{ base: "column", sm: "row" }}
          spacing={{ base: 2, sm: 8 }}
          textAlign={{ base: "center", sm: "left" }}
          fontWeight={"semibold"}
          mt={{ base: 4, sm: 0 }}
        >
          <Link href="/about" _hover={{ textDecoration: "underline" }}>
            About us
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Contact us
          </Link>
          <Link href="/privacy" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" _hover={{ textDecoration: "underline" }}>
            Terms & Condition
          </Link>
        </Stack>

        <Text
          fontSize={{ md: 10, lg: 16 }}
          mt={{ base: 4, sm: 0 }}
          textAlign="right"
        >
          © 2024 Yupoll
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
