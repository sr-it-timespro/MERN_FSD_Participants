
interface ITodoItem{

  id: number,
  title: string,
  description: string,
  createdDate: Date

}

type ITodoCreateItem = Omit<ITodoItem, "id">;
export type {ITodoCreateItem};

export default ITodoItem;
