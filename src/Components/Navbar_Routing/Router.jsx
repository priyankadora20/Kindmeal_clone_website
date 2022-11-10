import React from "react";
import { Route, Routes } from "react-router-dom";
import CoustomerSignup from "../Login_SignUp/Coustomer/CoustomerSignup";
import RestaurantSignup from "../Login_SignUp/Restaurant/RestaurantSignup";
import ShopCreation from "../Login_SignUp/Restaurant/ShopCreation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element="Home Page" />
      <Route path="/mealDeals" element="Meal Deals Page" />
      <Route path="/kindmoments" element="Kind Moments" />
      <Route path="/recipes" element="Recipes" />
      <Route path="/restaurant_login" element="Restaurant_login" />
      <Route path="/restaurant_signup" element={<RestaurantSignup />} />
      <Route path="/user_signup" element={<CoustomerSignup />} />
      <Route path="/user_login" element="user_login" />
      <Route path="/ShopCreation" element={<ShopCreation />} />
    </Routes>
  );
};

export default Router;
