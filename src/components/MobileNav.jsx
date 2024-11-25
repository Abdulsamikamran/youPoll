import { Flex, IconButton, Image } from "@chakra-ui/react";
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

import { FiUser } from "react-icons/fi";

import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
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

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
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
        <DrawerContent roundedLeft={"20px"}>
          <DrawerHeader display={"flex"} justifyContent={"center"}>
            <Image onClick={() => navigate("/")} src={logo} />
          </DrawerHeader>

          <DrawerBody>
            <List spacing={4}>
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
                  ml={-4}
                  _active={{ bg: "white" }}
                  border={"none"}
                >
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      display="flex"
                      alignItems="center"
                    >
                      <ListIcon as={BiBarChartAlt2} color="red.500" mb="4px" />
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
                  ml={-4}
                  _active={{ bg: "white" }}
                  border={"none"}
                >
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      display="flex"
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
                  <ListIcon mb={"4px"} as={IoSettingsOutline} color="red.500" />
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
                  <ListIcon mb={"4px"} as={BsQuestionCircle} color="red.500" />
                  FAQs
                </Box>
              </ListItem>
              <ListItem>
                <Box onClick={() => navigate("/")}>
                  <ListIcon mb={"4px"} as={FiPhone} color="red.500" />
                  Contact Us
                </Box>
              </ListItem>
              <ListItem pt={52}>
                <Box onClick={() => navigate("/login")}>
                  <ListIcon mb={"4px"} as={BiLogOut} color="red.500" />
                  Logout
                </Box>
              </ListItem>
            </List>

            <Box mt={10} textAlign="center">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileNav;
