import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Batman from "../../Images/Batman.png";
import Hulk from "../../Images/Hulk.png";
import IronMan from "../../Images/IronMan.png";
import SuperMan from "../../Images/superman.png";
import Thor from "../../Images/Thor.png";

const Profile = () => {
  const [ShopDetails, setShopDetails] = useState({
    Shop_Name: "",
    Cuisine: "",
    Opening: "",
    Phone: "",
    Address: "",
  });
  const [RestaurantDetails, setRestaurantDetails] = useState({
    Name: "",
    Gender: "",
    Country: "",
    BirthDate: "",
    Email: "",
  });

  const [AddedItem, setAddedItem] = useState([]);

  // Getting the value of the Local Storage

  const Get_LocalStorage_Data = () => {
    let ShopDetails = JSON.parse(localStorage.getItem("ShopDetails"));
    let RestaurantDetails =
      JSON.parse(localStorage.getItem("RestaurantDetails")) || [];
    setShopDetails(ShopDetails);
    setRestaurantDetails(RestaurantDetails);
    let ItemAddedToLocalStorage =
      JSON.parse(localStorage.getItem("AddingDish")) || [];
    setAddedItem(ItemAddedToLocalStorage);
  };

  useEffect(() => {
    Get_LocalStorage_Data();
  }, []);
  return (
    <Box
      width={{
        sm: "90%",
        md: "97%",
        lg: "70%",
      }}
      margin="auto"
      mt={10}
    >
      <Box
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="yellow.100"
        border={"8px"}
        borderColor="orange.600"
      >
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          // gap={6}
        >
          <Box>
            <Text fontSize="4xl">Total Item Added </Text>
            <Text fontSize="100px" color="green.600" mt={"-1"}>
              {AddedItem.length}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"4xl"} mb="3" color={"red.400"}>
              Super Hero Rank
            </Text>
            <Flex justifyContent={"center"} alignItems="center">
              {AddedItem.length < 5 ? (
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={Batman}
                  alt="Dan Abramov"
                />
              ) : AddedItem.length < 10 ? (
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={SuperMan}
                  alt="Dan Abramov"
                />
              ) : AddedItem.length < 15 ? (
                <Image
                  boxSize="200px"
                  objectFit="cover"
                  src={Hulk}
                  alt="Dan Abramov"
                />
              ) : AddedItem.length < 20 ? (
                <Image
                  boxSize="170px"
                  // objectFit="cover"
                  src={IronMan}
                  alt="Dan Abramov"
                />
              ) : AddedItem.length < 25 ? (
                <Image
                  boxSize="200px"
                  objectFit="cover"
                  src={Thor}
                  alt="Dan Abramov"
                />
              ) : null}

              <Box>
                <Text>
                  {AddedItem.length < 5
                    ? "Batman"
                    : AddedItem.length < 10
                    ? "SuperMan"
                    : AddedItem.length < 15
                    ? "Hulk"
                    : AddedItem.length < 20
                    ? "Iron Man"
                    : AddedItem.length < 25
                    ? "Thor"
                    : null}
                </Text>
                <Text>
                  {AddedItem.length < 5
                    ? "Level 1"
                    : AddedItem.length < 10
                    ? "Level 2"
                    : AddedItem.length < 15
                    ? "Level 3"
                    : AddedItem.length < 20
                    ? "Level 4"
                    : AddedItem.length < 25
                    ? "Level 5"
                    : null}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Box>
      {/* Last two boxes of the the Gird  */}
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
        mt={5}
        mb={5}
        // width="90%"
      >
        <Box
          textAlign="left"
          pl={5}
          boxShadow="dark-lg"
          // p="3"
          rounded="md"
          bg="yellow.100"
          border={"8px"}
          borderColor="orange.600"
          height={"90%"}
        >
          <Text fontSize="4xl" as="b" color={"orange"}>
            Personal Profile
          </Text>
          <Flex gap={"2.8rem"}>
            <Text mb={"-1"}>Name :</Text>{" "}
            <Text mb={"-1"}>{RestaurantDetails.Name}</Text>
          </Flex>
          <Flex gap={"2.3rem"}>
            <Text mb={"-1"}>Gender :</Text>{" "}
            <Text mb={"-1"}> {RestaurantDetails.Gender}</Text>
          </Flex>
          <Flex gap={"1.1rem"}>
            <Text mb={"-1"}>Birth Data :</Text>{" "}
            <Text mb={"-1"}> {RestaurantDetails.BirthDate}</Text>
          </Flex>
          <Flex gap={"2.9rem"}>
            <Text mb={"-1"}>Email :</Text>{" "}
            <Text mb={"-1"}> {RestaurantDetails.Email}</Text>
          </Flex>
          <Flex gap={"1.8rem"}>
            <Text>Country :</Text> <Text> {RestaurantDetails.Country}</Text>
          </Flex>
          {/* ******************************* */}
        </Box>
        <Box
          textAlign="left"
          pl={5}
          boxShadow="dark-lg"
          p="3"
          rounded="md"
          bg="yellow.100"
          border={"8px"}
          borderColor="orange.600"
        >
          <Text fontSize="4xl" as="b" color={"orange"}>
            Shop Details
          </Text>
          <Flex gap={"5rem"}>
            <Text mb={"-1"}>Name :</Text>{" "}
            <Text mb={"-1"}>{ShopDetails.Shop_Name}</Text>
          </Flex>
          <Flex gap={"4.5rem"}>
            <Text mb={"-1"}>Cuisine :</Text>{" "}
            <Text mb={"-1"}> {ShopDetails.Cuisine}</Text>
          </Flex>
          <Flex gap={"1.5rem"}>
            <Text mb={"-1"}>Opening Time :</Text>{" "}
            <Text mb={"-1"}> {ShopDetails.Opening}</Text>
          </Flex>
          <Flex gap={"1.1rem"}>
            <Text mb={"-1"}>Phone Number :</Text>{" "}
            <Text mb={"-1"}> {ShopDetails.Phone}</Text>
          </Flex>
          <Flex gap={"4.3rem"}>
            <Text>Address :</Text> <Text> {ShopDetails.Address}</Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Profile;
