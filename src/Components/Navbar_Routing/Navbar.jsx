import React from "react";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("showMenu");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Navigaters = useNavigate();

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
        <div className="login_signup">
          <button>Login</button>
          <button onClick={onOpen}>Signup</button>
        </div>
        {/* POPUP DIALOG OF THE WEBSITE  */}

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
                  Navigaters("/user_signup"), onClose();
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
                  Navigaters("/restaurant_signup"), onClose();
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
              <Button onClick={onClose}>Cancel</Button>
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
          <div className="login_signup_insider">
            <button>Login</button>
            <button onClick={onOpen}>Signup</button>
            <div></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
