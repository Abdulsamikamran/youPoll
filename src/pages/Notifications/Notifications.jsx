import React from "react";
import { Flex, Text, Icon, VStack, Container } from "@chakra-ui/react";
import { IoMdNotificationsOutline } from "react-icons/io";
import SidebarMenu from "../ProfileSettings/components/SidebarMenu";
import Layout from "../../layout";
import NotificationItem from "./NotificationItem"; // Import the updated component

function Notifications() {
  return (
    <Layout>
      <Container py={14} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <SidebarMenu />
          <VStack w="full" maxW="full" spacing={0} overflow="hidden">
            <Flex gap={2} align={"center"} py={10} w="full">
              <Icon as={IoMdNotificationsOutline} boxSize={5} />
              <Text fontSize="2xl" fontWeight="semibold" color={"gray.600"}>
                Notifications
              </Text>
            </Flex>
            <NotificationItem />
          </VStack>
        </Flex>
      </Container>
    </Layout>
  );
}

export default Notifications;
