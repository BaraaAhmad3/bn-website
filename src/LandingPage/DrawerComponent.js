import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Tabs,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  const handleNavigate = (component) => {
    return component;
  };

  return (
    <div>
      <Tabs paddingLeft={"2rem"} paddingTop={"1rem"}>
        <ArrowRightIcon
          size={"lg"}
          ref={btnRef}
          color={"white"}
          onClick={onOpen}
          _hover={{ color: "red", cursor: "pointer" }}
          fontSize={"xl"}
        ></ArrowRightIcon>
      </Tabs>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <DrawerBody>
              <Button
                variant={"unstyled"}
                onClick={() => {
                  onClose();
                  navigate("/");
                }}
              >
                Home
              </Button>
            </DrawerBody>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerBody>
              <Button
                variant={"unstyled"}
                onClick={() => {
                  onClose();
                  navigate("/meet-the-band");
                }}
              >
                Meet The Band
              </Button>
            </DrawerBody>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerBody>
              <Button
                variant={"unstyled"}
                onClick={() => {
                  onClose();
                  navigate("/concerts");
                }}
              >
                Concerts
              </Button>{" "}
            </DrawerBody>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerBody>
              <Button
                variant={"unstyled"}
                onClick={() => {
                  onClose();
                  navigate("/media");
                }}
              >
                Media
              </Button>{" "}
            </DrawerBody>
          </DrawerHeader>
        </DrawerContent>{" "}
      </Drawer>
    </div>
  );
}
