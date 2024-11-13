import {
  Avatar,
  Box,
  Container,
  VStack,
  HStack,
  Icon,
  Text,
  Badge,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";

import { LiaCommentDotsSolid } from "react-icons/lia";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrPower } from "react-icons/gr";
import avatar from "../../../../assets/avatar3.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <Box bg="gray.100" p={5} w="300px" borderRadius="md">
      <Flex w={"full"} gap={4} align={"center"}>
        <Avatar w="60px" h={"60px"} src={avatar} />
        <Box>
          <Text fontWeight="bold" fontSize="18px" color={"gray.500"}>
            Abram Marvyn
          </Text>
          <Text color="gray.400" fontSize={"12px"}>
            Member since 2009
          </Text>
        </Box>
      </Flex>

      <VStack align="start" mt={8} spacing={4}>
        <Flex alignItems={"center"} gap={4} justifyContent={"center"}>
          <Text fontWeight={"bold"} mb={2} color="gray.500" fontSize="lg">
            .
          </Text>
          <Text color="gray.500" fontWeight="semibold" fontSize="sm">
            PROFILE
          </Text>
        </Flex>
        <NavLink
          to="/comments"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "16px",

            color: isActive ? "red" : "gray",
            fontWeight: isActive ? "semibold" : "medium",
            textDecoration: "none",
          })}
        >
          <Icon as={LiaCommentDotsSolid} boxSize={5} />
          Comments
        </NavLink>
        <NavLink
          to="/bookmarks"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "16px",

            color: isActive ? "red" : "gray",
            fontWeight: isActive ? "semibold" : "medium",
            textDecoration: "none",
          })}
        >
          <Icon as={IoBookmarksOutline} boxSize={5} />
          Bookmarks
        </NavLink>

        <Flex justify={"space-between"} w={"full"}>
          <NavLink
            to="/notifications"
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "16px",

              color: isActive ? "red" : "gray",
              fontWeight: isActive ? "semibold" : "medium",
              textDecoration: "none",
            })}
          >
            <Icon as={IoMdNotificationsOutline} boxSize={5} />
            Notifications
          </NavLink>
          <Flex
            align={"center"}
            justify={"center"}
            fontSize={"13px"}
            color={"white"}
            bg={"brand.100"}
            w={5}
            h={5}
            rounded={"md"}
          >
            12
          </Flex>
        </Flex>
        <Divider />

        <Flex alignItems={"center"} gap={4} justifyContent={"center"}>
          <Text fontWeight={"bold"} mb={2} color="gray.500" fontSize="lg">
            .
          </Text>
          <Text color="gray.500" fontWeight="semibold" fontSize="sm">
            ACCOUNT
          </Text>
        </Flex>
        <NavLink
          to="/settings"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "16px",

            color: isActive ? "red" : "gray",
            fontWeight: isActive ? "semibold" : "medium",
            textDecoration: "none",
          })}
        >
          <Icon as={IoSettingsOutline} boxSize={5} />
          Settings
        </NavLink>

        <Link
          display="flex"
          alignItems="center"
          gap={3}
          color="gray.500"
          fontWeight="medium"
          fontSize={"16px"}
        >
          <Icon as={GrPower} boxSize={5} />
          Logout
        </Link>
      </VStack>
    </Box>
  );
};

export default SidebarMenu;
