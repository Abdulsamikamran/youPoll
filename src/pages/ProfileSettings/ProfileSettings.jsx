import React from "react";
import Layout from "../../layout";
import SidebarMenu from "./components/SidebarMenu";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import lock from "../../../assets/lock.svg";
import EditProfile from "./components/EditProfile";
import NotificationSettings from "./components/NotificationSettings";
import SecuritySettings from "./components/SecuritySettings";
import { HamburgerIcon } from "@chakra-ui/icons";

const ProfileSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Container py={{ base: 2, md: 14 }} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <Box display={{ base: "none", xl: "block" }}>
            <SidebarMenu />
          </Box>

          <Box w={"full"}>
            <Box
              justifyContent={"space-between"}
              display="flex"
              fontWeight="medium"
              fontSize={"16px"}
            >
              <Flex gap={3}>
                <Icon as={IoSettingsOutline} boxSize={10} color="gray.500" />
                <Text color="gray.500" fontSize={24} fontWeight={"bold"}>
                  Settings
                </Text>
              </Flex>

              <IconButton
                display={{ base: "none", md: "block", xl: "none" }}
                border={"none"}
                icon={<HamburgerIcon boxSize={6} />}
                aria-label="Open menu"
                onClick={onOpen}
                variant="outline"
              />
            </Box>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent
                maxW={{ base: "68%", md: "45%", lg: "35%" }}
                roundedLeft={"20px"}
              >
                <DrawerBody>
                  <SidebarMenu />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Box w={"full"}>
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
