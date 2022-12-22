import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Viewshopdata } from '../Meals_Deals/actiontype'
import Getfreecoupon from '../Meals_Deals/Getfreecoupon'

import "./FeaturedRestaurant.css"
import { Paginationrestaurant } from './Paginationrestaurant'
import { Viewshop } from './Viewshop'
export const FeaturedRestaurant = () => {
    let Featuredpage=useSelector((state)=>{
        return state.Meal_Deal.currentFeaturedpage
    })
   let dispatch=useDispatch()
   let navigate=useNavigate()
    // console.log(Featuredpage)
    let handleviewshop=(el)=>{
      dispatch(Viewshopdata(el))
      navigate("/Getfreecoupon")
    }
   
    // let state=useSelector((state)=>{
    //     console.log(state)
    // })
  return (
    <>
        <div id="featuredpagemain">
           <div>
            <button> <a href="/featuredrestaurant">Restaurants</a> </button>
           </div>
           <div>
            <button>
                <a href="/menu">Food menu</a>
            </button>
           </div>
           <div>
            <button>Food Map</button>
           </div>
        </div>
        <div id="paginationrestaurant">
            <Paginationrestaurant/>
        </div>

        <div id="featuredpagemiddle">
         {
            Featuredpage.length>0 && Featuredpage.map((el)=>{
                return (
                    <div id='featuredpagemiddlediv'>
                        <img src={el.image} alt="" />
                        <h3 id='featuredpagenameh3'>{el.name}</h3>
                        <h3 id='featuredpagetitleh3'>{el.title}</h3>
                        <button id='featuredpagebutton' onClick={()=>handleviewshop(el)} >View shop </button>
                        
                    </div>
                )
            })
           
         }
        </div>
    </>
  )
}
