import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Success } from './Types';

function Paginationmealdeal() {
    let data=useSelector((state)=>{
        return state.data
    })
    console.log(data)
    let dispatch=useDispatch()
    let [currentpage,setcurrentpage]=useState(1)
    let [postperpage,setpostperpage]=useState(2)

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
        console.log(currentposts)

    }
    return (
        <div>
            {pages.map((el,index)=>{
            return (
               <button key={index} onClick={()=>handleclick(el)} >{el}</button>
            )
        })}
            
        </div>
    );
}

export default Paginationmealdeal;