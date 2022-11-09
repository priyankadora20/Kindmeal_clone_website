import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element="Home Page" />
      <Route path="/mealDeals" element="Meal Deals Page" />
      <Route path="/kindmoments" element="Kind Moments" />
      <Route path="/recipes" element="Recipes" />
      <Route path="/restaurant_login" element="Restaurant_login" />
      <Route path="/restaurant_signup" element="restaurant_signup" />
      <Route path="/user_signup" element="user_signup" />
      <Route path="/user_login" element="user_login" />
    </Routes>
  );
};

export default Router;
