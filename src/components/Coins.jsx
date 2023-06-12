import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Button,
  Container,
  HStack,
  Heading,
  Img,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "../components/Error";
import CoinsCard from "./CoinsCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);

  const [currency, setCurrency] = useState("inr");
  // currencysymbol
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(103).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error msg={"Error while API Coins Data loading"} />;

  return (
    <Container maxW={"container.lg"} w={"100%"} mb={20} mt={10}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup mb={"50px"} value={currency} onChange={setCurrency}>
            <HStack
              spacing={5}
              w={["100%", "fit-content"]}
              shadow={"base"}
              p={5}
              borderRadius={"lg"}
              justifyContent={["center", "flex-start"]}
            >
              <Radio value="inr">INR</Radio>
              <Radio value="eur">EUR</Radio>
              <Radio value="usd">USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {coins.map((i) => {
              return (
                <CoinsCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>
          <HStack w={"100%"} p={10} overflowX={"auto"}>
            {btns.map((item, index) => {
              return (
                <Button
                  key={index}
                  colorScheme="cyan"
                  borderRadius={"full"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
