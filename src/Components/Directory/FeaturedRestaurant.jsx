import React from 'react'
import { useSelector } from 'react-redux'

import "./FeaturedRestaurant.css"
export const FeaturedRestaurant = () => {
    let state=useSelector((state)=>{
        console.log(state)
    })
  return (
    <>
        <div id="featuredpagemain">
            <h1>
                Featured restaurant
            </h1>
        </div>
    </>
  )
}
