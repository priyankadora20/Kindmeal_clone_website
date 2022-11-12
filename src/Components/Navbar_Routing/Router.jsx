import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../Article/Article";
import { Homepage } from "../Homepage/Homepage";
import CoustomerSignup from "../Login_SignUp/Coustomer/CoustomerSignup";
import RestaurantSignup from "../Login_SignUp/Restaurant/RestaurantSignup";
import ShopCreation from "../Login_SignUp/Restaurant/ShopCreation";
import Rdisplay from "../ResturantDisplay/Rdisplay";
import VideoDisplaypage from "../videodisplay/VideoDisplaypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/mealDeals" element="Meal Deals Page" />
      <Route path="/kindmoments" element="Kind Moments" />
      <Route path="/recipes" element="Recipes" />
      <Route path="/restaurant_login" element="Restaurant_login" />
      <Route path="/restaurant_signup" element={<RestaurantSignup />} />
      <Route path="/user_signup" element={<CoustomerSignup />} />
      <Route path="/user_login" element="user_login" />
      <Route path="/ShopCreation" element={<ShopCreation />} />
      <Route path="/Article" element={<Article />} />
      <Route path="/VideoDisplaypage" element={<VideoDisplaypage />} />
      <Route path="/Rdisplay" element={<Rdisplay />} />

    </Routes>
  );
};

export default Router;
