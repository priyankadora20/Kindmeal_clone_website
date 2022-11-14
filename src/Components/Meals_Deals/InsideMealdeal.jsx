import React from 'react';
import "./Getfreecoupon.css";
import { BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {FaStarHalfAlt,FaStar} from "react-icons/fa";

function InsideMealdeal(props) {
    let pages=useSelector((state)=>{
        return state.Meal_Deal.current
        
    })
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
            <h4>Here are exciting deals brought to you by Hyderabad Restaurant.
To take advantage of a deal, just click into it and obtain the corresponding coupon.</h4>
           </div>

           <div id='nutritious'>
            <div>

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
                                <button>{el.button}</button>
                                </div>
                                <div>
                                   <FaStar size={25} color="#fbff00" />
                                   <FaStar size={25}  color="#fbff00"/>
                                   <FaStar size={25}  color="#fbff00"/>
                                   <FaStar size={25}  color="#fbff00"/>
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
        </div>
            
        </div>
    );
}

export default InsideMealdeal;