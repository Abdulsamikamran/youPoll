// src/components/Poll.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Progress,
  VStack,
  Flex,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

const Poll = ({ isCollapse }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [votes, setVotes] = useState({
    "Super easy": 20000,
    "Somewhat easy": 15000,
    Moderate: 10000,
    "Quite difficult": 5000,
    "Very difficult": 3000,
  });

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <Box mx="auto" bg="white">
      <Flex
        justifyContent={"space-between"}
        wrap={"wrap"}
        gap={{ base: 4, md: 8 }}
        align="flex-start"
      >
        <RadioGroup
          mt={{ base: 2, md: 5 }}
          onChange={setSelectedOption}
          value={selectedOption}
        >
          <Stack spacing={{ base: 3, md: 9 }} direction="column">
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

        <VStack
          display={isCollapse ? "flex" : "none"}
          alignItems={"start"}
          maxW="500px"
          w={"full"}
          spacing={"18px"}
        >
          {Object.entries(votes).map(([option, count]) => {
            const percentage = ((count / totalVotes) * 100).toFixed(2);
            return (
              <VStack alignItems={"start"} key={option} width="100%">
                <Collapse
                  style={{ width: "100%" }}
                  in={isCollapse}
                  animateOpacity
                >
                  <Flex w={"full"} justifyContent={"space-between"}>
                    <Text color={"#6B7280"} fontSize="12px" maxW="120px">
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
                    sx={{ "& > div": { backgroundColor: "brand.100" } }}
                    size="lg"
                    h={6}
                    value={parseFloat(percentage)}
                    width="100%"
                    borderRadius="full"
                  />
                </Collapse>
              </VStack>
            );
          })}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Poll;
