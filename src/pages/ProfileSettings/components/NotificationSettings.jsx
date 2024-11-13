import React from "react";
import {
  Box,
  Button,
  Switch,
  Text,
  VStack,
  HStack,
  Input,
  Heading,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";

const NotificationSetting = ({ title, description, isChecked }) => (
  <HStack align="start" spacing={4}>
    <Switch mt={1} colorScheme="red" />
    <VStack align={"start"} spacing={4}>
      <Text fontWeight="bold">{title}</Text>
      <Text mb={5} color="gray.500" fontSize="sm">
        {description}
      </Text>
    </VStack>
  </HStack>
);

const NotificationSettings = () => {
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
          Notifications
        </Text>
        <FormControl py={2}>
          <Input
            w={"400px"}
            _focus={{ borderColor: "gray.200", boxShadow: "none" }}
            py={7}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            bg={"gray.50"}
            border={"none"}
            placeholder="abram_marynn@gmail.com"
          />
        </FormControl>

        <VStack align="start" spacing={4} w="full">
          <NotificationSetting
            title="Someone Mentions Me"
            description="Lorem ipsum dolor sit amet consectetur. At fringilla pellentesque tempus laoreet cursus"
            isChecked
          />
          <NotificationSetting
            title="Someone Replies To Me"
            description="Lorem ipsum dolor sit amet consectetur. At fringilla pellentesque tempus laoreet cursus"
            isChecked={false}
          />
          <NotificationSetting
            title="Someone Shares My Comment"
            description="Lorem ipsum dolor sit amet consectetur. At fringilla pellentesque tempus laoreet cursus"
            isChecked
          />
          <NotificationSetting
            title="New Published Articles"
            description="Lorem ipsum dolor sit amet consectetur. At fringilla pellentesque tempus laoreet cursus"
            isChecked
          />
          <NotificationSetting
            title="Daily Summary Emails"
            description="Lorem ipsum dolor sit amet consectetur. At fringilla pellentesque tempus laoreet cursus"
            isChecked={false}
          />
        </VStack>
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
      </VStack>
    </Box>
  );
};

export default NotificationSettings;
