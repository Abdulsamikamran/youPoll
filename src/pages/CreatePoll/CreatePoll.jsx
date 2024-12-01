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
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Layout from "../../layout";
import calender from "/assets/calender.svg";
import tick from "/assets/redtick.svg";

const CreatePoll = () => {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const toast = useToast();

  const handleAddOption = () => {
    if (options.length < 6) {
      setOptions([...options, `Option ${options.length + 1}`]);
    } else {
      toast({
        title: "Maximum options reached.",
        description: "You can only add up to 6 options.",
        status: "error",
        duration: 3000, // Toast duration in milliseconds
        isClosable: true, // Allow user to close the toast
        position: "top", // Position of the toast
      });
    }
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
    <Box w={"full"} h={"full"}>
      <Layout>
        <Box w={"full"} py={10}>
          <Heading py={2} size="lg" textAlign="center">
            Create a Poll
          </Heading>
          <Text py={2} color="gray.500" textAlign="center">
            Complete the below fields to create your poll.
          </Text>
          <Box
            my={2}
            maxW="1400px"
            mx="auto"
            p={{ base: 3, md: 8 }}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            pb={10}
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
                          placeholder={option}
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
                      "6 maximum"
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
                    // placeholder="Entertainment
                    size="sm"
                    rounded={"md"}
                    h={10}
                    {...inputStyles}
                  >
                    <option>Education</option>
                    <option>Entertainment</option>
                    <option>Business & politics</option>
                    <option>Sports</option>
                    <option>Life style</option>
                  </Select>
                </FormControl>
              </VStack>

              {/* Settings Section */}
              <Divider />
              <Text fontWeight="semibold" fontSize="18px">
                Settings
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
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
                    <Select size="sm" rounded={"md"} h={10} {...inputStyles}>
                      <option>Anyone</option>
                      <option>My followers only</option>
                    </Select>
                  </FormControl>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  mt={4}
                  alignItems="center"
                >
                  <Text>Anonymous poll</Text>
                  <Switch colorScheme="red" />
                </Flex>
              </SimpleGrid>

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
