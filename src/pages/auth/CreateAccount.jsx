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
  SimpleGrid,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Select,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
} from "@chakra-ui/react";

import logo from "../../../assets/logo.svg";
import google from "../../../assets/google.png";
import CustomInput from "../../components/CustomInput";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const [otherGender, setOtherGender] = useState("");

  const handleSelect = (value) => {
    setSelectedOption(value);
    if (value !== "Other") {
      setOtherGender("");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box bg={"white"} w={"full"} pb={10} h={"100%"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />
      <Flex
        py={6}
        w={"full"}
        px={4}
        gap={3}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          maxW={"600px"}
          mt={16}
          gap={{ base: 3, md: 6 }}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            as="h1"
            fontSize={{ base: "26px", md: "36px" }}
            fontWeight="semibold"
            color={useColorModeValue("black", "gray.200")}
          >
            Create Account
          </Heading>
          <Text
            textAlign={"center"}
            maxW={"500px"}
            fontSize={{ base: "12px", md: "16px" }}
            color="brand.900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus
          </Text>

          <SimpleGrid w={"full"} columns={{ base: 1, md: 2 }} spacing={6}>
            {/* Full Name */}
            <FormControl>
              <FormLabel fontSize="16px" htmlFor="name">
                Full Name*
              </FormLabel>
              <CustomInput
                variant="redOutline"
                py={6}
                id="name"
                type="text"
                placeholder="Name"
                rounded="18px"
              />
            </FormControl>

            {/* Username */}
            <FormControl>
              <FormLabel fontSize="16px" htmlFor="username">
                Username*
              </FormLabel>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="username"
                type="text"
                placeholder="Username"
                rounded="18px"
              />
            </FormControl>

            {/* Email (Full Width) */}
            <FormControl gridColumn={{ base: "1", md: "1 / span 2" }}>
              <FormLabel fontSize="16px" htmlFor="email">
                Email Address*
              </FormLabel>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="email"
                type="email"
                placeholder="Your email"
                rounded="18px"
              />
            </FormControl>

            {/* Phone Number (Full Width) */}
            <FormControl gridColumn={{ base: "1", md: "1 / span 2" }}>
              <FormLabel fontSize="16px" htmlFor="phone">
                Phone Number*
              </FormLabel>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="phone"
                type="tel"
                placeholder="Your phone number"
                rounded="18px"
              />
            </FormControl>

            {/* Date of Birth */}
            <FormControl>
              <FormLabel fontSize="16px" htmlFor="dob">
                Date of Birth*
              </FormLabel>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="dob"
                type="date"
                rounded="18px"
              />
            </FormControl>

            {/* Gender */}
            <FormControl>
              <FormLabel fontSize="16px" htmlFor="gender">
                Gender*
              </FormLabel>
              <Menu>
                <MenuButton
                  fontWeight={"normal"}
                  borderColor="gray.400"
                  _hover={{ borderColor: "red.600" }}
                  _focus={{
                    borderColor: "red.400",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  _active={{
                    borderColor: "red.400",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  as={Button}
                  w="full"
                  variant="outline"
                  py={6}
                  rounded="18px"
                  textAlign="left"
                >
                  {selectedOption || "Select Gender"}
                </MenuButton>
                <MenuList w="full">
                  {[
                    "Male",
                    "Female",
                    "Non-binary",
                    "Genderqueer",
                    "Agender",
                    "Genderfluid",
                    "Transgender Male",
                    "Transgender Female",
                    "Prefer not to say",
                  ].map((option) => (
                    <MenuItem
                      key={option}
                      onClick={() => handleSelect(option)}
                      value={option}
                    >
                      {option}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={() => handleSelect("Other")} value="Other">
                    Other
                  </MenuItem>
                </MenuList>
              </Menu>
              {selectedOption === "Other" && (
                <VStack align="start" mt={4} spacing={2}>
                  <CustomInput
                    w="full"
                    variant="redOutline"
                    py={6}
                    placeholder="Please specify"
                    value={otherGender}
                    onChange={(e) => setOtherGender(e.target.value)}
                    rounded="18px"
                  />
                </VStack>
              )}
            </FormControl>

            {/* Address (Full Width) */}
            <FormControl gridColumn={{ base: "1", md: "1 / span 2" }}>
              <FormLabel fontSize="16px" htmlFor="address">
                Address*
              </FormLabel>
              <CustomInput
                w="full"
                variant="redOutline"
                py={6}
                id="address"
                type="text"
                placeholder="Your address"
                rounded="18px"
              />
            </FormControl>

            {/* Password */}
            <FormControl>
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
                    variant="ghost"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Confirm Password */}
            <FormControl>
              <FormLabel fontSize="16px" htmlFor="confirm-password">
                Confirm Password*
              </FormLabel>
              <InputGroup>
                <CustomInput
                  w="full"
                  variant="redOutline"
                  py={6}
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  rounded="18px"
                />
                <InputRightElement height="full">
                  <IconButton
                    variant="ghost"
                    bg={"none"}
                    _active={{
                      bgColor: "none",
                    }}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </SimpleGrid>

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
                I accept all the terms and conditions
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
            rounded={"18px"}
            onClick={() => navigate("/interest")}
          >
            Save
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
            rounded={"18px"}
          >
            <Flex gap={2}>
              <Image src={google} />

              <Text>Sign in with Google</Text>
            </Flex>
          </Button>
          <Flex gap={1} mt={2} justifyContent={"center"}>
            <> Already have an Account?</>
            <Link href="/login" color={"red"}>
              Login Now
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CreateAccount;
