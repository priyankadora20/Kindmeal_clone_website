import React, {useState, useEffect} from "react";

// import {AiOutlineLike} from "react-icons-id"

// const Data = [
//   {
//     id: 17,
//     logo: "https://www.kindmeal.my/photos/member/35/35085-s.jpg",
//     catagory: "SynThiaSumireDT",
//     img: "https://www.kindmeal.my/photos/recipe/1039/1039459-58887-m.jpg",
//     name: "Stir-fried Broccoli Rice ",
//   },
// ];

export default function Fetch() {

  const [Data, setData] = useState([]);

    const localStorageData = ()=>{
        let valueData = JSON.parse(localStorage.getItem("itemadd")) || [];
        setData(valueData)
    }

    useEffect(()=>{
        localStorageData()
    },[])
  const [count, setCount] = useState(0)
  const [follow, setFollow] = useState(0)
  return (
    <div>
      <div>
        <div>
          <div>
                <div >
                  <img className="fetch" src={Data.img} alt="img" />

                  <div className="reci">
                    <div className="fetch-recipe">
                      <img src={Data.logo} alt="logo" />
                      <div>
                        <div className="recipesfllow">
                          <h2 className="follow">{Data.catagory}</h2>
                          <h2 className="follow"> {follow} Followers</h2>
                        </div>
                        <div>
                          <button className="red" onClick={() => setFollow(follow+1)}>+Follow Member</button>
                          <button className="follow">Contact Member</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            
          </div>
        </div>
        <div>
          <div>
                <div  className="div">
                  <h1>{Data.name}</h1>
                  <div className="div-fetch">
                    {" "}
                    <img src={Data.img} alt="img" />
                    <div>
                      <div className="div-fetch">
                        <h2>
                          Time{" "}
                          <spam style={{ color: "green" }}>
                            {Math.floor(Math.random() * 100)} Mint{" "}
                            {Math.floor(Math.random() * 100)} Hr
                          </spam>
                        </h2>
                        <h2>
                          Servings{" "}
                          <spam style={{ color: "green" }}>Depends</spam>
                        </h2>
                      </div>
                      <div className="div-fetch">
                        <div>
                          <h2>Diet Restriction </h2>
                          <img src="https://www.kindmeal.my/images/icon_help.png" />
                          <p> - - -</p>
                        </div>
                        <div className="img6">
                          <h2>Rating</h2>
                          <img src="https://www.kindmeal.my/images/icon_star.png" />
                          <img src="https://www.kindmeal.my/images/icon_star.png" />
                          <img src="https://www.kindmeal.my/images/icon_star.png" />
                          <img src="https://www.kindmeal.my/images/icon_star.png" />
                          <img src="https://www.kindmeal.my/images/icon_star.png" />
                          <h3>6 Votes</h3>
                        </div>
                      </div>
                      <div className="divfetch">
                        <button className="blue" onClick={() =>setCount(count+1)}> Link {count}</button>
                        <p>	Like this recipe & share with friends!</p>
                        <img src="https://www.kindmeal.my/images/share_facebook.png" />
                        <img src="https://www.kindmeal.my/images/share_twitter.png" />
                      </div>
                    </div>
                  </div>
                  <div className="order">
                    <div>
                      <h1>Description</h1>
                      <p>Your daily lunch is looking sad. Instead of settling for yet another boring diet meal, mix up your midday meal routine with one of these 10 healthy lunch ideas for weight loss. These are not only will you fill up on the good stuff, but these are easy recipes and seriously affordable</p>
                      <p>I hope you like all these lunch recipes</p>
                      
                      <h1>Secret Ingredients</h1>
                      <ul>
                        <li>Ingredients</li>
                        <li>2 slices whole wheat bread (to make homemade croutons)</li>
                        <li>2 tsp olive oil</li>
                        <li>2 oz spinach</li>
                        <li>2.5 oz chickpeas, canned or boiled</li>
                        <li>1 tsp carpers</li>
                        <li>1 garlic</li>
                        <li>1 tsp lemon juice</li>
                        <li>Salt and black pepper</li>
                      </ul>
                    </div>
                    <div className="p">

                      <h1>Directions</h1>
                        <ol>
                          <li>  Cut whole wheat bread into square then add one tea spoon of olive oil and get into baked. Slice spinach put in spinach into the bowl and then add some chickpeas (canned or boilled). add cut whole wheat bread into the bowl together with the spinach. For dressing add one clove, tea spoon of olive, tea spoon of lemon juice, salt and pepper then add dressing into the bowl.</li>
                        </ol>
                      
                    </div>
                  </div>
                </div>
          </div>
          <div>
            <div className="raterecipe" >
              <div className="rate-div">
                <h1>Rate This Recipe</h1>
                <p>What do you think of this recipe?</p>
                <img className="star" src="https://tse4.mm.bing.net/th?id=OIP.QOhwh1JLNOHV6U0URqQpAAHaCt&pid=Api&P=0" />
                <p>No Rating</p>
                <button className="red" >submit Rating</button>
              </div>
              <div className="rate-div">
                <h1>Comments</h1>
                <p>Be the first to comment on this delicious recipe</p>
                <input type='text' placeholder="Enter comment..." />
                <p>No Rating</p>
                <button className="red" >Comment</button>
              </div>

            </div>
          </div>
          <div className="reci0">
            <div className="mitha">
              <h2>More Yummy Recipes</h2>
              <h3>EvnadhamEvnadham's Special Recipes </h3>
              <h3>View All Recipes</h3>
            </div>
            <div className="mitha">
              <div>
                <img src="https://www.kindmeal.my/photos/recipe/83/83859-10388-m.jpg" />
                <h4>Southwestern Frittata</h4>
              </div>
              <div>
                <img src="https://www.kindmeal.my/photos/recipe/89/89143-11640-m.jpg" />
                <h4>Carrot Potato Pancakes</h4>
              </div>
              <div>
                <img src="https://www.kindmeal.my/photos/recipe/116/116672-18108-m.jpg" />
                <h4>Oatmeal Spice Muffins</h4>
              </div>
              <div>
                <img src="https://www.kindmeal.my/photos/recipe/93/93995-12828-m.jpg" />
                <h4>Simple Spaghetti Frittata</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="limg" src="https://www.kindmeal.my/images/banner_directory.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}
