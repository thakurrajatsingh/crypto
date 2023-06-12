import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
export const server = "https://api.coingecko.com/api/v3";
