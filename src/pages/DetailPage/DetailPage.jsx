import React from "react";
import Layout from "../../layout";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import Poll2 from "./components/Poll2";
import CommentSection from "./components/Comment";
import avatar from "../../../assets/avatar2.svg";
import banner2 from "../../../assets/banner1.svg";
import mainBanner from "/assets/mainBanner2.svg";
import repost from "/assets/repost.svg";
import clock from "/assets/clock.svg";
import PostCard from "../../components/PostCard";

const DetailPage = () => {
  return (
    <Box w={"full"} h={"full"}>
      <Layout>
        <Box
          bg={"white"}
          // my={4}
          py={{ base: 4, md: 10 }}
          px={{ base: 2, md: 10 }}
          maxW={"1400px"}
          mx={"auto"}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Flex w={"full"} justifyContent={"center"}>
              <Image w={"full"} src={mainBanner} />
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"} py={8}>
              <Stack flex={0.6}>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ md: "16px", lg: "26px" }}
                >
                  News: The Next Era of Air Mobility
                </Text>
                <Text fontSize={{ md: "12px", lg: "20px" }} color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  facilis, soluta vitae porro, praesentium deserunt explicabo
                  optio laborum?
                </Text>
              </Stack>
              <Flex flex={0.4} direction={"column"} gap={2} align={"flex-end"}>
                <Flex
                  mb={3}
                  gap={1}
                  align={"center"}
                  rounded={"md"}
                  bg={"brand.100"}
                  color={"white"}
                  py={{ md: 3, lg: 4 }}
                  px={2}
                >
                  <Image w={5} src={clock} />
                  <Text>48:00:00</Text>
                </Flex>
                <Flex fontSize={{ md: 10, lg: "sm" }} flex={0.3} gap={3}>
                  <HStack spacing={1}>
                    <Image boxSize={{ md: 2, lg: 4 }} src={repost} />
                    <Text color="gray.500">Repost</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Icon as={CiHeart} color="gray.500" />
                    <Text color="gray.500">470</Text>
                    <Text color="gray.500">Likes</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Icon as={FaRegCommentDots} color="gray.500" />
                    <Text color="gray.500">76</Text>
                    <Text color="gray.500">Comments</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Icon as={CiShare2} color="gray.500" />
                    <Text color="gray.500">18</Text>
                    <Text color="gray.500">Shares</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Flex>
            <Box bg={"white"} p={6} border={"2px solid orange"}>
              <Heading size={"md"} fontSize={"24px"} fontWeight={"semibold"}>
                How easy is it to embed a StrawPoll?
              </Heading>
              <Poll2 />
            </Box>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <PostCard
              username="Abram Maryan"
              avatarSrc={avatar}
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc={banner2}
            />
          </Box>
          <CommentSection />
        </Box>
      </Layout>
    </Box>
  );
};

export default DetailPage;
