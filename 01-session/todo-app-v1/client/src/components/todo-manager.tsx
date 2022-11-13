
import { useEffect, useState } from "react";
import ITodoItem from "../models/todo-model";
import {getAllTODOItems} from "../services/todo-service"
import {TodoItems} from "./todo-items"
import {Container, Alert} from "react-bootstrap";

const TODOManager = () => {

  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {

      const getAllTODOItemsInvoker = async () => {
        
        try {
          const response = await getAllTODOItems();
          console.log(response);
          setTodoItems(response);  
        }catch (errorObject){
          // Control comes here for error
          setError(errorObject as Error);
        }
      }
      getAllTODOItemsInvoker();

  }, [])


  return (
    <Container>

      <h2>
        TODO Manager Application
      </h2>
      
      {
        error &&  (
          <Alert key="danger" variant="danger">
            {error.message}
          </Alert>
        )
      }

      {
        !error && (
          <TodoItems todoItems={todoItems}></TodoItems>
        )
      }

      

    </Container>
  )
}

export {TODOManager};

