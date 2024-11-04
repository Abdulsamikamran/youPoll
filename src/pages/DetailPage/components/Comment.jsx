import {
  Box,
  Text,
  Avatar,
  HStack,
  VStack,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";

import { BiTimeFive } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { BsReplyAll } from "react-icons/bs";
import avatar from "/assets/avatar2.svg";

const Comment = ({ name, avatarSrc, timeAgo, text }) => (
  <HStack align="start" spacing={4}>
    <Avatar name={name} src={avatarSrc} size="sm" />
    <VStack align="start" spacing={2} width="full">
      <Text fontWeight="bold">{name}</Text>
      <Text color="gray.600">{text}</Text>
      <HStack spacing={4} pt={1}>
        <Button size="sm" variant="link">
          <Icon as={CiHeart} mr={1} />
          Like
        </Button>
        <Button size="sm" variant="link">
          <Icon as={BsReplyAll} mr={1} />
          Reply
        </Button>
        <HStack align="center" spacing={1}>
          <Icon as={BiTimeFive} color="gray.500" />
          <Text color="gray.500" fontSize="sm">
            {timeAgo}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  </HStack>
);

const CommentSection = () => {
  return (
    <VStack align="start" spacing={6} mx="auto" bg="white" p={5} width="full">
      <Text fontWeight="bold" fontSize="lg">
        Comments (140)
      </Text>
      <Divider />

      {/* Main Comments */}
      <Comment
        name="Adaline Riley"
        avatarSrc={avatar}
        timeAgo="35 mins ago"
        text="Quisque iaculis orci pulvinar lectus eleifend sollicitudin..."
      />

      {/* Replies */}
      <Box pl={10} width="full">
        <Comment
          name="Buster Jayden"
          avatarSrc={avatar}
          timeAgo="5 mins ago"
          text="Pellentesque quis ultricies mauris, in pretium odio..."
        />
        <Comment
          name="Louisa Triston"
          avatarSrc={avatar}
          timeAgo="5 mins ago"
          text="Pellentesque quis ultricies mauris, in pretium odio..."
        />
      </Box>

      <Comment
        name="Damon Tucker"
        avatarSrc={avatar}
        timeAgo="35 mins ago"
        text="Quisque iaculis orci pulvinar lectus eleifend sollicitudin..."
      />

      <Comment
        name="Charlene Cross"
        avatarSrc={avatar}
        timeAgo="35 mins ago"
        text="Quisque iaculis orci pulvinar lectus eleifend sollicitudin..."
      />

      {/* Replies */}
      <Box pl={10} width="full">
        <Comment
          name="Rafael Frank"
          avatarSrc={avatar}
          timeAgo="5 mins ago"
          text="Pellentesque quis ultricies mauris, in pretium odio..."
        />
      </Box>
    </VStack>
  );
};

export default CommentSection;
