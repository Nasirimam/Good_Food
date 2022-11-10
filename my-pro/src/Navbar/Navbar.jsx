import { Box, Container, HStack, Image, Input, Spacer } from "@chakra-ui/react";
import { redirect, useNavigate } from "react-router-dom";
import DrawerCart from "./cartDrower";
import CatagoryPop from "./Catagorypop";
import DrawerLogin from "./logindrowr";

const Navbar = () => {

  const navigate = useNavigate()

  const handleHomeNav = () => {
    navigate("/")
  }

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
        <Box h="100%" cursor='pointer' onClick={handleHomeNav}>
          <Image
            w="100%"
            h="100%"
            borderRadius='100%'
            src="https://img.freepik.com/premium-vector/premium-restaurant-cafe-logo-vector-illustration-design-restaurant-cafe-exclusive-logo-design-modern-vintage-restaurant-logo-concept-creative-fork-knife-logo-design-inspiration_616557-32.jpg"
            alt="MY LOGO"
          />
        </Box>
        <Spacer />
        <Box>
          <Input
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
