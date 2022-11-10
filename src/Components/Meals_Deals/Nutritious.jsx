import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import {FaStarHalfAlt,FaStar} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Main from './Main';
import Paginationmealdeal from './Paginationmealdeal';
// let data=[
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg",
//         name:'Nutritious Meets Delicious',
//         description:"Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'10% Off',
//         expires:'7 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg",
//         name:'Churros, Coffee & Meals',
//         description:"Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'13 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg",
//         name:'Scrumprious Croutons',
//         description:"Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'7 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg",
//         name:'Flavours Around the World',
//         description:"Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'6 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg",
//         name:'Yishensu Groceries @ Ipoh',
//         description:"Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'10% Off',
//         expires:'13 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg",
//         name:'Authentic Asian Experience',
//         description:"Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'7 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
//         name:'Dining Bowl Asian Delicacies',
//         description:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'4 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/696-5075-l.jpg",
//         name:'Fusion Gourmet Cuisine',
//         description:"Alice Kitchen delights you with fusion vegetarian and vegan gourmet cuisine, with an innovative gastronomic take on traditional an..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'18% Off',
//         expires:'1 Day'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg",
//         name:'Vegan Ice-Cream Indulgence',
//         description:"Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fro..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'15% Off',
//         expires:'9 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg",
//         name:'Smooth Teas & Cold Brews',
//         description:"Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'15% off',
//         expires:'3 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/628-4921-l.jpg",
//         name:'Japanese Fusion Delights',
//         description:"Enjoy creative, delicious and healthy fusion Japanese cuisine at Sushi Kitchen! Meticulously prepared with fresh, quality ingredi..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'15% Off',
//         expires:'6 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/681-4353-l.jpg",
//         name:'Contemporary Vegetarian experience',
//         description:"Berjaya Cafe delights you with opulence, style and taste from the best chefs in town. Savor only the best in gastronomic experien..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'10% Off',
//         expires:'13 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
//         name:'Managga Natural Lifestyle',
//         description:"Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'20% Off',
//         expires:'7 Days'
//     },
//     {
//         image:"https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg",
//         name:'Authentic Italian Indulgence',
//         description:"Enjoy authentic Italian cuisine within a cozy environment! Pizza, breads and sometimes cakes or cookies are baked within the in-h..",
//         button:'Get FREE Coupon',
//         amlet:'https://www.kindmeal.my/images/icon_egg.png',
//         bottle:"https://www.kindmeal.my/images/icon_milk.png",
//         alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
//         discount:'15% Off',
//         expires:'8 Days'
//     },
// ]





function Nutritious(props) {

    let maindata=useSelector((state)=>{
        return state.data
       
    })
    let pages=useSelector((state)=>{
        return state.current
        console.log(state)
    })
    let navigate=useNavigate()
    let handlegetfreecoupon=()=>{
        navigate("/Getfreecoupon")
    }   
    
    
    return (
       
        <>
       
    
        <div>
            
            {
                pages.map((el)=>{
                    return (
                        <div key={el.id}>
                            <img id='nutritiousimg'  src={el.image} alt="" />
                            <div id='nutritioush1tag'>
                            <h2>{el.name}</h2>
                            </div>
                            <div >
                            <p id='nutritiousptag' >{el.description}</p>
                            </div>
                            <div id='nutritiousmiddle' >
                                <div>
                                <button onClick={handlegetfreecoupon}>{el.button}</button>
                                </div>
                                <div>
                                   <FaStar size={25} color="#fbff00" />
                                   <FaStar size={25}  color="#fbff00"/>
                                   <FaStar size={25}  color="#fbff00"/>
                                   <FaStar size={25}  color="#fbff00"/>
                                   <FaStarHalfAlt size={25}  color="#fbff00"/>
                
                                </div>
                            </div>
                            <div  id='nutritiousamlet'>
                                <div  >
                                <img src={el.amlet} alt="" />
                                <img src={el.bottle} alt="" />
                                <img src={el.alchohal} alt="" />
                                </div>
                                <div>
                                    <h4>Kindmeal Discount</h4>
                                <h1 id='nutritiousdiscount' >{el.discount}</h1>
                                </div>
                                <div>
                                    <h4 >Expires In</h4>
                                <h2 id='nutritiousexpires' >{el.expires}</h2>
                                </div>
                            </div>
                           
                           
                            
                        </div>
                    )
                })
            }

          
            
        </div>
        
        </>
    );
}

export default Nutritious;