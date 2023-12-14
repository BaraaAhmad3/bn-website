import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box bg="rgb(23, 26, 16)" minH={"100vh"}>
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
