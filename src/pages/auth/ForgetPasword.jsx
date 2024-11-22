import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import CustomStepper from "./components/CustomStepper";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";

const steps = [
  { description: "Login Process" },
  { description: "2 step Verification" },
  { description: "Profile Completion" },
];
const ForgetPasword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/changePassword"); // Navigate to the /login route
  };

  return (
    <Box w={"full"} px={6} h={"100vh"} bgColor={"white"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />
      <Flex direction={"column"} alignItems={"center"} pt={6}>
        <CustomStepper
          steps={steps}
          activeStep={activeStep}
          colorScheme="red"
        />
        <Flex
          mt={16}
          gap={2}
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
            Forget Password
          </Heading>
          <Text textAlign={"center"} fontSize="16px" color="brand.900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>
          <FormControl mt={6}>
            <FormLabel fontSize={"18px"} htmlFor="email">
              Email Address
            </FormLabel>
            <CustomInput
              variant="redOutline"
              py={6}
              id="email"
              type="email"
              placeholder="Your email"
              rounded={"200px"}
            />
          </FormControl>
          <Button
            mt={40}
            variant="solid"
            colorScheme="red"
            size="lg"
            w={"full"}
            fontSize="md"
            fontWeight="bold"
            rounded={"200px"}
            onClick={handleNavigate}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ForgetPasword;
