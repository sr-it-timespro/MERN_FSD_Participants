
import { useEffect, useState } from "react";
import ITodoItem from "../models/todo-model";
import {getAllTODOItems} from "../services/todo-service"
import {TodoItems} from "./todo-items"

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
    <div>
      
      <TodoItems todoItems={todoItems}></TodoItems>

    </div>
  )
}

export {TODOManager};

