import React from "react";

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Avatar,
  Text,
  HStack,
  Image,
  Divider,
  useColorModeValue,
  MenuButton,
  Menu,
  MenuList,
  Stack,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { PiUsersThreeLight } from "react-icons/pi";

import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.svg";
import { FiUserCheck, FiUsers } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiSignOutThin } from "react-icons/pi";
import avatar from "../../assets/avatar1.svg";
import { useNavigate } from "react-router-dom";
import avatar2 from "../../assets/avatar5.svg";
import { BiBarChartAlt2 } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box bg="white" boxShadow="sm" py={5}>
      <Flex
        justify="space-between"
        px={{ md: 4, lg: 8, xl: 28 }}
        align="center"
      >
        <Menu>
          <MenuButton bg={"none"} as={Button}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList p={5}>
            <Flex color={"black"} fontWeight={"normal"} gap={28}>
              <Text>Polls</Text>
              <Text>Categories</Text>
            </Flex>
            <Divider my={2} />
            <Flex
              fontSize={"14px"}
              color={"gray.400"}
              fontWeight={"normal"}
              gap={10}
            >
              <Text whiteSpace={"nowrap"}>Trending Polls</Text>
              <Stack spacing={1} w={"full"}>
                <Text>News</Text>
                <Divider w={"full"} />
                <Text>Business & Politics</Text>
                <Divider />
                <Text>Sports</Text>
                <Divider />
                <Text>Entertainment</Text>
                <Divider />
                <Text>Lifestyle</Text>
                <Divider />
                <Text>Education & Careers</Text>
              </Stack>
            </Flex>
          </MenuList>
        </Menu>
        <Image cursor={"pointer"} onClick={() => navigate("/")} src={logo} />

        <HStack
          spacing={{ md: 2, lg: 4, xl: 8 }}
          color="gray.500"
          fontSize={{ md: "10px", lg: 14, xl: 16 }}
        >
          <Text as="a" href="/">
            Home
          </Text>
          <Text as="a" href="#">
            About us
          </Text>
          <Text as="a" href="#">
            Contact us
          </Text>
        </HStack>
      </Flex>
      <Divider pt={4} w={"full"}></Divider>
      <Flex
        pt={4}
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

        <Flex alignItems={"center"}>
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

          <IconButton
            icon={<BellIcon />}
            variant="ghost"
            aria-label="Notifications"
            size="lg"
          />
          <Menu>
            <MenuButton bg={"none"} as={Button}>
              <Avatar
                size="sm"
                name="User Name"
                src="https://bit.ly/dan-abramov"
              />
            </MenuButton>
            <MenuList p={5}>
              {/* Profile Header */}
              <Flex
                onClick={() => navigate("/profile")}
                cursor={"pointer"}
                align="center"
              >
                <Avatar src={avatar} size="md" />
                <Box ml={4}>
                  <Heading as="h3" size="md">
                    Guy Hawkins
                  </Heading>
                  <Text fontSize="sm">guyhawkins@gmail.com</Text>
                </Box>
              </Flex>

              {/* Menu Items as List */}
              <List spacing={3} mt={4}>
                <ListItem
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  onClick={() => navigate("/detail-page")}
                >
                  <ListIcon as={BiBarChartAlt2} />

                  <Text ml={3}>My polls</Text>
                </ListItem>

                <ListItem
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  onClick={() => navigate("/profile")}
                >
                  <ListIcon mb={"4px"} as={PiUsersThreeLight} />
                  <Text ml={3}> Followers</Text>
                </ListItem>

                <ListItem
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  onClick={() => navigate("/settings")}
                >
                  <CiSettings size={20} />
                  <Text ml={3}>Settings</Text>
                </ListItem>

                <ListItem
                  mb={5}
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  onClick={() => navigate("/settings")}
                >
                  <FiUserCheck size={20} />
                  <Text ml={3}>Edit Profile</Text>
                </ListItem>
                <Divider mt={20} w={"full"} />

                <ListItem
                  pt={5}
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  onClick={() => navigate("/login")}
                >
                  <PiSignOutThin size={20} />
                  <Text ml={3}>Logout</Text>
                </ListItem>
              </List>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
