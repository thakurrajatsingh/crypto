import { Box, Img } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box h={"100vh"}>
      <Img
        src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
        objectFit={"cover"}
        w={"100%"}
        h={"100vh"}
        // filter={"grayscale(0.5)"}
      />
    </Box>
  );
};

export default Home;
