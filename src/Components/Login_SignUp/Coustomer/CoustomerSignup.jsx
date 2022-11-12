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
import React from "react";
import { useNavigate } from "react-router-dom";

const CoustomerSignup = () => {
  const Navigaters = useNavigate();

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
          <Text fontSize="2xl">Food Lover? Sign Up Now</Text>
          <Text fontSize="sm">
            Discover tasty meat-free meals and dine instantly — no coupon
            payment, booking or printing is required.
          </Text>
          <Text fontSize="sm" textDecoration={"ButtonFace"} mt={3}>
            KindMeal is a fun, exciting and cool new way for you to show your
            compassion towards animals. We collaborate with kind restaurants and
            cafes across the nation to bring you delicious meat-free foods that
            will not only help save precious animal lives, but improve your
            health and save your money at the same time!
          </Text>

          {/* SIGN UP PROCESS HAS BEEN STARTED FROM HERE  */}
          {/* Getting the Details from here  */}
          <Box>
            <form>
              {/* first */}
              <FormControl isRequired mt={4}>
                <FormLabel color={"black"}>Name</FormLabel>
                <Input
                  placeholder="Full name"
                  color={"black"}
                  name="firstname"
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
                  name="email"
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
                  name="email"
                  type={"date"}
                />
                <FormHelperText>
                  Only your Age is visible on the Website
                </FormHelperText>
              </FormControl>
              {/* seventh */}
              <FormControl as="fieldset" mt={4}>
                <FormLabel as="legend">Gender</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Sasuke">Male</Radio>
                    <Radio value="Nagato">Female</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              {/* eighth */}
              <FormControl mt={4} isRequired>
                <FormLabel color={"black"}>Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  color={"green.600"}
                  name="role"
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
                Join Now {">>"}
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default CoustomerSignup;
