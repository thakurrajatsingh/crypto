import { Avatar, Box, HStack, Stack, Text, filter } from "@chakra-ui/react";
import React, { useState } from "react";
import imgsrc from "../assets/1.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      justifyContent={"space-between"}
      //border={"1px solid red"}
      p={["5", "10"]}
      bg={"#4caa78"}
    >
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-around"}
        borderBottom={"1px solid rgba(211, 211, 211, 0.3)"}
        p={10}
        mb={10}
      >
        <Avatar
          size={"xl"}
          src={imgsrc}
          objectFit={"cover"}
          filter={"grayscale(1)"}
        />
        <Text textAlign={"center"}>© {year} Crypto. All Rights Reserved.</Text>
      </Stack>

      <HStack w={["100%", "90%"]} m={"auto"}>
        <Text
          textAlign={["center", "left"]}
          justifyContent={"space-between"}
          lineHeight={["6", "8"]}
          fontSize={[13, 16]}
          letterSpacing={"inherit"}
        >
          <b>IMPORTANT DISCLAIMER:</b> All content provided herein our website,
          hyperlinked sites, associated applications, forums, blogs, social
          media accounts and other platforms (“Site”) is for your general
          information only, procured from third party sources. We make no
          warranties of any kind in relation to our content, including but not
          limited to accuracy and updatedness. No part of the content that we
          provide constitutes financial advice, legal advice or any other form
          of advice meant for your specific reliance for any purpose. Any use or
          reliance on our content is solely at your own risk and discretion. You
          should conduct your own research, review, analyse and verify our
          content before relying on them. Trading is a highly risky activity
          that can lead to major losses, please therefore consult your financial
          advisor before making any decision. No content on our Site is meant to
          be a solicitation or offer.
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
