import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Homepage/Homepage";
import FullPage from "../KindMoments/FullPage";
import { Instgram } from "../KindMoments/instagram";
import CoustomerSignup from "../Login_SignUp/Coustomer/CoustomerSignup";
import RestaurantDashboard from "../Login_SignUp/Restaurant/RestaurantDashboard";
import RestaurantSignup from "../Login_SignUp/Restaurant/RestaurantSignup";
import ShopCreation from "../Login_SignUp/Restaurant/ShopCreation";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/mealDeals" element="Meal Deals Page" />
      <Route path="/kindmoments" element={<Instgram />} />
      <Route path="/recipes" element="Recipes" />
      <Route path="/restaurant_login" element="Restaurant_login" />
      <Route path="/restaurant_signup" element={<RestaurantSignup />} />
      <Route path="/user_signup" element={<CoustomerSignup />} />
      <Route path="/user_login" element="user_login" />
      <Route path="/ShopCreation" element={<ShopCreation />} />
      <Route path="/RestaurantDashboard" element={<RestaurantDashboard />} />
      <Route path="/Article" element={"Article"} />
      <Route path="/fullpage" element={<FullPage />} />
    </Routes>
  );
};

export default Routers;
