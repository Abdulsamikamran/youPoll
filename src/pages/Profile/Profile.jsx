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
import { LiaChartBarSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import History from "./components/History";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Requested from "./components/Requested";
import Requests from "./components/Requests";
import ProfileMobile from "./ProfileMobile";

const Profile = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const navigate = useNavigate();
  return (
    <Box bg={"white"} w={"full"} h={"full"}>
      <Box display={{ base: "none", md: "block" }}>
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
                  <Text
                    fontSize={"15px"}
                    color={"gray.500"}
                    fontWeight={"bold"}
                  >
                    About
                  </Text>
                  <Text fontSize={"17px"} color={"gray.400"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit assumenda, tempora voluptate
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
                    bgColor={"brand.100"}
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
                      mb={1}
                      key={i}
                      position="absolute"
                      left={`${0 + 39 * i}px`}
                      size="md"
                      src={src}
                      bottom={14}
                    />
                  ))}
                  <Text color={"brand.100"} fontWeight={"semibold"}>
                    View All
                  </Text>
                </Box>
              </Flex>
              <Box w={"full"}>
                <Tabs>
                  <TabList ml={5} py={8} w={"full"} border={"none"}>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <LiaChartBarSolid size={20} />
                        <Text>Poll History</Text>
                      </Flex>
                    </Tab>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <FaRegCommentDots size={20} />
                        <Text> Comments</Text>
                      </Flex>
                    </Tab>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <PiUsersLight size={20} />
                        <Text> Followers</Text>
                      </Flex>
                    </Tab>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <PiUsersLight size={20} />

                        <Text> Following</Text>
                      </Flex>
                    </Tab>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <PiUsersLight size={20} />

                        <Text> Requested</Text>
                      </Flex>
                    </Tab>
                    <Tab
                      py={{ base: 3, lg: 4 }}
                      w={"full"}
                      _selected={{
                        borderBottom: "3px solid",
                        borderColor: "brand.100",
                        color: "brand.100",
                      }}
                      color="gray.400"
                      fontSize={{ base: 10, md: "sm", lg: "md" }}
                    >
                      <Flex align={"center"} gap={4}>
                        <PiUsersLight size={20} />

                        <Text> Requests</Text>
                      </Flex>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel p={0} w={"full"}>
                      <History />
                    </TabPanel>
                    <TabPanel w={"full"}>hello</TabPanel>
                    <TabPanel w={"full"}>
                      <Followers />
                    </TabPanel>
                    <TabPanel w={"full"}>
                      <Following />
                    </TabPanel>
                    <TabPanel w={"full"}>
                      <Requested />
                    </TabPanel>
                    <TabPanel w={"full"}>
                      <Requests />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Flex>
          </Container>
        </Layout>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <ProfileMobile />
      </Box>
    </Box>
  );
};

export default Profile;
