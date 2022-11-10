import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  VStack,
  Image,
  Heading,
  Flex,
  Center,

} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../AuthContext/AuthContext";

function DrawerCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { cart,total } = useContext(AppContext);

  console.log(cart);

  return (
    <>
      <Button
        leftIcon={<FaShoppingCart />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Orders</DrawerHeader>

          <DrawerBody>
            <VStack>
              {cart.map((elem) => (
                <Box display='flex' border='1px solid' w='420px' h='90px' alignItems='center' p={2} gap={3} >
                  <Image src={elem.img} alt={elem.name} w='20%' />
                  <Heading size='xs' w='35%'>Name: {elem.name}</Heading>
                  <Heading size='xs' w='20%'>MRP: ${elem.price}</Heading>
                  <Button size='sm' w='20%'>Remove</Button>
                </Box>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Heading size='md' mr={120}>Total: ${total}</Heading>
            <Button variant="outline" mr={4} onClick={onClose}>
              Back
            </Button>
            <Button colorScheme="blue">Order</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerCart;
