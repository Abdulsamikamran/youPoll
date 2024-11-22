import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import business from "../../../assets/business.svg";
import sports from "../../../assets/sports.svg";
import entertainment from "../../../assets/entertainment.svg";
import lifestyle from "../../../assets/lifestyle.svg";
import education from "../../../assets/education.svg";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    icon: business,
    text: "Business & Politics",
  },
  {
    icon: sports,
    text: "Sports",
  },
  {
    icon: entertainment,
    text: "Entertainment",
  },
  {
    icon: lifestyle,
    text: "Lifestyle",
  },
  {
    icon: education,
    text: "Education",
  },
];

const Interests = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <Box bg={"white"} w={"full"} h={"100vh"}>
      <Image
        src={logo}
        position={"absolute"}
        top={{ base: 2, md: 10 }}
        left={{ base: 2, md: 10 }}
      />{" "}
      <Flex
        px={6}
        flexDirection={"column"}
        justify={"center"}
        gap={2}
        align={"center"}
        pt={28}
        w={"full"}
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: 28, md: 36 }}
          fontWeight={"semibold"}
        >
          Choose your interests
        </Text>
        <Text
          mb={5}
          textAlign={"center"}
          fontSize={{ base: 14, md: 16 }}
          color={"gray.400"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          condimentum, lacus
        </Text>
        <Flex
          w={"full"}
          justify={"center"}
          align={"center"}
          wrap={"wrap"}
          px={{ base: 0, md: "370px" }}
          rowGap={5}
          columnGap={5}
        >
          {cardData.map((data, index) => (
            <Box
              key={index}
              onClick={() => handleCardClick(index)}
              border={"2px solid"}
              borderColor={"gray.100"}
              rounded={"md"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"300px"}
              h={"200px"}
              cursor={"pointer"}
              bg={selectedCard === index ? "red.500" : "white"}
              color={selectedCard === index ? "white" : "black"}
              transition="all 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image src={data.icon} />
              <Text fontWeight={"bold"}>{data.text}</Text>
            </Box>
          ))}
        </Flex>
        <Button
          w={"full"}
          maxW={{ base: "full", md: "600px" }}
          variant="solid"
          colorScheme="red"
          size="lg"
          fontSize="md"
          fontWeight="bold"
          bgColor={"brand.100"}
          rounded={"18px"}
          my={10}
          onClick={() => navigate("/")}
        >
          Finish
        </Button>
      </Flex>
    </Box>
  );
};

export default Interests;
