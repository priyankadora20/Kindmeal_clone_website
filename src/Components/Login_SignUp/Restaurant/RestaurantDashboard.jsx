import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import Banner from "../Images/Banner.jpg";
import MyImg from "../Images/MyImg.jpg";

const RestaurantDashboard = () => {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        backdropBlur="8px"
        bgGradient="linear(to-r, black, yellow.400, black)"
        mt={"-0.5"}
      >
        <Image
          src={Banner}
          alt="Dan Abramov"
          borderBottomLeftRadius={"3xl"}
          borderBottomRightRadius={"3xl"}
          boxShadow="0px 27px 44px -4px black"
        />
      </Flex>
      <Flex
        gap={{
          sm: "2",
          md: "5",
          lg: "40",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        display={{
          sm: "grid",
          md: "grid",
          lg: "flex",
        }}
        marginTop="-14"
      >
        <Image
          src={MyImg}
          alt="Dan Abramov"
          boxSize={"200px"}
          borderRadius="3xl"
          //   width={{
          //     sm: "40%",
          //   }}
          //   margin={{
          //     sm: "auto",
          //     md: "none",
          //     lg: "none",
          //   }}
        />
        <Grid templateColumns="repeat(3, 1fr)" gap={20}>
          <Button colorScheme="teal" size="lg">
            Profile
          </Button>
          <Button colorScheme="teal" size="lg">
            Add Item
          </Button>
          <Button colorScheme="teal" size="lg">
            Your Item
          </Button>
        </Grid>
      </Flex>
    </Box>
  );
};

export default RestaurantDashboard;
