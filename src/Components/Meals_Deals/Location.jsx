import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { Text } from '@chakra-ui/react';
import "./Location.css"
function Location(props) {
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
            <button className='overviewbutton'><h3>Overview</h3></button>
            </a>
           </div>

           <div>
            <a href="/InsideMealdeal" >
                <button className='overviewbutton'>
                <h3>Meal Deals</h3>
                </button> 
           
            </a>
            </div>

            <div>
            <a href='/Getfreecoupon'>
                <button className='overviewbutton'>

            <h3>Food Menu</h3>
                </button>
            </a>
            </div>

            <div>
            <a href='/Location'>
                <button className='overviewbutton' >

            <h3>Location</h3>
                </button>
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
            <div id='bottomlocation'>
                <div>
                    <h1>Hyderabad Recipes</h1>
                    <h3>Address</h3>
                    <Text>78-1, Jalan Putra,, 50350 Kuala Lumpur, Wilayah Persekutuan, Malaysia</Text>
                    <h3>Opening Hours</h3>
                    <Text>Mon - Sun: 10am - 12am</Text>
                    <h3>Phone</h3>
                    <Text>03-40447786</Text>
                </div>
                <div>
                    <img width={500} src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Location;