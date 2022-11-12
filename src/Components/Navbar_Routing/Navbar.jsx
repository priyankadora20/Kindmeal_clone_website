import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Box,
  Image,
  Text,
  Grid,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// *************************************************************************

const Navbar = () => {
  const NavRef = useRef();

  const [showLogin, setshowLogin] = useState(true);
  const [CheckType, setCheckType] = useState(false);
  const [shownname, setShowname] = useState("No data");
  const [optionvalue, setoptionvalue] = useState("");
  const showNavbar = () => {
    NavRef.current.classList.toggle("showMenu");
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const {
    isOpen: signupIsOpen,
    onOpen: signupOnOpen,
    onClose: signupOnClose,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Navigaters = useNavigate();

  // CHECKING THE AUTHTICATION OF THE USER

  const Handlelogin = () => {
    let ShopOwner_Data;
    let User_Data;
    if (email === "" || password === "") {
      alert("Please Enter Proper Details");
    } else {
      ShopOwner_Data =
        JSON.parse(localStorage.getItem("RestaurantDetails")) || null;
      User_Data = JSON.parse(localStorage.getItem("CustomerDetails")) || null;
    }

    let shop_Owner_Email = "";
    let shop_Owner_password = "";
    if (ShopOwner_Data !== null) {
      shop_Owner_Email = ShopOwner_Data.Email;
      shop_Owner_password = ShopOwner_Data.Password;
    }
    // ***********************************************************
    let User_Email = "";
    let user_password = "";
    if (User_Data !== null) {
      User_Email = User_Data.email;
      user_password = User_Data.Password;
    }
    // ***********************************************************
    // CHECKING THE USER DETAILS ENTER

    if (email === shop_Owner_Email && password === shop_Owner_password) {
      setShowname(ShopOwner_Data.Name);
      setshowLogin(false);
      setCheckType(true);
      Navigaters("/RestaurantDashboard");
      onClose();
    }

    if (email === User_Email && password === user_password) {
      setShowname(User_Data.firstname);
      setshowLogin(false);
      Navigaters("/");
      onClose();
    }
  };

  const functionredirect = (e) => {
    setoptionvalue(e.target.value);
  };

  useEffect(() => {
    if (optionvalue === "Menu") {
      Navigaters("/mealDeals");
    } else if (optionvalue === "Article") {
      Navigaters("/Article");
    } else if (optionvalue === "KindMonents") {
      Navigaters("/kindmoments");
    } else if (optionvalue === "DashBoard") {
      Navigaters("/RestaurantDashboard");
    }
  }, [optionvalue]);
  // *********************        Main code start from here

  return (
    <div className="Maindiv">
      <div className="firstDiv">
        <div className="img">
          <Link to={"/"} className="imglogo">
            <img
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="social">
          {/* firstimg */}
          <a href="#">
            <img
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              alt=""
            />
          </a>
          {/* secondimg */}
          <a href="https://www.facebook.com/KindMeal.my" target="_blank">
            <img
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              alt=""
            />
          </a>
          {/* thirdimg */}
          <a href="https://twitter.com/KindMeal" target="_blank">
            <img
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              alt=""
            />
          </a>
        </div>

        {/* ******************  LOGIN BUTTON *************************** */}
        {showLogin ? (
          <div className="login_signup">
            <button onClick={onOpen}>Login</button>
            <button onClick={signupOnOpen}>Signup</button>
          </div>
        ) : CheckType ? (
          <div
            className="login_signup"
            style={{
              gap: "15px",
            }}
          >
            <Avatar bg="teal.500" />
            <Select
              placeholder={shownname}
              value={optionvalue}
              onChange={functionredirect}
            >
              <option value="Menu">Menu</option>
              <option value="DashBoard">DashBoard</option>
              <option value="Article">Article</option>
              <option value="KindMonents">KindMonents</option>
            </Select>
          </div>
        ) : (
          <div
            className="login_signup"
            style={{
              gap: "15px",
            }}
          >
            <Avatar bg="teal.500" />
            <Select
              placeholder={shownname}
              value={optionvalue}
              onChange={functionredirect}
            >
              <option value="Menu">Menu</option>
              <option value="Article">Article</option>
              <option value="KindMonents">KindMonents</option>
            </Select>
          </div>
        )}

        {/* ****************************  Login function *******************************  */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In To Your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email id</FormLabel>
                <Input
                  placeholder="Enter Email id"
                  name="email"
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  Handlelogin();
                }}
              >
                Submit
              </Button>

              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* ***********************  signup function  ******************************* */}
        {/* POPUP DIALOG OF THE WEBSITE   */}

        <Modal
          closeOnOverlayClick={false}
          isOpen={signupIsOpen}
          onClose={signupOnClose}
        >
          <ModalOverlay />
          <ModalContent>
            {/* <ModalCloseButton /> */}
            <ModalBody pb={6}>
              {/* MAIN HEADING OF THE WEBSITE  */}
              <Box
                boxShadow="sm"
                p="6"
                rounded="md"
                bg="white"
                textAlign={"center"}
              >
                <Image
                  src="https://www.kindmeal.my/images/logo-kindmeal.png"
                  alt="Dan Abramov"
                />
                <Text fontSize="xl" fontWeight={"bold"}>
                  Join KindMeal For FREE Now
                </Text>
                <Text fontSize="sm">
                  Please select the type of membership to proceed
                </Text>
              </Box>
              {/* first Box of the Account */}
              <Box
                boxShadow="dark-lg"
                p="2"
                rounded="md"
                bg="white"
                mb={5}
                onClick={() => {
                  return(
                    Navigaters("/user_signup"), signupOnClose()
                  )
                  
                }}
                cursor="pointer"
                alignContent={"center"}
              >
                <Grid
                  templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={5}
                >
                  <Image
                    src="https://www.kindmeal.my/images/join_normal.png"
                    alt="Dan Abramov"
                    margin={"auto"}
                  />
                  <Box textAlign={"center"}>
                    <Text fontSize="2xl" color="red.500" mb={2}>
                      Food Lover
                    </Text>
                    <Text fontSize="md" color="orange.500" lineHeight={"6"}>
                      Join FREE to enjoy yummy deals, share reviews & meet our
                      community of compassionate food lovers.
                    </Text>
                  </Box>
                </Grid>
              </Box>
              {/* SECOND BOX OF THE ACCOUNT  */}
              <Box
                boxShadow="dark-lg"
                p="2"
                rounded="md"
                bg="white"
                mb={5}
                onClick={() => {
                  return(
                    Navigaters("/restaurant_signup"), signupOnClose()
                  )
                 
                }}
                cursor="pointer"
              >
                <Grid
                  templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={5}
                >
                  <Image
                    src="https://www.kindmeal.my/images/join_shop.png"
                    alt="Dan Abramov"
                    margin={"auto"}
                  />
                  <Box textAlign={"center"}>
                    <Text fontSize="2xl" color="red.500" mb={2}>
                      Restaurant Owner
                    </Text>
                    <Text fontSize="md" color="orange.500" lineHeight={"6"}>
                      List your food outlet, create exciting vegetarian deals &
                      showcase your delicious menu for FREE.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button onClick={signupOnClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* MENU ICONS OF THE WEBSITE  */}
        <div className="hamburger">
          <span className="material-symbols-outlined" onClick={showNavbar}>
            menu
          </span>
        </div>
      </div>
      {/* SECOND BOX OF THE WEBSITE  */}
      <div className="secondDiv showMenu" ref={NavRef}>
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/mealDeals"} className="link">
              Meal Deals
            </Link>
          </li>
          <li>
            <Link to={"/kindmoments"} className="link">
              kindMoments
            </Link>
          </li>
          <li>
            <Link to={"/recipes"} className="link">
              Recipes
            </Link>
          </li>
          <li>
            <Link to={"/Article"} className="link">
              Article
            </Link>
          </li>
          <div className="login_signup_insider">
            {showLogin ? (
              <div>
                <button onClick={onOpen}>Login</button>
                <button onClick={signupOnOpen}>Signup</button>
              </div>
            ) : (
              // <>
              <div
                className="login_signup"
                style={{
                  gap: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70%",
                  margin: "auto",
                }}
              >
                <Avatar bg="teal.500" />
                <Select
                  placeholder={shownname}
                  value={optionvalue}
                  onChange={functionredirect}
                >
                  <option value="Menu">Menu</option>
                  <option value="Article">Article</option>
                  <option value="KindMonents">KindMonents</option>
                </Select>
              </div>
            )}

            {/* <button onClick={onOpen}>Login</button>
            <button onClick={signupOnOpen}>Signup</button> */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
