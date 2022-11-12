import "./FullPage.css"
import { useEffect, useState } from "react"
import {Button,Box,Text,Input} from '@chakra-ui/react';
import { AiOutlineHeart } from "react-icons/ai";
import Todo from "./Component/TodoItem";
const FullPage = ()=>{

    const [Data, setData] = useState([]);

    const localStorageData = ()=>{
        let valueData = JSON.parse(localStorage.getItem("oneitemadd"));
        setData(valueData)
    }

    useEffect(()=>{
        localStorageData()
    },[])
// console.log(Data);
  

    return(
        <div className="main">
<div className="firstimg" style={{height:"360px"}}>
    <img className="background" src={Data.bgimg}  alt="" />
</div>

<div className="alldetails">
            <div className="profile">
                <img style={{ width: '100%', height: "100%" }} src={Data.profile_image} alt="" />
            </div>
            <div className="namefollwer">
                <h1 style={{display:"block",fontSize:'2rem',

                width:'50%',border:'',marginTop:'-2%'}}>{Data.name}</h1>
                 <span style={{fontSize:'20px',marginTop:'2%',marginLeft:'8%'}}>{Data.followers} Follower</span>
            </div>

            <div className="follwerbtn">
                <Button colorScheme='red' size='sm'>+ Follow Member</Button> 
                <span><Button ml='3' size='sm'>Contact Member</Button></span>
            </div>
        </div>
        
        <div className="bigimg">
            <Box className="longimg" boxShadow="lg" style={{borderRadius:'20px'}}>
                <div className="Input">
                    <img className="firstimg" src={Data.firstimg} alt="" />
                </div>
                <div className="Inputtag">
<div>
<Box ml='12'  border='' style={{cursor:"pointer"}} >
  <AiOutlineHeart style={{fontSize:'2rem',marginLeft:'-25'}} />
  <span > <p style={{marginTop:'-4%',marginLeft:'4%'}}>Like this delicious KindMoment!</p>	 </span>
  </Box>
        <h1 style={{fontSize:'25px',marginLeft:'2%',marginTop:'1%'}}>{Data.title}</h1>   
</div>

<div>
    <Text mt='20'>Be the first to comment on this delicious KindMoment</Text>
    {/* <Input mt='' placeholder="Enter Comment..." variant="outline" color='gray'></Input>
    <Button ml='7' mt='3' colorScheme='red'>Comment</Button> */}
    <Todo />
</div>

                </div>
           </Box>


            <Box className="rowimg" boxShadow='lg'>
                <div className="llong">
                    <img id="row4img" src={Data.secondimg} alt="" />
                    <span ><p style={{textAlign:'center'}}>{Data.name}</p></span>
                   
                    </div>
                <div className="llong">
                    <img id="row4img" src={Data.thirdimg} alt="" />
                    <span ><p style={{textAlign:'center'}}>Yono Singh</p></span>
                </div>
                <div className="llong">
                    <img id="row4img" src={Data.fourthimg} alt="" />
                    <span ><p style={{textAlign:'center'}}>Kitchen Corner</p></span>
                </div>
                <div className="llong">
                    <img id="row4img" src={Data.fifthimg} alt="" />
                    <span ><p style={{textAlign:'center'}}>{Data.name}</p></span>
                </div>
            </Box>
        </div>


       




        </div>
    )
}

export default FullPage