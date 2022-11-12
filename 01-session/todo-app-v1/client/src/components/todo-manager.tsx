
import { useEffect, useState } from "react";
import ITodoItem from "../models/todo-model";
import {getAllTODOItems} from "../services/todo-service"
import {TodoItems} from "./todo-items"
import {Container} from "react-bootstrap";

const TODOManager = () => {

  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  useEffect(() => {

      const getAllTODOItemsInvoker = async () => {
        
        const response = await getAllTODOItems();
        console.log(response);
        setTodoItems(response);
      }
      getAllTODOItemsInvoker();

  }, [])

  return (
    <Container>

      <h2>
        TODO Manager Application
      </h2>
      
      <TodoItems todoItems={todoItems}></TodoItems>

    </Container>
  )
}

export {TODOManager};

