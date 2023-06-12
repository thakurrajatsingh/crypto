import React from "react";
import { Img, VStack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinsCard = ({ id, price, name, img, symbol, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={["90vw", "60"]}
        h={60}
        shadow={"lg"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={4}
        borderRadius={"lg"}
        transition={"all 0.2s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Img
          src={img}
          p={2}
          w={20}
          h={20}
          borderRadius={"full"}
          objectFit={"contain"}
        />
        <Heading size={"md"} p={2} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : "na"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinsCard;
