import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Button, Input, Select, Stack, Text} from "@chakra-ui/react";
import Pagination from "./Pagination";
// import "./instgram.css"
import "./kind.css"
import { Instgram } from "./instagram";
import {instadata} from './search/utlies/data';


const KindMonents =()=>{
  const [inputText,setInputText] = useState("")
  const [query,setQuery] = useState("")
  const [suggestions,setSuggestions] = useState([]);


  const handleInputTextChange =(e)=>{
    setInputText(e.target.value)
}

useEffect(()=>{
  if(query==""){
    setSuggestions([])
  }else{
    let inputText = query.toLowerCase()
    let newSuggestions = instadata.filter(item=>{
      return item.name.toLowerCase().indexOf(inputText) !== -1 ? true : false;
    }).map((item)=>item.name);
    setSuggestions(newSuggestions)
  }
    }, [query,inputText])


return(
    <>
    <div className='main_div' >

<Box className='main_div1'>

                    <p style={{fontSize:'26px',
                    fontWeight:'',
                    color:'#444444',
                    fontFamily:'Roboto, Arial, Helvetica, sans-serif',
                    border:'',
                    display:'inline'}}>  KindMoments </p>

                    <span style={{border:'0.5px solid #888888',marginLeft:'1rem'}}> </span>
                    <span style={{fontSize:'26px',
                    fontWeight:'400px',
                    color:'#888888',
                    marginLeft:'1.5rem'}}> Saving Lives with Yummy Photos </span>

    <div className="main_div2">

        <p className="text">Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. 
         Share your interesting KindMoments, and build your own fans and followers to encourage kind,
        healthy meals .</p>

        <p className="text">Download our <Link style={{color:'blue',textDecoration:'none'}}>mobile app</Link> mobile app to easily showcase your 
        masterpieces and interact with food lovers.</p>

        <p className="text">Get started sharing your tasty moments now.</p>
    </div>


</Box>


<Box boxShadow='md' 
rounded='md'
 bg='white'mt='4%'
  w='19%'ml='8' h='8.5rem' className="main_div_shadow">
<Text className="main_div_shadow_text1" fontSize='20' ml='5' mt='-1'
 color='#444444'>Share Your KindMoment</Text>
<Text className="main_div_shadow_text2" fontSize='16px' ml='3' 
mt='-4'>Interesting food or restaurant? Share with 1000s of food lovers!</Text>

<Button className="main_div_shadow_btn"
 colorScheme='red' w='60%' h='2.2rem' ml='12'>Share</Button>

 </Box >
 
    </div>

    
<Box 
w={{sm:'100%', md:"90%",lg:'80%'}}
 ml={{sm:"auto",md:'7%',lg:'16%'}}
mt='10' display='flex' 
 
 gap={{sm:5, md:3, lg:5, xl:5}} align='center' 
 className="box_div"
 >

<Button colorScheme='green' variant='solid' 
   w={{sm:'16%', md:'14%', lg:'9%'}}
  
   className="stack_btn">
    Moments
  </Button>
  <Button colorScheme='teal' variant='outline' w={{sm:'19%', md:'16%', lg:'9%'}} className="stack_btn">
    Deal Reviews
  </Button>
  <Button colorScheme='teal' variant='outline'
   w={{sm:'16%', md:'14%', lg:'9%'}} className="stack_btn" >
  
  Following
  </Button>

  
  
                    {/* 3 button ke bad ke liye  */}
<Box direction='row' w='54%'
 display={{sm:'none', md:'flex',lg:'flex'}}
 gap={{sm:'1',md:'2',lg:"15"}} >
  
   <span style={{width:'100%'}} className="inputtag"></span>
    <Input value={inputText} onChange={handleInputTextChange} 
    className='inputtag'
    suggestions={suggestions} placeholder="Search User or Shop"></Input>
    <Select value='All Location'  border='' display={{sm:'none',md:'flex', lg:'flex'}}>
    <option value='option1' className="inputtag" >All Location</option>
    <option value='option2'>Kalang Valey</option>
    <option value='option3'>Kaula Lumpur</option>
    <option value='option2'>Petaling Jaya</option>
    <option value='option3'>Ampang</option>
    <option value='option2'>Bangsar</option>
    <option value='option3'>Banting</option>
    <option value="">Cheras</option>
    <option value="">Kepong</option>
    </Select>
    <Button className='inputtag'
    colorScheme='red' w='68%' h='2.2rem' display={{sm:'none', md:'flex',lg:'flex'}}>Search</Button>

</Box>

</Box>

{/* Pagnisation ke liye or yk button */}

<div style={{marginTop:'2%', display:'flex',width:'75%',marginLeft:'14%'}}  border='1px solid red'>
  <div >
  <Pagination />
  </div>

</div>
<Instgram />



</>
)
}


 
export {KindMonents}

