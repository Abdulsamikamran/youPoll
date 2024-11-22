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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidComment } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { CiFlag1, CiHeart, CiShare2 } from "react-icons/ci";
import Poll from "./Poll";
import avatar1 from "/assets/avatar1.svg";
import avatar2 from "/assets/avatar2.svg";
import avatar3 from "/assets/avatar3.svg";
import avatar4 from "/assets/avatar4.svg";
import avatar5 from "/assets/avatar5.svg";
import clock from "/assets/clock.svg";
import { BsThreeDotsVertical } from "react-icons/bs";

import avatar6 from "/assets/avatar6.svg";
import Delete from "/assets/Delete.svg";
import repost from "/assets/repost.svg";
import flag from "/assets/flag.svg";
import modal from "/assets/modal.svg";
import modal2 from "/assets/modal2.svg";

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
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const {
    isOpen: isVoteOpen,
    onOpen: onVoteOpen,
    onClose: onVoteClose,
  } = useDisclosure();

  return (
    <Box
      mb={8}
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="md"
      shadow="md"
    >
      <Flex justify={"space-between"}>
        <Flex align="center" mb={4}>
          <Avatar src={avatarSrc} name={username} size="md" mr={3} />
          <Box>
            <Text fontWeight="normal" fontSize="15px">
              {username}
            </Text>
            <Text fontSize="10px" color="gray.500">
              {daysAgo}
            </Text>
          </Box>
        </Flex>
        <Flex direction={"column"} align={"end"} gap={3}>
          <Menu>
            <MenuButton as={Button}>
              <BsThreeDotsVertical />
            </MenuButton>
            <MenuList minW={"150px"} placement="top-start">
              <MenuItem>
                <Flex align={"center"} gap={2}>
                  <Image src={flag} />
                  <Text color={"gray.500"}>Report</Text>
                </Flex>
              </MenuItem>
              <MenuItem onClick={onDeleteOpen}>
                <Flex align={"center"} gap={2}>
                  <Image src={Delete} />
                  <Text color={"red"}>Delete</Text>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>

          <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} isCentered>
            <ModalOverlay />
            <ModalContent px={10} py={5} rounded={"28px"}>
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <ModalHeader>
                  <Image src={modal} w={40} />
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    textAlign={"center"}
                    fontSize={"25px"}
                    fontWeight={"semibold"}
                  >
                    Are you sure you want to delete this poll?
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="outline"
                    colorScheme="white"
                    borderColor={"gray.300"}
                    mr={7}
                    onClick={onDeleteClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme="red"
                    bgColor={"brand.100"}
                    onClick={onDeleteClose}
                  >
                    Delete
                  </Button>
                </ModalFooter>
              </Flex>
            </ModalContent>
          </Modal>
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
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" w="full" mb={4}>
        <Heading
          onClick={() => navigate("detail-page")}
          size="md"
          fontWeight={"semibold"}
          cursor={"pointer"}
        >
          {question}
        </Heading>
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
      <Poll />
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
          onClick={onVoteOpen}
          bgColor="brand.100"
          _hover={{ bgColor: "red.500" }}
          color="white"
          size="lg"
          px={14}
          py={7}
          fontSize="md"
          fontWeight="semibold"
        >
          Vote
        </Button>
        <Modal isOpen={isVoteOpen} onClose={onVoteClose} isCentered>
          <ModalOverlay />
          <ModalContent px={10} py={5} rounded={"28px"}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <ModalHeader>
                <Image src={modal2} w={"150px"} />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  textAlign={"center"}
                  fontSize={"25px"}
                  fontWeight={"semibold"}
                >
                  You have Voted!
                </Text>
              </ModalBody>
              <ModalFooter>
                <Text
                  fontWeight={"semibold"}
                  onClick={onVoteClose}
                  cursor={"pointer"}
                  mt={"-20px"}
                  color={"brand.100"}
                  borderBottom={"2px solid"}
                  borderColor={"brand.100"}
                >
                  Change Vote
                </Text>
              </ModalFooter>
            </Flex>
          </ModalContent>
        </Modal>
        <Flex alignItems="center">
          {avatars.map((src, i) => (
            <Avatar
              key={i}
              position="absolute"
              left={`${170 + 25 * i}px`} // Adjusted for the correct left position
              size="md"
              src={src}
            />
          ))}

          <Flex gap={8} alignItems="center">
            <Text>+170 Votes</Text>
            <HStack>
              <Image src={repost} />
              <Text fontSize="sm" color="gray.500">
                Repost
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
