
import axios from "axios";
import ITodoItem, {ITodoCreateItem} from "../models/todo";
import {todos} from "./todos-data";

const getAllTODOs = async () => {

  let iTodoItemArr : Array<ITodoItem> = new Array();

  todos.map((todo) => {
    
    let iTodoItem : ITodoItem = {
      id: todo.id,
      title : todo.title,
      description : todo.description,
      createdDate : new Date()
    };
    iTodoItemArr.push(iTodoItem);
  })

  return iTodoItemArr;
}

// Input -> 
const postNewTODO = async (todoCreateItem : ITodoCreateItem ) => {

  const postNewTODOUrl = "http://localhost:4000/todos";

  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

  const response = await axios.post<ITodoItem>(postNewTODOUrl, todoCreateItem, config);
  return response.data;
}

export {getAllTODOs, postNewTODO};
