import { VStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack justifyContent={"center"} h={"80vh"}>
      <Spinner size={"xl"} color="#4caa78" />
      <Text>Loading...</Text>
    </VStack>
  );
};

export default Loader;
