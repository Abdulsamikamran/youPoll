import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import CustomStepper from "./components/CustomStepper";

const steps = [
  { description: "Login Process" },
  { description: "2 step Verification" },
  { description: "Profile Completion" },
];

const ChangePassword = () => {
  const [activeStep, setActiveStep] = useState(0);
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
            Change Password
          </Heading>
          <Text textAlign={"center"} fontSize="16px" color="brand.900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>
          <FormControl mt={6}>
            <FormLabel fontSize={"18px"} htmlFor="password">
              New Password
            </FormLabel>
            <Input
              py={6}
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              variant="outline"
              rounded={"200px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel fontSize={"18px"} htmlFor="password">
              Confirm New Password
            </FormLabel>
            <Input
              py={6}
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              variant="outline"
              rounded={"200px"}
              _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />
          </FormControl>
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
                Remember me
              </Text>
            </Checkbox>
          </HStack>
          <Button
            mt={10}
            variant="solid"
            bgColor={"brand.100 "}
            color={"white"}
            size="lg"
            w={"full"}
            fontSize="md"
            fontWeight="bold"
            rounded={"200px"}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChangePassword;
