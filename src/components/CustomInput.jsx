// src/components/CustomInput.js
import { Input } from "@chakra-ui/react";

const CustomInput = ({ variant, ...props }) => {
  const styles = {
    redOutline: {
      borderColor: "gray.400",
      _hover: {
        borderColor: "red.600",
      },
      _focus: {
        borderColor: "red.400",
        boxShadow: "none",
        outline: "none",
      },
      _active: {
        borderColor: "red.400",
        boxShadow: "none",
        outline: "none",
      },
    },
    outline: {
      borderColor: "gray.300",
      _hover: {
        borderColor: "gray.400",
      },
      _focus: {
        borderColor: "red.500",
        boxShadow: "0 0 0 1px red.500",
      },
    },
  };

  return <Input {...styles[variant]} {...props} />;
};

export default CustomInput;
