import ITodoItem from "../models/todo-model";

type TodoItemsModel = {

  todoItems : ITodoItem[];
}

// const TodoItems = (todoItemsModel : TodoItemsModel) => {
const TodoItems = ({todoItems} : TodoItemsModel) => {

  return (
    <div>
      {
        todoItems.map((todoItem) => 

          (todoItem.title)
        )
      }
    </div>
  )
}

export {TodoItems};