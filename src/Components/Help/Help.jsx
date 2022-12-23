import React from 'react'
import "./Help.css"
export const Help = () => {
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
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> Merchant Help</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/icon-megaphone.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> Advertising</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/about_us.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> About Kindmeal</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/about_hero.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> Superhero Guide</a>
            </div>
           
        </div>
        <div>

        </div>
    </div>
    </>
  )
}
