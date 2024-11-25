import React from "react";
import Layout from "../layout";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import avatar2 from "../../assets/avatar5.svg";

const tabData = [
  { label: "Accounts", key: "accounts" },
  { label: "Polls", key: "polls" },
];

const SearchMobile = () => {
  return (
    <Layout>
      <Box px={5} py={5}>
        {/* Search Input */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon mt={2} color="gray.300" />}
          />
          <Input
            py={6}
            type="text"
            placeholder="Search"
            variant="outline"
            rounded="200px"
            _focus={{ borderColor: "brand.100", boxShadow: "none" }}
            bgColor={useColorModeValue("gray.50", "gray.600")}
          />
        </InputGroup>
      </Box>

      {/* Tabs Component */}
      <Tabs>
        <TabList>
          {tabData.map((tab) => (
            <Tab
              key={tab.key}
              py={{ base: 3, lg: 4 }}
              w="full"
              _selected={{
                borderBottom: "3px solid",
                borderColor: "brand.100",
                color: "brand.100",
              }}
              color="gray.400"
              fontSize={{ base: 10, md: "sm", lg: "md" }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabData.map((tab) => (
            <TabPanel key={tab.key}>
              <Flex direction="column" gap={4}>
                {/* Here you could create the content dynamically as well */}
                <Box w="400px" display="flex" justifyContent="space-between">
                  <Flex align="center" gap={4}>
                    <Box
                      as="img"
                      src={avatar2}
                      alt="User Avatar"
                      borderRadius="full"
                    />
                    <Box>
                      <Box fontWeight="bold">Sam Willson</Box>
                      <Box fontSize="sm" color="gray.500">
                        @SamWill
                      </Box>
                    </Box>
                  </Flex>
                  <Box>
                    <Box
                      as="button"
                      px={4}
                      py={2}
                      border="1px solid"
                      borderColor="red.400"
                      borderRadius="full"
                      color="red.400"
                      fontWeight="semibold"
                      _hover={{ bg: "red.100" }}
                    >
                      Follow
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default SearchMobile;
