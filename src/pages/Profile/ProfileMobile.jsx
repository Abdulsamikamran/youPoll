import React from "react";
import banner from "../../../assets/mobilebanner1.svg";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Layout from "../../layout";
import avatar from "../../../assets/avatarProfile.svg";
import History from "./components/History";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Requested from "./components/Requested";
import Requests from "./components/Requests";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import Comment from "../Comments/Comment";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import NotificationItem from "../Notifications/NotificationItem";
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
  {
    label: "I Like",
    icon: <IoBookmarksOutline size={20} />,
    component: <History />,
  },
  {
    label: "Notification",
    icon: <IoMdNotificationsOutline size={20} />,
    component: <NotificationItem />,
  },
];

const ProfileMobile = () => {
  return (
    <Box w={"full"} h={"full"}>
      <Layout>
        {/* <Image position={"relative"} h={"auto"} src={banner} w={"full"} /> */}
        <Box position={"relative"} bg={"white"} h={"180px"} w={"full"}>
          <Flex
            overflow={"hidden"}
            color={"black"}
            align={"end"}
            position={"absolute"}
            top={{ base: "20px", sm: "20px" }}
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
              <Text fontSize={{ base: 8 }} color={"gray.900"}>
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
        </Box>
        <Flex gap={10} p={5}>
          <Box>
            <Text fontSize={"15px"} color={"gray.500"} fontWeight={"bold"}>
              About
            </Text>
            <Text fontSize={"12px"} color={"gray.400"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              assumenda, tempora voluptate
            </Text>
          </Box>
          <Button
            fontWeight={"normal"}
            colorScheme="gray"
            bgColor={"brand.100"}
            color={"white"}
            rounded={"full"}
            px={8}
            py={2}
          >
            Follow
          </Button>
        </Flex>
        <Box w="full">
          <Tabs>
            <TabList
              px={2}
              py={4}
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
              {" "}
              {tabItems.map((item, index) => (
                <Tab
                  key={index}
                  py={{ base: 3, lg: 4 }}
                  minW="120px"
                  _selected={{
                    borderBottom: "3px solid",
                    borderColor: "brand.100",
                    color: "brand.100",
                  }}
                  color="gray.400"
                  fontSize={{ base: 10, md: "sm", lg: "md" }}
                >
                  <Flex align="center" gap={2}>
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
      </Layout>
    </Box>
  );
};

export default ProfileMobile;
