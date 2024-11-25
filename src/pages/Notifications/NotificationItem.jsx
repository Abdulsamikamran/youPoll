import React from "react";
import {
  Flex,
  Avatar,
  Text,
  Icon,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";

import {
  FaTimes,
  FaThumbsUp,
  FaCommentDots,
  FaRegCommentDots,
} from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import time from "../../../assets/time.svg";
import avatar from "../../../assets/avatar5.svg";

const notifications = [
  {
    id: 1,
    name: "Oliver Carpenter",
    avatar: avatar,
    condition: "comment",
    action: "mentioned you in a comment",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    time: "05:40 AM January 15, 2023",
    icon: FaCommentDots,
  },
  {
    id: 2,
    name: "Samantha Hall",
    avatar: avatar,
    condition: "like",
    action: "liked your post",
    content: "Who all are launching their Products this week?",
    time: "9:30 AM January 7, 2023",
    icon: FaThumbsUp,
  },
  {
    id: 3,
    name: "Jorge Dean",
    avatar: avatar,
    condition: "like",
    action: "liked your post",
    content: "Do you think BARD will overtake ChatGPT?",
    time: "6:00 AM January 7, 2023",
    icon: FaThumbsUp,
  },
  {
    id: 4,
    name: "Kathleen Murray",
    avatar: avatar,
    condition: "comment",
    action: "posted a comment on",
    content: "What is your favorite AI project you found recently?",
    time: "15:40 AM January 6, 2023",
    icon: FaCommentDots,
  },
  {
    id: 5,
    name: "Timothy Spencer",
    avatar: avatar,
    condition: "comment",
    action: "posted a comment on",
    content: "What is your favorite AI project you found recently?",
    time: "05:40 AM January 6, 2023",
    icon: FaCommentDots,
  },
  {
    id: 6,
    name: "Stacey Long",
    avatar: avatar,
    condition: "like",
    action: "liked your post",
    content: "Do you think BARD will overtake ChatGPT?",
    time: "6:00 AM January 4, 2023",
    icon: FaThumbsUp,
  },
];

const NotificationItem = () => {
  return (
    <Box w={"full"} rounded={"lg"} bg={"white"}>
      {notifications.map((notification) => (
        <Flex
          key={notification.id}
          align={{ base: "start", md: "center" }}
          p={4}
          borderBottom="1px solid"
          borderColor="gray.200"
          justify={"space-between"}
          w={"full"}
        >
          <Avatar
            src={notification.avatar}
            name={notification.name}
            size="lg"
          />
          <Box ml={3} flex="1">
            <Text fontSize={{ base: "14px", md: "18px" }} fontWeight="bold">
              {notification.name}
            </Text>
            <Flex
              display={{ base: "none", md: "flex" }}
              align={"center"}
              gap={2}
            >
              {notification.condition === "comment" ? (
                <Icon color={"gray.500"} as={FaRegCommentDots} boxSize={5} />
              ) : (
                <Icon color={"gray.500"} as={AiOutlineLike} boxSize={5} />
              )}
              <Text
                as="span"
                fontSize={{ base: "12px", md: "17px" }}
                fontWeight="normal"
              >
                {notification.action}
              </Text>
              <Text
                fontSize={{ base: "12px", md: "17px" }}
                color={{ base: "black", md: "gray.500" }}
                fontWeight={{ base: "normal", md: "semibold" }}
              >
                "{notification.content}"
              </Text>
            </Flex>
            <Text
              display={{ base: "block", md: "none" }}
              as="span"
              fontSize={{ base: "12px", md: "17px" }}
              fontWeight="normal"
            >
              {notification.action} "{notification.content}"
            </Text>

            <Flex gap={2} align={"center"}>
              <Image src={time} />
              <Text fontSize="xs" color="gray.500">
                {notification.time}
              </Text>
            </Flex>
          </Box>
          <IconButton
            aria-label="Dismiss notification"
            icon={<FaTimes />}
            size="sm"
            _hover={{ bg: "red" }}
            variant="ghost"
            bg={"brand.100"}
            rounded={"full"}
            color="white"
          />
        </Flex>
      ))}
    </Box>
  );
};

export default NotificationItem;
