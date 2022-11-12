import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successdata } from './actiontype';
import { Success } from './Types';

function Paginationmealdeal() {
    let data=useSelector((state)=>{
        return state.Meal_Deal.data
    })
    console.log(data)
    let dispatch=useDispatch()
    let [currentpage,setcurrentpage]=useState(1)
    let [postperpage,setpostperpage]=useState(10)

    let lastPostIndex=currentpage*postperpage;
    let firstpostindex=lastPostIndex-postperpage;
    let currentposts=data.slice(firstpostindex,lastPostIndex)
    let totalposts=data.length
    let pages=[]
    for(let i=1;i<=Math.ceil(totalposts/postperpage);i++){
        pages.push(i)
    }
    useEffect(()=>{
    //    dispatch(Success(currentposts))
    },[currentpage])
    let handleclick=(el)=>{
        setcurrentpage(el)
        console.log(el)
        dispatch(successdata(currentposts))

    }
    return (
        <div>
            {pages.map((el,index)=>{
            return (
               <button id='paginationbutton' key={index} onClick={()=>handleclick(el)} >{el}</button>
            )
        })}
            
        </div>
    );
}

export default Paginationmealdeal;