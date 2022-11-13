import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successdata } from './ActionTypes';
// import "./kind.css"
import { Success } from './Types';

function Pagination() {
    let data=useSelector((state)=>{
        return state.KindMoments.data
    })
    console.log(data)
    let dispatch=useDispatch()
    let [currentpage,setcurrentpage]=useState(1)

    let [postperpage,setpostperpage]=useState(10)
    let lastPostIndex=currentpage*postperpage;
    let firstpostindex=lastPostIndex-postperpage;
    let currentposts=data.slice(firstpostindex,lastPostIndex)
   
    let totalposts=data.length
    let pages=[]

    for(let i=1;i<=Math.ceil(totalposts/postperpage);i++){
        pages.push(i)
    }
    useEffect(()=>{

    },[currentpage])

    let handleclick=(el)=>{
        setcurrentpage(el)
      
        console.log(el)
        dispatch(successdata(currentposts))

    }

    let handleclickback=(el)=>{
        setcurrentpage(el)
        dispatch(successdata(totalposts))
    }
    return (
        <div>
          <span style={{marginLeft:'15%'}}>Page:</span>  
            {pages.map((el,index)=>{

            return (
             <>
           
 <button className='btn' style={{width:'2rem',color:'blue'}}  key={index} onClick={()=>handleclick(el)} >{el}</button>
     
 </> 
            )
                   
        })}
           <div>
           <Button disabled={currentpage==1} style={{marginLeft:'170%',marginTop:'-10%',
           color:'gray',height:'35px',width:'80px'}}>Preview</Button>
           
            <Button onClick={()=>handleclick()} style={{marginLeft:'190%',marginTop:'-18%',
            color:'gray',height:'35px',width:'80px'}} >Next</Button>
            </div> 
        </div>
    );
}

export default Pagination;