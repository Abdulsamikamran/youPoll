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
import mainBanner from "/assets/mainbanner2.svg";

const DetailPage = () => {
  return (
    <Box w={"full"} h={"full"} bg={"white"}>
      <Layout>
        <Image src={mainBanner} />
        <Flex justifyContent={"space-between"} alignItems={"center"} py={8}>
          <Stack flex={0.6}>
            <Text fontWeight={"semibold"} fontSize={"26px"}>
              News: The Next Era of Air Mobility
            </Text>
            <Text fontSize={"20px"} color={"gray.500"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              facilis, soluta vitae porro, praesentium deserunt explicabo optio
              laborum?
            </Text>
          </Stack>
          <Flex flex={0.3} gap={4}>
            <HStack spacing={2}>
              <Icon as={CiHeart} color="gray.500" />
              <Text fontSize="sm" color="gray.500">
                470
              </Text>
              <Text fontSize="sm" color="gray.500">
                Likea
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaRegCommentDots} color="gray.500" />
              <Text fontSize="sm" color="gray.500">
                76
              </Text>
              <Text fontSize="sm" color="gray.500">
                Comments
              </Text>
            </HStack>
            <HStack spacing={2}>
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
        <Box bg={"white"} p={6} border={"2px solid orange"}>
          <Heading size={"md"} fontSize={"24px"} fontWeight={"semibold"}>
            How easy is it to embed a StrawPoll?
          </Heading>
          <Poll2 />
        </Box>
        <CommentSection />
      </Layout>
    </Box>
  );
};

export default DetailPage;
