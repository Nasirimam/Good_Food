import {
  Box,
  Heading,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const Skeletonitem = () => {
  const sekeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {sekeleton.map((elem) => (
          <Box key={elem} padding="6" boxShadow="lg" bg="white" h="300px">
            <SkeletonCircle size="40px" />
            <SkeletonText mt="4" noOfLines={6} spacing="4" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skeletonitem;
