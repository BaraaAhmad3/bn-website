import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import {
  Container,
  Center,
  Heading,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
export default function LandingPage() {
  const [isButtonVisible, setButtonVisibility] = useState(true);

  const handleButtonClick = () => {
    setButtonVisibility(!isButtonVisible);
  };
  return (
    <div>
      <DrawerComponent></DrawerComponent>
      <VStack>
        <Container>
          <Center>
            <Heading color={"white"} as={"h4"} size={"3xl"}>
              The Burn Notice
            </Heading>
          </Center>
        </Container>
        <div>
          {isButtonVisible && (
            <Button
              variantColor="teal"
              onClick={handleButtonClick}
              style={{
                transition: "clip-path 2s ease-in-out",
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 0 0)",
                backgroundColor: "#3498db",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Read Our Bio!
            </Button>
          )}

          {!isButtonVisible && (
            <Text
              onClick={handleButtonClick}
              color={"white"}
              style={{
                transition: "clip-path 3s ease-in-out",
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 0 0)",
                padding: "10px",
              }}
            >
              This is the faded text.
            </Text>
          )}
        </div>
      </VStack>
    </div>
  );
}
