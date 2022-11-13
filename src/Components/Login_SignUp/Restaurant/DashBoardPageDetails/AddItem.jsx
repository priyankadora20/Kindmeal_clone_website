import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddItem = () => {
  const [Restaurant, setRestaurant] = useState({
    Name: "",
    images: "",
    Type_of_food: "",
    Special: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({
      ...Restaurant,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    let getvalue = JSON.parse(localStorage.getItem("AddingDish")) || [];
    console.log(Restaurant);
    getvalue.push(Restaurant);
    localStorage.setItem("AddingDish", JSON.stringify(getvalue));
    setRestaurant({
      Name: "",
      images: "",
      Type_of_food: "",
      Special: "",
    });
  };

  // *************************************************
  return (
    <Box
      w={"60%"}
      p={10}
      color="white"
      margin={"auto"}
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      mt={10}
      mb="10"
    >
      <Text
        fontSize={"4xl"}
        color="orange.400"
        fontWeight={"bold"}
        textShadow="1px 1px #ff0000"
      >
        Add Your Dish Info{" "}
      </Text>
      <form onSubmit={HandleSubmit}>
        {/* *************************************** */}
        <FormControl isRequired mt={4}>
          <FormLabel color={"black"}>Dish Name </FormLabel>
          <Input
            placeholder=""
            color={"black"}
            name="Name"
            value={Restaurant.Name}
            onChange={HandleChange}
            textAlign="left"
            width={"95%"}
          />
        </FormControl>
        {/* ************************************************************** */}
        <FormControl mt={4} isRequired>
          <FormLabel color={"black"}>Type</FormLabel>
          <Select
            placeholder=""
            color={"blackAlpha.700"}
            name="Type_of_food"
            value={Restaurant.Type_of_food}
            onChange={HandleChange}
            textAlign="left"
            width={"100%"}
          >
            <option>Vegan</option>
            <option>Vegetarian</option>
            <option>Vegetarian-Friendly</option>
            <option>Non-Veg</option>
            <option>Mixed</option>
          </Select>
        </FormControl>
        {/* ********************************************************** */}
        <FormControl isRequired mt={4}>
          <FormLabel color={"black"}>Something Special about Dish </FormLabel>
          <Textarea
            placeholder="Why should I Eat Your Dish..."
            color={"black"}
            name="Special"
            value={Restaurant.Special}
            onChange={HandleChange}
            textAlign="left"
            width={"95%"}
          />
        </FormControl>
        {/* *********************************************************** */}
        <FormControl isRequired mt={4}>
          <FormLabel color={"black"}>Dish Image URl</FormLabel>
          <Input
            placeholder="URL"
            color={"black"}
            name="images"
            type={"url"}
            value={Restaurant.images}
            onChange={HandleChange}
            textAlign="left"
            width={"95%"}
          />
        </FormControl>
        {/* ******************************************************  */}
        <Button colorScheme="green" mt="5" type="submit" color={"black"}>
          Add Dish {"^"}
        </Button>
      </form>
    </Box>
  );
};

export default AddItem;
