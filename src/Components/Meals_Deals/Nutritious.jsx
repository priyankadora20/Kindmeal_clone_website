import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import {FaStarHalfAlt,FaStar} from "react-icons/fa"
import {AiFillLike} from "react-icons/ai"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Main from './Main';
import Paginationmealdeal from './Paginationmealdeal';






function Nutritious(props) {

    let maindata=useSelector((state)=>{
        console.log(state)
        return state.Meal_Deal.data
        console.log(state,"state")
       
    })
    console.log(maindata,"maindata")
    let search=useSelector((state)=>{
        return state.Meal_Deal.throughsearch
    })
    let pages=useSelector((state)=>{
        return state.Meal_Deal.current
        
    })
    let navigate=useNavigate()
    let handlegetfreecoupon=()=>{
        navigate("/Getfreecoupon")
    }   

    let filterdata=maindata.filter((el)=>{
        return el.category==search
    })
    console.log(filterdata)

    useEffect(()=>{

    },[filterdata])
    
    return (
       
        <>
       {
        filterdata.length>0?
        <div>
            
        {
            filterdata.map((el)=>{
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
                               <FaStar size={25} color="#fbff00"/>
                               <FaStar size={25} color="#fbff00"/>
                               <FaStar size={25} color="#fbff00"/>
                               <FaStarHalfAlt size={25}  color="#fbff00"/>
                               {/* <AiFillLike/> */}
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
    
        : <div>
            
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
                                   <FaStar size={25} color="#fbff00"/>
                                   <FaStar size={25} color="#fbff00"/>
                                   <FaStar size={25} color="#fbff00"/>
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
}
        </>
    );
}

export default Nutritious;