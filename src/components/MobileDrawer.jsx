import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
import { FiUser, FiUsers } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";

import { FiPhone } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/logo.svg";

const MobileDrawer = ({ isOpen, onClose, navigate }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent maxW={{ base: "68%", md: "30%" }} roundedLeft={"20px"}>
        <DrawerHeader display={"flex"} justifyContent={"center"}>
          <Image onClick={() => navigate("/")} src={logo} />
        </DrawerHeader>
        <DrawerBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          h={"100vh"}
        >
          <List fontSize={"14px"} fontWeight={"medium"} spacing={4}>
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
                mt={-2}
                ml={-4}
                _active={{ bg: "white" }}
                border={"none"}
              >
                <AccordionButton bgColor={"none"}>
                  <Box
                    flex="1"
                    fontSize={"14px"}
                    textAlign="left"
                    display="flex"
                    fontWeight={"medium"}
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
                      <Box onClick={() => navigate("home")}>Trending polls</Box>
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem mt={-3} ml={-4} border={"none"}>
                <AccordionButton>
                  <Box
                    flex="1"
                    fontSize={"14px"}
                    textAlign="left"
                    display="flex"
                    fontWeight={"medium"}
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
                <ListIcon mb={"4px"} as={BsExclamationCircle} color="red.500" />
                About Us
              </Box>
            </ListItem>

            <ListItem>
              <Box onClick={() => navigate("/")}>
                <ListIcon mb={"4px"} as={FiPhone} color="red.500" />
                Contact Us
              </Box>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Box onClick={() => navigate("/login")}>
                <ListIcon mb={"4px"} as={BiLogOut} color="red.500" />
                Logout
              </Box>
            </ListItem>
          </List>
        </DrawerBody>
        <Box my={6} textAlign="center">
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
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
