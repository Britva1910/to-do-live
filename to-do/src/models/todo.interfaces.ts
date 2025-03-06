import { TodoStatus } from "./todo.enums";

export interface ITodoItem {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}
