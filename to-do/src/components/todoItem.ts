import { BaseTask } from "./baseTask";

export class TodoItem extends BaseTask {
  validate(): boolean {
    return this.title.trim().length > 0 && this.description.trim().length > 0;
  }
}
