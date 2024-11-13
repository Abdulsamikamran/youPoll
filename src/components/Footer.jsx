import {
  Flex,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  VStack,
  Link,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="brand.100"
      color="white"
      py={10}
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="space-between" maxW="1600px" w="full">
        <HStack alignItems={"start"} spacing={20}>
          <VStack spacing={4} align="flex-start" p={4}>
            <Heading mb={10} size="md">
              SITEMAP
            </Heading>
            <Link href="#">About us</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Events</Link>
            <Text fontSize="xs" mt={4}>
              © 2021 Newspoll
            </Text>
          </VStack>
          <VStack spacing={4} align="flex-start" p={4}>
            <Heading mb={10} size="md">
              HELP
            </Heading>
            <Link href="#">Imprints</Link>
            <Link href="#">Data Protection</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Help & Support</Link>
          </VStack>
        </HStack>
        <VStack spacing={6} align="flex-start" p={4}>
          <Heading size="md">SUBSCRIBE TO OUR NEWSLETTER TODAY</Heading>
          <HStack>
            <Input
              py={8}
              id="email"
              type="email"
              placeholder="Enter your email"
              variant="outline"
              rounded={"md"}
              minW={"400px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              bgColor={useColorModeValue("gray.50", "gray.600")}
            />
            <Button
              colorScheme="white"
              py={8}
              variant={"outline"}
              size="lg"
              w="full"
            >
              Subscribe
            </Button>
          </HStack>
          <HStack justifyContent={"end"} w={"full"} spacing={4} mt={20}>
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
            <chakra.div
              h="10"
              w="10"
              borderRadius="full"
              border="1px solid white"
            />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
