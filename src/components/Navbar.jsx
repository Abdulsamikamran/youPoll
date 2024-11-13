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
  MenuItem,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.svg";
import { FiUserCheck } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiSignOutThin } from "react-icons/pi";
import avatar from "../../assets/avatar1.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box bg="white" boxShadow="sm" py={5}>
      <Flex justify="space-between" px={28} align="center">
        <Flex align="center" gap={2}>
          <Box
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="red.500"
          >
            <Image onClick={() => navigate("/")} src={logo} />
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
          </Box>
        </Flex>

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
        <InputGroup maxW="400px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon mt={2} color="gray.300" />}
          />
          <Input
            py={6}
            id="search"
            type="text"
            placeholder="Search"
            variant="outline"
            rounded={"200px"}
            _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
            bgColor={useColorModeValue("gray.50", "gray.600")}
          />
        </InputGroup>

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
