import { Box, Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import React from 'react';
import Inputtag from './Inputtag';
import Main from './Main';
import "./Meal_Deal.css"
import Paginationmealdeal from './Paginationmealdeal';
import Topfooterimage from './Topfooterimage';
function Meals_Deals(props) {
    return (

        <>
        <div id='Mealdealtop'>

    <div>
        <div id='heading_mealdeal'>
            <h1>Meat-Free Deals   |   Restaurants In Malaysia</h1>
        </div>
        <div>
        <p id='heading_mealdealptag' >
              Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!</p>
    
        </div>

        <div>
            <Inputtag/>
            
        </div>
      
     
            
    </div>
        </div>
       

        <div>
            <Main/>
        </div>
        <div>
            <Topfooterimage/>
        </div>
        </>
    );
}

export default Meals_Deals;