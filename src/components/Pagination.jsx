import React, { useState } from "react";
import { Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import prev from "/assets/prev.svg";
import next from "/assets/next.svg";

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
      px={3}
      w="full"
      color="gray.300"
      justify={{ base: "space-between", md: "center" }}
      py={8}
      spacing={{ base: 2, md: 5 }}
      align="center"
    >
      <IconButton
        display={{ base: "none", md: "block" }}
        w="60px"
        h="60px"
        icon={<Image src={prev} />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 3)}
        aria-label="Previous"
      />
      <IconButton
        display={{ base: "none", md: "block" }}
        w="60px"
        h="60px"
        icon={<ChevronLeftIcon />}
        isDisabled={page === 1}
        onClick={() => handleChangePage(page - 1)}
        aria-label="Previous"
      />
      <Button w="60px" h="60px" bg="gray.100">
        ...
      </Button>
      {generatePages().map((pageNumber) => (
        <Button
          w="60px"
          h="60px"
          key={pageNumber}
          onClick={() => handleChangePage(pageNumber)}
          //   _active={{ bg: "red" }}
          _focus={{ bg: "brand.100" }}
          bg={page === pageNumber ? "brand.100" : "gray.100"}
          color={page === pageNumber ? "white" : "black"}
        >
          {pageNumber}
        </Button>
      ))}
      <Button w="60px" h="60px" bg="gray.100">
        ...
      </Button>
      <IconButton
        display={{ base: "none", md: "block" }}
        w="60px"
        h="60px"
        icon={<ChevronRightIcon />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 1)}
        aria-label="Next"
      />
      <IconButton
        display={{ base: "none", md: "block" }}
        w="60px"
        h="60px"
        icon={<Image src={next} />}
        isDisabled={page === totalPages}
        onClick={() => handleChangePage(page + 3)}
        aria-label="Next"
      />
      <Text display={{ base: "none", md: "block" }}>{totalPages} Pages</Text>
    </HStack>
  );
};

export default Pagination;
