import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Button,
  Center,
  Skeleton,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthContext";
import Skeletonitem from "./Component/Skeleton";

const Product = () => {
  const param = useParams();
  const { isAuth, setProduct, cart, setTotal, query } = useContext(AppContext);
  const toast = useToast();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loding, setLoding] = useState(true);
  const [search, setSearch] = useSearchParams();
  const [sort, setSort] = useState("");

  const getProduct = (para) => {
    return fetch(
      `http://localhost:8080/${para}?_limit=9&_page=${page}&q=${query}&_sort=price&_order=${sort}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    setLoding(true);
    getProduct(param.name);
    setLoding(false);
  }, [page, param, query, sort]);

  useEffect(() => {
    setSearch({ page });
  }, [page]);

  const addProduct = (elem) => {
    setProduct(elem);
    toast({
      title: `${elem.name} Added`,
      status: "success",
      isClosable: true,
    });
  };

  const sum = cart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  setTotal(sum);

  const handleSorting = (e) => {
    setSort(e.target.value);
  };

  if (loding) {
    return <Skeletonitem />;
  } else {
    return (
      <Box>
        <Flex w="90%" m="auto" border="0px solid" mt={5}>
          <Center gap={5}>
            <Select placeholder="Sort By Price" onChange={handleSorting}>
              <option value="asc">Sort Low to High</option>
              <option value="desc">Sort High To Low</option>
            </Select>
          </Center>
        </Flex>

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
              <Image w="100%" h="80%" src={elem.img} alt={elem.name} />
              <Heading size="md" pl={3}>
                Name : {elem.name}
              </Heading>
              <Heading size="xs" pl={3}>
                Discription : {elem.dsc}
              </Heading>
              <Heading size="sm" pl={3}>
                MRP : ${elem.price}
              </Heading>
              <Button
                disabled={isAuth}
                onClick={() => {
                  addProduct(elem);
                }}
              >
                ADD TO CART
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <Center gap={5}>
          <Button
            disabled={page <= 1}
            onClick={() => setPage(page - 1) + setLoding(true)}
          >
            Prev
          </Button>
          <Button>{page}</Button>
          <Button
            disabled={data.length != 9}
            onClick={() => setPage(page + 1) + setLoding(true)}
          >
            Next
          </Button>
        </Center>
      </Box>
    );
  }
};

export default Product;
