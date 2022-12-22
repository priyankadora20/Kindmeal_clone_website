import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
        <div className='footer'>
    
            <div style={{width:"100%"  , backgroundColor:"#2bb673"}}>
                <div className='Foote-div' >
                    <div className='fdd'>
                        <h3 className='headhead_head'>General</h3>
                        <div className='fdd'>
                        <Link to="/">
                       <p className='linkuse'>
                              Home
                            </p>
                        </Link> 
                           <Link to="/user_signup">  
                            <p className='linkuse'>Sing Up</p>
                            </Link>
                            <p>Businesses/Restaurateures</p>
                            <p>Advertising</p>
                            <p>About KindMeal.my </p>
                            <p>Help & Conditions</p>
                            <p>Terms & Conditions</p>
                            <p>Inspriring Parners</p>
                            <p>Lifestyle Ambassadors</p>
                            <p>Jobs & Careers</p>
                            <p>Contact </p>
                        </div>
                    </div>
                    <div className='fdd'>
                        <h3 className='headhead_head'>Features</h3>
                        <div className='fdd'>
                            <Link to="/mealDeals">
                            <p className='linkuse'>
                               Meat-Free Deals
                            </p>
                            </Link>
                            <p>Tasty Menus</p>
                            <Link to="/kindmoments">
                            <p className='linkuse'>Kind Moments</p>
                            </Link>
                            <p>Member Recommendations</p>
                            <p>featured Restaurrants</p>
                            <p>Vegetarian & Vegan Directory</p>
                            <Link to="/Location">
                            <p className='linkuse'>Food Map</p>
                            </Link>
                            <p>Become A Superhero</p>
                            <p>Vegan News & Vegetarian Articls</p>
                            <p>Latest Comments</p>
                        </div>
                    </div>
                    <div className='fdd'>
                        <h3 className='headhead_head'>Social Media</h3>
                        <div>
                            <Link to="/kindmoments">
                            <p className='linkuse'>KindMeal Widget</p>
                            </Link>
                            <a href="https://www.facebook.com/KindMeal.my" target="_blank">
                            <p className='linkuse'>Facebook</p>
                            </a>
                            <a href="https://twitter.com/KindMeal" target="_blank">
                            <p className='linkuse'>Twitter</p>
                            </a>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className='fdd'>
                        <h3 className='headhead_head'>Mobile</h3>
                        <div>
                            <p>iPhone & ipod App</p>
                            <p>Android App</p>
                        </div>
                        <h3 className='headhead_head'>Exciting Proms</h3>
                        <div> 
                            <p>Gadhimai: Ending Mass Slaughter</p>
                            <p>
                               Free Meals
                            </p>
                            <p>Food Bloggers</p>
                            <p>Uber CHIRP</p>
                            <p>Jane Goodall Contest</p>
                            <p>Win Digi iPhone 6</p>
                            <p>Feed The Poor</p>
                            <p>Win Superhero Gifts</p>
                            <p>Win Superhero</p>
                            
                        </div>
                    </div>
                    <div className='fdd'>
                        <h3 className='headhead_head'>PetFinder.my</h3>
                        <div>
                            <p>Adopt A Pet </p>
                            <p>Smartphone Apps</p>
                            <p>WAGazine</p>
                            <p>Discussion Forum </p>
                            <p>medical Fund</p>
                        </div>
                    </div>
                </div>
                <div className='fddh'  >
                    <p>Copyright © KindMeal.my, 2014 - 2022. All rights reserved</p>
                    <p>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
