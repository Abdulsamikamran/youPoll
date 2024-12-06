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
import NavHeader from "./NavHeader";

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
          <Text onClick={() => navigate("/about")} cursor={"pointer"}>
            About us
          </Text>
          <Text onClick={() => navigate("/contact")} cursor={"pointer"}>
            Contact us
          </Text>
        </HStack>
      </Flex>
      <Divider pt={4} w={"full"}></Divider>

      <NavHeader />
    </Box>
  );
};

export default Navbar;
