import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  IconButton,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const PasswordInput = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          bg="gray.50"
          border="none"
          _placeholder={{ color: "gray.500" }}
          _focus={{ borderColor: "gray.200", boxShadow: "none" }}
          py={7}
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
        <InputRightElement mt={2}>
          <IconButton
            w="2rem" // Adjust width as needed
            h="2rem" // Adjust height as needed
            fontSize="1.45rem" // Adjust font size for icon size
            variant="ghost"
            aria-label="Toggle Password Visibility"
            icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            onClick={handleTogglePassword}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

const SecuritySettings = () => {
  return (
    <Box
      maxW="full"
      mx="auto"
      p={10}
      borderWidth={1}
      borderRadius="lg"
      bg="white"
      px={12}
      py={10}
    >
      <VStack align="start" spacing={6}>
        <Text fontSize="2xl" fontWeight="semibold" color={"gray.600"} mb={6}>
          Change Password
        </Text>
        <PasswordInput
          label="Current Password"
          placeholder="Current Password"
        />
        <PasswordInput label="New Password" placeholder="Password" />
        <PasswordInput
          label="Confirm New Password"
          placeholder="Confirm New Password"
        />

        <HStack mt={8} spacing={4}>
          <Button
            bgColor="brand.100"
            _hover={{ bgColor: "red.500" }}
            color="white"
            size="lg"
            px={14}
            py={7}
            fontSize="md"
          >
            Save Changes
          </Button>
          <Button
            bgColor="gray.500"
            _hover={{ bgColor: "gray.400" }}
            color="white"
            size="lg"
            px={14}
            py={7}
            fontSize="md"
          >
            Cancel
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SecuritySettings;
