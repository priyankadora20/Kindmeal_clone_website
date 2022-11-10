import {
  Box,
  Text,
  Image,
  Input,
  Flex,
  HStack,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  Button,
  Radio,
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
            <form>
              {/* **************************************** */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Shop Name</FormLabel>
                <Input
                  placeholder="Full name"
                  color={"black"}
                  name="Shop_Name"
                />
              </FormControl>
              {/* **************************************** */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Cuisine</FormLabel>
                <Select
                  placeholder="Cuisine"
                  color={"green.600"}
                  name="Cuisine"
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
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Type :</FormLabel>
                <RadioGroup defaultValue="select">
                  <HStack spacing="24px">
                    <Radio value="Vegan">Vegan</Radio>
                    <Radio value="Non_veg">Non-Veg</Radio>
                    <Radio value="Mixed">Mixed</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* ***************************************** */}
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Halal :</FormLabel>
                <RadioGroup defaultValue="select">
                  <HStack spacing="24px">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* ***************************************** */}
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Pork Free :</FormLabel>
                <RadioGroup defaultValue="Select">
                  <HStack spacing="24px">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* *****************************************& */}
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Air-Conditioned :</FormLabel>
                <RadioGroup defaultValue="select">
                  <HStack spacing="24px">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Phone : </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+234" />
                  <Input type="tel" placeholder="phone number" />
                </InputGroup>
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Website : </FormLabel>
                <InputGroup size="sm">
                  <InputLeftAddon children="https://" />
                  <Input placeholder="mysite" />
                  <InputRightAddon children=".com" />
                </InputGroup>
              </FormControl>
              {/* *******************************************&  */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Enter Image Url</FormLabel>
                <Input placeholder="Image URL" size="sm" />
              </FormControl>
              {/* ******************************************* */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>About The Shop : </FormLabel>
                <Textarea placeholder="Some Thing About Your shop" size="sm" />
              </FormControl>
              {/* ******************************************** */}
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
