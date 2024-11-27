// src/components/Poll.js
import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Progress,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";

const Poll3 = () => {
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

  return (
    <Box mx="auto" bg="white">
      <HStack justifyContent={"space-between"} align="flex-start">
        <RadioGroup
          flex={4}
          mt={5}
          onChange={setSelectedOption}
          value={selectedOption}
        >
          <Stack spacing={9} direction="column">
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
        </RadioGroup>

        <VStack flex={6} alignItems={"start"} maxW="700px">
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
                      backgroundColor: "brand.100", // Replace with your desired color
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
    </Box>
  );
};

export default Poll3;
