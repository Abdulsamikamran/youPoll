import React from "react";
import { Box, Flex, Avatar, Text, Button, Stack } from "@chakra-ui/react";
import avatar from "../../../../assets/avatar5.svg";

const Card = ({ buttonText, variant }) => {
  return (
    <Box
      bg="white"
      p={7}
      borderRadius="lg"
      boxShadow="md"
      display="flex"
      alignItems="center"
      maxW="full"
    >
      <Avatar size="xl" name="Sam Willson" src={avatar} mr={4} />
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
          size="lg"
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
