import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Buttondata, Menudata } from '../Meals_Deals/actiontype'
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

    let [chicken,setchicken]=useState(false)
    let [Arrabiata,setarrabiata]=useState(false)
    let [breast,setbreast]=useState(false)
    let [seafood,setseafood]=useState(false)

    let onclickchicken=()=>{
        setchicken(true)
        setarrabiata(false)
        setbreast(false)
        setseafood(false)
    }
    let onclickarrabiata=()=>{
        setarrabiata(true)
        setbreast(false)
        setchicken(false)
        setseafood(false)
    }
    let onclickbreast=()=>{
        setbreast(true)
        setarrabiata(false)
        setchicken(false)
        setseafood(false)
    }

    let onclickseafood=()=>{
        setbreast(false)
        setarrabiata(false)
        setseafood(true)
         setchicken(false)
    }

    useEffect(()=>{
        if(chicken){
            dispatch(Buttondata("Search.php?s=Chicken"))
        }
        if(Arrabiata){
            dispatch(Buttondata("filter.php?a=Canadian"))
        }
        if(breast){
            dispatch(Buttondata("filter.php?i=chicken_breast"))
        }
        if(seafood){
            dispatch(Buttondata("filter.php?c=Seafood"))
        }
    },[chicken,Arrabiata,breast,seafood])

    let buttondata=useSelector((state)=>{
        return state.Meal_Deal.buttondata
    })

    
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
        <div id='foodmenupagebuttons'>
            <div>
                <button name='chicken' onClick={onclickchicken}  >Chicken</button>
            </div>
            <div>
                <button name='chicken' onClick={onclickarrabiata} >Arrabiata</button>
            </div>
            <div>
                <button name='chicken' onClick={onclickbreast} >Chicken Breast</button>
            </div>
            <div>
                <button name='chicken' onClick={onclickseafood} >Seafood</button>
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
        <div id='foodmenupagebutton'>
        {
                buttondata.length>0? buttondata.map((el)=>{
                    return (
                        <div>
                        <img src={el.strMealThumb} alt="" />
                        <h3>{el.strMeal}</h3>
                    </div>
                    )
                }):""
            }
        </div>
    </>
  )
}
