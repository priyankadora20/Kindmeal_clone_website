import {
  Box,
  Text,
  Image,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantSignup = () => {
  const [Gender, setGender] = useState("Male");

  const Navigaters = useNavigate();

  const [Restaurant, setRestaurant] = useState({
    Name: "",
    Email: "",
    Re_enter_email: "",
    Password: "",
    Username: "",
    BirthDate: "",
    Country: "",
    Gender: "",
    Type: "Restaurant_Details",
  });
  console.log(Gender);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({
      ...Restaurant,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Restaurant.Email !== Restaurant.Re_enter_email) {
      alert("Email does't Match");
    } else {
      localStorage.setItem("RestaurantDetails", JSON.stringify(Restaurant));
      Navigaters("/ShopCreation");
    }
  };

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
        <Box
          width={{
            sm: "100%",
            md: "80%",
            lg: "35%",
          }}
        >
          <Box
            boxShadow="2xl"
            rounded="md"
            bg="white"
            p="7"
            width="85%"
            cursor="pointer"
            margin={"auto"}
            mb={4}
            onClick={() => {
              Navigaters("/user_signup");
            }}
            alignItems="center"
            textAlign={"center"}
          >
            <Image
              src="https://www.kindmeal.my/images/join_normal.png"
              alt="Dan Abramov"
              margin={"auto"}
            />
            <Text fontSize="lg" color="blackAlpha.900" mt={3}>
              Food Lover Sign up
            </Text>
          </Box>
          <Box
            boxShadow="2xl"
            rounded="md"
            bg="white"
            p="7"
            width="85%"
            cursor="pointer"
            margin={"auto"}
            mb={4}
            onClick={() => {
              Navigaters("/restaurant_signup");
            }}
            alignItems="center"
            textAlign={"center"}
          >
            <Image
              src="https://www.kindmeal.my/images/join_shop.png"
              alt="Dan Abramov"
              margin={"auto"}
            />
            <Text fontSize="lg" color="blackAlpha.900" mt={3}>
              Restaurant Owner sign up
            </Text>
          </Box>
          <Box
            boxShadow="2xl"
            rounded="md"
            bg="white"
            p="1.5"
            width="90%"
            textAlign="left"
            margin={"auto"}
            mb="8"
          >
            <Text fontSize="2xl" textAlign={"center"}>
              Why KindMeal?
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Exclusive meat-free deals at your wish and at your place</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Share yummy food moments with your family and friends</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Meet friendly food lovers from all over the world</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Discover cool restaurants that are world famous</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Email updates on tasty deals and Instant coupons & dining</li>
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
        >
          <Text fontSize="2xl">Restaurant / Shop Owner? Sign Up Now.</Text>
          <Text fontSize="lg">
            Improve your business, build brand loyalty, and save precious animal
            lives! Join KindMeal now to enjoy the following features:
          </Text>
          <Text
            fontSize="sm"
            textDecoration={"ButtonFace"}
            mt={3}
            textAlign="left"
          >
            <li>Effectively reach over 200,000 consumers</li>
            <li>
              Feature your shop across premium partner platforms & media
              channels
            </li>
            <li>Offer coupons & deals to attract new customers</li>
            <li>Showcase your delicious meat-free meals</li>
            <li>Interact with our community of food lovers</li>
            <li>
              Get your exclusive Shop Page —{" "}
              <span style={{ color: "red" }}>
                https://KindMeal.my/YourShopName
              </span>
            </li>
          </Text>
          <Text mt={3}>
            To support our welfare causes, we offer simple, affordable Premium
            Plans on a monthly subscription basis, starting from RM 99 only. No
            deal commissions, no hidden fees. Premium Plan details are available
            upon signing up.
          </Text>

          {/* SIGN UP PROCESS HAS BEEN STARTED FROM HERE  */}
          <Text fontSize="2xl" mt={5}>
            Personal Profile
          </Text>
          <Text>
            First, we setup your personal profile, then proceed to configure
            your shop promotions.
          </Text>
          {/* Getting the Details from here  */}
          <Box>
            <form onSubmit={HandleSubmit}>
              {/* first */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Name</FormLabel>
                <Input
                  placeholder="First name"
                  color={"black"}
                  name="Name"
                  value={Restaurant.Name}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* two  */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Email</FormLabel>
                <FormHelperText color={"blackAlpha.500"}>
                  Your email must be correct to receive activation email
                </FormHelperText>
                <Input
                  placeholder="Email"
                  color={"black"}
                  name="Email"
                  type={"email"}
                  value={Restaurant.Email}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* three */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Re-Enter Email </FormLabel>
                <Input
                  placeholder="Email"
                  color={"black"}
                  name="Re_enter_email"
                  type={"email"}
                  value={Restaurant.Re_enter_email}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* four */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Password</FormLabel>
                <Input
                  placeholder="Password"
                  color={"black"}
                  name="Password"
                  type={"password"}
                  value={Restaurant.Password}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* fifth */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Username</FormLabel>
                <FormHelperText color={"red.600"} fontWeight="bold">
                  http://KindMeal.my/username
                </FormHelperText>
                <Input
                  placeholder="Username"
                  color={"black"}
                  name="Username"
                  value={Restaurant.Username}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* sixth */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Birth Date</FormLabel>
                <Input
                  placeholder="Choose Date"
                  color={"black"}
                  name="BirthDate"
                  type={"date"}
                  value={Restaurant.BirthDate}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"80%"}
                />
              </FormControl>
              {/* seventh */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Gender</FormLabel>
                <Select
                  placeholder="Select Gender"
                  color={"blackAlpha.700"}
                  name="Gender"
                  value={Restaurant.Gender}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"85%"}
                >
                  <option>Male </option>
                  <option>Female</option>
                  <option>Others</option>
                </Select>
              </FormControl>
              {/* eighth */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Country</FormLabel>
                <Select
                  placeholder="Select Country"
                  color={"green.600"}
                  name="Country"
                  value={Restaurant.Country}
                  onChange={HandleChange}
                  textAlign="left"
                  width={"85%"}
                >
                  <option>India</option>
                  <option>USA</option>
                  <option>Japan</option>
                  <option>China</option>
                  <option>Canada</option>
                  <option>England</option>
                  <option>Thialand</option>
                  <option>Braxil</option>
                  <option>Algeria</option>
                  <option>Afghanistan</option>
                  <option>Australia</option>
                  <option>Angola</option>
                  <option>Singapore</option>
                  <option>Maldives</option>
                  <option>Germany</option>
                  <option>South Africa</option>
                  <option>Russia</option>
                  <option>Malaysia</option>
                  <option>Sri Lanka</option>
                  <option>Pakistan</option>
                  <option>Others</option>
                </Select>
              </FormControl>
              {/* button  */}
              <Button colorScheme="red" mt="5" type="submit" color={"black"}>
                Set up by Shop & Deals {">>"}
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default RestaurantSignup;
