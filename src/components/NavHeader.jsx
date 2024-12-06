import React from "react";
import {
  Flex,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import { BiBarChartAlt2 } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FiUserCheck } from "react-icons/fi";
import { PiUsersThreeLight, PiSignOutThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar2.svg";
import avatar2 from "../../assets/avatar3.svg";

const NavHeader = () => {
  const navigate = useNavigate();

  return (
    <Flex
      bg={"white"}
      w={"full"}
      px={{ md: 4, lg: 8, xl: 28 }}
      py={{ md: 4 }}
      pt={{ lg: 8 }}
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
            <Avatar size="sm" name="User Name" src={avatar} />
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
  );
};

export default NavHeader;
