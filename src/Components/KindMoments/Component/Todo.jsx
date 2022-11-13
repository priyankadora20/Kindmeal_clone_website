import {Box,Text} from "@chakra-ui/react";

function TodoItem({ title}) {
    return (
      <Box style={{ color: "gray", fontSize: "20px", }}>
        <div style={{width:'90%',
           borderRadius:'50px'}}>
            <Text boxShadow='xs'  colorScheme='gray'>{title} </Text>   
        </div>
      </Box>
    );
  }
  
  export default TodoItem;