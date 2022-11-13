import { Button, ButtonGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successdata } from './ActionTypes';
// import "./kind.css"
import { Success } from './Types';

function Pagination() {
    let data=useSelector((state)=>{
        console.log(state,"state")

        return state.data
    })
    console.log(data)
    let dispatch=useDispatch()
    let [currentpage,setcurrentpage]=useState(1)

    let [postperpage,setpostperpage]=useState(5)
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
        // dispatch(successdata(totalposts))
    }
    return (
        <div>
            Page:
            {pages.map((el,index)=>{

            return (
             <>
           
 <button className='btn' style={{width:'2rem',color:'blue'}}  key={index} onClick={()=>handleclick(el)} >{el}</button>
     
 </> 
            )
                   
        })}
           <div>
           <Button disabled={currentpage==1} onClick={()=>handleclickback()} style={{marginLeft:'170%',marginTop:'-10%'}}>Preview</Button>
            <Button onClick={()=>handleclick()} style={{marginLeft:'190%',marginTop:'-18%'}}>Next</Button>
            </div> 
        </div>
    );
}

export default Pagination;