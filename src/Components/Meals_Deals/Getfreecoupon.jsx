import { Link } from '@chakra-ui/react';
import React from 'react';
import axios from "axios"
import "./Getfreecoupon.css"
import { BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from './actiontype';
function Getfreecoupon(props) {
    
    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getdata())
    },[])
    let apidata=useSelector((state)=>{
        return state.apidata
    })
    console.log(apidata)
    

    return (
        <div>
           <div id='getfreecouponimg'>
            <img src="https://www.kindmeal.my/photos/shop/3/392-c.jpg" alt="" />
           </div>
           <div id='getfreecouponheading' >
            <h1>Hyderabad Recipes</h1>
           </div>

           <div id='linksection'>
           <div>

            <a href='/Overview'>
            <button className='overviewbutton'><h3>Overview</h3></button>
            </a>
           </div>

           <div>
            <a href="/InsideMealdeal" >
                <button className='overviewbutton'>
                <h3>Meal Deals</h3>
                </button> 
           
            </a>
            </div>

            <div>
            <a href='/Getfreecoupon'>
                <button className='overviewbutton'>

            <h3>Food Menu</h3>
                </button>
            </a>
            </div>

            <div>
            <a href='/Location'>
                <button className='overviewbutton' >

            <h3>Location</h3>
                </button>
            </a>
            </div>
            <div id='twitter' >
                <BsTwitter size={40} color="blue" />
            </div>
            <div id='sharebtn' >
                <button>Share</button>
            </div>
            <div id='like'>
                <AiFillLike size={40} color="blue" />
            </div>

          

           

           </div>
           <div id="getfreemiddle">
            <h4>Below are mouth-watering food and cuisine at Hyderabad Restaurant. Please click on the photos to view full details.</h4>
           </div>
           <div id='getfreecouponalldata'>
             {
                apidata.length>0 && apidata.map((el)=>{
                    return (
                        <div key={el.idMeal}>
                            <img src={el.strMealThumb} alt="" />
                            <h3>{el.strMeal}</h3>

                        </div>
                    )
                })
             }
           </div>
            
        </div>
    );
}

export default Getfreecoupon;