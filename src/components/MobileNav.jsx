import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.svg";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  ListIcon,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from "@chakra-ui/react";
import avatar2 from "../../assets/avatar5.svg";

import { FiUser, FiUserCheck } from "react-icons/fi";

import { BellIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsQuestionCircle } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import { PiSignOutThin, PiUsersThreeLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Flex justify={"space-between"} p={6} alignItems={"center"}>
        <IconButton
          border={"none"}
          icon={<HamburgerIcon boxSize={6} />}
          aria-label="Open menu"
          onClick={onOpen}
          variant="outline"
        />
        <Image onClick={() => navigate("/")} src={logo} />
        <IconButton
          icon={<BellIcon boxSize={6} />}
          variant="ghost"
          aria-label="Notifications"
          size="lg"
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent maxW={{ base: "68%", md: "30%" }} roundedLeft={"20px"}>
            <DrawerHeader display={"flex"} justifyContent={"center"}>
              <Image onClick={() => navigate("/")} src={logo} />
            </DrawerHeader>

            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              h={"100vh"}
            >
              <List fontSize={"14px"} fontWeight={"medium"} spacing={4}>
                <ListItem>
                  <Text
                    cursor="pointer"
                    onClick={() => navigate("/")}
                    display="flex"
                    alignItems="center"
                  >
                    <ListIcon mb="4px" as={RiHomeLine} color="red.500" />
                    Home
                  </Text>
                </ListItem>

                <ListItem>
                  <Box onClick={() => navigate("profile")}>
                    <ListIcon mb={"4px"} as={FiUsers} color="red.500" />
                    Followers
                  </Box>
                </ListItem>

                <Accordion allowToggle>
                  <AccordionItem
                    mt={-2}
                    ml={-4}
                    _active={{ bg: "white" }}
                    border={"none"}
                  >
                    <AccordionButton
                      _focusVisible={{
                        bgColor: "transparent",
                      }}
                      _focus={{
                        bgColor: "transparent",
                      }}
                      bgColor={"none"}
                    >
                      <Box
                        flex="1"
                        fontSize={"14px"}
                        textAlign="left"
                        display="flex"
                        fontWeight={"medium"}
                        alignItems="center"
                      >
                        <ListIcon
                          as={BiBarChartAlt2}
                          color="red.500"
                          mb="4px"
                        />
                        Polls
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List spacing={2} ml={4}>
                        <ListItem>
                          <Box onClick={() => navigate("home")}>
                            Trending polls
                          </Box>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Accordion allowToggle>
                  <AccordionItem
                    mt={-3}
                    ml={-4}
                    _active={{ bg: "white" }}
                    border={"none"}
                  >
                    <AccordionButton
                      _focusVisible={{
                        bgColor: "transparent",
                      }}
                      _focus={{
                        bgColor: "transparent",
                      }}
                      bgColor={"none"}
                    >
                      <Box
                        flex="1"
                        fontSize={"14px"}
                        textAlign="left"
                        display="flex"
                        fontWeight={"medium"}
                        alignItems="center"
                      >
                        <ListIcon as={BiCategoryAlt} color="red.500" mb="4px" />
                        Categories
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <List spacing={2} ml={4}>
                        {[
                          "News",
                          "Business & Politics",
                          "Sports",
                          "Entertainment",
                          "Lifestyle",
                          "Education & Careers",
                        ].map((category) => (
                          <ListItem key={category}>
                            <Box onClick={() => navigate("")}>{category}</Box>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <ListItem>
                  <Box onClick={() => navigate("/profile")}>
                    <ListIcon mb={"4px"} as={FiUser} color="red.500" />
                    Profile
                  </Box>
                </ListItem>
                <ListItem>
                  <Box onClick={() => navigate("/settings")}>
                    <ListIcon
                      mb={"4px"}
                      as={IoSettingsOutline}
                      color="red.500"
                    />
                    Settings
                  </Box>
                </ListItem>
                <ListItem>
                  <Box onClick={() => navigate("/")}>
                    <ListIcon
                      mb={"4px"}
                      as={BsExclamationCircle}
                      color="red.500"
                    />
                    About Us
                  </Box>
                </ListItem>
                <ListItem>
                  <Box onClick={() => navigate("/")}>
                    <ListIcon
                      mb={"4px"}
                      as={HiOutlineUserGroup}
                      color="red.500"
                    />
                    Help and Support
                  </Box>
                </ListItem>
                <ListItem>
                  <Box onClick={() => navigate("/")}>
                    <ListIcon
                      mb={"4px"}
                      as={BsQuestionCircle}
                      color="red.500"
                    />
                    FAQs
                  </Box>
                </ListItem>
                <ListItem>
                  <Box onClick={() => navigate("/")}>
                    <ListIcon mb={"4px"} as={FiPhone} color="red.500" />
                    Contact Us
                  </Box>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Box onClick={() => navigate("/login")}>
                    <ListIcon mb={"4px"} as={BiLogOut} color="red.500" />
                    Logout
                  </Box>
                </ListItem>
              </List>
            </DrawerBody>
            <Box my={6} textAlign="center">
              <Box mt={2} display="flex" justifyContent="center" gap={4}>
                <Link onClick={() => navigate("/")} color="red.500">
                  <Image src={facebook} />
                </Link>
                <Link onClick={() => navigate("/")} color="red.500">
                  <Image src={insta} />
                </Link>
                <Link onClick={() => navigate("/")} color="red.500">
                  <Image src={twitter} />
                </Link>
              </Box>
            </Box>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Divider />
      <Flex
        display={{ base: "none", md: "flex" }}
        px={{ md: 4, lg: 8, xl: 28 }}
        h={"full"}
        justify={"space-between"}
        alignItems={"center"}
        gap={4}
      >
        <Box w="full" maxW={{ md: "250px", lg: "300px", xl: "400px" }}>
          <Popover placement="bottom-start" isLazy>
            <PopoverTrigger>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon mt={2} color="gray.300" />}
                />
                <Input
                  py={{ md: 4, lg: 6 }}
                  type="text"
                  placeholder="Search"
                  variant="outline"
                  rounded={"200px"}
                  _focus={{ borderColor: "brand.100", boxShadow: "none" }}
                  bgColor={useColorModeValue("gray.50", "gray.600")}
                />
              </InputGroup>
            </PopoverTrigger>
            <PopoverContent w="full" maxW="600px" _focus={{ outline: "none" }}>
              <PopoverBody>
                <Tabs>
                  <TabList>
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
                      Accounts
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
                      Polls
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Flex direction="column" gap={4}>
                        <Box
                          w={"400px"}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Flex align="center" gap={4}>
                            <Box
                              as="img"
                              src={avatar2}
                              alt="User Avatar"
                              borderRadius="full"
                            />
                            <Box>
                              <Box fontWeight="bold">Sam Willson</Box>
                              <Box fontSize="sm" color="gray.500">
                                @SamWill
                              </Box>
                            </Box>
                          </Flex>
                          <Box>
                            <Box
                              as="button"
                              px={4}
                              py={2}
                              border="1px solid"
                              borderColor="brand.100"
                              borderRadius="full"
                              color="brand.100"
                              fontWeight="semibold"
                              _hover={{ bg: "red.100" }}
                            >
                              Follow
                            </Box>
                          </Box>
                        </Box>
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex direction="column" gap={4}>
                        <Box
                          w={"400px"}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Flex align="center" gap={4}>
                            <Box
                              as="img"
                              src={avatar2}
                              alt="User Avatar"
                              borderRadius="full"
                            />
                            <Box>
                              <Box fontWeight="bold">Sam Willson</Box>
                              <Box fontSize="sm" color="gray.500">
                                @SamWill
                              </Box>
                            </Box>
                          </Flex>
                          <Box>
                            <Box
                              as="button"
                              px={4}
                              py={2}
                              border="1px solid"
                              borderColor="brand.100"
                              borderRadius="full"
                              color="brand.100"
                              fontWeight="semibold"
                              _hover={{ bg: "red.100" }}
                            >
                              View polls
                            </Box>
                          </Box>
                        </Box>
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>

        <Flex py={4} alignItems={"center"}>
          <Button
            variant="solid"
            bgColor={"brand.100 "}
            _hover={{ bgColor: "red.500" }}
            color={"white"}
            size={{ md: "md", lg: "lg" }}
            onClick={() => navigate("/create-poll")}
            fontSize="md"
            fontWeight="semibold"
            rounded={"200px"}
            leftIcon={<Text fontSize="lg">+</Text>}
          >
            Create Poll
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default MobileNav;
