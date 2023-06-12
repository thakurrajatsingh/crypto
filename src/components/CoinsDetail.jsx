import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Img,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import { useParams } from "react-router-dom";
import { server } from "../main";
import ChartComponent from "./ChartComponent";

const CoinsDetail = () => {
  const [Coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [days, setDays] = useState("24h");
  const [array, setArray] = useState([]);

  const param = useParams();

  const [currency, setCurrency] = useState("inr");
  // currencysymbol
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];

  const switchChartStates = (i) => {
    switch (i) {
      case "24h":
        setDays("24h");
        break;
      case "7d":
        setDays("7d");
        break;
      case "14d":
        setDays("14d");
        break;
      case "30d":
        setDays("30d");
        break;
      case "60d":
        setDays("60d");
        break;
      case "200d":
        setDays("200d");
        break;
      case "365d":
        setDays("365d");
        break;
      case "max":
        setDays("max");
        break;

      default:
        setDays("24h");
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${param.id}`);

        const { data: chartData } = await axios.get(
          `${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoin(data);
        setArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [param.id, days, currency]);

  if (error) return <Error msg={"Error while fetching coin detail"} />;
  return (
    <Container maxW={"container.xl"} w={"100%"} mt={40}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box maxW={"container.xl"} w={["100%", "100vw"]}>
            <ChartComponent currency={currencySymbol} arr={array} />
          </Box>
          <HStack overflowX={"auto"} my={5}>
            {btns.map((i) => (
              <Button
                px={10}
                fontSize={"sm"}
                key={i}
                onClick={() => switchChartStates(i)}
              >
                {i}
              </Button>
            ))}
          </HStack>
          <RadioGroup value={currency} onChange={setCurrency} p={["1", "5"]}>
            <HStack
              spacing={5}
              w={"fit-content"}
              shadow={"base"}
              p={5}
              borderRadius={"lg"}
            >
              <Radio value="inr">INR</Radio>
              <Radio value="eur">EUR</Radio>
              <Radio value="usd">USD</Radio>
            </HStack>
          </RadioGroup>
          <VStack
            spacing={4}
            p={["1", "10"]}
            w={"full"}
            alignItems={"flex-start"}
          >
            <Text size={"sm"} opacity={0.7} alignSelf={"self"}>
              Last update on {Date(Coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Img
              src={Coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
            <Stat>
              <StatLabel>{Coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {Coin.market_data.current_price[currency]}{" "}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    Coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {Coin.market_data.price_change_percentage_24h}
              </StatHelpText>
            </Stat>
            <Badge
              colorScheme="cyan"
              fontSize={"2xl"}
            >{`#${Coin.market_cap_rank}`}</Badge>
            <CustomBar
              high={`${currencySymbol}${Coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${Coin.market_data.low_24h[currency]}`}
            />
            <Box w={"full"}>
              <Item title={"MAX SUPPLY"} value={Coin.market_data.max_supply} />
              <Item
                title={"circulating supply"}
                value={Coin.market_data.circulating_supply}
              />
              <Item
                title={"circulating supply"}
                value={`${Coin.market_data.market_cap[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => {
  return (
    <HStack justifyContent={"space-between"} w={"full"} pt={5}>
      <Text fontWeight={"bold"} textTransform={"uppercase"}>
        {title}
      </Text>
      <Text>{value > 0 ? value : "NA"}</Text>
    </HStack>
  );
};

const CustomBar = ({ high, low }) => {
  return (
    <VStack w={"full"}>
      <Progress value={50} w={"full"} colorScheme={"green"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={low} colorScheme={"red"} />
        <Text fontSize={"sm"}>24HR range</Text>
        <Badge children={high} colorScheme={"green"} />
      </HStack>
    </VStack>
  );
};
export default CoinsDetail;
