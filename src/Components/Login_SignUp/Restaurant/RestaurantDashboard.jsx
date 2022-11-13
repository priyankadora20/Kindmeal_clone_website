import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Banner from "../Images/Banner.jpg";
import AddItem from "./DashBoardPageDetails/AddItem";
import Profile from "./DashBoardPageDetails/Profile";
import YourItem from "./DashBoardPageDetails/YourItem";

const RestaurantDashboard = () => {
  const [shop_Img, setShop_Img] = useState("");
  const getting_Img_Data = () => {
    let shop_Imgs = JSON.parse(localStorage.getItem("ShopDetails"));
    setShop_Img(shop_Imgs.ImageURL);
  };

  let [YouProfile, setProfile] = useState(true);
  let [YourAdditem, setAdditem] = useState(false);
  let [Youritems, setYouritem] = useState(false);

  const ShowYourProfile = () => {
    setProfile(true);
    setAdditem(false);
    setYouritem(false);
  };

  const showYourAdditem = () => {
    setProfile(false);
    setAdditem(true);
    setYouritem(false);
  };

  const showYourItem = () => {
    setProfile(false);
    setAdditem(false);
    setYouritem(true);
  };

  useEffect(() => {
    getting_Img_Data();
  }, []);

  return (
    <Box>
      <Flex
        justifyContent={"center"}
        backdropBlur="8px"
        bgGradient="linear(to-r, black, yellow.400, black)"
        mt={"-0.2"}
      >
        <Image
          src={Banner}
          alt="Dan Abramov"
          borderBottomLeftRadius={"3xl"}
          borderBottomRightRadius={"3xl"}
          boxShadow="0px 27px 44px -4px black"
          width="60%"
        />
      </Flex>
      <Flex
        gap={{
          sm: "5",
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
        marginTop="-10"
      >
        <Box>
          <Image
            src={shop_Img}
            alt="Dan Abramov"
            boxSize="150px"
            borderRadius="full"
            // width=
            margin={"auto"}
          />
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={8}
          margin="auto"
          marginRight={5}
          marginLeft={5}
        >
          <Button colorScheme="teal" size="lg" onClick={ShowYourProfile}>
            Profile
          </Button>
          <Button colorScheme="teal" size="lg" onClick={showYourAdditem}>
            Add Item
          </Button>
          <Button colorScheme="teal" size="lg" onClick={showYourItem}>
            Your Item
          </Button>
        </Grid>
      </Flex>
      {/* (******************************************************************************************) */}
      <Box>
        {YouProfile ? <Profile /> : null}
        {YourAdditem ? <AddItem /> : null}
        {Youritems ? <YourItem /> : null}
      </Box>
    </Box>
  );
};

export default RestaurantDashboard;
