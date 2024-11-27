import { Box, Text, Stack, HStack } from "@chakra-ui/react";

const CustomStepper = ({ steps, activeStep, colorScheme = "red" }) => {
  return (
    <HStack
      mt={{ base: 20, md: 20, lg: 6 }}
      spacing={2}
      content="center"
      align="center"
    >
      {steps.map((step, index) => (
        <HStack content="center" key={index} align="center">
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
              left={{ base: "-30px", md: "-50px" }}
              w={{ base: "90px", md: "150px" }}
              fontSize={{ base: "9px", lg: "13px" }}
              color={index <= activeStep ? "black" : "gray.500"}
              textAlign="start"
            >
              {step.description}
            </Text>
          </Stack>

          {index < steps.length - 1 && (
            <Box
              w={{ base: "70px", sm: "100px", md: "150px" }}
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
