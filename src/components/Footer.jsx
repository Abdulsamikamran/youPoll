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
      w={"full"}
      as="footer"
      bg="brand.100"
      color="white"
      py={{ md: 5, lg: 10 }}
      px={{ md: 4, lg: 20 }}
      justifyContent="center"
      alignItems="center"
    >
      <Flex justifyContent="space-between" w="full">
        <HStack alignItems={"start"} spacing={{ md: 2, lg: 10, xl: 20 }}>
          <VStack whiteSpace={"nowrap"} spacing={4} align="flex-start" p={4}>
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
          <VStack whiteSpace={"nowrap"} spacing={4} align="flex-start" p={4}>
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
          <Heading size="sm">SUBSCRIBE TO OUR NEWSLETTER TODAY</Heading>
          <HStack>
            <Input
              flex={0.7}
              py={{ md: 6, lg: 6, xl: 8 }}
              id="email"
              type="email"
              placeholder="Enter your email"
              variant="outline"
              rounded={"md"}
              minW={{ lg: "250px", xl: "400px" }}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              bgColor={useColorModeValue("gray.50", "gray.600")}
            />
            <Button
              flex={0.3}
              colorScheme="white"
              py={{ md: 6, lg: 6, xl: 8 }}
              variant={"outline"}
              // size={{ md: "md", lg: "lg" }}
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
