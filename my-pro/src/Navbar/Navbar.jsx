import { Box, Container, HStack, Image, Input, Spacer } from "@chakra-ui/react";
import { redirect } from "react-router-dom";
import DrawerCart from "./cartDrower";
import CatagoryPop from "./Catagorypop";
import DrawerLogin from "./logindrowr";

const Navbar = () => {
  return (
    <div className="navBar">
      <HStack
        pos="sticky"
        boxShadow="base"
        p={1}
        gap={10}
        bg="rgba(255, 255, 255, 0.92)"
        h={20}
      >
        <Spacer />
        <Box h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://img.freepik.com/free-psd/logo-mockup_35913-2089.jpg?w=2000"
            alt="MY LOGO"
          />
        </Box>
        <Spacer />
        <Box>
          <Input
            bgColor="red.50"
            _hover={{ bgColor: "red.100" }}
            variant="filled"
            focusBorderColor="#F56565"
            placeholder="Search Your Delicious Food"
            size="md"
            htmlSize={40}
          />
        </Box>
        <Spacer />
        <Box>
          <CatagoryPop />
        </Box>
        <Box>
          <DrawerLogin />
        </Box>
        <Box>
          <DrawerCart />
        </Box>
        <Spacer />
      </HStack>
    </div>
  );
};
export default Navbar;
