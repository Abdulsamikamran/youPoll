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
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";

import CustomStepper from "./components/CustomStepper";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import google from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const steps = [
  { description: "Login Process" },
  { description: "2 step Verification" },
  { description: "Profile Completion" },
];

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const nextStep = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box bg={"white"} px={6} w={"full"} h={"100vh"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />
      <Flex
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
          maxW={"550px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            as="h1"
            fontSize={{ base: "26px", md: 36 }}
            fontWeight="semibold"
            color={useColorModeValue("black", "gray.200")}
          >
            Login Now!
          </Heading>
          <Text
            px={{ base: 4, sm: 0 }}
            textAlign={"center"}
            maxW={"full"}
            fontSize={{ base: "12px", md: "12px" }}
            color="brand.900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>

          <FormControl px={{ base: 4, sm: 0 }}>
            <FormLabel fontSize={"18px"} htmlFor="email">
              Email Address*
            </FormLabel>
            <CustomInput
              variant="redOutline"
              rounded={"20px"}
              placeholder="Your email"
              py={6}
              id="email"
              type="email"
            />
          </FormControl>
          <FormControl px={{ base: 4, sm: 0 }}>
            <FormLabel fontSize="16px" htmlFor="password">
              Password*
            </FormLabel>
            <InputGroup>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                rounded="18px"
              />
              <InputRightElement height="full">
                <IconButton
                  _hover={{ bg: "none" }}
                  variant="ghost"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={togglePasswordVisibility}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Flex w={"full"} px={{ base: 4, sm: 0 }} justifyContent={"end"}>
            <Link fontSize="14px" color="red" href="/forgetPassword">
              Forgot password?
            </Link>
          </Flex>
          <HStack px={{ base: 4, sm: 0 }} w={"full"} justify="space-between">
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
            mx={{ base: 4, sm: 0 }}
            w={"full"}
            variant="solid"
            colorScheme="red"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            onClick={handleClick}
            rounded={"20px"}
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
            <Text fontSize={"16px"} color={"brand.900"} whiteSpace={"nowrap"}>
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
          <Flex
            pb={{ base: 16, md: 0 }}
            gap={2}
            mt={2}
            justifyContent={"center"}
          >
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
