import { Box, Text, Stack, HStack } from "@chakra-ui/react";

const CustomStepper = ({ steps, activeStep, colorScheme = "blue" }) => {
  return (
    <HStack mt={6} spacing={2} content="center" align="center">
      {steps.map((step, index) => (
        <HStack content="center" key={index} align="center">
          {/* Step Indicator */}
          <Stack position={"relative"} alignItems={"center"}>
            <Box
              px={2}
              w={"16px"}
              h={"16px"}
              borderRadius="full"
              bg={index <= activeStep ? colorScheme : "gray.300"}
            ></Box>
            <Text
              position={"absolute"}
              top={6}
              left={"-50px"}
              w={"150px"}
              fontSize="13px"
              color={index <= activeStep ? "black" : "gray.500"}
              textAlign="start"
            >
              {step.description}
            </Text>
          </Stack>

          {index < steps.length - 1 && (
            <Box
              w="150px"
              h="2px"
              bg={index < activeStep ? colorScheme : "gray.300"}
            />
          )}
        </HStack>
      ))}
    </HStack>
  );
};

export default CustomStepper;
