import React from "react";
import banner from "../../../assets/mobilebanner1.svg";
import { Box, Image } from "@chakra-ui/react";
import Layout from "../../layout";

const ProfileMobile = () => {
  return (
    <Box w={"full"} h={"full"} bg={"white"}>
      <Layout>
        <Image position={"relative"} src={banner} w={"full"} />
      </Layout>
    </Box>
  );
};

export default ProfileMobile;
