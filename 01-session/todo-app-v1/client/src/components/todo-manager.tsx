
import { useEffect, useState } from "react";
import ITodoItem from "../models/todo-model";
import {getAllTODOItems} from "../services/todo-service"
import {TodoItems} from "./todo-items"
import {Container, Alert, Spinner} from "react-bootstrap";

const TODOManager = () => {

  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {

      const getAllTODOItemsInvoker = async () => {
        
        try {
          const response = await getAllTODOItems();
          console.log(response);
          setTodoItems(response);  
          // Data fetching is DONE-> Application is 'NOT LOADING' status
          // setLoading(false);
        }catch (errorObject){
          // Control comes here for error
          setError(errorObject as Error);
          // Application is 'NOT LOADING' status
          // setLoading(false);
        } finally{
          setLoading(false);
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
        loading && (

        <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading TODO Manager Application...</span>
        </Spinner>          
        )
      }

      {
        error && !loading && (
          <Alert key="danger" variant="danger">
            {error.message}
          </Alert>
        )
      }

      {
        !error && !loading && (
          <TodoItems todoItems={todoItems}></TodoItems>
        )
      }

      

    </Container>
  )
}

export {TODOManager};

