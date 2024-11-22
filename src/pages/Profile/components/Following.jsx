import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";
import { SearchIcon } from "@chakra-ui/icons";

const userData = [
  {
    id: 1,
    name: "Sam Willson",
    username: "@SamWill",
    avatar: "https://bit.ly/dan-abramov", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jessica Parker",
    username: "@JessParker",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    id: 3,
    name: "Michael Smith",
    username: "@MikeSmith",
    avatar: "https://bit.ly/prosper-baba",
  },
  {
    id: 4,
    name: "Anna Taylor",
    username: "@AnnaTaylor",
    avatar: "https://bit.ly/code-beast",
  },
  {
    id: 5,
    name: "David Lee",
    username: "@DavidLee",
    avatar: "https://bit.ly/kent-c-dodds",
  },
  {
    id: 6,
    name: "Emily Clark",
    username: "@EmilyClark",
    avatar: "https://bit.ly/sage-adebayo",
  },
];

const Following = () => {
  return (
    <Box minH="100vh " w={"full"}>
      <Flex w={"full"} justifyContent={"flex-end"}>
        <InputGroup maxW="400px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon mt={2} color="gray.300" />}
          />
          <Input
            py={6}
            id="search"
            type="text"
            placeholder="Search"
            variant="outline"
            rounded={"200px"}
            _focus={{ borderColor: "brand.100", boxShadow: "none" }}
            bgColor={useColorModeValue("gray.50", "gray.600")}
          />
        </InputGroup>
      </Flex>
      <SimpleGrid w={"full"} columns={2} spacing={8} mt={2}>
        {userData.map(() => (
          <Card buttonText={"Following"} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Following;