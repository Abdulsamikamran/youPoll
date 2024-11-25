import React from "react";
import { Box, Flex, Avatar, Text, Button, Stack } from "@chakra-ui/react";
import avatar from "../../../../assets/avatar5.svg";

const Card = ({ buttonText, variant }) => {
  return (
    <Box
      bg="white"
      p={{ base: 3, md: 7 }}
      borderRadius="lg"
      boxShadow="md"
      display="flex"
      alignItems="center"
      maxW="full"
      py={{ base: 8, md: 0 }}
    >
      <Avatar
        size={{ base: "lg", md: "xl" }}
        name="Sam Willson"
        src={avatar}
        mr={{ base: 1, md: 4 }}
      />
      <Flex flex="1" direction="column">
        <Text fontWeight="bold" fontSize="lg">
          Sam Willson
        </Text>
        <Text fontSize="sm" color="gray.500">
          @SamWill
        </Text>
      </Flex>
      <Stack align={"center"}>
        <Button
          variant="outline"
          colorScheme="red"
          borderRadius="full"
          fontWeight="semibold"
          size={{ base: "md", md: "lg" }}
        >
          {buttonText}
        </Button>
        {variant === "2" && (
          <Text color={"brand.100"} fontWeight={"semibold"}>
            Reject
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default Card;
