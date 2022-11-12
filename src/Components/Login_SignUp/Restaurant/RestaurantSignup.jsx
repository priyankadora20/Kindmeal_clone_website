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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantSignup = () => {
  const Navigaters = useNavigate();

  const [useData, setUserData] = useState({
    name: "",
    email: "",
    Re_enter_email: "",
    Password: "",
    Username: "",
    BirthDate: "",
    Gender: "",
    Country: "",
  });

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
            width="100%"
            cursor="pointer"
            margin={"auto"}
            mb={4}
            onClick={() => {
              Navigaters("/user_signup");
            }}
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
            width="100%"
            cursor="pointer"
            margin={"auto"}
            mb={4}
            onClick={() => {
              Navigaters("/restaurant_signup");
            }}
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
            width="100%"
            textAlign="left"
            margin={"auto"}
            mb="8"
          >
            <Text fontSize="2xl" textAlign={"center"}>
              Why KindMeal?
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Exclusive meat-free deals</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Share yummy food moments</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Meet friendly food lovers</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Discover cool restaurants</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Email updates on tasty deals</li>
            </Text>
            <Text fontSize="sm" textDecoration={"ButtonFace"} textAlign="left">
              <li>Instant coupons & dining</li>
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
          <Text fontSize="sm" textDecoration={"ButtonFace"} mt={3}>
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
            <form>
              {/* first */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Name</FormLabel>
                <Input placeholder="First name" color={"black"} name="name" />
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
                  name="email"
                  type={"email"}
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
                />
              </FormControl>
              {/* fifth */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Username</FormLabel>
                <FormHelperText color={"red.600"} fontWeight="bold">
                  http://KindMeal.my/username
                </FormHelperText>
                <Input placeholder="Username" color={"black"} name="Username" />
              </FormControl>
              {/* sixth */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Birth Date</FormLabel>
                <Input
                  placeholder="Choose Date"
                  color={"black"}
                  name="BirthDate"
                  type={"date"}
                />
              </FormControl>
              {/* seventh */}
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Gender</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* eighth */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Country</FormLabel>
                <Select
                  placeholder="Select Role"
                  color={"green.600"}
                  name="Country"
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