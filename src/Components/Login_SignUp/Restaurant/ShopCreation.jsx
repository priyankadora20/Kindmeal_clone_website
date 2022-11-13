import {
  Box,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Button,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopCreation = () => {
  const Navigaters = useNavigate();

  const [RestaurantEmail, setREstaurantEmail] = useState([]);

  const getrestaruantownerdata = () => {
    let value = JSON.parse(localStorage.getItem("RestaurantDetails"));
    setREstaurantEmail(value);
  };

  const [ShopDetails, setShopDetails] = useState({
    Shop_Name: "",
    Cuisine: "",
    Type: "",
    Opening: "",
    Address: "",
    City: "",
    Phone: "",
    Website: "",
    AboutShop: "",
    ImageURL: "",
  });

  // Handling shop data

  const HandleShopData = (e) => {
    const { name, value } = e.target;
    setShopDetails({
      ...ShopDetails,
      [name]: value,
    });
  };

  // Handle Shop Submit

  const HandleShopSubmit = (e) => {
    e.preventDefault();
    let Phonevalue = ShopDetails.Phone.split("");
    if (Phonevalue.length > 10) {
      alert("Please Enter Right Number");
    } else {
      localStorage.setItem("ShopDetails", JSON.stringify(ShopDetails));
      Navigaters("/RestaurantDashboard");
    }
  };

  useEffect(() => {
    getrestaruantownerdata();
  }, []);

  return (
    <div>
      <Flex
        display={{
          sm: "flex",
          md: "flex",
          lg: "flex",
        }}
        gap={6}
        width="95%"
        margin={"auto"}
        mb="8"
        mt={6}
      >
        {/* first Main box  */}
        <Box
          width={{
            sm: "100%",
            md: "80%",
            lg: "35%",
          }}
        >
          {/* inside first, first box */}
          <Box
            boxShadow="2xl"
            rounded="md"
            bg="white"
            // p="7"
            width="100%"
            margin={"auto"}
            mb={4}
            pb="4"
          >
            <Box
              backgroundColor={"red.500"}
              borderTopLeftRadius={3}
              borderTopRightRadius={3}
            >
              `
            </Box>
            {/* first text */}
            <Text fontSize="xl" fontWeight={"bold"}>
              Dashboard
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Merchant Overview
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"} mb={4}>
              Upgrade Merchant Plan
            </Text>
            {/* second Text  */}
            <Text fontSize="xl" fontWeight={"bold"}>
              My Shops
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Manage Deals
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Manage Food Menu
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Manage Shop Branches
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Update Shop Profile
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"} mb={4}>
              Create New Shop
            </Text>
            {/* Third Box  */}
            <Text fontSize="xl" fontWeight={"bold"}>
              Coupons & Transactions
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Coupons & Transactions
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"}>
              Check / Redeem Coupons
            </Text>
            <Text fontSize="sm" cursor="pointer" margin={"auto"} mb={4}>
              Generate Transaction Report
            </Text>
          </Box>
        </Box>
        {/* second box that should follow grid  */}
        <Box
          boxShadow="2xl"
          rounded="md"
          bg="white"
          textAlign={"left"}
          p="5"
          width={{
            sm: "100%",
            lg: "50%",
          }}
          borderTop="8px"
        >
          <Text fontSize="sm" mb={5}>
            Congratulations{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {RestaurantEmail.Name}
            </span>{" "}
            , you're now ready to begin promoting your food on KindMeal.my. An
            activation email has been sent to{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>
              {RestaurantEmail.Email}
            </span>
            .
          </Text>
          <Text fontSize="2xl">My Shop Profile</Text>
          <Text fontSize="sm" textDecoration={"ButtonFace"} mt={3}>
            Your shop can be non-vegetarian, as long as it offers choices of
            vegetarian meals. If you have multiple outlets, just enter the
            primary one first and add more outlets later.
          </Text>

          {/* SIGN UP PROCESS HAS BEEN STARTED FROM HERE  */}
          {/* Getting the Details from here  */}
          <Box>
            <form onSubmit={HandleShopSubmit}>
              {/* **************************************** */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Shop Name</FormLabel>
                <Input
                  placeholder="Full name"
                  color={"black"}
                  name="Shop_Name"
                  value={ShopDetails.Shop_Name}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* **************************************** */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Cuisine</FormLabel>
                <Select
                  placeholder="Cuisine"
                  color={"green.600"}
                  name="Cuisine"
                  value={ShopDetails.Cuisine}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"85%"}
                >
                  <option>Asian</option>
                  <option>Chinese</option>
                  <option>French</option>
                  <option>Fusion</option>
                  <option>German</option>
                  <option>Indian</option>
                  <option>Indonesian</option>
                  <option>Italian</option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>Malay</option>
                  <option>Malaysian</option>
                  <option>Mexican</option>
                  <option>Middle Eastern</option>
                  <option>Spanish</option>
                  <option>Sri Lankan</option>
                  <option>Taiwanese</option>
                  <option>Malaysia</option>
                  <option>Thai</option>
                  <option>Vietnamese</option>
                  <option>Others</option>
                </Select>
              </FormControl>
              {/* ****************************************  */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Type : </FormLabel>
                <Select
                  placeholder=""
                  color={"blackAlpha.700"}
                  name="Type"
                  value={ShopDetails.Type}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"85%"}
                >
                  <option>Vegan</option>
                  <option>Vegetarian</option>
                  <option>Vegetarian-Friendly</option>
                  <option>Non-Veg</option>
                  <option>Mixed</option>
                </Select>
              </FormControl>
              {/* ***************************************** */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Opening Hours : </FormLabel>
                <FormHelperText color={"blackAlpha.500"}>
                  Example: Mon - Fri: 10am - 9pm; Sat - Sun: 10am - 10pm
                </FormHelperText>
                <Input
                  placeholder=""
                  color={"black"}
                  name="Opening"
                  value={ShopDetails.Opening}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* ********************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Address</FormLabel>
                <Input
                  placeholder=""
                  color={"black"}
                  name="Address"
                  value={ShopDetails.Address}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* ********************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>City</FormLabel>
                <Input
                  placeholder=""
                  color={"black"}
                  name="City"
                  value={ShopDetails.City}
                  textAlign="left"
                  width={"80%"}
                  onChange={HandleShopData}
                />
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Phone : </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+234" />
                  <Input
                    type="number"
                    placeholder="phone number"
                    name="Phone"
                    value={ShopDetails.Phone}
                    onChange={HandleShopData}
                    textAlign="left"
                    width={"80%"}
                  />
                </InputGroup>
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Website : </FormLabel>
                <InputGroup size="sm">
                  <InputLeftAddon children="https://" />
                  <Input
                    placeholder="mysite"
                    name="Website"
                    value={ShopDetails.Website}
                    onChange={HandleShopData}
                    textAlign="left"
                    width={"80%"}
                  />
                  <InputRightAddon children=".com" />
                </InputGroup>
              </FormControl>
              {/* *******************************************&  */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Enter Image Url</FormLabel>
                <Input
                  placeholder="Image URL"
                  size="sm"
                  name="ImageURL"
                  value={ShopDetails.ImageURL}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"80%"}
                  isRequired
                />
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>About The Shop : </FormLabel>
                <Textarea
                  placeholder="Some Thing About Your shop"
                  size="sm"
                  name="AboutShop"
                  value={ShopDetails.AboutShop}
                  onChange={HandleShopData}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* ************************************************ */}
              <Button colorScheme="red" mt="5" type="submit" color={"black"}>
                Create shop
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default ShopCreation;
