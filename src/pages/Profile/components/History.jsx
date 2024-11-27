import React from "react";
import PollCard from "./PollCard";
import { Flex } from "@chakra-ui/react";
import Pagination from "../../../components/Pagination";
import PostCard from "../../../components/PostCard";
import avatar from "../../../../assets/avatar2.svg";
import banner2 from "../../../../assets/banner1.svg";

const History = () => {
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        direction={"column"}
        gap={10}
      >
        <PollCard />
        <PollCard />
        <Pagination />
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        direction={"column"}
        p={0}
        gap={4}
      >
        <PostCard
          username="Abram Maryan"
          avatarSrc={avatar}
          daysAgo="5 days ago"
          question="Question: The Next Era of Air Mobility?"
          category="Business"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          imageSrc={banner2}
        />
        <PostCard
          username="Abram Maryan"
          avatarSrc={avatar}
          daysAgo="5 days ago"
          question="Question: The Next Era of Air Mobility?"
          category="Business"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          imageSrc={banner2}
        />
        <Pagination />
      </Flex>
    </>
  );
};

export default History;
