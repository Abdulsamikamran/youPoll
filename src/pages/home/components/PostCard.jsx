import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
  Image,
  Button,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidComment } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { CiFlag1, CiHeart, CiShare2 } from "react-icons/ci";
import Poll from "./Poll"; // Import Poll component if it's custom
import { useNavigate } from "react-router-dom";

const PostCard = ({
  username,
  avatarSrc,
  daysAgo,
  question,
  category,
  description,
  imageSrc,
}) => {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked((liked) => !liked);
  };
  const navigate = useNavigate();
  return (
    <Box
      mb={8}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="md"
      shadow="md"
    >
      <Flex align="center" mb={4}>
        <Avatar src={avatarSrc} name={username} size="sm" mr={3} />
        <Box>
          <Text fontWeight="normal" fontSize="15px">
            {username}
          </Text>
          <Text fontSize="10px" color="gray.500">
            {daysAgo}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" w="full" mb={4}>
        <Heading size="md">{question}</Heading>
        <Box
          px={2}
          py={1}
          rounded="full"
          bgColor="#0088FF"
          color="white"
          fontSize="13.41px"
        >
          {category}
        </Box>
      </Flex>
      <Text color="#5D5D66" fontSize="18px" mb={4}>
        {description}
      </Text>
      <Image
        borderRadius="md"
        mb={4}
        w="full"
        src={imageSrc}
        alt="Air Mobility"
      />
      <Flex w="full" alignItems="center" mb={4} justifyContent="space-between">
        <Heading size="md">{question}</Heading>
        <Button
          bgColor="brand.100"
          color="white"
          fontSize="sm"
          px={2}
          py={2}
          fontWeight="normal"
          rounded="200px"
        >
          Show Less
        </Button>
      </Flex>
      <Text color="gray.400" fontSize="14px">
        Make a choice:
      </Text>
      <Poll /> {/* Assuming Poll is a custom component */}
      <Flex
        w="full"
        py={6}
        my={4}
        px={4}
        justifyContent="space-between"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.100"
      >
        <Flex
          onClick={handleLikeClick}
          cursor={"pointer"}
          alignItems="center"
          gap={2}
        >
          <BiSolidLike color={liked ? "red" : "gray"} />
          <Text>Like</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <BiSolidComment color="gray" />
          <Text>Comment</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <PiShareFatFill color="gray" />
          <Text>Share</Text>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        p={2}
        py={4}
        position="relative"
        px={4}
        bg="gray.100"
        rounded="lg"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          bgColor="brand.100"
          _hover={{ bgColor: "red.500" }}
          color="white"
          size="lg"
          px={14}
          py={7}
          fontSize="md"
          fontWeight="semibold"
          onClick={() => navigate("detail-page")}
        >
          Vote
        </Button>
        <Flex alignItems="center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Avatar
              key={i}
              position="absolute"
              left={`${170 + 25 * i}px`}
              size="md"
              src={`/assets/avatar${i}.svg`}
            />
          ))}
          <Flex gap={8} alignItems="center">
            <Text>+170 Votes</Text>
            <HStack>
              <Icon as={CiFlag1} color="gray.500" />
              <Text fontSize="sm" color="gray.500">
                Report
              </Text>
            </HStack>
            <HStack>
              <Icon as={CiHeart} color="gray.500" />
              <Text fontSize="sm" color="gray.500">
                32
              </Text>
            </HStack>
            <HStack>
              <Icon as={CiShare2} color="gray.500" />
              <Text fontSize="sm" color="gray.500">
                12
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostCard;
