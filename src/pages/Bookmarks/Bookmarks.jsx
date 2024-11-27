import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsBookmarkCheck } from "react-icons/bs";

import React from "react";
import SidebarMenu from "../ProfileSettings/components/SidebarMenu";
import Layout from "../../layout";
import PollCard2 from "./components/PollCard2";
import { HamburgerIcon } from "@chakra-ui/icons";

const Bookmarks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Container py={2} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <Box mt={4} display={{ base: "none", xl: "block" }}>
            <SidebarMenu />
          </Box>
          <Box w={"full"}>
            <Box
              py={8}
              justifyContent={"space-between"}
              display="flex"
              fontWeight="medium"
              fontSize={"16px"}
            >
              <Flex align={"center"} gap={3}>
                <Icon as={BsBookmarkCheck} boxSize={8} color="gray.600" />
                <Text fontSize="2xl" fontWeight="semibold" color={"gray.600"}>
                  Bookmarks
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
            </Box>
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

            <VStack spacing={10} w={"full"}>
              <PollCard2 />
              <PollCard2 />
              <PollCard2 />
              <PollCard2 />
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Bookmarks;
