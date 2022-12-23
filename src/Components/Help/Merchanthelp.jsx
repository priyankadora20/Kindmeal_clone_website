import React from 'react'
import "./Help.css"
export const Merchanthelp = () => {
  return (
    <>
    <div id="helppagemain">
        <div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/join_normal.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> General Help</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/merchanthelp"> Merchant Help</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/icon-megaphone.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/advrertising"> Advertising</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/about_us.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/abouthelp"> About Kindmeal</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/about_hero.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/superhero"> Superhero Guide</a>
            </div>
           
        </div>
       <div id='helppageright'>
        <img src="https://www.kindmeal.my/images/error.png" alt="" />
        <h2 style={{color:"red"}}>You are not authorized this!</h2>
       </div>
    </div>
    </>
  )
}
