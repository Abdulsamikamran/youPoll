import React from "react";
import Layout from "../../layout";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Input,
  Textarea,
  Button,
  HStack,
  Icon,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import CustomInput from "../../components/CustomInput";

const ContactUs = () => {
  return (
    <Layout>
      <Container maxW="1600px" py="12" px={{ base: "4", md: "8" }}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="start"
          justify="space-between"
        >
          <Box>
            <Heading fontSize="2xl" mb="4">
              Social links
            </Heading>
            <HStack spacing="4">
              <Icon
                as={FaFacebookF}
                boxSize="8"
                color="blue.500"
                cursor="pointer"
                _hover={{ color: "blue.600" }}
              />
              <Icon
                as={FaInstagram}
                boxSize="8"
                color="pink.400"
                cursor="pointer"
                _hover={{ color: "pink.500" }}
              />
              <Icon
                as={FaYoutube}
                boxSize="8"
                color="red.500"
                cursor="pointer"
                _hover={{ color: "red.600" }}
              />
              <Icon
                as={FaWhatsapp}
                boxSize="8"
                color="green.400"
                cursor="pointer"
                _hover={{ color: "green.500" }}
              />
            </HStack>
          </Box>

          <Box flex={{ md: 0.8, xl: 0.5 }}>
            <Text fontSize="40" fontFamily={"Syne"} mb="2">
              Send us a message
            </Text>
            <Text mb="6" color="gray.500" fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Text>
            <VStack spacing="4" align="start">
              <FormControl mt={2}>
                <FormLabel fontSize={"18px"} htmlFor="email">
                  Name
                </FormLabel>
                <CustomInput
                  variant="redOutline"
                  py={6}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  rounded={"20px"}
                />
              </FormControl>

              <FormControl mt={2}>
                <FormLabel fontSize={"18px"} htmlFor="email">
                  Email
                </FormLabel>
                <CustomInput
                  variant="redOutline"
                  py={6}
                  id="email"
                  type="email"
                  placeholder="you@mail.com"
                  rounded={"20px"}
                />
              </FormControl>

              <FormControl mt={2}>
                <FormLabel fontSize={"18px"} htmlFor="email">
                  Message
                </FormLabel>
                <Textarea
                  placeholder="Your message"
                  size="lg"
                  borderRadius="md"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "brand.100",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  rows="5"
                />
              </FormControl>
              <Button
                my={4}
                bg="red.500"
                color="white"
                size="lg"
                py={8}
                rounded={"full"}
                w="full"
                _hover={{ bg: "red.600" }}
              >
                Send Now
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default ContactUs;
