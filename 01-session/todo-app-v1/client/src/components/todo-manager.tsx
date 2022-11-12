
import { useEffect, useState } from "react";
import ITodoItem from "../models/todo-model";
import {getAllTODOItems} from "../services/todo-service"

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
      TODO Manager Component
    </div>
  )
}

export {TODOManager};

