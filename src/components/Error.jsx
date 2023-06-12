import { Alert, AlertIcon, AlertTitle, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Error = ({ msg }) => {
  return (
    <HStack w={"container.md"} pos={"relative"} h={"100vh"} m={"auto"}>
      <Alert pos={"absolute"} bottom={20} status={"error"}>
        <AlertIcon />
        <AlertTitle>{msg}</AlertTitle>
      </Alert>
    </HStack>
  );
};

export default Error;
