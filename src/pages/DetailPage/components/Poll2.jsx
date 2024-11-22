// src/components/Poll.js
import React, { useState } from "react";
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Progress,
  HStack,
  VStack,
  Flex,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import arrow from "/assets/arrow.svg";
import result from "/assets/result.svg";
const Poll2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({
    "Super easy": 20000,
    "Somewhat easy": 15000,
    Moderate: 10000,
    "Quite difficult": 5000,
    "Very difficult": 3000,
  });

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = () => {
    if (selectedOption) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1,
      }));
      setHasVoted(true);
    }
  };

  // Define colors for each option
  const colors = {
    "Super easy": "green.400",
    "Somewhat easy": "yellow.400",
    Moderate: "purple",
    "Quite difficult": "maroon",
    "Very difficult": "#FF5A5E",
  };

  return (
    <Box mx="auto" bg="white">
      <HStack justifyContent={"space-between"} align="flex-start">
        <RadioGroup mt={5} onChange={setSelectedOption} value={selectedOption}>
          <Text color={"gray.400"} pb={6}>
            Make a choice:
          </Text>
          <Stack pb={6} color={"gray.500"} spacing={3} direction="column">
            {Object.keys(votes).map((option) => (
              <Radio
                key={option}
                value={option}
                sx={{
                  "&[aria-checked=true], &[data-checked], &[data-state=checked]":
                    {
                      background: "brand.100",
                      borderColor: "none",
                      color: "brand.100",
                      _hover: {
                        background: "brand.100",
                        borderColor: "brand.100",
                      },
                    },
                }}
              >
                {option}
              </Radio>
            ))}
          </Stack>
          <Button
            mr={2}
            bgColor="brand.100"
            _hover={{ bgColor: "red.500" }}
            color="white"
            size="lg"
            px={8}
            py={4}
            fontSize="md"
            fontWeight="semibold"
          >
            Vote
            <Image ml={3} w={6} src={arrow} />
          </Button>
          <Button
            variant={"outline"}
            color="gray.500"
            size="lg"
            px={8}
            py={4}
            fontSize="md"
            fontWeight="normal"
          >
            <Image mr={3} w={6} src={result} />
            Show Results
          </Button>
        </RadioGroup>

        <VStack alignItems={"start"} width="500px">
          {Object.entries(votes).map(([option, count]) => {
            const percentage = ((count / totalVotes) * 100).toFixed(2);
            return (
              <VStack alignItems={"start"} key={option} width="100%">
                <Flex w={"full"} justifyContent={"space-between"}>
                  <Text color={"#6B7280"} fontSize="12px" width="120px">
                    {option}
                  </Text>
                  <Text
                    color={"#6B7280"}
                    fontSize="12px"
                    width="200px"
                    textAlign="right"
                  >
                    {percentage}% ({count} votes)
                  </Text>
                </Flex>
                <Progress
                  sx={{
                    "& > div": {
                      backgroundColor: "brand.100", // Dynamic color
                    },
                  }}
                  size="lg"
                  h={6}
                  value={parseFloat(percentage)}
                  width="100%"
                  borderRadius="full"
                />
              </VStack>
            );
          })}
        </VStack>
      </HStack>
      <Divider mt={3} />
      <Text mt={4} color={"gray.500"}>
        142,326 votes
      </Text>
    </Box>
  );
};

export default Poll2;
