import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const TrendItem = ({ title, category, posts }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column">
        <Text color="gray.500" fontSize="sm">
          {category}
        </Text>
        <Text fontWeight="semibold" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="sm">{posts}</Text>
      </Flex>
      <Text fontWeight={"semibold"} fontSize={"20px"}>
        ...
      </Text>
    </Flex>
  );
};

export default TrendItem;
