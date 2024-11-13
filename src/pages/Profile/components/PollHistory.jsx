import React from "react";
import PollCard from "./PollCard";
import { Flex } from "@chakra-ui/react";

const PollHistory = () => {
  return (
    <Flex direction={"column"} gap={10}>
      <PollCard />
      <PollCard />
    </Flex>
  );
};

export default PollHistory;
