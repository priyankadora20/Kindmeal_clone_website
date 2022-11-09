import React from 'react';
import './homepage.css';
import datahompage from './homepagemapdata';
import MainpageCarosole from './MainpageCarosole';


export const Homepage = () => {
   
  return (
    <> 
        <MainpageCarosole/>
        
        <div className='homepage_box1'>
            {datahompage.map(({id,category,img,describe})=>{
                if(category==="Latest News & Videos"){
                   return(
            <div key={id}>
            <img src={img}/>
            <p>{describe}</p>
            </div>
                   ) 
                }
            })}

        </div>
        
        <div>
        {datahompage.map(({id,category,img,describe})=>{
                if(category==="Discover Restaurants"){
                   return(
            <div key={id}>
            <img src={img}/>
            <p>{describe}</p>
            </div>
                   ) 
                }
            })}
        </div>


        <div>
        {datahompage.map(({id,category,img,describe})=>{
                if(category==="Yummylicious Moments"){
                   return(
            <div key={id}>
            <img src={img}/>
            <p>{describe}</p>
            </div>
                   ) 
                }
            })}
        </div>


        <div>
        {datahompage.map(({id,category,img,describe})=>{
                if(category==="Amazing Superheroes"){
                   return(
            <div key={id}>
            <img src={img}/>
            <p>{describe}</p>
            </div>
                   ) 
                }
            })}
        </div>

        <div>
            /
        </div>
    </>
  )
}
