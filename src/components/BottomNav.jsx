import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { TiUser } from "react-icons/ti";
import { Flex, Text, Stack, useToken } from "@chakra-ui/react";

const BottomNav = () => {
  const [brandColor, defaultColor] = useToken("colors", [
    "brand.100",
    "gray.500",
  ]);

  const navItems = [
    { to: "/", icon: RiHome5Line, label: "Home" },
    { to: "/create-poll", icon: FiPlus, label: "Create Poll" },
    { to: "/search", icon: LuSearch, label: "Search" },
    { to: "/profile", icon: TiUser, label: "Profile" },
  ];

  return (
    <Flex
      w="full"
      h="90px"
      justify="space-between"
      position="fixed"
      zIndex={2}
      bottom={0}
      display={{ base: "flex", md: "none" }}
      bg="white"
      p={4}
      px={6}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          style={({ isActive }) => ({
            color: isActive ? brandColor : defaultColor,
            textDecoration: "none",
          })}
        >
          <Stack align="center" spacing={1}>
            <item.icon size={28} />
            <Text fontWeight="medium">{item.label}</Text>
          </Stack>
        </NavLink>
      ))}
    </Flex>
  );
};

export default BottomNav;
