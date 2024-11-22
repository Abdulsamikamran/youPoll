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
  Stack,
  Divider,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";

import CustomStepper from "./components/CustomStepper";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import google from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
const steps = [
  { description: "Login Process" },
  { description: "2 step Verification" },
  { description: "Profile Completion" },
];

function Login() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const nextStep = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box bg={"white"} px={6} w={"full"} h={"100vh"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />
      <Flex
        // bg={"white"}
        py={{ base: 0, md: 6 }}
        w={"full"}
        gap={3}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CustomStepper
          steps={steps}
          activeStep={activeStep}
          colorScheme="red"
        />

        <Flex
          mt={{ base: 8, md: 16 }}
          gap={6}
          direction={"column"}
          maxW={"500px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            as="h1"
            fontSize="36px"
            fontWeight="semibold"
            color={useColorModeValue("black", "gray.200")}
          >
            Login Now!
          </Heading>
          <Text
            textAlign={"center"}
            maxW={"400px"}
            fontSize="16px"
            color="brand.900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>

          <FormControl>
            <FormLabel fontSize={"18px"} htmlFor="email">
              Email Address
            </FormLabel>
            <CustomInput
              variant="redOutline"
              rounded={"200px"}
              placeholder="Your email"
              py={6}
              id="email"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <CustomInput
              variant="redOutline"
              py={6}
              id="password"
              type="password"
              placeholder="Your password"
              rounded={"200px"}
            />
          </FormControl>
          <Flex w={"full"} justifyContent={"end"}>
            <Link fontSize="14px" color="red" href="/forgetPassword">
              Forgot password?
            </Link>
          </Flex>
          <HStack w={"full"} justify="space-between">
            <Checkbox colorScheme="red" defaultChecked>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.400")}
              >
                Remember me
              </Text>
            </Checkbox>
          </HStack>
          <Button
            w={"full"}
            variant="solid"
            colorScheme="red"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            onClick={handleClick}
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
          <Flex gap={2} mt={2} justifyContent={"center"}>
            <> Not registered yet?</>
            <Link href="/createAccount" color={"red"}>
              Create an account
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
