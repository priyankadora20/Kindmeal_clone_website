import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menudata } from '../Meals_Deals/actiontype'
import "./Foodmenu.css"
export const Foodmenu = () => {
let dispatch=useDispatch()

let data=useSelector((state)=>{
    console.log(state)
    return state.Meal_Deal.menu
})
console.log(data)
    useEffect(()=>{
        dispatch(Menudata())
    },[])
  
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

        <div id='foodmenupagemain'>
            {
                data.length>0 && data.map((el)=>{
                    return (
                        <div>
                            <img src={el.strMealThumb} alt="" />
                            <h3>{el.strMeal}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
