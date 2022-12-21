import { Get, Search, Success } from "./Types"

let initstate={
    apidata:[],
    Featuredrestaurantpage:[
        {
            image:"https://www.kindmeal.my/photos/shop/1/126-cm.jpg",
            name:"Kuala Lumpur & 1 Branch",
            title:"Purple Cane Tea Cuisine is uniquely prepared, infusing tea in every dish to bring out the natural aroma and flavor of fo..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/520-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Tea+ indulges you with the first artisan tea bar experience in Malaysia. We are here to revive the forgotten culture, t..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/493-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Love Earth Cafe is established since 2010, promoting the love of our planet earth and environment through a delicious va..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/630-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"A meat-free restaurant run by a small-town girl, serving local cuisine that is prepared and cooked with a lot of love.",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/604-cm.jpg",
            name:"Cheras, Selangor",
            title:"Recognized as the First Hainanese Vegeterian Kopitiam in Malaysia” by the Malaysia Book of Records, Hainan Village stri..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/405-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"With beginnings in Ipoh and Kampar as manufacturers and suppliers of processed vegetarian food, Yishensu was known as Yi..",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
        {
            image:"",
            name:"",
            title:"",
        },
    ],
    data:[
        {
            image:"https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg",
            name:'Nutritious Meets Delicious',
            description:"Wise Crafters offers freshly-prepared meals, developed by a team of chefs and nutritionists. Let us invigorate your body and mind..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'chinesefood',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg",
            name:'Churros, Coffee & Meals',
            description:"Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'chinesefood',
            expires:'13 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg",
            name:'Scrumprious Croutons',
            description:"Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg",
            name:'Flavours Around the World',
            description:"Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'6 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/720-5195-l.jpg",
            name:'Yishensu Groceries @ Ipoh',
            description:"Yishensu Groceries, Ipoh offers you a wide range of healthy, nutritious and tasty vegetarian products! We develop our own exclus..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'japanesefood',
            expires:'13 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/610-3386-l.jpg",
            name:'Authentic Asian Experience',
            description:"Indulge yourself in healthy, authentic Asian cuisines within a traditional dinning environment. Enjoy any items from our ala cart..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
            name:'Dining Bowl Asian Delicacies',
            description:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'4 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/696-5075-l.jpg",
            name:'Fusion Gourmet Cuisine',
            description:"Alice Kitchen delights you with fusion vegetarian and vegan gourmet cuisine, with an innovative gastronomic take on traditional an..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'18% Off',
            expires:'1 Day'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/704-4734-l.jpg",
            name:'Vegan Ice-Cream Indulgence',
            description:"Indulge in our rich, flavorful selection of vegan ice-creams, crafted with healthy, natural ingredients. Enjoy any ice-creams fro..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            expires:'9 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg",
            name:'Smooth Teas & Cold Brews',
            description:"Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% off',
            category:'chinesefood',
            expires:'3 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/628-4921-l.jpg",
            name:'Japanese Fusion Delights',
            description:"Enjoy creative, delicious and healthy fusion Japanese cuisine at Sushi Kitchen! Meticulously prepared with fresh, quality ingredi..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            category:'japanesefood',
            expires:'6 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/681-4353-l.jpg",
            name:'Contemporary Vegetarian experience',
            description:"Berjaya Cafe delights you with opulence, style and taste from the best chefs in town. Savor only the best in gastronomic experien..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'chinesefood',
            expires:'13 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
            name:'Managga Natural Lifestyle',
            description:"Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg",
            name:'Authentic Italian Indulgence',
            description:"Enjoy authentic Italian cuisine within a cozy environment! Pizza, breads and sometimes cakes or cookies are baked within the in-h..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            category:'chinesefood',
            expires:'8 Days'
        },

        {
            image:"https://www.kindmeal.my/photos/deal/6/628-4921-l.jpg",
            name:'japanese Fusion Delights',
            description:"Enjoy creative, delicious and healthy fusion Japanese cuisine at Sushi Kitchen! Meticulously prepared with fresh, quality ingredi..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'30% Off',
            category:'japanesefood',
            expires:'4 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/681-4353-l.jpg",
            name:'Contemporary Vegetarian Experience',
            description:"Berjaya Cafe delights you with opulence, style and taste from the best chefs in town. Savor only the best in gastronomic experien..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'23% Off',
            expires:'5 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
            name:'Mangga Natural Lifestyle',
            description:"Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            expires:'6 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg",
            name:'Authentic Italian Indulgence',
            description:"Enjoy authentic Italian cuisine within a cozy environment! Pizza, breads and sometimes cakes or cookies are baked within the in-h..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'chinesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/727-5295-l.jpg",
            name:'Homemade Sandwiches & Open Toasts',
            description:"Enjoy our healthy homemade sandwich loaves and open toasts, all vegan and undergo natural yeast fermentation. The desserts served ..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'chinesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/644-3810-l.jpg",
            name:'Wholesome Western Experience',
            description:"Enjoy delicious, wholesome Western cuisine at our cozy, relaxing cafe while we serenade you with our artsy ambiance and musical mo..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'chinesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/551-2642-l.jpg",
            name:'Fine coffees & Fabulous Food',
            description:"Serving classic dishes with a contemporary twist, using the freshest and seasonal ingredients. Select from any of our meat-free i..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/627-3532-l.jpg",
            name:'Lei Cha & Organic Meals',
            description:"Enjoy our healthy organic food within a cozy environment. Select any items from our menu, including: • Green Talk Thunder Tea (..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/712-5119-l.jpg",
            name:'Malaysian vegan Experience',
            description:"Indulge in Malay-Indo fusion cuisine, a plant-based comfort food and healthy pleasure! Hijau is your go-to, where you can embrace..  ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/708-4923-l.jpg",
            name:'Nature Dining',
            description:"Camp Forest presents a pure, natural dining ambience, serving you a healthy, delectable selection of fusion Chinese and Western de..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/628-4921-l.jpg",
            name:'Japanese Fusion delights',
            description:"Enjoy creative, delicious and healthy fusion Japanese cuisine at Sushi Kitchen! Meticulously prepared with fresh, quality ingredi..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/725-5225-l.jpg",
            name:'Healthy Bowls & Coffees',
            description:"Serving healthy bowls with an Asian twist, coffee with quality oat and pea milk, as well as irresistible sweet indulgences! Wheth..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/692-4538-l.jpg",
            name:'Simply Delectable Meals',
            description:"Simply Good Food delights you with our passion for authentic ingredients, honest cooking, and an enjoyable atmosphere. We serve y.. ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'chinesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/684-4446-l.jpg",
            name:'Plant-Based Culinary Experience',
            description:"We indulge you in a delightful meat-free Western culinary experience within a cozy ambience, while also offering plant-based cooki..  ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/724-5208-l.jpg",
            name:'Bingsu & Desserts',
            description:"Indulge in our perfectly decadent desserts of Bingsu, toasts, waffles and homemade pastries, and complement them with quality Arab..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/565-4023-l.jpg",
            name:'Buon Appetito at Table9',
            description:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9. Select any meat-free i..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/633-3874-l.jpg",
            name:'Lovely Fusion Meals',
            description:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods. Select from any of our..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/506-2350-l.jpg",
            name:'Cozy Oriental Dining',
            description:"This place brings back memories to those days where we would have such delicious authentic meals for festive eats. Select from AN..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/626-3611-l.jpg",
            name:'Melakan Indian fusion Cuisine',
            description:"Ignite your taste buds with indian spices and flavours at Melaka's only Indian fully Vegetarian Cafe. We humbly welcome you and y..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/574-3020-l.jpg",
            name:'Mad about food',
            description:"Enjoy a selection of Western cuisine, signature mocktails and desserts, especially their egg bubble waffle! Enjoy meat-free items..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/719-5142-l.jpg",
            name:'Hearty Comfort Food',
            description:"Relish in tasty, nutritious oriental & western delicacies amidst our peaceful, cozy environment. Our food is prepared with heart ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/4/498-2202-l.jpg",
            name:'Imperial Feast',
            description:"Dine like an emperor on a variety of Japanese and Western meals! Feast on delightful items from our selected menu sections below:..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/579-4524-l.jpg",
            name:'Lush Comfort Food',
            description:"Serving deliciously creative comfort food while you relax in our cozy environment. Select any meat-free items from our menu, incl..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/665-4120-l.jpg",
            name:'A Delicious Connection',
            description:"Let us strengthen the connection between your body and soul through our deliciously-crafted meals, while nourishing the connection..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/713-5140-l.jpg",
            name:'Kirean & Chinese Feast',
            description:"Feast on our signature Korean & Chinese cuisine, as well as hotpot and Western meals! Our healthy food and soups are prepared wit..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            name:"Authentic Taste of Hong Kong",
            image:'https://www.kindmeal.my/photos/deal/6/666-4145-l.jpg',
            description:"",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/726-5256-l.jpg",
            name:'Vegetarian Delights & Groceries',
            description:"All Vegetarian Mart features a delicious range of Asian and Western cuisines, complemented with an assortment of quality beverages..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/590-3137-l.jpg",
            name:'Rawsome Lifestyle',
            description:"Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience. Indulge in a satisfying mea..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/605-3316-l.jpg",
            name:'Hyderabadi Indian Feast',
            description:"Indulge yourself in the best Hyderabadi cuisine, including the 'World's Favourite Biryani'! Select from any meat-free items from ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/700-4802-l.jpg",
            name:'Tasty Midas Touch',
            description:"Let our Midas touch transform your meal into a gastronomic adventure. Indulge in healthy and delicious Chinese cuisine within our..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/621-3576-l.jpg",
            name:'Honestly Superb Meals',
            description:"Experience a delightful selection of creative meat-free meals from our menu: • Ala Carte Meat-Free Menu • Meat-Free Set Lunch ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/711-4936-l.jpg",
            name:'Ahimsa Online Store',
            description:"Ahimsa's online store features an innovative series of food products unique in taste, nutrition and health. To qualify for KindMe..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/686-4475-l.jpg",
            name:'blend of Asian Flavors',
            description:"Let us Figure Out the most delicious blend of Asian flavors, pampering you within a relaxing atmosphere! Enjoy discount off a lar..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/617-3503-l.jpg",
            name:"Earth-Friendly Meals",
            description:"Indulge in a wide variety of delicious meat-free cuisines, and contribute to a better Earth and environment! Select from any of o..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'japanesefood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/718-5090-l.jpg",
            name:'Stemboat & Fusion Revolution',
            description:"GEKIL leads the vegetarian revolution, delighting you with a delicious, soulful fusion of local, Chinese and Western cuisines. Fe..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/3/369-3697-l.jpg",
            name:'Waffles & Snacks',
            description:"You'll only hear crisps and taste the soft centered waffles here, drizzled with their flavourful sauces in Chequers. Everything is..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/709-4950-l.jpg",
            name:'Authentic Hainan Villae Flavors',
            description:"Inspired by the love for animals and the planet, Hainan Village Kopitiam is an advocate of meat-free, egg & plant-based diet. And ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/706-4801-l.jpg",
            name:'Creative Burgers & Snacks',
            description:"Our burger recipes range from traditional to special, for those seeking to discover outrageous burger tastes. We serve creative co..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/701-4904-l.jpg",
            name:'Tasty, Joyful Moments',
            description:"We are committed to sustainability and plant-based diet. When food is melting into our mouths with an Unami flavor, life becomes ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/710-4998-l.jpg",
            name:'Tasty Waffles,Tarts & Farsan',
            description:"Enjoy a creative Western-Indian fusion menu of delicious waffles, tarts, Farsan & more! Feast on any items on our menu: BREADED..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/707-4819-l.jpg",
            name:'Simple Is the Best',
            description:"We strive to delight you with simple yet tasty and nutritious meals that you would simply love! Feast on any items from our meatl..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/670-4180-l.jpg",
            name:'Authentic Vietnamese Experience',
            description:"Indulge in a truly authentic Vietnamese experience with delicious recipes, beautiful furnishings, lush greens and fresh flowers. ..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/642-3775-l.jpg",
            name:'Healthy, Sustainable Meals',
            description:"Experience healthy, sustainable living with our delicious and affordable meat-free meals. Select any from our menu: BENTO SET Se..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/687-4507-l.jpg",
            name:'Healthy, Hoely Meals',
            description:"Serving you delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. Feast on our wide..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/703-4854-l.jpg",
            name:'Vietnamese Homecooked Meals',
            description:"Feast on authentic, delicious homecooked Vietnamese cuisine within a cozy environment. Don't miss out on our aromatic coffees, bre..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/664-4296-l.jpg",
            name:'The Soul of Local Delights',
            description:"Revitalize your soul with our healthy, delicious local cuisine, straight from the food paradise of Melaka! Enjoy discounts off al..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/518-3788-l.jpg",
            name:'Yishensu oriental Cuisine',
            description:"Yishensu offers a wide range of delicious oriental dishes, from traditional favorites to creative fusion delights. Enjoy discount..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/679-4332-l.jpg",
            name:'Garden Comfort Food',
            description:"Relax with your favorite Asian & Western comfort food, crafted with quality ingredients and a creative touch. Enjoy discount on a..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/658-4144-l.jpg",
            name:'Exquisite Thai Flavous',
            description:"Feast on our contemporary Thai vegan delights, a fusion of central and northeastern Thai cuisines with rich and exquisite flavors...            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/716-5042-l.jpg",
            name:'Waffles & Sweet Treats',
            description:"vegitem",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'3 Days '
        },

        {
            image:"https://www.kindmeal.my/photos/deal/7/715-5155-l.jpg",
            name:'Wholesome Plant-Based Meals',
            description:"Currently for Takeaway & Delivery only. Feast on our signature plant-based meals, crafted with heart to provide you with a wholes..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/728-5305-l.jpg",
            name:'Malaysian Favorites & Ramen',
            description:"A meat-free restaurant run by a small-town girl, serving local cuisine prepared and cooked with plenty of love. Experience our de..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            expires:'8 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/671-4245-l.jpg",
            name:'Authentic Sarawak Flavors',
            description:"Indulge yourself in Sarawak heritage cuisine, featuring Er Lou's house-rolled smooth noodles with a choice of thick or thin strand..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            expires:'4 Hours'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/2/271-519-l.jpg",
            name:'Salads, Sammich and Juices For 2',
            description:"Want Salad but also additional Vege-power-packed Sandwich that would add a kick to your day, leaving you feeling sexy? This is the..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'RM57.69',
            category:'vegitems',
            expires:'5 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/649-3919-l.jpg",
            name:'Flusion Western Delicacies',
            description:"Experience our delectable selection of fusion Western cuisine, crafted with heart to promote a healthy and compassionate eating li..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            expires:'4 Hours'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/717-5054-l.jpg",
            name:'Your Healthier Options',
            description:"EatHami Cafe pampers you with healthy and delicious meals, prepared from fresh, quality ingredients. Enjoy our delectable meat-fr..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            expires:'7 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/591-3151-l.jpg",
            name:"Vegipai's Fusion Indulgence",
            description:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients! Enjoy any items fro..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
            name:'Managga Natural Lifestyle',
            description:"Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'7 Days'
        },
    ],
    current:[
        {
            image:"https://www.kindmeal.my/photos/deal/6/669-4206-l.jpg",
            name:'Managga Natural Lifestyle',
            description:"Mangga Vegetarian Cafe comforts you with a pure, natural dining ambiance, serving you a healthy, delectable selection of Asian and..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'vegitems',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg",
            name:'Authentic Italian Indulgence',
            description:"Enjoy authentic Italian cuisine within a cozy environment! Pizza, breads and sometimes cakes or cookies are baked within the in-h..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',

            category:'vegitems',
            expires:'8 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/657-4063-l.jpg",
            name:'affordable Quality Meals',
            description:"We strive to provide good food, good price and good service to our diners. Visit us to enjoy a wide variety of quality vegetarian ..",
            button:'Get FREE Coupon',
            category:'vegitems',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            expires:'4 Hours'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/1/177-1118-l.jpg",
            name:'Pies Conquer The World',
            discount:"20% Off",
            category:'vegitems',
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            description:'When Pies conquer the world, you sit back, relax and have pies. Enjoy any delicious meat-free Savoury or Sweet Pies available in..',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/4/469-1822-l.jpg",
            description:'Enjoy a crispy, crunchy adult-sized salad prepared with fresh greens, fruits and healthy ingredients! Choose from a base, 6 meat-..',
            name:"Healthy Personal Salad",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'RM15.20',
            category:'vegitems',
            expires:'6 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/715-5155-l.jpg",
            name:'Wholesome Plant-Based Meals',
            description:"Currently for Takeaway & Delivery only. Feast on our signature plant-based meals, crafted with heart to provide you with a wholes..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'indianfood',
            expires:'7 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/728-5305-l.jpg",
            name:'Malaysian Favorites & Ramen',
            description:"A meat-free restaurant run by a small-town girl, serving local cuisine prepared and cooked with plenty of love. Experience our de..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'indianfood',
            expires:'8 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/671-4245-l.jpg",
            name:'Authentic Sarawak Flavors',
            description:"Indulge yourself in Sarawak heritage cuisine, featuring Er Lou's house-rolled smooth noodles with a choice of thick or thin strand..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'15% Off',
            category:'indianfood',
            expires:'4 Hours'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/2/271-519-l.jpg",
            name:'Salads, Sammich and Juices For 2',
            description:"Want Salad but also additional Vege-power-packed Sandwich that would add a kick to your day, leaving you feeling sexy? This is the..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'RM57.69',
            expires:'5 Days'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/6/649-3919-l.jpg",
            name:'Flusion Western Delicacies',
            description:"Experience our delectable selection of fusion Western cuisine, crafted with heart to promote a healthy and compassionate eating li..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'indianfood',
            expires:'4 Hours'
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/717-5054-l.jpg",
            name:'Your Healthier Options',
            description:"EatHami Cafe pampers you with healthy and delicious meals, prepared from fresh, quality ingredients. Enjoy our delectable meat-fr..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'10% Off',
            category:'indianfood',
            expires:'7 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/5/591-3151-l.jpg",
            name:"Vegipai's Fusion Indulgence",
            description:"Indulge in a healthy and tasty variety of Oriental and Western delicacies, prepared with quality ingredients! Enjoy any items fro..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'indianfood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
            name:'Scrumptious Croutons',
            description:"Alice Kitchen delights you with fusion vegetarian and vegan gourmet cuisine, with an innovative gastronomic take on traditional an..",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'indianfood',
            expires:'3 Days '
        },
        {
            image:"https://www.kindmeal.my/photos/deal/7/707-4819-l.jpg",
            name:'Simple Is the Best',
            description:"We strive to delight you with simple yet tasty and nutritious meals that you would simply love! Feast on any items from our meatl..            ",
            button:'Get FREE Coupon',
            amlet:'https://www.kindmeal.my/images/icon_egg.png',
            bottle:"https://www.kindmeal.my/images/icon_milk.png",
            alchohal:'https://www.kindmeal.my/images/icon_alcohol_disabled.png',
            discount:'20% Off',
            category:'indianfood',
            expires:'3 Days '
        },
        

    ],
    throughsearch:''
}

let reducer=(state=initstate,action)=>{
    if(action.type==Success){
        return {
            ...state,
            current:action.payload

        }
    }
    if(action.type==Get){
        return {
            ...state,
            apidata:action.payload
            
        }
    }
    if(action.type==Search){
        return {
            ...state,
            throughsearch:action.payload

        }
    }
    return state

}
export {reducer}