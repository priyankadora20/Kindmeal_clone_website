import React, { useEffect, useState } from 'react'
import axois from "axios"
import RecipesData from './data'
import './recipes.css'


const Recipes = () => {
    const [count, setCount] = useState(0)

    // const getdata= () =>{
    //     axois.get("http://localhost:8080/sweetfood")
    //     .then((res)=>{
    //         setData(res.data)
    //         console.log(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // }
    // useEffect(() => {
    //     getdata()
    // })

    return (
        <div>
            <div>
                <div className='main'>
                    <div className='recip' >
                        <h1>
                            <span className='food'>Food & Drinks</span> <span className='food2'>| Yummy Meat-Free Recipes</span>
                        </h1>
                        <p>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</p>
                        <p>Transform into a master chef now.</p>
                        <div className='recipfil'>
                            <div>
                                <input className='inp' type="text" placeholder='Search Recipe or User Name' />
                            </div>
                            <div >
                                <select className='sele' name="" id="">
                                    <option value="">All Categories</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div >
                                <button className='red' >Search Recipes</button>
                            </div>
                            <div>
                                <button className='green'>Share My Recipe</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='catego'>
                            <button>All Categorise</button>
                            <button>Appetizers</button>
                            <button>Beverages</button>
                            <button>Breakfast</button>
                            <button>Breads</button>
                            <button>Condiments</button>
                            <button>Desserts</button>
                            <button>Snacks</button>
                            <button>Main Dishes</button>
                            <button>Salads</button>
                            <button>SideDishes</button>
                            <button>Soups</button>
                        </div>
                    </div>
                    
                    
                    {
                        <div className='recdiv'>

                            {RecipesData.map(({ id, logo, catagory, img, name }) => {

                                return (
                                    <div key={id} className="divfood">
                                        <div className='title'>
                                            <img src={logo} alt="" />
                                            <p>{catagory}</p>
                                            <button className='rec-btn' onClick={() => setCount(1)}>View</button>
                                        </div>

                                        <img className='img' src={img} alt='' />
                                        <h2 className='name'>{name}</h2>
                                        <div className='watch'>
                                            <img className='sot' src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                                            <p>{Math.floor(Math.random()*100)} Mint</p>
                                            <div className='hot'>
                                            <button  onClick={() => setCount(1)}><img className='sot' src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></button>
                                                
                                                <p className='cont'>{count}</p>
                                                <img className='sot' src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                                                <p className='cont'>{count}</p>
                                            </div>

                                        </div>

                                    </div>
                                )

                            })}

                        </div>

                    }
                </div>
            </div>
        </div>
    )
}
export default Recipes

