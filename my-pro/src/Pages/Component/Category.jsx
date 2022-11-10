import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom'

const Category = () => {
  const item = [
    {
      name: "Best Food",
      value: "best-foods",
      img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
    },
    {
      name: "Barbique",
      value: "bbqs",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Burger",
      value: "burgers",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Fried Chicken",
      value: "fried-chicken",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Pizzas",
      value: "pizzas",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Sandwiches",
      value: "sandwiches",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Drinks",
      value: "drinks",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Dessests",
      value: "desserts",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
    {
      name: "Ice Creams",
      value: "ice-cream",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    },
  ];

  return (
    <Box width="90%" m="auto" mb={10} mt={10}>
      <Heading border="0px solid" textAlign="justify" p="10px">
        Shop by categories
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {item.map((elem) => (
          <NavLink key={elem.name} to={`/${elem.value}`}>
          <Box
            boxShadow="xl"
            bgColor="white"
            p={2}
            h="250px"
            border="0px solid"
            borderRadius={15}
          >
            <Image w="100%" h="90%" src={elem.img} alt={elem.name} />
            <Heading size={1} h="10%">
              {elem.name}
            </Heading>
          </Box>
          </NavLink>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
