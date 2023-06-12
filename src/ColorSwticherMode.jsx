import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorSwticherMode = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <IconButton
      onClick={toggleColorMode}
      size="md"
      icon={<SwitchIcon />}
      zIndex={1000}
      colorScheme="green"
      // color={"white"}
      {...props}
    />
  );
};

export default ColorSwticherMode;
