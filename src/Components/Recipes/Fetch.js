
import React from 'react'

export default function Fetch() {
  const data =[
    {
      id:17,
      logo:"https://www.kindmeal.my/photos/member/35/35085-s.jpg",
      catagory:"SynThiaSumireDT",
      img:"https://www.kindmeal.my/photos/recipe/1039/1039459-58887-m.jpg",
      name:"Stir-fried Broccoli Rice "
    }
  ]
  return (
    <div>
      <div>
        <div>
          <div>
            {
              data.map((id, logo, catagory,  img, name,) =>{
                return (
                  <div  key={id}> 
                  {/* //style={{backgroundImage:{img}}} */}
                     <div>
                     <img src={logo} alt="logo"/>
                     <div>
                     <div>
                     <h2>{catagory}</h2>
                     <h2>{name} Followers</h2>
                     </div>
                     <div>
                     <button>+Follow Member</button>
                     <button>Contact Member</button>
                     </div>
                     </div>
                     </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
