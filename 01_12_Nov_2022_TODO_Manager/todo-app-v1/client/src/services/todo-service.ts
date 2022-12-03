
import axios from "axios"
import ITodoItem, { ITodoCreateItem } from "../models/todo-model";


const getAllTODOItems = async () => {

  const response = await axios.get<ITodoItem[]>("http://localhost:4000/todos");
  return response.data;

}


const postNewTodoItem = async (todoCreateItem : ITodoCreateItem) => {

  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  const response = await axios.post<ITodoItem>("http://localhost:4000/todos", todoCreateItem, config)
  return response.data;
}

export {getAllTODOItems, postNewTodoItem};
