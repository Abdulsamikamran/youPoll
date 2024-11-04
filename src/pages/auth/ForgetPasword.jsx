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
    <Box w={"full"} h={"100vh"} bgColor={"white"}>
      <Image src={logo} position={"absolute"} top={10} left={10} />
      <Flex direction={"column"} alignItems={"center"} pt={6}>
        <CustomStepper
          steps={steps}
          activeStep={activeStep}
          colorScheme="#FF5A5E"
        />
        <Flex
          mt={16}
          gap={2}
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
          <Button
            mt={40}
            variant="solid"
            bgColor={"brand.100 "}
            color={"white"}
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
