import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Restaurantdata } from '../Meals_Deals/actiontype'
import "./Paginationrestaurant.css"
export const Paginationrestaurant = () => {

    let data=useSelector((state)=>{
        return state.Meal_Deal.Featuredrestaurantpage
    })
    let dispatch = useDispatch();
    let [currentpage, setcurrentpage] = useState(1);
    let [postperpage, setpostperpage] = useState(10);
  
    let lastPostIndex = currentpage * postperpage;
    let firstpostindex = lastPostIndex - postperpage;
    let currentposts = data.slice(firstpostindex, lastPostIndex);
    console.log(currentposts,"currentposts")
    let totalposts = data.length;
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalposts / postperpage); i++) {
      pages.push(i);
    }
    useEffect(() => {
      //    dispatch(Success(currentposts))
      console.log(currentpage,"inside useeffet")
    }, [currentpage]);
    let handleclick = (el) => {
      setcurrentpage(el);
      console.log(el);
      dispatch(Restaurantdata(currentposts));
    };

  return (
    <div id="paginationbuttonbutton">
        <h3 id='pagebutton' >Pages :</h3>
      {pages.map((el, index) => {
        return (
          <button
            id="paginationbutton"
            key={index}
            onClick={() => handleclick(el)}
          >
            {el}
          </button>
        );
      })}
    </div>

  )
}
