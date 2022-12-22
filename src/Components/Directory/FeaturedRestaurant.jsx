import React from 'react'
import { useSelector } from 'react-redux'

import "./FeaturedRestaurant.css"
export const FeaturedRestaurant = () => {
    let Featuredpage=useSelector((state)=>{
        return state.Meal_Deal.Featuredrestaurantpage
    })

    console.log(Featuredpage)
   
  return (
    <>
        <div id="featuredpagemain">
           <div>
            <button>Restaurants </button>
           </div>
           <div>
            <button>Food menu</button>
           </div>
           <div>
            <button>Food Map</button>
           </div>
        </div>

        <div id="featuredpagemiddle">
         {
            Featuredpage.length>0 && Featuredpage.map((el)=>{
                return (
                    <div id='featuredpagemiddlediv'>
                        <img src={el.image} alt="" />
                        <h3 id='featuredpagenameh3'>{el.name}</h3>
                        <h3 id='featuredpagetitleh3'>{el.title}</h3>
                        <button id='featuredpagebutton'>View Shop</button>
                    </div>
                )
            })
         }
        </div>
    </>
  )
}
