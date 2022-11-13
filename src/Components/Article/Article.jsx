import React from 'react'

import datahompage from '../Homepage/homepagemapdata'
import './article.css';
import VideoDisplaypage from '../videodisplay/VideoDisplaypage';
import { useNavigate } from 'react-router-dom';


export default function Article () {
  const nav =useNavigate() 

  return (
    <>
    <div className='article__page'>
    <div className='article__page_created artiti'>
        <div className='article__page_created_article'>

        <h1 id='headhead_article'>Yummy News, Articles & Videos</h1>
        <p className='passpass_article'>Want to keep updated on the latest news of delicious meat-free meals and adorable animals? Check out this section for interesting daily happenings and articles that will melt your tummy (and heart too).</p>
        <br/>
        <p className='passpass_article'>You can also follow our Facebook Page or Twitter for more news and updates.</p>
        </div>

    </div>
    <div className='article__page_created artilepages'>
    {datahompage.map(({id,img,describe})=>{
                  
                     return(
            <div key={id} className='artilepages_subs'>
                <div className='artilepages_subs_div'>
                <img src={img} id='artilepages_subs_image'/>
                </div>
                <div  className='artilepages_subs_div_two' >
                <h1 className='p_article'>{describe}</h1>
                <p id='aaaaaa'>by KitchenCorner.my</p>
                <p id='aaaaaa'>It's made possible by you With every petition signed, every cent donated, every protest attended, every email or tweet to corporation .</p>
                
                <button className='butn_article'
                onClick={()=>{nav("/VideoDisplaypage")}}
                >View Video
                
                </button>
                
              </div>
            </div>
                     ) 
                  
              })}
    </div>
    </div>
    </>
  )
}
