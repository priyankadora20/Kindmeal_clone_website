import React from 'react';
import './homepage.css';
import datahompage from './homepagemapdata';


export const Homepage = () => {
  return (
    <>
        <div className='homepage_box1'>
            {datahompage.map(({id,category,img,describe})=>{
                if(category==="Latest News & Videos"){
                    <div key={id}>

                        <img src={img}/>
                        <p>{describe}</p>
                    </div>
                }
            })}

        </div>

    </>
  )
}
