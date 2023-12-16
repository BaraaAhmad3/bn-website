import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import "./LandingPage.css";
import {
  Container,
  Center,
  Heading,
  Button,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Tooltips from "../TooltipHeader/Tooltips";

export default function LandingPage() {
  const [isButtonVisible, setButtonVisibility] = useState(true);

  const handleButtonClick = () => {
    setButtonVisibility(!isButtonVisible);
  };

  return (
    <div className="body">
      <div>
        <div className="app-container">
          <DrawerComponent></DrawerComponent> <Tooltips></Tooltips>
        </div>
        <VStack>
          <Container>
            <Center>
              <Heading color={"white"} as={"h4"} size={"3xl"}>
                The Burn Notice
              </Heading>
            </Center>
          </Container>
          <Flex
            w={"50%"}
            direction={"column"}
            align={"center"}
            paddingTop={"2rem"}
          >
            <Button
              variantColor="teal"
              onClick={handleButtonClick}
              style={{
                backgroundColor: "#3498db",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.5s ease",
              }}
            >
              {isButtonVisible ? "Read Our Bio!" : "Hide Bio"}
            </Button>

            {!isButtonVisible && (
              <Flex
                direction="column"
                align="center"
                justify="center"
                height={"20vh"} // Adjust the height as needed
              >
                <Text
                  onClick={handleButtonClick}
                  color={"white"}
                  style={{
                    padding: "10px",
                    transition: "clip-path 0.5s ease",
                    clipPath: isButtonVisible
                      ? "polygon(0 0, 0 100%, 0% 100%, 0 0)"
                      : "polygon(100% 0, 100% 100%, 0% 100%, 0 0)",
                  }}
                >
                  The Burn Notice is a fiery five-piece band from Oklahoma City.
                  Hailing from the punk and emo scene, this group of talented
                  musicians gather inspiration from all avenues of the music
                  world. From Bad Religion, to Paramore, AFI, Gaslight Anthem
                  and so many more, you can expect a slew of emotions to hit you
                  when you come to a show. One thing is guaranteed, though:
                  you're gonna leave the venue with ringing in yours and our
                  songs in your head.
                </Text>
              </Flex>
            )}
          </Flex>
        </VStack>
      </div>
    </div>
  );
}
