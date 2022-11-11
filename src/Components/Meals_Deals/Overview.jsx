import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import './Overview.css'
function Overview(props) {
    return (
        <div>
            <div id='getfreecouponimg'>
            <img src="https://www.kindmeal.my/photos/shop/4/482-c.jpg" alt="" />
           </div>
           <div id='getfreecouponheading' >
            <h1>Hyderabad Recipes</h1>
           </div>

           <div id='linksection'>
           <div>

            <a href='/Overview'>
            <h3>Overview</h3>
            </a>
           </div>

           <div>
            <a href="/InsideMealdeal" >
                {/* Meal Deal */}
            <h3>Meal Deals</h3>
            </a>
            </div>

            <div>
            <a href='/Getfreecoupon'>
            <h3>Food Menu</h3>
            </a>
            </div>

            <div>
            <a href='/Location'>
            <h3>Location</h3>
            </a>
            </div>
            <div id='twitter' >
                <BsTwitter size={40} color="blue" />
            </div>
            <div id='sharebtn' >
                <button>Share</button>
            </div>
            <div id='like'>
                <AiFillLike size={40} color="blue" />
            </div>

          

           

           </div>
           <div id='overviewmiddle'>
            <div id='overviewimage' >
                <img id='imagename' src="https://www.kindmeal.my/photos/shop/6/624-4811-l.jpg" alt="" />
            </div>
            <div id='overviewleftside' >
                <div>
                    <h2>Food Type</h2>
                    <h2>Environment</h2>
                    <h2>Halal</h2>
                    <h2>Website</h2>
                    <h2>Meal Deals</h2>
                    <h2>Food Menu</h2>
                    <h2>Outlets</h2>
                </div>
                <div>
                    <h4>Vegetarian--Asian Cuisine</h4>
                    <h4>Non Air--Conditioned, Wifi Not Available Products For Sale</h4>
                    <h4>Yes</h4>
                    <h4>https://www.facebook.com/yishensugroceries</h4>
                    <h4>1 Delicious Offer</h4>
                    <h4>99 Sizzling Items</h4>
                    <h4>1 Location --Ipoh</h4>
                </div>
            </div>
           </div>

           <div id='overviewtext'>
            <h1>Welcome To Hyderabad recipes</h1>
            <p>Hyderabad Recipes is an Indian fine dining restaurant serving authentic, world famous Haleem, Biryanies, BBQ, Indian breads and desserts.

Our mission is to serve the best Hyderabadi cuisine, including the 'World's Favourite Biryani', in a comfortable and family-friendly environment.

Our objective is to keenly listen to our guests with a view to continuously improve and improvise the signature experience across all our outlets.

Our approach is to generate customer delight by serving gues…</p>
           </div>
           <div id='overviewyummyfood' >
            <div>
                <img src="https://www.kindmeal.my/photos/moment/24/24580-47605-m.jpg" alt="" />
                <h4>Hyderabadi Indian Feast</h4>
            </div>
            <div>
                <img src="https://www.kindmeal.my/photos/moment/24/24579-47600-m.jpg" alt="" />
                <h4>Mix Vegetables</h4>
            </div>
            <div>
                <img src="https://www.kindmeal.my/photos/moment/24/24550-47504-m.jpg" alt="" />
                <h4>Special</h4>
            </div>
            <div>
                <img src="https://www.kindmeal.my/photos/moment/24/24585-47623-m.jpg" alt="" />
                <h4>Hyderabadi Naan</h4>
            </div>
            <div>
                <img src="https://www.kindmeal.my/photos/moment/24/24585-47620-m.jpg" alt="" />
                <h4> Soup</h4>
            </div>
           </div>

           <div id='overviewmaster'>
            <img src="https://www.kindmeal.my/images/banner_recipe.jpg" alt="" />
           </div>
           <div id='overviewbottomdiv'>
            <div>
                <h1>Location</h1>
                <h4>Hyderabad Recipes</h4>
               <h6> 78-1, Jalan Putra,, 50350 Kuala Lumpur, Wilayah Persekutuan
Opens: Mon - Sun: 10am - 12am
Tel: 03-40447786</h6>
<img height={300} width={500} src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div>
                <h1>Customer KindMomments(1)</h1>
                <img src="https://www.kindmeal.my/photos/item/0/482-5782-m.jpg" alt="" />
                <h4>Mango Lassi</h4>
            </div>

           </div>
            
        </div>
    );
}

export default Overview;