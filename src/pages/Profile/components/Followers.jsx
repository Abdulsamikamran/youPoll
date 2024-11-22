import React from "react";
import {
  Box,
  Flex,
  FormControl,
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
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

const Followers = () => {
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
        {userData.map((user) => (
          <Card buttonText={"Following"} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Followers;
