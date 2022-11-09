import React, {useState} from 'react'
import axois from "axios"
import { Box, P, Container} from "@chakra-ui/react"

const Recipes = () => {
    const [data, setData] = useState([])

    const getdata= () =>{
        axois.get("http://localhost:8080/sweetfood")
        .then((res)=>{
            setData(res.data)
        })
        
    }
    console.log(setData)
  return (
    <Container>
        <Box>
            <Box>
                <Box >
                    <h2>
                        <span>Food & Drinks</span> <span>| Yummy Meat-Free Recipes</span>
                    </h2>
                    <P>Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!</P>
                    <P>Transform into a master chef now.</P>
                </Box>
                <div><p>hello</p></div>
                <div><p>heya</p></div>
                {/* {
                    data.length && data.map((item) =>{
                        return {
                            
                        }
                    })
                } */}
            </Box>
        </Box>
    </Container>
  )
}
export default Recipes

