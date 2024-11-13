import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import SidebarMenu from "../ProfileSettings/components/SidebarMenu";
import Layout from "../../layout";
import PollCard2 from "./components/PollCard2";

const Bookmarks = () => {
  return (
    <Layout>
      <Container py={14} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <SidebarMenu />
          <Stack spacing={8} w={"full"}>
            <PollCard2 />
            <PollCard2 />
            <PollCard2 />
            <PollCard2 />
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Bookmarks;
