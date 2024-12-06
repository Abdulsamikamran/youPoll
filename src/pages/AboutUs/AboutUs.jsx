import React, { useState } from "react";
import Layout from "../../layout";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import hero from "../../../assets/abouthero.svg";

const AboutUs = () => {
  const [activeItem, setActiveItem] = useState(1); // Default active item

  const handleGridItemClick = (item) => {
    setActiveItem(item); // Set the clicked item as active
  };

  return (
    <Layout>
      <Container
        m={0}
        mx={"auto"}
        p={0}
        fontFamily={"Raleway"}
        maxW={"1600px"}
        py="10"
      >
        <Box textAlign="center" mb="10">
          <Heading
            fontWeight={"semibold"}
            fontSize={{ base: 32, lg: 48 }}
            color={"black"}
          >
            About
            <Text as="span" color="brand.100">
              Us
            </Text>
          </Heading>
          <Text mt="4" fontSize={{ base: 16, lg: 24 }} color="#666666">
            Live Voting. Real Opinions. Instant Decisions.
          </Text>
        </Box>

        <Flex w={"full"} justifyContent="center" mb="12">
          <Image
            w={"full"}
            src={hero}
            borderRadius={{ base: "none", md: "md" }}
            // boxShadow="lg"
          />
        </Flex>

        <Box px={{ base: 5, md: 0 }} textAlign="start" mb="8">
          <Heading
            mb={5}
            fontFamily="Raleway"
            color="gray.800"
            fontSize={{ base: 26, lg: 48 }}
          >
            How YouPoll Works
          </Heading>
          <Text mt="2" fontSize={{ base: "sm", md: "md" }} color="gray.500">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </Text>
        </Box>

        <Grid
          px={{ base: 5, md: 0 }}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
          mt="10"
        >
          <GridItem onClick={() => handleGridItemClick(1)}>
            <Box
              bg={activeItem === 1 ? "brand.100" : "none"}
              color={activeItem === 1 ? "white" : "gray.400"}
              p="6"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s ease"
            >
              <Heading
                fontSize={72}
                fontFamily={"Raleway"}
                fontWeight={"semibold"}
                mb="4"
              >
                01
              </Heading>
              <Heading
                color={activeItem === 1 ? "white" : "brand.100"}
                fontSize="xl"
                mb="2"
              >
                About Us
              </Heading>
              <Text fontSize="16px">
                Yupoll is a platform where everyone can voice their opinions on
                issues that matter whether it’s a headline in the news, the
                latest sports debate, or a personal question. More than just
                voting, Yupoll lets you see live how your opinions compare with
                others. For businesses, universities, and organizations, it’s a
                way to engage directly with their audience and make informed,
                data-driven decisions in real time.
              </Text>
            </Box>
          </GridItem>

          {/** Second Grid Item */}
          <GridItem onClick={() => handleGridItemClick(2)}>
            <Box
              bg={activeItem === 2 ? "brand.100" : "none"}
              color={activeItem === 2 ? "white" : "black"}
              p="6"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s ease"
            >
              <Heading
                fontSize={72}
                fontFamily={"Raleway"}
                fontWeight={"semibold"}
                mb="4"
                color={activeItem === 2 ? "white" : "gray.400"}
              >
                02
              </Heading>
              <Heading
                fontSize="24px"
                mb="2"
                color={activeItem === 2 ? "white" : "brand.100"}
              >
                Mission
              </Heading>
              <Text
                fontSize="16px"
                color={activeItem === 2 ? "white" : "gray.400"}
              >
                At Yupoll, we believe that everyone’s opinion deserves to be
                heard. Founded by James Wallner in 2024, Yupoll was born from
                the idea that knowing where you stand in the crowd is just as
                important as sharing your thoughts. Our mission is to create a
                space where people can connect through our website.
              </Text>
            </Box>
          </GridItem>

          {/** Third Grid Item */}
          <GridItem onClick={() => handleGridItemClick(3)}>
            <Box
              bg={activeItem === 3 ? "brand.100" : "none"}
              color={activeItem === 3 ? "white" : "black"}
              p="6"
              borderRadius="md"
              cursor="pointer"
              transition="all 0.3s ease"
            >
              <Heading
                fontSize={72}
                fontFamily={"Raleway"}
                fontWeight={"semibold"}
                mb="4"
                color={activeItem === 3 ? "white" : "gray.400"}
              >
                03
              </Heading>
              <Heading
                fontSize="24px"
                mb="2"
                color={activeItem === 3 ? "white" : "brand.100"}
              >
                Inspiration
              </Heading>
              <Text
                fontSize="16px"
                color={activeItem === 3 ? "white" : "gray.400"}
              >
                The spark for Yupoll came during a game between friends. Players
                were asked to vote yes or no in support of statement, by raising
                their hand. The majority would win a point. What was fascinating
                wasn't just sharing opinions, but seeing how everyone else felt
                about the same issues. This revealed an invaluable truth: people
                care about sharing their opinion but want to know how that
                compares and want instant feedback. That's why Yupoll is
                designed to give you quick, live results.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutUs;
