import {
  Flex,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Link,
  useColorModeValue,
  HStack,
  Divider,
  Box,
  Image,
} from "@chakra-ui/react";

import logo from "../../../assets/logo.svg";
import google from "../../../assets/google.png";

const CreateAccount = () => {
  return (
    <Box bg={"white"} w={"full"} h={"100vh"}>
      <Image src={logo} position={"absolute"} top={10} left={10} />
      <Flex
        py={6}
        w={"full"}
        gap={3}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          mt={16}
          gap={6}
          direction={"column"}
          w={"500px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            as="h1"
            fontSize="36px"
            fontWeight="semibold"
            color={useColorModeValue("black", "gray.200")}
          >
            Create Account
          </Heading>
          <Text
            textAlign={"center"}
            w={"400px"}
            fontSize="16px"
            color="brand.900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>

          <FormControl>
            <FormLabel fontSize={"18px"} htmlFor="email">
              Full Name
            </FormLabel>
            <Input
              py={6}
              id="name"
              type="text"
              placeholder="Name"
              variant="outline"
              rounded={"200px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"18px"} htmlFor="email">
              Email Address
            </FormLabel>
            <Input
              py={6}
              id="email"
              type="email"
              placeholder="Your email"
              variant="outline"
              rounded={"200px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              py={6}
              id="password"
              type="password"
              placeholder="Your password"
              variant="outline"
              rounded={"200px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
          <Flex w={"full"} justifyContent={"end"}>
            <Link fontSize="14px" color="brand.100" href="/forgetPassword">
              Forgot password?
            </Link>
          </Flex>
          <HStack w={"full"} justify="space-between">
            <Checkbox
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "#FF5A5E",
                  border: "none",
                  outline: "none",
                },
              }}
              defaultChecked
            >
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                I accept all the terms and conditions
              </Text>
            </Checkbox>
          </HStack>
          <Button
            w={"full"}
            variant="solid"
            bgColor={"brand.100 "}
            color={"white"}
            size="lg"
            fontSize="md"
            fontWeight="bold"
            rounded={"200px"}
          >
            Login
          </Button>
          <Flex
            w={"full"}
            gap={3}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Divider />
            <Text fontSize={"16px"} color={"brand.900"} w={"300px"}>
              or login with
            </Text>
            <Divider />
          </Flex>
          <Button
            w={"full"}
            variant="outline"
            size="lg"
            fontSize="md"
            fontWeight="normal"
            rounded={"200px"}
          >
            <Flex gap={2}>
              <Image src={google} />

              <Text>Sign in with Google</Text>
            </Flex>
          </Button>
          <Flex gap={1} mt={2} justifyContent={"center"}>
            <> Already have an Account?</>
            <Link href="/login" color={"brand.100"}>
              Login Now
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CreateAccount;
