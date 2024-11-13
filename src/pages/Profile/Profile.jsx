import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../layout";
import hero from "../../../assets/hero1.svg";
import avatar from "../../../assets/avatarProfile.svg";
import avatar1 from "/assets/avatar1.svg";
import avatar2 from "/assets/avatar2.svg";
import avatar3 from "/assets/avatar3.svg";
import avatar4 from "/assets/avatar4.svg";
import avatar5 from "/assets/avatar5.svg";
import avatar6 from "/assets/avatar6.svg";
import prev from "/assets/prev.svg";
import next from "/assets/next.svg";
import PollHistory from "./components/pollHistory";
import comment from "../../../assets/comment.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

// Pagination component moved to the top level
const Pagination = ({
  totalPages = 70,
  siblingCount = 2,
  currentPage = 1,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    onPageChange && onPageChange(newPage);
  };

  const generatePages = () => {
    const pages = [];
    const start = Math.max(1, page - siblingCount);
    const end = Math.min(totalPages, page + siblingCount);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <HStack
      w={"full"}
      color={"gray.300"}
      justify={"center"}
      py={8}
      spacing={5}
      align="center"
    >
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<Image src={prev} />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 3)}
        aria-label="Previous"
      />
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<ChevronLeftIcon />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 1)}
        aria-label="Previous"
      />
      <Button w={"60px"} h={"60px"} bg={"gray.100"}>
        ...
      </Button>
      {generatePages().map((pageNumber) => (
        <Button
          w={"60px"}
          h={"60px"}
          key={pageNumber}
          onClick={() => handleChangePage(pageNumber)}
          bg={page === pageNumber ? "red.400" : "gray.100"}
          color={page === pageNumber ? "white" : "black"}
        >
          {pageNumber}
        </Button>
      ))}
      <Button w={"60px"} h={"60px"} bg={"gray.100"}>
        ...
      </Button>
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<ChevronRightIcon />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 1)}
        aria-label="Next"
      />
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<Image src={next} />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 3)}
        aria-label="Next"
      />
      <Text>{totalPages} Pages</Text>
    </HStack>
  );
};

// Profile component
const Profile = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const navigate = useNavigate();
  return (
    <Box bg={"white"} w={"full"} h={"full"}>
      <Layout>
        <Image w={"full"} src={hero} />
        <Container maxW={"1600px"} mx={"auto"}>
          <Flex gap={4}>
            <Flex w={"390px"} gap={6} mt={-20} direction={"column"}>
              <VStack
                gap={6}
                justifyContent={"start"}
                pb={6}
                borderBottom={"2px dashed "}
                borderColor={"gray.300"}
                alignItems={"start"}
              >
                <VStack
                  w={"full"}
                  cursor={"pointer"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => navigate("/settings")}
                >
                  <Image src={avatar} />
                  <Text
                    color={"gray.600"}
                    fontWeight={"bold"}
                    fontSize={"24px"}
                  >
                    Abram Marvyn
                  </Text>
                  <Text color={"gray.400"} fontSize={"17px"}>
                    @abram_marvyn
                  </Text>
                </VStack>
                <Text fontSize={"15px"} color={"gray.500"} fontWeight={"bold"}>
                  About
                </Text>
                <Text fontSize={"17px"} color={"gray.400"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  assumenda, tempora voluptate
                </Text>
                <Text color={"gray.300"}>Joined January 2023</Text>
              </VStack>
              <Flex
                pb={6}
                borderBottom={"2px dashed "}
                borderColor={"gray.300"}
                justifyContent={"space-between"}
              >
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontSize={"23px"}
                    fontWeight={"bold"}
                    color={"gray.500"}
                  >
                    2.1k
                  </Text>
                  <Text color={"gray.400"}>Followers</Text>
                </Stack>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontSize={"23px"}
                    fontWeight={"bold"}
                    color={"gray.500"}
                  >
                    400
                  </Text>
                  <Text color={"gray.400"}>Following</Text>
                </Stack>
                <Button
                  fontWeight={"normal"}
                  colorScheme="gray"
                  bgColor={"#08BEAB"}
                  color={"white"}
                  rounded={"full"}
                >
                  Follow
                </Button>
              </Flex>
              <Box
                pb={6}
                borderBottom={"2px dashed "}
                borderColor={"gray.300"}
                position={"relative"}
              >
                <Text color={"gray.500"} pb={16}>
                  Followers
                </Text>
                {avatars.map((src, i) => (
                  <Avatar
                    key={i}
                    position="absolute"
                    left={`${0 + 39 * i}px`}
                    size="md"
                    src={src}
                    bottom={14}
                  />
                ))}
                <Text color={"#08BEAB"} fontWeight={"semibold"}>
                  View All
                </Text>
              </Box>
            </Flex>
            <Box w={"full"}>
              <Tabs>
                <TabList ml={5} py={8} w={"600px"} border={"none"}>
                  <Tab
                    py={{ base: 3, lg: 4 }}
                    w={"full"}
                    _selected={{
                      borderBottom: "3px solid",
                      borderColor: "brand.100",
                    }}
                    color="gray.400"
                    fontSize={{ base: 10, md: "sm", lg: "md" }}
                  >
                    <Flex gap={4}>
                      <Image src={comment}></Image>
                      <Text>Poll History</Text>
                    </Flex>
                  </Tab>
                  <Tab
                    py={{ base: 3, lg: 4 }}
                    w={"full"}
                    _selected={{
                      borderBottom: "3px solid",
                      borderColor: "brand.100",
                    }}
                    color="gray.400"
                    fontSize={{ base: 10, md: "sm", lg: "md" }}
                  >
                    <Flex gap={4}>
                      <Image src={comment}></Image>
                      <Text> Comments</Text>
                    </Flex>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel w={"full"}>
                    <PollHistory />
                  </TabPanel>
                  <TabPanel w={"full"}>helo22o</TabPanel>
                </TabPanels>
              </Tabs>
              <Pagination />
            </Box>
          </Flex>
        </Container>
      </Layout>
    </Box>
  );
};

export default Profile;
