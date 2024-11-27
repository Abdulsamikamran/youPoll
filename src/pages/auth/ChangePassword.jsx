import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import CustomStepper from "./components/CustomStepper";
import CustomInput from "../../components/CustomInput";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const steps = [
  { description: "Login Process" },
  { description: "2 step Verification" },
  { description: "Profile Completion" },
];

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box w={"full"} px={6} h={"100vh"} bgColor={"white"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />{" "}
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
          maxW={"500px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            as="h1"
            fontSize={{ base: "26px", md: 36 }}
            fontWeight="semibold"
            color={useColorModeValue("black", "gray.200")}
          >
            Change Password
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={{ base: "12px", md: "16px" }}
            color="brand.900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>
          <FormControl>
            <FormLabel my={5} fontSize="16px" htmlFor="password">
              Password
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
          <FormControl>
            <FormLabel my={5} fontSize={"18px"} htmlFor="password">
              Confirm New Password
            </FormLabel>
            <InputGroup>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
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
            mt={10}
            variant="solid"
            colorScheme="red"
            size="lg"
            w={"full"}
            fontSize="md"
            fontWeight="bold"
            rounded={"20px"}
            mb={20}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChangePassword;
