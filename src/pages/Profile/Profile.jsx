import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
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
import React from "react";
import Layout from "../../layout";
import hero from "../../../assets/hero1.svg";
import avatar from "../../../assets/avatarProfile.svg";
import avatar1 from "/assets/avatar1.svg";
import avatar2 from "/assets/avatar2.svg";
import avatar3 from "/assets/avatar3.svg";
import avatar4 from "/assets/avatar4.svg";
import avatar5 from "/assets/avatar5.svg";
import avatar6 from "/assets/avatar6.svg";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import History from "./components/History";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Requested from "./components/Requested";
import Requests from "./components/Requests";
import ProfileMobile from "./ProfileMobile";
import Comment from "../Comments/Comment";

const tabItems = [
  {
    label: "Poll History",
    icon: <LiaChartBarSolid size={20} />,
    component: <History />,
  },
  {
    label: "Comments",
    icon: <FaRegCommentDots size={20} />,
    component: <Comment />,
  },
  {
    label: "Followers",
    icon: <PiUsersLight size={20} />,
    component: <Followers />,
  },
  {
    label: "Following",
    icon: <PiUsersLight size={20} />,
    component: <Following />,
  },
  {
    label: "Requested",
    icon: <PiUsersLight size={20} />,
    component: <Requested />,
  },
  {
    label: "Requests",
    icon: <PiUsersLight size={20} />,
    component: <Requests />,
  },
];

const Profile = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const navigate = useNavigate();
  return (
    <Box overflow={"hidden"} w={"full"} h={"full"}>
      <Box display={{ base: "none", md: "block" }}>
        <Layout>
          <Image position={"relative"} h={"auto"} src={hero} w={"full"} />
          <Flex
            display={{ base: "flex", md: "none" }}
            overflow={"hidden"}
            color={"white"}
            align={"end"}
            position={"absolute"}
            top={{ base: "100px", sm: "120px" }}
            px={{ base: 8, sm: 16 }}
            gap={2}
            w={"full"}
            justify={"space-between"}
          >
            <Stack spacing={0} justify={"center"} align={"center"}>
              <Text fontSize={{ base: "16px" }} fontWeight={"bold"}>
                2.1k
              </Text>
              <Text fontSize={{ base: "12px" }}>Followers</Text>
            </Stack>
            <Stack spacing={0} justify={"center"} align={"center"}>
              <Image src={avatar} w={{ base: 20 }} />
              <Text fontWeight={"bold"} fontSize={{ base: 14 }}>
                Abram Marvyn
              </Text>
              <Text fontSize={{ base: 10 }}>@abram_marvyn</Text>
              <Text fontSize={{ base: 8 }} color={"gray.300"}>
                Joined January 2023
              </Text>
            </Stack>
            <Stack spacing={0} justify={"center"} align={"center"}>
              <Text fontSize={{ base: "16px" }} fontWeight={"bold"}>
                400
              </Text>
              <Text fontSize={{ base: "12px" }}>Following</Text>
            </Stack>
          </Flex>
          <Container maxW={"1600px"} mx={"auto"}>
            <Flex gap={4}>
              <Flex
                flex={0.2}
                w={{ md: "200px", lg: "300px", xl: "400px" }}
                gap={6}
                mt={{ md: -10, xl: -20 }}
                direction={"column"}
              >
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
                    <Image
                      w={{ md: "120px", xl: "full" }}
                      zIndex={5}
                      src={avatar}
                    />
                    <Text
                      color={"gray.600"}
                      fontWeight={"bold"}
                      fontSize={{ md: "20px", xl: "24px" }}
                    >
                      Abram Marvyn
                    </Text>
                    <Text
                      color={"gray.400"}
                      fontSize={{ md: "14px", xl: "17px" }}
                    >
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
                  <Text
                    fontSize={{ md: "14px", xl: "17px" }}
                    color={"gray.400"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit assumenda, tempora voluptate
                  </Text>
                  <Text
                    fontSize={{ md: "14px", xl: "17px" }}
                    color={"gray.300"}
                  >
                    Joined January 2023
                  </Text>
                </VStack>
                <Flex
                  pb={6}
                  gap={4}
                  borderBottom={"2px dashed "}
                  borderColor={"gray.300"}
                  justifyContent={"space-between"}
                >
                  <Stack justifyContent={"center"} alignItems={"center"}>
                    <Text
                      // fontSize={"23px"}
                      fontSize={{ md: "18px", xl: "23px" }}
                      fontWeight={"bold"}
                      color={"gray.500"}
                    >
                      2.1k
                    </Text>
                    <Text
                      fontSize={{ md: "12px", xl: "17px" }}
                      color={"gray.400"}
                    >
                      Followers
                    </Text>
                  </Stack>
                  <Stack justifyContent={"center"} alignItems={"center"}>
                    <Text
                      fontSize={{ md: "18px", xl: "23px" }}
                      fontWeight={"bold"}
                      color={"gray.500"}
                    >
                      400
                    </Text>
                    <Text
                      fontSize={{ md: "12px", xl: "17px" }}
                      color={"gray.400"}
                    >
                      Following
                    </Text>
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
                      left={{ md: `${0 + 28 * i}px`, xl: `${0 + 39 * i}px` }}
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
              <Box pr={3} w={{ md: "530px", lg: "750px", xl: "full" }}>
                <Tabs>
                  <TabList
                    ml={5}
                    py={8}
                    w="full"
                    border="none"
                    css={{
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                      scrollbarWidth: "none",
                    }}
                    overflowX="scroll"
                  >
                    {tabItems.map((item, index) => (
                      <Tab
                        key={index}
                        whiteSpace={"nowrap"}
                        py={{ base: 3, xl: 4 }}
                        w="full"
                        _selected={{
                          borderBottom: "3px solid",
                          borderColor: "brand.100",
                          color: "brand.100",
                        }}
                        color="gray.400"
                        fontSize={{ base: 10, md: "sm", xl: "md" }}
                      >
                        <Flex align="center" gap={4}>
                          {item.icon}
                          <Text>{item.label}</Text>
                        </Flex>
                      </Tab>
                    ))}
                  </TabList>

                  <TabPanels>
                    {tabItems.map((item, index) => (
                      <TabPanel key={index} p={0} w="full">
                        {item.component}
                      </TabPanel>
                    ))}
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
