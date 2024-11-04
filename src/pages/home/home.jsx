import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Avatar,
  useColorModeValue,
  Image,
  Stack,
  Center,
} from "@chakra-ui/react";
import Layout from "../../layout";

import PostCard from "./components/PostCard";
import TrendItem from "./components/Trends";

const Home = () => {
  return (
    <Layout>
      <Box maxW="1200px" mx="auto">
        <Box
          mb={8}
          p={52}
          w={"full"}
          bgImage={"/assets/mainBanner.svg"}
          bgColor={"brand.100"}
          bgSize="cover"
          bgPos="center"
          color="white"
          textAlign="center"
        >
          <Text
            lineHeight={"63.48px"}
            fontWeight={700}
            fontSize={"48.8px"}
            mb={4}
          >
            The Snap Pixel: How It Works and How to Install
          </Text>
          <Text fontSize={"20px"}>
            Let’s make your work more organized and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </Text>
        </Box>

        <Flex
          mt={-20}
          gap={4}
          overflowY="hidden"
          overflowX="auto"
          mb={8}
          whiteSpace="nowrap"
          sx={{
            // Custom styles to hide the scrollbar
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome, Safari, and Opera
            },
            "& scrollbarWidth": "none", // For Firefox
          }}
        >
          {Array(9)
            .fill("")
            .map((_, index) => (
              <Box
                bgImage="/assets/sliderImage.svg"
                key={index}
                w="210px" // Fixed width to maintain size
                h="140px"
                p={2}
                bgPos="center"
                bgSize="cover"
                borderRadius="md"
                flexShrink={0} // Prevent shrinking
              >
                <Heading color="white" size="sm" mb={1} mt={8}>
                  Future of Data
                </Heading>
                <Text color="white" whiteSpace={"wrap"} fontSize="10px">
                  Thanks to never-ending piles of data & the amount of insight
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex gap={2} my={3} alignItems="center">
                    <Avatar size="xs" src="/assets/avatar1.svg" />
                    <Text color="white" fontSize="10px">
                      Warren Casey
                    </Text>
                  </Flex>
                  <Text fontSize="10px" color="white">
                    12 May
                  </Text>
                </Flex>
              </Box>
            ))}
        </Flex>

        <Flex gap={8}>
          <Box flex="2">
            <PostCard
              username="Abram Maryan"
              avatarSrc="/assets/avatar2.svg"
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc="/assets/image1.png"
            />
            <PostCard
              username="Abram Maryan"
              avatarSrc="/assets/avatar2.svg"
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc="/assets/banner1.svg"
            />
            <PostCard
              username="Abram Maryan"
              avatarSrc="/assets/avatar2.svg"
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc="/assets/banner1.svg"
            />
          </Box>

          <Box flex="1" display={{ base: "none", lg: "block" }}>
            <Box
              mb={8}
              p={4}
              bg={useColorModeValue("white", "gray.800")}
              borderRadius="md"
              shadow="md"
            >
              <Heading size="sm" mb={4}>
                You might like
              </Heading>
              {["Typeface", "Paul Mc", "Sam Altman"].map((name, index) => (
                <Flex
                  justifyContent={"space-between"}
                  align="center"
                  mb={3}
                  key={index}
                >
                  <Stack spacing={0}>
                    <Flex alignItems={"start"}>
                      <Avatar
                        name={name}
                        src="/assets/avatar1.svg"
                        size="sm"
                        mr={3}
                      />
                      <Stack spacing={0}>
                        <Text fontWeight="semibold">{name}</Text>
                        <Text fontSize="10px" color={"gray.600"}>
                          @Paul
                        </Text>
                      </Stack>
                      <Image mt={1} src="/assets/verified.svg" w={4} />
                    </Flex>
                  </Stack>
                  <Box>
                    <Button
                      variant="solid"
                      bgColor={"black "}
                      color={"white"}
                      size="md"
                      fontSize="md"
                      fontWeight="medium"
                      rounded={"200px"}
                    >
                      Follow
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Box>

            <Box
              p={4}
              bg={useColorModeValue("white", "gray.800")}
              borderRadius="md"
              shadow="md"
            >
              <Heading size="sm" mb={4}>
                Trends for you
              </Heading>
              <Flex flexDirection="column" gap={4}>
                <TrendItem
                  title="Stripe"
                  category="Trending"
                  posts="4,377 posts"
                />
                <TrendItem
                  title="S&P 500"
                  category="Business & finance. Trending"
                  posts="4,555 posts"
                />
                <TrendItem
                  title="SaaS"
                  category="Trending"
                  posts="4,486 posts"
                />
                <TrendItem
                  title="Tailwind"
                  category="Technology. Trending"
                  posts="1,430 posts"
                />
                <TrendItem
                  title="Notion"
                  category="Trending"
                  posts="23.7K posts"
                />
                <TrendItem
                  title="#figma"
                  category="Technology. Trending"
                  posts=""
                />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
