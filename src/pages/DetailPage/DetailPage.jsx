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
import { CiFlag1, CiHeart, CiShare2 } from "react-icons/ci";
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
    <Box w={"full"} h={"full"} bg={"white"}>
      <Layout>
        <Box py={{ base: 4, md: 10 }} maxW={"1600px"} mx={"auto"}>
          <Box display={{ base: "none", md: "block" }}>
            <Flex w={"full"} justifyContent={"center"}>
              <Image w={"full"} src={mainBanner} />
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"} py={8}>
              <Stack flex={0.6}>
                <Text fontWeight={"semibold"} fontSize={"26px"}>
                  News: The Next Era of Air Mobility
                </Text>
                <Text fontSize={"20px"} color={"gray.500"}>
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
                  py={4}
                  px={2}
                >
                  <Image w={5} src={clock} />
                  <Text fontWeight={"semibold"}>Ending Soon: </Text>
                  <Text>48:00:00</Text>
                </Flex>
                <Flex flex={0.3} gap={4}>
                  <HStack>
                    <Image src={repost} />
                    <Text fontSize="sm" color="gray.500">
                      Repost
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={CiHeart} color="gray.500" />
                    <Text fontSize="sm" color="gray.500">
                      470
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Likes
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaRegCommentDots} color="gray.500" />
                    <Text fontSize="sm" color="gray.500">
                      76
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Comments
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={CiShare2} color="gray.500" />
                    <Text fontSize="sm" color="gray.500">
                      18
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Shares
                    </Text>
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
