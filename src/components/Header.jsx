import { Button, HStack, VStack, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { useRef } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import ColorSwticherMode from "../ColorSwticherMode.jsx";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <HStack
        w={"full"}
        p={5}
        justifyContent={"space-around"}
        shadow={"base"}
        pos={"sticky"}
        top={0}
        bg={"background"}
        opacity={"0.9"}
        zIndex={1000}
        className="desktop"
      >
        <HStack>
          <Link
            to={"/"}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            CRYPTO
          </Link>
        </HStack>
        <HStack spacing={"10"}>
          <Button variant={"unstyled"}>
            <Link to={"/crypto"}>HOME</Link>
          </Button>
          <Button variant={"unstyled"}>
            <Link to={"/exchanges"}>EXCHANGES</Link>
          </Button>
          <Button variant={"unstyled"}>
            <Link to={"/coins"}>COINS</Link>
          </Button>
          <ColorSwticherMode />
        </HStack>
      </HStack>
      <MobileHeader />
    </>
  );
};

const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <HStack
        w={"full"}
        p={5}
        justifyContent={"space-between"}
        shadow={"base"}
        pos={"sticky"}
        top={0}
        bg={"Background"}
        opacity={"0.9"}
        display={"none"}
        zIndex={1000}
        className="mobile"
      >
        <Button ref={btnRef} colorScheme="green" p={1} onClick={onOpen}>
          <BiMenuAltLeft size={"30px"} />
        </Button>
        <ColorSwticherMode />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottom={"1px solid rgba(211, 211, 211, 0.3)"}>
              <Button variant={"unstyled"} w={"full"} onClick={onClose}>
                <Link
                  to={"/"}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    alignItems: "center",
                  }}
                >
                  CRYPTO
                </Link>
              </Button>
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={"10"}>
                <Button
                  colorScheme="green"
                  variant={"unstyled"}
                  w={"full"}
                  onClick={onClose}
                >
                  <Link to={"/crypto"}>HOME</Link>
                </Button>
                <Button variant={"unstyled"} w={"full"} onClick={onClose}>
                  <Link to={"/exchanges"}>EXCHANGES</Link>
                </Button>
                <Button variant={"unstyled"} w={"full"} onClick={onClose}>
                  <Link to={"/coins"}>COINS</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};
export default Header;
