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
import avatar from "/assets/avatar2.svg";
import sliderImage from "/assets/sliderImage.svg";
import mainBanner from "/assets/mainBanner.svg";
import mainBannerMobile from "/assets/mainBannerMobile.svg";
import banner1 from "/assets/image1.png";
import verified from "/assets/verified.svg";
import banner2 from "/assets/banner1.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

import PostCard from "../../components/PostCard";
import TrendItem from "./components/Trends";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box maxW="1400px" py={{ base: 3, md: 10 }} mx="auto">
        <Box
          mb={{ base: 14, md: 8 }}
          p={{ base: 14, md: 52 }}
          w={"full"}
          h={{ base: "400px", md: "full" }}
          bgImage={{ base: mainBannerMobile, md: mainBanner }}
          bgColor={"brand.100"}
          bgSize="cover"
          bgPos="center"
          color="white"
          textAlign="center"
        >
          <Text
            px={16}
            lineHeight={{ base: "30px", md: "63.48px" }}
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: 24, md: "48.8px" }}
            mb={4}
          >
            The Snap Pixel: How It Works and How to Install
          </Text>
          <Text fontSize={{ base: 14, md: "20px" }}>
            Let’s make your work more organized and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </Text>
          <Button
            display={{ base: "inline-block", md: "none" }}
            mt={4}
            variant="solid"
            bgColor={"brand.100 "}
            _hover={{ bgColor: "red.500" }}
            color={"white"}
            size="lg"
            onClick={() => navigate("/create-poll")}
            fontSize="md"
            fontWeight="semibold"
            rounded={"200px"}
          >
            Create Poll
          </Button>
        </Box>

        <Flex
          px={{ base: "10px", md: 0 }}
          mt={-20}
          gap={4}
          overflowY="hidden"
          overflowX="auto"
          mb={8}
          whiteSpace="nowrap"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "& scrollbarWidth": "none",
          }}
        >
          {Array(9)
            .fill("")
            .map((_, index) => (
              <Box
                bgImage={sliderImage}
                key={index}
                w="210px"
                h="140px"
                p={2}
                bgPos="center"
                bgSize="cover"
                borderRadius="md"
                flexShrink={0}
              >
                <Heading color="white" size="sm" mb={1} mt={8}>
                  Future of Data
                </Heading>
                <Text color="white" whiteSpace={"wrap"} fontSize="10px">
                  Thanks to never-ending piles of data & the amount of insight
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex gap={2} my={3} alignItems="center">
                    <Avatar size="xs" src={avatar} />
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
        <Flex fontWeight={"semibold"} ml={5} fontSize={14} mb={5} gap={2}>
          <Flex align={"center"} gap={1}>
            <Text>Trending</Text>
            <MdKeyboardArrowDown />
          </Flex>
          <Flex align={"center"} gap={1}>
            <Text>More</Text>
            <MdKeyboardArrowDown />
          </Flex>
        </Flex>

        <Flex gap={8}>
          <Box flex="2">
            <PostCard
              username="Abram Maryan"
              avatarSrc={avatar}
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc={banner1}
            />
            <PostCard
              username="Abram Maryan"
              avatarSrc={avatar}
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc={banner2}
            />
            <PostCard
              username="Abram Maryan"
              avatarSrc={avatar}
              daysAgo="5 days ago"
              question="Question: The Next Era of Air Mobility?"
              category="Business"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              imageSrc={banner2}
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
                      <Avatar name={name} src={avatar} size="sm" mr={3} />
                      <Stack spacing={0}>
                        <Text fontWeight="semibold">{name}</Text>
                        <Text fontSize="10px" color={"gray.600"}>
                          @Paul
                        </Text>
                      </Stack>
                      <Image mt={1} src={verified} w={4} />
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
