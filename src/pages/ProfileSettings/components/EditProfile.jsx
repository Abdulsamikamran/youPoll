import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  VStack,
  Avatar,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import change from "../../../../assets/change.svg";
import avatar from "../../../../assets/avatar20.svg";
import background from "../../../../assets/background.svg";

const EditProfile = () => {
  return (
    <Container maxW="full">
      <Box bg="white" borderRadius="lg" p={8} boxShadow="md">
        <Text fontSize="2xl" fontWeight="semibold" color={"gray.600"} mb={6}>
          Profile Details
        </Text>

        <Flex gap={4} alignItems="center" mb={4}>
          <Image src={avatar} />
          <Box>
            <Button
              leftIcon={<Image src={change} />}
              bgColor={"brand.100"}
              color={"white"}
              py={8}
              px={4}
              _hover={{ bg: "red.500" }}
              size="sm"
              mb={2}
            >
              Change Avatar
            </Button>
            <Text fontSize="sm" color="gray.500">
              Upload JPG, GIF, or PNG image, 300 x 300 required
            </Text>
          </Box>
        </Flex>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mb={6}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="First Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="Last Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="Phone"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Text fontSize={"14px"}> www.apexcodestudios.com/</Text>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="abram_marvynn"
            />
          </FormControl>
        </Grid>

        <Text fontSize="lg" fontWeight="bold" mt={6} mb={2}>
          Profile Visibility
        </Text>
        <RadioGroup defaultValue="Public">
          <HStack spacing={4}>
            <Radio
              sx={{
                "&[aria-checked=true], &[data-checked], &[data-state=checked]":
                  {
                    background: "brand.100",
                    borderColor: "none",
                    border: "none",
                    color: "white",

                    _hover: {
                      background: "brand.100",
                      borderColor: "brand.100",
                    },
                  },
              }}
              value="Public"
            >
              Public
            </Radio>
            <Radio
              sx={{
                "&[aria-checked=true], &[data-checked], &[data-state=checked]":
                  {
                    background: "brand.100",
                    borderColor: "none",
                    border: "none",
                    color: "white",

                    _hover: {
                      background: "brand.100",
                      borderColor: "brand.100",
                    },
                  },
              }}
              value="Private"
            >
              Private
            </Radio>
          </HStack>
        </RadioGroup>
        <Text color="gray.500" fontSize="sm" mt={2}>
          Making your profile public means anyone can see your information
        </Text>

        <FormControl mt={6}>
          <FormLabel>Bio</FormLabel>
          <Textarea
            h={60}
            bg={"gray.50"}
            placeholder="Tell us a bit about yourself"
          />
        </FormControl>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} mt={6}>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="Ex: San Francisco, CA"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              _focus={{ borderColor: "gray.200", boxShadow: "none" }}
              py={7}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={"gray.50"}
              border={"none"}
              placeholder="United States"
            />
          </FormControl>
        </Grid>
        <FormControl mt={4}>
          <FormLabel>Your Website</FormLabel>
          <Input
            _focus={{ borderColor: "gray.200", boxShadow: "none" }}
            py={7}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            bg={"gray.50"}
            border={"none"}
            placeholder="Your Website"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Connect With Twitter</FormLabel>
          <Input
            _focus={{ borderColor: "gray.200", boxShadow: "none" }}
            py={7}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            bg={"gray.50"}
            border={"none"}
            placeholder="Username"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Connect With Facebook</FormLabel>
          <Input
            _focus={{ borderColor: "gray.200", boxShadow: "none" }}
            py={7}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            bg={"gray.50"}
            border={"none"}
            placeholder="Username"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Connect With Instagram</FormLabel>
          <Input
            _focus={{ borderColor: "gray.200", boxShadow: "none" }}
            py={7}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            bg={"gray.50"}
            border={"none"}
            placeholder="Username"
          />
        </FormControl>

        <HStack mt={8} spacing={4}>
          <Button
            bgColor="brand.100"
            _hover={{ bgColor: "red.500" }}
            color="white"
            size="lg"
            px={14}
            py={7}
            fontSize="md"
          >
            Save Changes
          </Button>
          <Button
            bgColor="gray.500"
            _hover={{ bgColor: "gray.400" }}
            color="white"
            size="lg"
            px={14}
            py={7}
            fontSize="md"
          >
            Cancel
          </Button>
        </HStack>
      </Box>

      <Box bg="gray.50" borderRadius="lg" p={8} mt={8} boxShadow="md">
        <Text fontSize="2xl" fontWeight="normal" mb={4}>
          Background Image
        </Text>
        <Box position={"relative"}>
          <Image
            src={background}
            w={"full"}
            alt="Background"
            borderRadius="lg"
            mb={4}
          />
          <Button
            position={"absolute"}
            right={5}
            top={10}
            zIndex={1}
            leftIcon={<FiUpload />}
            colorScheme="gray"
            bg={"gray.50"}
            py={6}
          >
            Upload Cover
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditProfile;