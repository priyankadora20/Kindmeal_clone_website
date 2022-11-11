import React from 'react';
import {Routes,Route} from"react-router-dom"
import Getfreecoupon from './Getfreecoupon';
import InsideMealdeal from './InsideMealdeal';
import Location from './Location';
import Meals_Deals from './Meals_Deals';
import Overview from './Overview';
function Mealdealroutes(props) {
    return (
        <Routes>
            <Route path='/' element={<Meals_Deals/>}/>
            <Route path='/Getfreecoupon' element={<Getfreecoupon/>}/>
              <Route path='/InsideMealdeal' element={<InsideMealdeal/>}/>
              <Route path='/Overview' element={<Overview/>}/>
              <Route path="/Location" element={<Location/>}/>
        </Routes>
    );
}

export default Mealdealroutes;