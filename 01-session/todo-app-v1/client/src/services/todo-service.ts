
import axios from "axios"
import ITodoItem from "../models/todo-model";


const getAllTODOItems = async () => {

  const response = await axios.get<ITodoItem[]>("http://localhost:4000/todos");
  return response.data;

}

export {getAllTODOItems};
