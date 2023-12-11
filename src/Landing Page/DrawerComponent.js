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
import { ArrowRightIcon, ArrowForwardIcon, aRO } from "@chakra-ui/icons";
export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
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
            <DrawerBody paddingTop={"3rem"}>
              <Button variant={"unstyled"}>Meet The Band</Button>{" "}
            </DrawerBody>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerBody>
              <Button variant={"unstyled"}>Concerts</Button>{" "}
            </DrawerBody>
          </DrawerHeader>
          <DrawerHeader>
            <DrawerBody>
              <Button variant={"unstyled"}>Media</Button>{" "}
            </DrawerBody>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
