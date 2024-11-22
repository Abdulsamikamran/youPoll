import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  HStack,
  Select,
  IconButton,
  Checkbox,
  Switch,
  Textarea,
  Divider,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Flex,
  Image,
  InputLeftElement,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Layout from "../../layout";
import calender from "/assets/calender.svg";
import tick from "/assets/redtick.svg";

const CreatePoll = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);

  const handleAddOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const inputStyles = {
    variant: "outline",
    _focus: { borderColor: "brand.100", boxShadow: "none" },
    borderColor: useColorModeValue("gray.300", "gray.600"),
    rounded: "md",
    h: 10,
  };

  return (
    <Box w={"full"} h={"full"} bg={"white"}>
      <Layout>
        <Box w={"full"} py={10}>
          <Heading size="lg" textAlign="center">
            Create a Poll
          </Heading>
          <Text color="gray.500" textAlign="center">
            Complete the below fields to create your poll.
          </Text>
          <Box
            my={2}
            maxW="1000px"
            mx="auto"
            p={8}
            bg="white"
            borderRadius="md"
            boxShadow="md"
          >
            <VStack spacing={6} align="stretch">
              {/* Title and Description */}
              <VStack align="stretch" spacing={4}>
                <FormControl>
                  <FormLabel
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    htmlFor="email"
                  >
                    Title
                  </FormLabel>
                  <Input
                    placeholder="Type your question here"
                    size="md"
                    {...inputStyles}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    htmlFor="email"
                  >
                    Description (optional)
                  </FormLabel>
                  <Input
                    placeholder="Type your question here"
                    size="md"
                    {...inputStyles}
                  />
                </FormControl>

                <Button
                  variant="solid"
                  bgColor={"brand.100 "}
                  _hover={{ bgColor: "red.500" }}
                  color={"white"}
                  size="lg"
                  w={"150px"}
                  fontSize="md"
                  fontWeight="semibold"
                  rounded={"lg"}
                  rightIcon={<Text fontSize="lg">+</Text>}
                >
                  Add image
                </Button>
              </VStack>

              {/* Poll Type and Answer Options */}
              <VStack align="stretch" spacing={4}>
                <HStack spacing={3}>
                  <FormControl>
                    <FormLabel
                      fontSize={"14px"}
                      fontWeight={"normal"}
                      htmlFor="pollType"
                    >
                      Poll type
                    </FormLabel>
                    <InputGroup maxW={"300px"}>
                      <InputLeftElement pointerEvents="none">
                        {/* <Image src={tick} alt="Tick Icon" /> */}
                      </InputLeftElement>
                      <Select
                        // _chakra-select={{ paddingLeft: "120px" }}
                        size="sm"
                        rounded={"md"}
                        h={10}
                        {...inputStyles}
                      >
                        <option>Single choice</option>
                        <option>Multiple choice</option>
                      </Select>
                    </InputGroup>
                  </FormControl>

                  <Text
                    w={"80px"}
                    whiteSpace={"nowrap"}
                    fontSize={14}
                    color={"brand.100"}
                    mt={10}
                    mr={10}
                  >
                    Paste answers
                  </Text>
                </HStack>

                <VStack align="stretch" spacing={3}>
                  <Text fontWeight="bold" fontSize="sm">
                    Answer Options
                  </Text>
                  {options.map((option, index) => (
                    <HStack key={index} spacing={3}>
                      <InputGroup size="sm" key={index}>
                        <Input
                          value={option}
                          readOnly
                          {...inputStyles}
                          variant="outline"
                          borderColor={useColorModeValue(
                            "gray.300",
                            "gray.600"
                          )}
                          _focus={{ borderColor: "#FF5A5E", boxShadow: "none" }}
                        />
                        <InputRightElement>
                          <IconButton
                            icon={<CloseIcon />}
                            size="xs"
                            variant="ghost"
                            onClick={() => handleRemoveOption(index)}
                            aria-label="Remove option"
                            _hover={{ bg: "none" }}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </HStack>
                  ))}
                  <Flex alignItems={"center"} gap={6}>
                    <Button
                      variant={"outline"}
                      color="gray.500"
                      size="md"
                      px={2}
                      py={1}
                      w={"130px"}
                      fontSize="md"
                      fontWeight="normal"
                      onClick={handleAddOption}
                    >
                      + Add option
                    </Button>

                    <Text fontSize="sm" color="brand.100">
                      or Add "Other"
                    </Text>
                  </Flex>
                </VStack>
              </VStack>

              {/* Theme Category */}
              <VStack align="stretch" spacing={3}>
                <FormControl>
                  <FormLabel
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    htmlFor="email"
                  >
                    Theme Category
                  </FormLabel>
                  <Select
                    maxW={"300px"}
                    placeholder="Entertainment"
                    size="sm"
                    rounded={"md"}
                    h={10}
                    {...inputStyles}
                  >
                    <option>Education</option>
                    <option>Business</option>
                    <option>Sports</option>
                  </Select>
                </FormControl>
              </VStack>

              {/* Settings Section */}
              <Divider />
              <Text fontWeight="semibold" fontSize="18px">
                Settings
              </Text>

              <Flex gap={10}>
                <Flex direction="column" gap={4} w={"full"}>
                  <Flex justifyContent={"space-between"} alignItems="center">
                    <Text>Close poll on a schedule date</Text>
                    <Switch colorScheme="red" />
                  </Flex>

                  <InputGroup size="sm">
                    <Input
                      {...inputStyles}
                      type="date"
                      placeholder="mm/dd/yyyy"
                      size="sm"
                    />
                  </InputGroup>
                </Flex>
                <Flex w={"full"}>
                  <FormControl>
                    <FormLabel mb={4} fontWeight={"normal"} htmlFor="email">
                      Edit vote permissions
                    </FormLabel>
                    <Select
                      placeholder="Nobody"
                      size="sm"
                      rounded={"md"}
                      h={10}
                      {...inputStyles}
                    >
                      <option>Education</option>
                      <option>Business</option>
                      <option>Sports</option>
                    </Select>
                  </FormControl>
                </Flex>
              </Flex>

              <Button
                variant="solid"
                bgColor={"brand.100 "}
                _hover={{ bgColor: "red.500" }}
                color={"white"}
                size="lg"
                fontSize="md"
                fontWeight="semibold"
                width="full"
                mt={6}
              >
                Create Now
              </Button>
            </VStack>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default CreatePoll;
