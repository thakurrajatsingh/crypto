import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Container,
  HStack,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "../components/Error";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <Error msg={"Error while API Data loading"} />;

  return (
    <Container maxW={"container.lg"} w={"100vw"} mb={20}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {exchanges.map((i) => {
              return (
                <ExchangesCard
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  url={i.url}
                  rank={i.trust_score_rank}
                />
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangesCard = ({ url, name, img, rank }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={["90vw", "60"]}
        h={60}
        shadow={"lg"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={4}
        objectFit={"contain"}
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
          {name}
        </Heading>
        <Text noOfLines={1}>{rank}</Text>
      </VStack>
    </a>
  );
};
export default Exchanges;
