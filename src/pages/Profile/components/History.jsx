import React from "react";
import PollCard from "./PollCard";
import { Flex } from "@chakra-ui/react";

const History = () => {
  return (
    <Flex direction={"column"} gap={10}>
      <PollCard />
      <PollCard />
    </Flex>
  );
};

export default History;
