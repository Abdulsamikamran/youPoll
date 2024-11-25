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
} from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.svg";
import { FiUserCheck } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiSignOutThin } from "react-icons/pi";
import avatar from "../../assets/avatar1.svg";
import { useNavigate } from "react-router-dom";
import avatar2 from "../../assets/avatar5.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box bg="white" boxShadow="sm" py={5}>
      <Flex justify="space-between" px={28} align="center">
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

        <HStack spacing={8} color="gray.500" fontSize="sm">
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
        px={32}
        h={"full"}
        justify={"space-between"}
        alignItems={"center"}
        gap={4}
      >
        <Box w="full" maxW="400px">
          <Popover placement="bottom-start" isLazy>
            <PopoverTrigger>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon mt={2} color="gray.300" />}
                />
                <Input
                  py={6}
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
                              borderColor="red.400"
                              borderRadius="full"
                              color="red.400"
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
                              borderColor="red.400"
                              borderRadius="full"
                              color="red.400"
                              fontWeight="semibold"
                              _hover={{ bg: "red.100" }}
                            >
                              Follow
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
            size="lg"
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

              <Stack alignItems={"start"} mt={4}>
                <Button
                  fontWeight={"normal"}
                  variant="ghost"
                  leftIcon={<FiUserCheck size={20} />}
                >
                  Edit Profile
                </Button>
                <Button
                  fontWeight={"normal"}
                  variant="ghost"
                  leftIcon={<CiSettings size={20} />}
                >
                  Settings
                </Button>

                <Button
                  fontWeight={"normal"}
                  variant="ghost"
                  leftIcon={<PiSignOutThin size={20} />}
                  onClick={() => navigate("/login")}
                >
                  Logout
                </Button>
              </Stack>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
