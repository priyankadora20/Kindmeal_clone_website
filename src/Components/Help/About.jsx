import React from 'react'
import "./Help.css"
import "./Advertising.css"
export const About = () => {
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
            <h1>The World's 1st Meat-Free Lifestyle Platform</h1>
            <h2>How It All Began</h2>
            <p>Founded by Andy Koh in 2008, PetFinder.my has been working hard with nationwide animal shelters, rescuers, and pet lovers to improve Malaysia's animal welfare. Much of our focus was centered upon pets — specifically, dogs and cats (alright, we have rabbits, hamsters, birds, fishes, turtles and chickens too).

However, there exists a very real burden for all people involved in animal welfare: the challenging demand of their time, effort and money. It is no easy task being a rescuer, and only a tiny fraction of animal lovers are able to be actively involved in such onerous tasks. How do we widen the circle of people in animal welfare, and make it so attractive and simple that anyone can participate?

Thus, the concept of KindMeal was born. A platform for anyone, irregardless of age, gender or financial status, to save lives anywhere, anytime. Without requiring any effort, time or money. In fact, they can even SAVE money. Sounds too good to be true, eh? Don't worry, this is not a pyramid scheme.</p>
            <img src="https://www.kindmeal.my/images/about-1.jpg" alt="" />
           </div>
           <div>
            <h2>Saving Lives With Delicious Meals</h2>
            <p>How does eating food help save animal lives? Isn't food consumption just for saving our own lives?

Actually, the concept is really simple. Unless you are a vegetarian or vegan (which we salute you for), most of us are taking the lives of animals every single day. These animals — be it chickens, cows, lambs, ducks, pigs or fishes, are equally precious lives, and deserve our kindness and compassion as much as our beloved pets.

They experience joy, pain, hunger, love and sadness similar to us. Just because we are not able to communicate well with them, make them fetch a ball or keep them as pets in our homes, we tend to neglect their well-being and shift our focus to the so-called delicious taste of their meat.

We understand that it may not be easy to become a full vegetarian, but we strongly believe that it is feasible and achievable for all of us to reduce meat consumption, be it for compassion, health or environmental reasons. If we eat a couple of meat-free meals a week, it effectively means that we would be consistently saving the lives of many animals each month which would otherwise have ended up in our bellies.

We have been accustomed to delicacies and cuisines made of meat, but it need not remain so. There exists a wide variety of meat-free food that are delicious and nutritious, and more often than not, cost less than similar meals with meat.

So, how do we get started?</p>
           </div>
           <div>
            <h2>The KindMeal Vision</h2>
            <p>To promote this concept, our team worked round the clock for months and months (we forgot what the sun looks like) to introduce a unique and exciting platform to promote meat-free dining.

It is not sufficient to just tell people the benefits of meat-free dining. We have to give them good, practical reasons for trying it out, and it has to be simple, effective, and of course, enjoyable.

KindMeal attempts this by closely working with restaurants and cafes to offer attractive meat-free deals and cozy dining environments. Everyone loves good food and great bargains!

The restaurants need not be strictly vegetarian, as long as the deals and food they promote on KindMeal are meat-free. We want food lovers to be able to enjoy meat-free meals conveniently, including at their existing favorite restaurants.

Our platform offers a structured, effective way for restaurants to promote themselves, with a proper showcase of their shop, menu, deals and outlets. Getting and using deal coupons are extremely simple, it only takes ONE single click — no online payment, advance planning, coupon printing or reservation required. Even your pet can do it. Eating is all about spontaneity, right?

The KindWords and KindMoment features are carefully crafted to encourage viral promotion of restaurants and the meat-free dining experience, creatively leveraging on social media to strengthen the cause. Consumers can DOUBLE their deal discounts by sharing it on social media, and camwhore with the delicious food to show their friends (Malaysians LOVE taking photos of their food, perhaps even more than eating it).

Ultimately, it is a cycle of supply and demand. The more food lovers that try out such meals, the more encouraged restaurants are in introducing creative meat-free menu items, which would in turn attract more people into compassionate dining.

This will not happen overnight, but we have to start somewhere and help it materialize.</p>
           </div>
           <div className='advertise'>
            <img src="https://www.kindmeal.my/images/about-2.jpg" alt="" />
           </div>
            <div>
                <h2>Of Factory Farming & Global Warming</h2>
                <p>60 billion farm animals are slaughtered each year for our pleasure. Factoring in marine lives, it reaches a whopping 2 TRILLION each year.

Most of us are aware of the issues brought forth by such widespread consumption. Inhumane farm conditions where animals live perpetually in dirty, packed and tortorous environments before being carelessly slaughtered. Animals are force-fed to introduce more fats in them, pre-emptively given antibiotics to keep them alive, incapacitated to prevent them from accidentally harming each other in overpacked environments — these are but a few examples of their voiceless sufferings, unfortunate lives that are bred to be killed, to satisfy the whims and fancies of us civilized humans.

We are experiencing global food shortage because so much of the agriculture land is used for planting animal feed. If such lands were used for feeding humans, bypassing the animal food chain, it would be so much more efficient, with lower food prices and much less blood on our hands.

Did you know that the biggest contributor of global warming is the gas emitted by cows? Yes, they fart. A lot. A single cow releases as much greenhouse gases as a car driving 12,000km per year. Now multiply that by 1,500,000,000 cows.

There is a wealth of resources and literature out there on why we should reduce meat consumption, so we won't delve into it in detail. But you get the drift.</p>
            </div>
           {/* <div className='advertise'>
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
             */}
       </div>
    </div>
    </>
  )
}
