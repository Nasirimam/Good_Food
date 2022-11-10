import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Button,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthContext";
import Skeletonitem from "./Component/Skeleton";

const Product = () => {
  const param = useParams();
  const {isAuth,setProduct,totalPrice} = useContext(AppContext)

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loding, setLoding] = useState(true);

  const getProduct = (para) => {
    return fetch(
      `https://ig-food-menus.herokuapp.com/${para}?_limit=9&_page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    setLoding(true)
    getProduct(param.name);
    setLoding(false)
  }, [page,param]);

  const addProduct = (elem) => {
    setProduct(elem)
    totalPrice(elem.price)
  }

  if (loding) {
    return <Skeletonitem />;
  } else {
    return (
      <Box>
        <SimpleGrid
          columns={3}
          spacing={6}
          width="90%"
          margin="auto"
          mt={10}
          mb={10}
        >
          {data.map((elem) => (
            <Box
              key={elem.id}
              display="flex"
              flexDirection="column"
              gap="10px"
              border="0px solid"
              p={2}
              boxShadow="xl"
              borderRadius={15}
              textAlign="justify"
            >
              <Image w='100%' h='80%' src={elem.img} alt={elem.name} />
              <Heading size="md" pl={3}>
                Name : {elem.name}
              </Heading>
              <Heading size="xs" pl={3}>
                Discription : {elem.dsc}
              </Heading>
              <Heading size="sm" pl={3}>
                MRP : ${elem.price}
              </Heading>
              <Button disabled={isAuth} onClick={()=>{addProduct(elem)}} >ADD TO CART</Button>
            </Box>
          ))}
        </SimpleGrid>
        <Center gap={5}>
          <Button disabled={page <= 1} onClick={() => setPage(page - 1)+setLoding(true)}>
            Prev
          </Button>
          <Button>{page}</Button>
          <Button disabled={data.length!=9} onClick={() => setPage(page + 1)+setLoding(true)}>Next</Button>
        </Center>
      </Box>
    );
  }
};

export default Product;
