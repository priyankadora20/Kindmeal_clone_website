import React from 'react'
import "./Help.css"
import "./Advertising.css"
export const Advertising = () => {
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
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/help"> About Kindmeal</a>
            </div>
            <div className='imgdiv'>
             <img src="https://www.kindmeal.my/images/about_hero.png" alt="" />
             <a id='help' style={{color:"black",textAlign:"center"  }} href="/superhero"> Superhero Guide</a>
            </div>
           
        </div>
       <div id='helppageright'>
           <div className='advertise'>
            <h1>Advertise & Support Us</h1>
            <img src="https://www.kindmeal.my/images/advertise.png" alt="" />
           </div>
           <div>
            <h2>Grow Your Business Compassionately</h2>
            <p>Do you offer F&B or consumer-related products / services? Advertise on Malaysia's leading meat-free lifestyle platform, support our welfare efforts and grow your business compassionately.

Together with PetFinder.my, Malaysia's largest animal welfare portal, we reach out to over 500,000 diners and animals lovers, collaborating closely with NGOs, media and corporations.</p>
           </div>
           <div>
            <h2>Advertising Options</h2>
            <p>Try out our popular, cost-effective advertising channels, or run creative campaigns tailored to your advertising needs.</p>
           </div>
           <div id='advertiseimg'>
            <div>
                <img src="https://www.kindmeal.my/images/advertise-website.jpg" alt="" />
                <p>premium Banners</p>
            </div>
            <div>
                <img src="https://www.kindmeal.my/images/advertise-facebook.jpg" alt="" />
                <p>Social Media Highlights</p>
            </div>
            <div>
                <img src="https://www.kindmeal.my/images/advertise-newsletter.jpg" alt="" />
                <p>Weakly Newsletters</p>
            </div>
           </div>
       </div>
    </div>
    </>
  )
}
