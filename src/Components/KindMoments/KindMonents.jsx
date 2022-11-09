import "./Kind.css"
import {Link} from "react-router-dom";
import React from "react";
import { Badge, Box, Button, Input, Select, Stack, Text,Image} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const KindMonents =()=>{
return(
    <>
    <div style={{height:'15rem',width:'100%',  backgroundColor:'#f0f0f0',display:'flex'}} >

<Box style={{marginLeft:'16%',border:'',height:'15rem',width:'50%'}}>

                    <p style={{fontSize:'26px',
                    fontWeight:'400px',
                    color:'#444444',
                    fontFamily:'Roboto, Arial, Helvetica, sans-serif',
                    border:'',
                    display:'inline',
                    marginLeft:'-24%'}}>  KindMoments </p>

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
<Text fontSize='20' color='#444444'>Share Your KindMoment</Text>
<Text fontSize='16px'>Interesting food or restaurant? Share with 1000s of food lovers!</Text>

<Button colorScheme='red' w='68%' h='2.2rem' mt='1'>Share</Button>

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
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    <Button colorScheme='red' w='68%' h='2.2rem'>Search</Button>

</Stack>
</Stack>

{/* Pagnisation ke liye or yk button */}
<Box h='2rem'  m='auto' w='74%' border='1px solid red'></Box>




  

  
    
        
      
      


</>
)
}

function AirbnbCard() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      
      beds: 3,
      baths: 2,
      name:'Pawan',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box maxW='sm' ml='16%'
       borderWidth='1px' 
       borderRadius='lg' 
       overflow='hidden'
       boxShadow='md'
       >
      
      
      <Box 
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.name}
          </Box>
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>

            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            
          </Box>
  
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

export {KindMonents,AirbnbCard}