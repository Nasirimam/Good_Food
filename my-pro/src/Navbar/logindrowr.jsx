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
  Heading,
  Input,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { AppContext } from "../AuthContext/AuthContext";

function DrawerLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { users, setUsers, Login, isAuth, Logout } = useContext(AppContext);

  const intData = {
    name: "",
    address: "",
    number: "",
  };

  const [user, setUser] = useState(intData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleTosaveUser = () => {
    setUsers(user);
    Login();
    setUser(intData)
  };

  const handleuserLogout = () => {
    Logout();
  };

  console.log(isAuth);
  console.log(users);

  if (isAuth) {
    return (
      <>
        <Button
          leftIcon={<MdAccountCircle />}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          Login
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
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input
                onChange={handleChange}
                name="name"
                mb={2}
                placeholder="Type Your Name...."
              />
              <Input
                onChange={handleChange}
                name="address"
                mb={2}
                placeholder="Type Your Full Adress..."
              />
              <Input
                onChange={handleChange}
                type="number"
                name="number"
                mb={2}
                placeholder="Type Your Number..."
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={handleTosaveUser}
                colorScheme="blue"
                disabled={user.number.length != 10 || user.name.length < 5 || user.address.length < 10}
              > 
                Login
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return (
      <>
        <Button
          leftIcon={<MdAccountCircle />}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          Profile
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
            <DrawerHeader color='cyan.700' >Your Profile</DrawerHeader>

            <DrawerBody>
              <Box mb={3} color='cyan.400'>
                <Heading size="lg"><span style={{color:'#0987A0'}}>Name : </span>{users.name}</Heading>
              </Box>
              <Box mb={3}  color='cyan.400'>
                <Heading size="md"><span style={{color:'#0987A0'}}>Address : </span>{users.address}</Heading>
              </Box>
              <Box mb={3}  color='cyan.400'>
                <Heading size="md"><span style={{color:'#0987A0'}}>Number : </span>{users.number}</Heading>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleuserLogout} colorScheme="blue">
                Logout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}
export default DrawerLogin;
