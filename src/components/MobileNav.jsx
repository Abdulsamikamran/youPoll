import {
  Divider,
  Flex,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.svg";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import NavHeader from "./NavHeader";
import MobileDrawer from "./MobileDrawer";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Flex justify={"space-between"} bg={"white"} p={6} alignItems={"center"}>
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

        <MobileDrawer isOpen={isOpen} onClose={onClose} navigate={navigate} />
      </Flex>
      <Divider />

      <Flex display={{ base: "none", md: "flex" }}>
        <NavHeader />
      </Flex>
    </>
  );
};

export default MobileNav;
