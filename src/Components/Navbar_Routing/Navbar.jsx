import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("showMenu");
  };

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
          <img
            src="https://www.kindmeal.my/images/follow_blog_grey.png"
            alt=""
          />
          <a href="https://www.facebook.com/KindMeal.my" target="_blank">
            <img
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              alt=""
            />
          </a>
          <a href="https://twitter.com/KindMeal" target="_blank">
            <img
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              alt=""
            />
          </a>
        </div>
        <div className="login_signup">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/Signup"}>
            <button>Signup</button>
          </Link>
        </div>
        <div className="hamburger">
          <span className="material-symbols-outlined" onClick={showNavbar}>
            menu
          </span>
        </div>
      </div>
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
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/Signup"}>
              <button>Signup</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
