import React from "react";
import Layout from "../../layout";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import SidebarMenu from "../ProfileSettings/components/SidebarMenu";

import Comment from "./Comment";

const Comments = () => {
  return (
    <Layout>
      <Container py={14} maxW={"1600px"} mx={"auto"}>
        <Flex gap={20}>
          <Box display={{ base: "none", md: "block" }}>
            <SidebarMenu />
          </Box>
          <Stack>
            <Comment />
            <Comment />
            <Comment />
          </Stack>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Comments;
