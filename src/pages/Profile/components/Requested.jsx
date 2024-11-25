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

const Requested = () => {
  return (
    <Box minH="100vh " w={"full"}>
      <Flex
        w={"full"}
        py={{ base: 4, md: 0 }}
        px={3}
        justifyContent={"flex-end"}
      >
        <InputGroup maxW={{ base: "full", md: "400px" }}>
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
      <SimpleGrid
        px={2}
        w={"full"}
        columns={{ base: 1, md: 2 }}
        spacing={8}
        mt={2}
      >
        {userData.map(() => (
          <Card buttonText={"Requested"} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Requested;
