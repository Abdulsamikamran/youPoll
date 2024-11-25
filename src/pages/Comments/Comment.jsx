import React from "react";
import avatar from "../../../assets/avatar4.svg";
import pen from "../../../assets/pen.svg";
import Delete from "../../../assets/Delete.svg";
import { Text, Avatar, Button, useColorModeValue } from "@chakra-ui/react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
const Comment = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.500", "gray.200");
  return (
    <Box
      w={"full"}
      bg={bgColor}
      borderRadius="lg"
      p={{ base: 5, md: 10 }}
      boxShadow="md"
      mt={4}
      border={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex gap={3} alignItems="center">
        <Avatar size="md" src={avatar} alt="Profile Picture" />
        <Box fontSize={16} mb={4}>
          <Text mt={4} color={textColor}>
            What is your favorite AI project you found recently?
          </Text>
          <Flex align={"center"} gap={3}>
            <Text size="sm">Adaline Riley</Text>
            <Text fontSize="sm" color="gray.400">
              03 hrs ago in AI
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box w={"full"} rounded={"lg"} bg={"gray.100"} p={8}>
        <Text color={textColor} fontSize="15px" fontWeight={"bold"}>
          Your Comment
        </Text>
        <Text my={7} color={textColor} fontSize="17px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facilis,
          soluta vitae porro, praesentium deserunt explicabo optio laborum.
          Quidem consequuntur modi atque, placeat repellat, perferendis aperiam,
          fugiat harum ullam aspernatur dicta doloribus qui quo corrupti natus
          reprehenderit...
        </Text>
        <Flex gap={5} mt={4}>
          <Button
            variant={"outline"}
            leftIcon={<Image src={pen} />}
            colorScheme="gray"
            py={6}
            px={8}
            size="sm"
            color={"gray.500"}
            borderColor={"gray.500"}
            mb={2}
          >
            Edit
          </Button>
          <Button
            variant={"outline"}
            leftIcon={<Image src={Delete} />}
            colorScheme="red"
            color={"brand.100"}
            borderColor={"brand.100"}
            py={6}
            px={8}
            size="sm"
            mb={2}
          >
            Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Comment;
