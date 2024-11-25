import React from "react";
import Layout from "../../layout";
import SidebarMenu from "./components/SidebarMenu";
import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import lock from "../../../assets/lock.svg";
import EditProfile from "./components/EditProfile";
import NotificationSettings from "./components/NotificationSettings";
import SecuritySettings from "./components/SecuritySettings";

const ProfileSettings = () => {
  return (
    <Layout>
      <Container py={{ base: 2, md: 14 }} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <Box display={{ base: "none", md: "block" }}>
            <SidebarMenu />
          </Box>

          <Box w={"full"}>
            <Box display="flex" gap={3} fontWeight="medium" fontSize={"16px"}>
              <Icon as={IoSettingsOutline} boxSize={10} color="gray.500" />
              <Text color="gray.500" fontSize={24} fontWeight={"bold"}>
                Settings
              </Text>
            </Box>
            <Box w={"full"}>
              <Tabs>
                <TabList py={8} w={"full"} border={"none"}>
                  <Tab
                    py={{ base: 3, lg: 4 }}
                    w={"full"}
                    _selected={{
                      borderBottom: "3px solid",
                      borderColor: "brand.100",
                    }}
                    color="gray.500"
                    fontSize={{ base: 10, md: "sm", lg: "md" }}
                  >
                    <Flex gap={4}>
                      <Icon as={IoSettingsOutline} boxSize={5} />
                      <Text>Edit Profile</Text>
                    </Flex>
                  </Tab>
                  <Tab
                    py={{ base: 3, lg: 4 }}
                    w={"full"}
                    _selected={{
                      borderBottom: "3px solid",
                      borderColor: "brand.100",
                    }}
                    color="gray.500"
                    fontSize={{ base: 10, md: "sm", lg: "md" }}
                  >
                    <Flex gap={4}>
                      <Icon as={IoMdNotificationsOutline} boxSize={5} />
                      <Text> Notification Settings</Text>
                    </Flex>
                  </Tab>
                  <Tab
                    py={{ base: 3, lg: 4 }}
                    w={"full"}
                    _selected={{
                      borderBottom: "3px solid",
                      borderColor: "brand.100",
                    }}
                    color="gray.500"
                    fontSize={{ base: 10, md: "sm", lg: "md" }}
                  >
                    <Flex gap={4}>
                      <Image src={lock} boxSize={5} color={"gray.400"} />
                      <Text> Security Settings</Text>
                    </Flex>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel p={0}>
                    <EditProfile />
                  </TabPanel>
                  <TabPanel p={0} w={"full"}>
                    <NotificationSettings />
                  </TabPanel>
                  <TabPanel p={0} w={"full"}>
                    <SecuritySettings />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default ProfileSettings;
