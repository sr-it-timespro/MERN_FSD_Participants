import { useEffect, useState } from "react";
import ITodoItem from "../models/todo";
import {getAllTODOs} from "../services/todo";
import {TodoItems} from "./todo-items";
import { Container, Alert, Spinner } from "react-bootstrap";
import { TODOCreator } from "./todo-creator";

const TODOManager = () => {

  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {

      const getAllTODOsInvoker = async () => {

        try{
          const response = await getAllTODOs();
          setTodoItems(response);
        }catch (error){
          setError(error as Error);
        } finally{
          setLoading(false);
        }
      }

      getAllTODOsInvoker();
    }, []);

  const refreshParent = (newTodoItem : ITodoItem) => {

    setTodoItems([
        ...todoItems,
        newTodoItem
      ]
    )
  }

  return (
    
    <Container>

        <h2>
          TODO Manager Application
        </h2>

        {
          loading && (

            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading TODO Manager...</span>
            </Spinner>

          )
        }

        {error && !loading && (

          <Alert key="danger" variant="danger">
              {error.message}
            </Alert>
          )
        }

        {!error && !loading && (
        <TodoItems todoItems={todoItems}></TodoItems>)
        }


    </Container>

  )
}

export {TODOManager};
