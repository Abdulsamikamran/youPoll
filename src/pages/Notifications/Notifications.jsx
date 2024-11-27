import React from "react";
import { Flex, Text, Icon, VStack, Container } from "@chakra-ui/react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdNotificationsOutline } from "react-icons/io";
import SidebarMenu from "../ProfileSettings/components/SidebarMenu";
import Layout from "../../layout";
import NotificationItem from "./NotificationItem"; // Import the updated component
import { HamburgerIcon } from "@chakra-ui/icons";

function Notifications() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Container py={2} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <Box mt={4} display={{ base: "none", xl: "block" }}>
            <SidebarMenu />
          </Box>
          <VStack w="full" maxW="full" spacing={0} overflow="hidden">
            <Flex w={"full"} justify={"space-between"} align={"center"}>
              <Flex gap={2} align={"center"} py={10} w="full">
                <Icon
                  as={IoMdNotificationsOutline}
                  boxSize={8}
                  color={"gray.600"}
                />
                <Text fontSize="2xl" fontWeight="semibold" color={"gray.600"}>
                  Notifications
                </Text>
              </Flex>

              <IconButton
                display={{ base: "none", md: "block", xl: "none" }}
                border={"none"}
                icon={<HamburgerIcon boxSize={6} />}
                aria-label="Open menu"
                onClick={onOpen}
                variant="outline"
              />
            </Flex>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent
                maxW={{ base: "68%", md: "45%", lg: "35%" }}
                roundedLeft={"20px"}
              >
                <DrawerBody>
                  <SidebarMenu />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <NotificationItem />
          </VStack>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Notifications;
