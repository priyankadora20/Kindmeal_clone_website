import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element="Home Page" />
      <Route path="/mealDeals" element="Meal Deals Page" />
      <Route path="/kindmoments" element="Kind Moments" />
      <Route path="/recipes" element="Recipes" />
      <Route path="/login" element="login" />
      <Route path="/Signup" element="signup" />
    </Routes>
  );
};

export default Router;
