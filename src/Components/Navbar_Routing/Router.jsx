import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../Article/Article";
import { FeaturedRestaurant } from "../Directory/FeaturedRestaurant";
import { Foodmenu } from "../Directory/Foodmenu";
import { Mobileapp } from "../Directory/Mobileapp";
import { Homepage } from "../Homepage/Homepage";
import FullPage from "../KindMoments/FullPage";
import { KindMonents } from "../KindMoments/KindMonents";
import CoustomerSignup from "../Login_SignUp/Coustomer/CoustomerSignup";
import RestaurantDashboard from "../Login_SignUp/Restaurant/RestaurantDashboard";
import RestaurantSignup from "../Login_SignUp/Restaurant/RestaurantSignup";
import ShopCreation from "../Login_SignUp/Restaurant/ShopCreation";
import Getfreecoupon from "../Meals_Deals/Getfreecoupon";
import InsideMealdeal from "../Meals_Deals/InsideMealdeal";
import Location from "../Meals_Deals/Location";
import Meals_Deals from "../Meals_Deals/Meals_Deals";
import Overview from "../Meals_Deals/Overview";
import Fetch from "../Recipes/Fetch";
import Recipes from "../Recipes/Recipes";
import Rdisplay from "../ResturantDisplay/Rdisplay";
import VideoDisplaypage from "../videodisplay/VideoDisplaypage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/mealDeals" element={<Meals_Deals/>} />
      <Route path="/kindmoments" element={<KindMonents />} />
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/restaurant_login" element="Restaurant_login" />
      <Route path="/restaurant_signup" element={<RestaurantSignup />} />
      <Route path="/user_signup" element={<CoustomerSignup />} />
      <Route path="/user_login" element="user_login" />
      <Route path="/ShopCreation" element={<ShopCreation />} />
     
      <Route path="/VideoDisplaypage" element={<VideoDisplaypage />} />
      <Route path="/Rdisplay" element={<Rdisplay />} />

      <Route path="/RestaurantDashboard" element={<RestaurantDashboard />} />
      <Route path="/Article" element={<Article/>} />
      <Route path="/fullpage" element={<FullPage />} />
      <Route path="/featuredrestaurant" element={<FeaturedRestaurant/>}/>
      <Route path="/mobileapp" element={<Mobileapp/>}/>

      //Mealdealroutes


      {/* <Route path='/' element={<Meals_Deals/>}/> */}
            <Route path='/Getfreecoupon' element={<Getfreecoupon/>}/>
              <Route path='/InsideMealdeal' element={<InsideMealdeal/>}/>
              <Route path='/Overview' element={<Overview/>}/>
              <Route path="/Location" element={<Location/>}/>
              <Route path="/fetch" element={<Fetch/>}/>
              <Route path="/menu" element={<Foodmenu/>}/>
    </Routes>
  );
};

export default Routers;
