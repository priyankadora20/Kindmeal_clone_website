import React from 'react'
import ResturantData from './rdisplayData'
import "./rdisplay.css"

export default function () {
  return (
  
  <>
    <div>RESTURANT DISPLAY</div>
    <h1 className='NEWResturantDisplay'>New Resturants</h1>
    <div>


    </div>




    <div>
        <div className='oldResturantDisplay'  onClick={()=>{alert("")}} >
              
              {ResturantData.map(({id,img,name,time,opening})=>{
               
                     return(
              <div key={id} className='oldResturantDisplay_cards' >
              <img src={img} />
              <h1>{name}</h1>
              <p>{time}</p>
              <p>{opening}</p>
              </div>
                     ) 
                  
              })}
  
        </div>

    </div>
  </>
   
  )
}
