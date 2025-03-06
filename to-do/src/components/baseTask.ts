import { TodoStatus } from "../models/todo.enums";
import { ITodoItem } from "../models/todo.interfaces";

export abstract class BaseTask implements ITodoItem {
  public id: string = crypto.randomUUID();

  constructor(
    public title: string,
    public description: string,
    public status: TodoStatus = TodoStatus.TODO
  ) {}

  abstract validate(): boolean;

  changeStatus(newStatus: TodoStatus): void {
    if (this.status !== newStatus) {
      this.status = newStatus;
    }
  }
}

// ("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d");
