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
            image:"https://www.kindmeal.my/photos/shop/6/635-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Ador is abbreviated from the word “Adorable” meaning “to love”. We founded Ador to inspire more people of all races and..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/528-cm.jpg",
            name:"Cheras, Kuala Lumpur",
            title:"Welcome to Vegelab Maxim Cheras Love Food, Love Life and Love Our Planet We aim to help raise consciousness around foo..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/392-cm.jpg",
            name:"Kepong, Kuala Lumpur",
            title:"This Chinese vegetarian restaurant is camouflaged amidst big shady trees, strategically located in the buzzing district ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/549-cm.jpg",
            name:"Seri Kembangan, Selangor",
            title:"With changes of the times, the people's diet and living habits also tend to diversify, having new cognition on the choic..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/623-cm.jpg",
            name:"Sungai Buloh, Selangor",
            title:"Taiping Hometown Vegetarian is located in Sungai Buloh, Selangor, Kampung Desa Aman. The surrounding environment has bea..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/505-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"A PLACE FOR US TO REWARDS OURSELVES. Sushi Kitchen™ established at year 2009. We are the 1st plant-based sushi in Mala..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/498-cm.jpg",
            name:"Subang Jaya , Selangor",
            title:"Honest Bakery Cafe is a local cafe in Subang Jaya that serves and promotes meat-free meals to encourage vegetarianism. ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/587-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Alice Kitchen wishes to offer our personal rendition of fusion vegetarian and vegan gourmet cuisine with an innovative g..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/601-cm.jpg",
            name:"Sri Petaling, Kuala Lumpur",
            title:"Vegetarian is the next generation of food in the world. Live simple, Eat simple, Love simple. Simple Garden Cafe is loc..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/195-cm.jpg",
            name:"Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
            title:"Established in 2008, Vegipai Café aims to serve delicious and healthy vegetarian food. We serve a variety of dishes in..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/521-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"LOHAS begins with Vegetarianism. 樂活從素食開始 Popular local (Malaysian) and Asian fusion foods cooked with vegetarian ingred..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/565-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Berjaya Cafe, the epitome for the vegetarian lovers that brings the opulence, style, and is entwined with the gastronomi..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/486-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Cameleon Vegetarian Restaurant is a Chinese Vegetarian Restaurant that is located along Jalan Thamboosamy. Capable of se..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/598-cm.jpg",
            name:"Bangsar, Kuala Lumpur",
            title:"Vegan, Dairy, Egg Free & Plant based Ice Creams created in the kitchen of Chloe. It all started when her boy, who is sev..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/562-cm.jpg",
            name:"Shah Alam , Selangor",
            title:"Our mission is to promote a vegetarian lifestyle, No harm without killing, and to maintain a Healthier Life. 推广素食 ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/305-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"This a family business that is set to make comfort food healthy, clean and delightful! The Essence of the Wok is wel..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/512-cm.jpg",
            name:"Klang, Selangor",
            title:"Love Veggie promotes a creative healthy dining concept, instead of the traditional vegetarian approach. Dine on natural..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/603-cm.jpg",
            name:"Kepong, Selangor",
            title:"A modern dining concept with Western and Asian Cuisine is being served with remarkable cooling beverages. The young and ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/599-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Hijau is a made with 100% plants inspired by Malay-Indo fusion cuisine. Our menu are 100% cruelty free and we are more ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/607-cm.jpg",
            name:"Johor Bahru, Johor",
            title:"Serving delightful vegetarian Chinese, hotpot, Korean, Western brunch, dinner, Bites, Burgers, Cakes (2 days lead time) ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/612-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"What does GEKIL mean? Revolution? What is going on here? Let's find out... Oh... It turns out that there is a vegetaria..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/212-cm.jpg",
            name:"Sri Petaling, Kuala Lumpur",
            title:"Be Vegetarian. Go Green. Save the Planet. Imperial Art Cottage advocates these core principles by creating wholesome f..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/547-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Prince Cuisine indulges you with a taste of authentic Hong Kong food within the cozy atmosphere of our restaurant. Prep..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/335-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Black Cat Cafe offers flavors from around the world, natural, healthy and fresh. Breads, pizza dough, pasta are handmade..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/430-cm.jpg",
            name:"Shah Alam & 1 Branch",
            title:"Originally from Australia, Jamaica Blue is named after the Blue Mountain in Jamaica, one of the best coffee-producing re..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/570-cm.jpg",
            name:"Klang, Selangor",
            title:"Figure Out Cafe is a vegetarian cafe serving Asian fusion cuisine such as burgers, pasta, wraps, Asian food, handcrafted..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/546-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Why The Link cafe? We believe that CONNECTION is vital No man is an island, we are all connected to people, things a..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/561-cm.jpg",
            name:"Bandar Sunway, Selangor",
            title:"A tea store ideally from know the farmer first! 🌿 Direct from Farm 🤲 Pack on Demand 🌱 Natural Farming 🍎 Healthy Elem..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/504-cm.jpg",
            name:"Bandar Mahkota Cheras, Selangor",
            title:"Have you ever wondered if Food & Beverages can taste great, and yet healthy and nutritious? Well, look no further, pleas..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/500-cm.jpg",
            name:"Melaka",
            title:"What is the Ssihat Philosophy? It is a conscious effort of ensuring the food we serve are 100% PLANT-BASED, clean & doe..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/545-cm.jpg",
            name:"Perniagaan Kota Shahbandar, Melaka",
            title:"Soul Green is a vegetarian cafe situated within the historical city of Melaka. We delight you in tasty meat-free cuisin..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/219-cm.jpg",
            name:"Jalan Tun Razak & 4 Branches",
            title:"How does the name Salad Atelier come about? Atelier simply means artist studio in French. Salad Atelier - You can be ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/568-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"We are a cafe-cum-cooking studio aiming to provide the modern cafe experience whilst offering guided culinary sessions. ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/370-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"The recipe to happiness, you ask? Warm, crispy and moist Churros with a cup of finely brewed Joe, anytime of the day. ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/538-cm.jpg",
            name:"Melaka",
            title:"Welcome to VegeThai, the kitchen of Thai modern vegetarian cuisine. Enter into a world where contemporary vegetarian foo..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/606-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"WTF Cafe provides a new experience for all of you!",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/628-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"All Vegetarian Mart is a cafe-style vegetarian mart, with selected vegan options available. We delight you with a delic..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/552-4075-m.jpg",
            name:"Kuala Lumpur & 1 Branch",
            title:"Rasa Viet Kitchen (Damansara Kim) Nestled in the tranquility enclave of the Residential area at Damansara Kim, Rasa Vie..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/467-cm.jpg",
            name:"Sungai Buloh, Selangor",
            title:"Rawsome is a healthy food company that believes in eating right and adapting an active lifestyle. Started in June 2015..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/451-cm.jpg",
            name:"Kepong, Kuala Lumpur",
            title:"A cozy cafe in Kepong serving Western cuisine. We are crazy about our food and love to experiment to create new items. C..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/592-cm.jpg",
            name:"Banting, Selangor",
            title:"HEALTHY VEGETARIAN 健康蔬食 Midas Cuisine provides vegatarian foods such as vegan diet , ovo-lacto vegetarian diet and also..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/583-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"The food revolution is here with Simply Good Food by Berjaya Cafe, a destination for honest, clean and heartful plant-ba..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/596-cm.jpg",
            name:"Tanjong Sepat, Selangor",
            title:"VietBeans Cafe serves authentic Vietnamese coffees, brewed from quality Vietnamese coffee beans. The delicious home-cook..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/627-cm.jpg",
            name:"Bandar Sri Damansara,, Kuala Lumpur",
            title:"This might be KL's only cafe without cow's milk for its creative coffee concoctions — instead, we rely purely on plant-b..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/537-cm.jpg",
            name:"Mont Kiara, Kuala Lumpur",
            title:"Welcome! Tze Ern Vege Restaurant started business in Year 2O15. We always try our best to provide good food with good pr..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/611-cm.jpg",
            name:"Balakong, Selangor",
            title:"Eathami is an healthier option café.",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/149-cm.jpg",
            name:"Petaling Jaya & 1 Branch",
            title:"When Pies conquer the world, you sit back, relax and have pies. Pie keepers will serve you delicate tasty pies made wi..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/287-cm.jpg",
            name:"Taman Tun Dr. Ismail, Kuala Lumpur",
            title:"We provide fresh and quality waffle meal to satisfy your cravings from savory to sweet! We serve a variety of waffle bre..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/572-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"We serve delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. We also se..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/600-cm.jpg",
            name:"Petaling Jaya & 1 Branch",
            title:"Welcome to Burger On 16. At Burger On 16, great burgers are served. Burgers are grilled to perfection with the perfect ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/396-cm.jpg",
            name:"Seri Kembangan, Selangor",
            title:"Immerse in a cozy, atmospheric ambiance while we pamper you with a sumptuous variety of international cuisines, creative..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/609-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"EAT21 Committed to serving the Healthiest, Cleanest & Yummiest meals at Fair Price and with Full EAT21 is a hardworkin..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/591-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Wise Crafters is here to help the busy citizens, especially women to achieve personal health goals by offering natural h..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/443-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Have you ever imagined the combination of Pasta + Jalapenos and Tomato + Bingsu? You must not miss these creative Italia..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/626-cm.jpg",
            name:"Banting, Selangor",
            title:"BINGS. Our bingsu can't be perfect without U. What to do in Banting? You may drop by at the first Korean traditional ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/459-cm.jpg",
            name:"Shah Alam, Selangor",
            title:"A cosy cafe in Setia Alam serving deliciously creative meals. Come say hi to our cute mascots, Mr & Ms Lush! Come as a ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/610-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Lolla Paluza is a dessert bar and event space. Fresh baked waffles are the most seek after product after soft serve ice ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/629-cm.jpg",
            name:"Cheras, Kuala Lumpur",
            title:"What food we have Sandwiches l Open toasts l Sides l Desserts l Drinks The homemade loaves for our sandwiches and open ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/277-cm.jpg",
            name:"Seri Kembangan, Selangor",
            title:"Piccolo is Italian for small and most commonly refers to a half-sized flute and also a baby latte. Here at Piccolo Caf..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/569-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"The Italian Job is a cozy restaurant that delights you with authentic Italian cuisine, featuring traditional wood-fire o..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/593-cm.jpg",
            name:"Cheras & 1 Branch",
            title:"Moment of JOY ™ was born in December 2020 from the passion of two foodies entrepreneurs that love healthy food. We are ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/624-cm.jpg",
            name:"Ipoh, Perak",
            title:"-About Us Yishensu's operation of restaurant business namely_Yishen Vegetarian Restaurant and wholesale, manufacturing ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/6/605-cm.jpg",
            name:"Beranang, Selangor",
            title:"Ahimsa Vege Health Food Industries Sdn Bhd is a company with a fresh vision to infuse innovation and health technology i..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/482-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Hyderabad Recipes is an Indian fine dining restaurant serving authentic, world famous Haleem, Biryanies, BBQ, Indian bre..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/553-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Sarawak laksa with a sprinkling of grated cheese? In any other restaurant, this might be a gimmicky novelty, but we ca..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/258-cm.jpg",
            name:"Subang Jaya & 1 Branch",
            title:"At KOMUGI, we offer a deliciously authentic variety of handmade Japanese breads, cakes and confectioneries. Our team of ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/275-cm.jpg",
            name:"Kuala Lumpur & 2 Branches",
            title:"We are the country’s 1st beauty café which focuses on beauty and health on the surface and within the soul. We invite y..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/115-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Jaads Sandwich serves gourmet sandwiches with your choices of the fillings, breads and sauces. If you are sandwich lover..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/556-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Giant Bowl Vegetarian Restaurant (大碗公快餐店) delights you with various Tastiest Local Favorites within minutes. Equipped wi..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/213-cm.jpg",
            name:"Off Jalan Kuchai Lama , Kuala Lumpur",
            title:"Basil Pasta House serve mainly Italian pastas and desserts with a slight twist of the Japanese food culture. With an E..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/312-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"A stylish yet cozy coffee place operated passionately by an enthusiastic and experienced team in coffee, baking, cooking..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/327-cm.jpg",
            name:"Puchong, Selangor",
            title:"A place to keep you caffeinated! Located in the corner of IOI Boulevard Shopping Centre, a surge of coffee aroma fil..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/448-cm.jpg",
            name:"Kuala Lumpur & 1 Branch",
            title:"Simply Green Salad Gallery brings you delicious food that are both hearty and healthy. Each of our selections and menu ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/281-cm.jpg",
            name:"Ipoh, Perak",
            title:"The Ficca's Cafe is a Coffee Specialist Cafe. It is a cozy cafe where we are not only drawn into the aroma of coffee, ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/121-cm.jpg",
            name:"Bangsar Baru, Kuala Lumpur",
            title:"Milk and Butter brings you some of the most delicious cakes, desserts and western food in town.",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/128-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"We are a new Halal certified frozen dairy food manufacturing company, specialise in ice cream cake and ice cream cup cak.",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/234-cm.jpg",
            name:"Kota Kemuning, Selangor",
            title:"Sips & Bites was opened in late August 2014 by a young couple. With the passion of food and arts, it is not surprising t..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/5/560-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"SUPE a new venture from both our founder Summer and Hope. P/S. The brand name is a combination of both their names! St..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/130-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"A Place for Spiritual Rejuvenation. Essence of Books. Aroma of Tea. Spiritual Enlightenment. 書香。茶香。心靈香靜思書軒一處讓您找到心靈智慧的天地..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/381-cm.jpg",
            name:"Subang Jaya, Selangor",
            title:"At 95 Degrés, we believe that when it comes to enjoying your favorite cuppa, your personal taste matters a lot to us. C..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/122-cm.jpg",
            name:"Taman Tun Dr. Ismail, Kuala Lumpur",
            title:"The idea of Pickle & Fig is to offer healthy fresh gourmet panini, sandwiches and smoothie. We doesn’t just boast a heal..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/251-cm.jpg",
            name:"Petaling Jaya, Selangor",
            title:"Chai Bar is a vibrant, new fast casual concept, serving made-to-order salads with an Asian twist. Offering over 70 ing..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/4/428-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"Cozy cafe in a century-old building located in the heart of Chinatown. Our objective is to take your taste buds on a ro..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/163-cm.jpg",
            name:"Kuala Lumpur, Selangor",
            title:"We at Hotel Saravana Bhavan follow the perfect formula for success. Delicious food prepared under extremely hygienic con..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/2/292-cm.jpg",
            name:"Kuala Lumpur & 3 Branches",
            title:"A refreshing Meatless Dining Concept from Secret Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh a..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/387-cm.jpg",
            name:"Cheras, Kuala Lumpur",
            title:"Pure Vegetarian Confinement meals with home delivery. 100% homemade with special recipes, provided in 14-day or 28-day .",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/325-cm.jpg",
            name:"Georgetown, Pulau Pinang",
            title:"THE FIRST 3D COFFEE ART IN PENANG! Want to indulge in our 3D coffee art? Come to our new place located in Beach Street!..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/171-cm.jpg",
            name:"Kuala Lumpur & 2 Branches",
            title:"Situated in the heart of Bangsar, Tedboy Bakery first open its doors in July 2012. Named after their first-born, owners ..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/316-cm.jpg",
            name:"Kuala Lumpur, Wilayah Persekutuan",
            title:"This is a place built by Dreamers for Dreamers. Lit bright by yellow bricks, yellow flowers and many things yellow, Yel..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/3/382-cm.jpg",
            name:"Bangsar Utama, Kuala Lumpur",
            title:"Serious about coffee - That's us! GRAB., serving you specialty coffee, baked goods, simple meals in a cozy and relaxing..",
        },
        {
            image:"https://www.kindmeal.my/photos/shop/1/194-cm.jpg",
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