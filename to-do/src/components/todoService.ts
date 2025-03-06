import { TodoStatus } from "../models/todo.enums";
import { TodoItem } from "./todoItem";

export class TodoService {
  //   private task: TodoItem[] = [];

  constructor() {}

  createTask(title: string, description: string): TodoItem {
    const task = new TodoItem(title, description, TodoStatus.TODO);
    this.task.push(task);
    return task;
  }

  deleteTask(taskId: string) {
    this.task = this.task.filter((task) => task.id !== taskId);
  }

  getAllTask(): TodoItem[] {
    return this.task;
  }

  updateTaskStatus(taskId: string, newStatus: TodoStatus): void {
    this.task = this.task.map((task) =>
      task.id === taskId ? new TodoItem(task.id, task.title, newStatus) : task
    );
  }
}
