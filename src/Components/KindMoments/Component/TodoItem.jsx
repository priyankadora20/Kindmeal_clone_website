import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./Todo";
import {Box} from "@chakra-ui/react";

function Todo() {
    const [todos, setTodos] = useState([]);
  
    const handleAddTodo = (text) => {
      const newItem = {
        title: text,
        status: false,
        id: new Date().toDateString() + text
      };
      setTodos([...todos, newItem]);
    };

    return (
      <div>
        <Box  w='100%' p={4}  color='white' 
        height='auto' border=''>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              status={item.status}
            />
          ))}
        </Box>
        <AddTodo handleAddTodo={handleAddTodo} />
        
      </div>
    );
  }
  
  export default Todo;
  