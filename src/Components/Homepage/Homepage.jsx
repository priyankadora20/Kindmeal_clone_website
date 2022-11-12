import React from 'react';
import './homepage.css';
import datahompage from './homepagemapdata';
import MainpageCarosole from './MainpageCarosole';
import featurep from '../Homepageimage/featurep.png';
import icon1 from '../Homepageimage/icon1.png';
import icon2 from '../Homepageimage/icon2.png';
import icon3 from '../Homepageimage/icon3.png';
import icon4 from '../Homepageimage/icon4.png';
import Imgnew from './Imgnew';


export const Homepage = () => {
   
    return (
      <> 
          <MainpageCarosole/>
          <Imgnew/>
          <div className='lighblue_box'>
  
          
  
        <div className='homepage_box1'>
          <div className='homepage_box1_headline'>
              <div className='homepage_box1_headline_left'><h2 className='headline__mainpage_h2'>Latest News & Videos</h2></div>
              <div className='homepage_box1_headline_right'> <h3 className='headline__mainpage_h2'>Save Lives with Your Blog . News &Article . Follow Our Facebook </h3></div>
              
             
          </div>
          <div className='homepage_box1_cont' >
              
              {datahompage.map(({id,category,img,describe})=>{
                  if(category==="Latest News & Videos"){
                     return(
              <div key={id} className='homepage_box1_card'>
              <img src={img} className='homepage_box1_img'/>
              <p className='homepage_box1_desc'>{describe}</p>
              </div>
                     ) 
                  }
              })}
  
          </div>
        </div>
  
  
        <div className='homepage_box1'>
          <div className='homepage_box1_headline'>
          <div className='homepage_box1_headline_left'><h2 className='headline__mainpage_h2'>Yummylicious Moments</h2></div>
              <div className='homepage_box1_headline_right'> <h3 className='headline__mainpage_h2'>Secret Recipes . Member Hot Picks .Photo Moments</h3></div>
          </div>
          <div className='homepage_box1_cont' >
              
              {datahompage.map(({id,category,img,describe})=>{
                  if(category==="Yummylicious Moments"){
                     return(
              <div key={id} className='homepage_box1_card'>
              <img src={img} className='homepage_box1_img'/>
              <p className='homepage_box1_desc'>{describe}</p>
              </div>
                     ) 
                  }
              })}
  
          </div>
        </div>
  
        <div className='homepage_box1'>
          <div className='homepage_box1_headline'>
              <div  className='homepage_box1_headline_left'><h2 className='headline__mainpage_h2'>Discover Restaurants</h2></div>
              <div className='homepage_box1_headline_right'> <h3 className='headline__mainpage_h2'>Vegetarian Directory . Resturant Menu . Food Map </h3></div>
          </div>
          <div className='homepage_box1_cont' >
              
              {datahompage.map(({id,category,img,describe})=>{
                  if(category==="Discover Restaurants"){
                     return(
              <div key={id} className='homepage_box1_card'>
              <img src={img} className='homepage_box1_img'/>
              <p className='homepage_box1_desc'>{describe}</p>
              </div>
                     ) 
                  }
              })}
  
          </div>
        </div>
        
       
  
        
        <div className='homepage_box1'>
          <div className='homepage_box1_headline'>
          <div className='homepage_box1_headline_left'><h2 className='headline__mainpage_h2'>Amazing Superheroes</h2></div>
              <div className='homepage_box1_headline_right' > <h3 className='headline__mainpage_h2'>Latest Buzz . Lifestyle Ambassadors . Win Gifts!</h3></div>
          </div>
          <div className='homepage_box1_cont' >
              
              {datahompage.map(({id,category,img,describe})=>{
                  if(category==="Amazing Superheroes"){
                     return(
              <div key={id} className='homepage_box1_card'>
              <img src={img} className='homepage_box1_img'/>
              <p className='homepage_box1_desc'>{describe}</p>
              </div>
                     ) 
                  }
              })}
  
          </div>
        </div>
  
  
        </div>
  
        <div className='bottom_section'>
  
          <div className='bottom_section_divs newsides' ><h1 >Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</h1></div>
          <div className='bottom_section_divs newsides' id="sideside"><p>Brought to you by</p><img src="https://www.petfinder.my/images/logo-575x100.png" alt="petfinder logo" id='petfinderlogo'/></div>
          <div className='bottom_section_divs'><p>Instant coupon & dining. No upfront coupon payment, booking or printing.</p></div>
          <div className='bottom_section_divs' id="flexes">
              <div className='bottom_section_divs_imgbox'>
                  <img src={icon1} alt="" />
                  <h2>Get Great Deals</h2>
                  <p>Show our FREE digital coupons to instantly enjoy exciting deals</p>
              </div>
  
              <div className='bottom_section_divs_imgbox'>
                  <img src={icon2} alt="" />
                  <h2>Share KindMoments</h2>
                  <p>Spread the joy by sharing your yummy dining moments</p>
              </div>
  
              <div className='bottom_section_divs_imgbox'>
                  <img src={icon3} alt="" />
                  <h2>Discover Delicious Food</h2>
                  <p>Explore the latest exquisite offerings and creative menus</p>
              </div>
  
              <div className='bottom_section_divs_imgbox'>
                  <img src={icon4} alt="" />
                  <h2>Meet Food Lovers</h2>
                  <p>Make new, compassionate friends and share great food tips</p>
              </div>
              
          </div>
          <div className='bottom_section_divs'><p>Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
              Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</p></div>
              
          <div className='bottom_section_divs'>
              <button id='redbutton_mainpage'>
                  <a href="">
                      <h1>Join KindMeal Now</h1>
                      <br/>
                      <p>Your tasty journey begins here</p>
                  </a>
              </button>
          </div>
          <div className='bottom_section_divs images_maao'>
              <img src={featurep} alt="" />
          </div>
  
  
  
        </div>
   
         
      </>
    )
  }
  