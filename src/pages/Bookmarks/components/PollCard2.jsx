import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import poll from "../../../../assets/smallPoll.svg";
import avatar from "../../../../assets/avatar4.svg";
import verified from "../../../../assets/pinkVerified.svg";
import pin from "../../../../assets/pinned.svg";
import cardImage from "../../../../assets/pollcardimg.svg";
import comment from "../../../../assets/comment.svg";

import avatar1 from "/assets/avatar1.svg";
import avatar2 from "/assets/avatar2.svg";
import avatar3 from "/assets/avatar3.svg";
import avatar4 from "/assets/avatar4.svg";
import avatar5 from "/assets/avatar5.svg";
import avatar6 from "/assets/avatar6.svg";
import repost from "/assets/repost.svg";

import { CiFlag1, CiShare2, CiBookmark } from "react-icons/ci";
import Poll3 from "../../Profile/components/Poll3";

const PollCard2 = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      bg={"white"}
      rounded={"xl"}
      align={"start"}
      boxShadow={"md"}
      w={"full"}
      position={"relative"}
    >
      <Button
        position={"absolute"}
        right={-4}
        top={-4}
        bg={"black"}
        colorScheme="blackAlpha"
        variant={"solid"}
        rounded={"full"}
      >
        X
      </Button>
      <Flex p={6} py={10} align={"start"}>
        <Image src={poll} />
        <Box px={10} w={"full"}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={3} align={"start"} mb={2} mt={-4}>
              <Image src={avatar} w={"60px"} />
              <Box>
                <Flex gap={2}>
                  <Text fontSize={16}>Abram Marvyn</Text>
                  <Image src={verified} />
                </Flex>

                <Flex alignItems={"center"} gap={2}>
                  <Text fontSize={14} color={"gray.500"}>
                    01 hrs ago in{" "}
                  </Text>
                  <Text>AI </Text>
                </Flex>
              </Box>
            </Flex>
            <Box>
              <Image src={pin} w={"70px"}></Image>
              <Box
                fontWeight={"bold"}
                color={"gray.400"}
                ml={16}
                transform="rotate(90deg)"
                mt={3}
              >
                ...
              </Box>
            </Box>
          </Flex>
          <Flex gap={4}>
            <Image src={cardImage}></Image>
            <Stack>
              <Text fontWeight={"semibold"} fontSize={"18.14px"}>
                News: The Next Era of Air Mobility
              </Text>
              <Text fontSize={"13.6px"} color={"gray.400"} w={"600px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                facilis, soluta vitae porro, praesentium deserunt explicabo
                optio laborum?
              </Text>
            </Stack>
          </Flex>

          <Flex justify="flex-end" py={2}>
            <Button
              variant="solid"
              bgColor={"brand.100 "}
              _hover={{ bgColor: "red.500" }}
              color={"white"}
              size="lg"
              fontSize="md"
              fontWeight="semibold"
              rounded={"md"}
              onClick={onToggle}
            >
              {isOpen ? "Show Less" : "See Voting Result"}
            </Button>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Text py={4} fontWeight="semibold" fontSize="18.14px">
              How easy is it to embed a StrawPoll
            </Text>
            <Text fontSize="13px" color="gray.400">
              Make a choice:
            </Text>
            <Poll3 />
          </Collapse>
          <Flex
            mt={4}
            w="100%"
            h="100%"
            p={2}
            py={4}
            position="relative"
            bg="gray.100"
            rounded="lg"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex py={6} alignItems="center">
              {avatars.map((src, i) => (
                <Avatar
                  key={i}
                  position="absolute"
                  left={`${20 + 25 * i}px`}
                  size="md"
                  src={src}
                />
              ))}

              <Flex
                color={"#6B7280"}
                w={"full"}
                ml={52}
                gap={"300px"}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Flex gap={4}>
                  <Text>+170 Views</Text>
                  <HStack>
                    <Image src={comment} />
                    <Text>1200</Text>
                  </HStack>
                  <Text>142,300 Votes</Text>
                </Flex>

                <Flex gap={4}>
                  <HStack>
                    <Icon as={CiBookmark} />
                    <Text>32</Text>
                  </HStack>
                  <HStack>
                    <Icon as={CiShare2} />
                    <Text>12</Text>
                  </HStack>
                  <HStack>
                    <Image src={repost} />
                    <Text>Repost</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PollCard2;
