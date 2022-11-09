import React from 'react';

function Inputtag(props) {
    return (
        <div id='inputtags' >
            <div>

            <input className='search' type="text" placeholder='Search Shop ' />
            </div>
            <div>

            <select name="" id="">
                <option value="All Categories">All Categories</option>
                <option value="Pasta">Pasta</option>
                <option value="Burger">Burger</option>
                <option value="Break Fast">Break Fast</option>
                <option value="Salad">Salad</option>
                <option value="Bakery">Bakery</option>
                <option value="Tea & Dessert">Tea & Dessert</option>
                <option value="Local & Delights">Local & Delights</option>
                <option value="Chinese">Chinese</option>
            </select>
            </div>
            <div>

            <select name="" id="">
                <option value="">All Locations</option>
                <option value="">Kuala Lumpur</option>
                <option value="">Petaling Jaya</option>
                <option value="">Ampang</option>
                <option value="">Bangsar</option>
                <option value="">Bangsar South</option>
                <option value="">Banting</option>
                <option value="">Bukit Bintang</option>
                <option value="">Cheras</option>
                <option value="">Damansara Heights</option>
            </select>
            </div>
            <div>

           <button className='Deal'>Search Deal</button>
            </div>
            <div>

           <button className='browse'>Browse Restaurant</button>
            </div>

        </div>
    );
}

export default Inputtag;