import {Input,Button} from "@chakra-ui/react"
import { useState } from "react";


function AddTodo({ handleAddTodo }) {
    const [text, setText] = useState("");
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    const onClick = () => {
      handleAddTodo(text);
      setText("");
    };
  
    return (
      <div>
        <Input onChange={handleChange}
          value={text}
          variant="outline"
          placeholder="Enter Comment..." >
        </Input>
        <Button colorScheme='red' ml='7' mt='3' onClick={onClick}>
         Comment
        </Button>
      </div>
    );
  }
  
  export default AddTodo;
  