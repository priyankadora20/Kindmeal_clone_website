import { Grid } from "@chakra-ui/react"
import {AiOutlineCamera, AiOutlineHeart} from "react-icons/ai";
import {FaRegCommentDots} from "react-icons/fa";
import React, { useState } from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { Box, Button, Text,Image ,Avatar} from "@chakra-ui/react";
import "./instgram.css";


function Instgram() {

  const [count,setCount] = useState(0)
    let maindata = useSelector((state)=>{
      return state.data;
    })

    let pages = useSelector((state)=>{
      return state.current;
      // console.log(state);
    })
   

    let navigate = useNavigate()
    // let handlegetfulldata = ()=>{
    //   navigate("/")
    // }
   
    return (
      
<div style={{ width: "100%" }}>
  <div className='product-cards'>

  
  {
    pages.map((property)=>{
      return(
        <Box onClick={()=>{let obj ={ 
          bgimg:property.bgimg,
          date : property.date,
          name : property.name,
          title:property.title,
          profile_image : property.profileimg, 
          followers : property.followers,
          firstimg : property.img, 
          secondimg : property.img1, 
          thirdimg : property.img2 , 
          fourthimg : property.img3,
           fifthimg : property.img4 }
          localStorage.setItem("oneitemadd", JSON.stringify(obj))
              navigate("/fullpage")
           }}   key={property.id} boxShadow='lg' borderRadius='1rem' bg='white' style={{border: '',width:'350px',height:'455px'}} >
 
 <div style={{border:'',display:'flex'}}  >
        <Avatar  mt='1' ml='' src={property.profileimg} alt="" />
       <Box border='' ml='' width=''>
        <Text fontSize='md' ml='2' >{property.name}</Text>
        <Text fontSize='xs' ml='5' >{property.date}</Text>
       </Box>
       <div style={{width:'21%',marginLeft:'38%'}} >
       <Button ml='' h='9' mt='1' colorScheme='red' w='' >View</Button>
       </div>
        
  </div>

        <Image mt='1' h='275px' w="350px" src={property.img}  />
 
      

  <Grid templateColumns='repeat(3, 1fr)' gap={10} h='auto' >

  <Box ml='12'  border='' style={{cursor:"pointer"}} >
  
  <AiOutlineHeart style={{fontSize:'2rem',marginLeft:'30'}} />
  </Box>
  
  <Box  >
    <AiOutlineCamera style={{ fontSize:'2rem',marginLeft:'-6'}} />
  </Box>

  <Box > 
  <FaRegCommentDots style={{ fontSize:'2rem',marginLeft:'-50',cursor:"pointer"}} />
  </Box>
 
  </Grid>
<Box >
 <Text ml='2.5' noOfLines={[1, 2, 3]}>{property.title} </Text> 
</Box> 
        </Box>
      )
    })
  }

</div>
</div>
     
    )
   
  }




  

  export {Instgram}