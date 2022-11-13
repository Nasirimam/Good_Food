import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AuthContext/AuthContext";
import Category from "./Component/Category";
import Poster from "./Component/Poster";

const Home = () => {
  const { isAuth } = useContext(AppContext);

  return (
    <div>
      {isAuth ? (
        <Heading color="cyan.500" mt={6}>
          Please Login to Go To Any Page
        </Heading>
      ) : null}
      <Poster />
      <Category />
    </div>
  );
};

export default Home;
