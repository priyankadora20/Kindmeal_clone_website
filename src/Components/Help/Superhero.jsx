import React from 'react'
import "./Help.css"
import "./Advertising.css"
export const Superhero = () => {
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
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/advertising"> Advertising</a>
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
           <div className='advertise'>
            <h1>The Superhero Guide</h1>
            <img src="https://www.kindmeal.my/images/about-hero-1.jpg" alt="" />
           </div>
           <div>
            <h2>Become A Superhero</h2>
            <p>You don't need to envy the Superheroes in movies anymore. Now, YOU can become a real Superhero too and save lives!

All you need to do is enjoy tasty meat-free meals, share KindMoments and encourage your friends to do so, and you'll automatically earn yourself a Superhero status on KindMeal.</p>
           </div>
           <div>
            <h2>Win Exclusive Superhero Gifts</h2>
            <p>TFor December 2022, 10 lucky Superheroes that have achieved Spiderman status and above at the end of the month will be selected to win the KindMeal Superhero 10cm x 6cm luggage tag!

Every Fifty (50) points earned automatically qualifies you for One (1) Lucky Draw entry.

Winners can select from any one of the following Superhero designs, subject to availability. Gift will be posted to winner free of charge.</p>
           </div>
           <div className='advertise'>
            <img src="https://www.kindmeal.my/images/contests/xmas2014/superhero_gifts.jpg" alt="" />
           </div>

           <div className='advertise'>
            <h1>The Superhero Ranks</h1>
            <img src="https://www.kindmeal.my/images/about-hero-2.jpg" alt="" />
           </div>

           <div className='advertise'>
            <h1>Your Superhero Profile</h1>
            <p>Superhero statistics are displayed on each member's profile:
Lives Saved: Total lives saved by member and their referred friends. This is calculated from the KindMeal coupons used and KindMoments posted.
Power Level: Determined by the Experience Points (XP) earned over the past 30 days. Each KindMeal activity generates a certain number of points (more details at Earning Experience Points section)
Superhero Rank: Current Superhero rank, determined by the Power Level. You will also receive a Superhero Medal when you achieve the Top 3 Levels, displayed on your profile and headshot at various locations. You can also share (a.k.a. show off) your achieved Superhero rank on social media.</p>
           <img src="https://www.kindmeal.my/images/about-hero-3.jpg" alt="" />
           </div>
            
       </div>
    </div>
    </>
  )
}
