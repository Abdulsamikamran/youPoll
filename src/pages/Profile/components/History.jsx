import React, { useState } from "react";
import PollCard from "./PollCard";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import prev from "/assets/prev.svg";
import next from "/assets/next.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({
  totalPages = 70,
  siblingCount = 2,
  currentPage = 1,
  onPageChange,
}) => {
  const [page, setPage] = useState(currentPage);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    onPageChange && onPageChange(newPage);
  };

  const generatePages = () => {
    const pages = [];
    const start = Math.max(1, page - siblingCount);
    const end = Math.min(totalPages, page + siblingCount);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <HStack
      w={"full"}
      color={"gray.300"}
      justify={"center"}
      py={8}
      spacing={5}
      align="center"
    >
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<Image src={prev} />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 3)}
        aria-label="Previous"
      />
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<ChevronLeftIcon />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 1)}
        aria-label="Previous"
      />
      <Button w={"60px"} h={"60px"} bg={"gray.100"}>
        ...
      </Button>
      {generatePages().map((pageNumber) => (
        <Button
          w={"60px"}
          h={"60px"}
          key={pageNumber}
          onClick={() => handleChangePage(pageNumber)}
          bg={page === pageNumber ? "brand.100" : "gray.100"}
          color={page === pageNumber ? "white" : "black"}
        >
          {pageNumber}
        </Button>
      ))}
      <Button w={"60px"} h={"60px"} bg={"gray.100"}>
        ...
      </Button>
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<ChevronRightIcon />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 1)}
        aria-label="Next"
      />
      <IconButton
        w={"60px"}
        h={"60px"}
        icon={<Image src={next} />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 3)}
        aria-label="Next"
      />
      <Text>{totalPages} Pages</Text>
    </HStack>
  );
};

const History = () => {
  return (
    <Flex direction={"column"} gap={10}>
      <PollCard />
      <PollCard />
      <Pagination />
    </Flex>
  );
};

export default History;
