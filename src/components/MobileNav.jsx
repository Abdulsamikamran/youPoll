import { Flex, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.svg";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <Flex justify={"space-between"} p={6} alignItems={"center"}>
      <HamburgerIcon boxSize={6} />
      <Image onClick={() => navigate("/")} src={logo} />
      <IconButton
        icon={<BellIcon boxSize={6} />}
        variant="ghost"
        aria-label="Notifications"
        size="lg"
      />
    </Flex>
  );
};

export default MobileNav;
