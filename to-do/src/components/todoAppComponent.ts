import { BaseComponent } from "./baseCompoonent";
import { TodoFormComponent } from "./todoFormComponent";
import { TodoListComponent } from "./todoListComponent";
import { TodoService } from "./todoService";

export class TodoAppComponent extends BaseComponent {
  constructor(parentNode: HTMLElement | null) {
    super(parentNode, "div", "todo-app");

    const todoService = new TodoService();

    const todoList = new TodoListComponent(this.node, todoService);

    const todoForm = new TodoFormComponent(this.node, (title, description) => {
      todoService.createTask(title, description);
      todoList.renderTask();
    });
  }
}
