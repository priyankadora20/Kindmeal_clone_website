import { Badge, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const YourItem = () => {
  const [getRestaurant, setGetrestaurant] = useState([]);

  const localStorage_Getting = () => {
    let values = JSON.parse(localStorage.getItem("AddingDish")) || [];
    if (values.length === 0) {
      console.log("The Length is 0");
    } else {
      setGetrestaurant(values);
    }
  };

  useState(() => {
    localStorage_Getting();
  }, []);

  console.log(getRestaurant);
  return (
    <>
      <Text
        fontSize={"4xl"}
        color="orange.400"
        fontWeight={"bold"}
        textShadow="1px 1px #ff0000"
        mt={10}
      >
        Here Are all Your Dishes
      </Text>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        width={"80%"}
        margin="auto"
        mt={8}
        mb={8}
        justifyContent="center"
        alignItems={"center"}
        p="4"
        boxShadow="dark-lg"
        rounded="3xl"
        bg="white"
      >
        {getRestaurant.length > 0
          ? getRestaurant.map((elem) => (
              <Box
                borderWidth="3px"
                borderRadius="lg"
                overflow="hidden"
                key={Math.random()}
                boxShadow="lg"
                rounded="md"
                bg="white"
              >
                <Image src={elem.images} alt="Dan Abramov" width={"100%"} />
                <Text m={2} fontWeight="bold" fontSize={"xl"}>
                  {elem.Name}
                </Text>
                <Flex gap={3}>
                  <Text>🍒</Text>
                  <Text textAlign={"left"} fontSize="lg" width={"85%"}>
                    {elem.Special}
                  </Text>
                </Flex>
                <Text textAlign={"left"} p="2">
                  {" "}
                  😋 {elem.Type_of_food}
                </Text>
              </Box>
            ))
          : null}
      </Grid>
    </>
  );
};

export default YourItem;
