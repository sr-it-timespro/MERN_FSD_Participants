import ITodoItem from "../models/todo-model";
import { Table } from "react-bootstrap";

type TodoItemsModel = {

  todoItems: ITodoItem[];
}

// const TodoItems = (todoItemsModel : TodoItemsModel) => {
const TodoItems = ({ todoItems }: TodoItemsModel) => {

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>

        {
          todoItems.map((todoItem, index) => {

            return (

              <tr key={todoItem.id}>
                <td>{index + 1}</td>
                <td>{todoItem.title}</td>
                <td>{todoItem.description}</td>
                <td>{todoItem.createdDate.toString()}</td>
              </tr>

            )
          })
        }

      </tbody>
    </Table>
  )
}

export { TodoItems };