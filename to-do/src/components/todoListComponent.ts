import { BaseComponent } from "./baseCompoonent";
import { TodoItemComponent } from "./todoItemComponent";
import { TodoService } from "./todoService";

export class TodoListComponent extends BaseComponent {
  private todoService: TodoService;
  private taskContainer: BaseComponent;

  constructor(parentNode: HTMLElement | null, todoService: TodoService) {
    super(parentNode, "div", "todo-list");
    this.todoService = todoService;
    this.taskContainer = new BaseComponent(this.node, "div");

    this.renderTask();
  }

  renderTask(): void {
    this.taskContainer.node.innerHTML = "";

    const task = this.todoService.getAllTask();
    task.forEach(
      (task) =>
        new TodoItemComponent(this.taskContainer.node, task, (id) =>
          this.todoService.deleteTask(id)
        )
    );
  }
}
