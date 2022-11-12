// import "./kind.css"
import {Link} from "react-router-dom";
import React from "react";
import { Box, Button, Input, Select, Stack, 
  Text}
   from "@chakra-ui/react";
import Pagination from "./Pagination";
import "./instgram.css"


const KindMonents =()=>{
return(
    <>
    <div style={{height:'15rem',
      width:'100%', 
     backgroundColor:'#f0f0f0',
     display:'flex'}} >

<Box style={{marginLeft:'16%',border:'',height:'15rem',width:'50%'}}>

                    <p style={{fontSize:'26px',
                    fontWeight:'400px',
                    color:'#444444',
                    fontFamily:'Roboto, Arial, Helvetica, sans-serif',
                    border:'',
                    display:'inline',
                    marginLeft:'0%'}}>  KindMoments </p>

                    <span style={{border:'0.5px solid #888888',marginLeft:'1rem'}}> </span>
                    <span style={{fontSize:'26px',
                    fontWeight:'400px',
                    color:'#888888',
                    marginLeft:'1.5rem'}}> Saving Lives with Yummy Photos </span>

    <div style={{border:'',height:'10rem'}}>

        <p className="p">Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. 
         Share your interesting KindMoments, and build your own fans and followers to encourage kind,
        healthy meals .</p>
<br />
        <p className="p">Download our <Link style={{color:'blue',textDecoration:'none'}}>mobile app</Link> mobile app to easily showcase your 
        masterpieces and interact with food lovers.</p>
<br />
        <p className="p">Get started sharing your tasty moments now.</p>
    </div>


</Box>


<Box boxShadow='md' rounded='md' bg='white'mt='4%' w='19%'ml='8' h='8rem'>
<Text fontSize='20' ml='8' color='#444444'>Share Your KindMoment</Text>
<Text fontSize='16px' ml='3' noOfLines={[1,2,3,4]}>Interesting food or restaurant? Share with 1000s of food lovers!</Text>

<Button colorScheme='red' w='68%' h='2.2rem' mt='1' ml='10'>Share</Button>

                </Box >
    </div>

    
<Stack ml='16%' mt='10' border='' direction='row' spacing={4} align='center'>

  <Button colorScheme='green' variant='solid' w='9%'>
    Moments
  </Button>

  <Button colorScheme='teal' variant='outline' w='9%'>
    Deal Reviews
  </Button>

  <Button colorScheme='teal' variant='outline' w='9%'>
    Follwing
  </Button>
                    {/* 3 button ke bad ke liye  */}
<Stack direction='row' w='54%'>
   <span style={{width:'100%'}}></span>
   
    <Input placeholder="Search User or Shop"></Input>
    <Select value='All Location' >
    <option value='option1'>All Location</option>
    <option value='option2'>Kalang Valey</option>
    <option value='option3'>Kaula Lumpur</option>
    <option value='option2'>Patna</option>
    <option value='option3'>Delhi</option>
    <option value='option2'>Mumbai</option>
    <option value='option3'>Utter Pradesh</option>
    <option value="">Kolkata</option>
    <option value="">Punjab</option>
    </Select>
    <Button colorScheme='red' w='68%' h='2.2rem'>Search</Button>

</Stack>
</Stack>

{/* Pagnisation ke liye or yk button */}

<div style={{marginTop:'2%', display:'flex',width:'75%',marginLeft:'14%'}}  border='1px solid red'>
  <div style={{border:'',width:'50%',marginLeft:'-6%'}}>
  <Pagination />
  </div>
{/* <div  style={{border:'',width:'10%',
marginLeft:'45%'}} >
<Button colorScheme='gray'>Next</Button>
</div> */}
</div>




</>
)
}


 
export {KindMonents}

