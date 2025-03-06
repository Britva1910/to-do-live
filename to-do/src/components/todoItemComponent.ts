import { BaseComponent } from "./baseCompoonent";
import { TodoItem } from "./todoItem";

export class TodoItemComponent extends BaseComponent<HTMLDivElement> {
  private task: TodoItem;
  private onDeleteCallback: (id: string) => void;

  constructor(
    parentNode: HTMLElement | null,
    task: TodoItem,
    onDelete: (id: string) => void
  ) {
    super(parentNode, "div", "todo-item");
    this.task = task;
    this.onDeleteCallback = onDelete;
    this.render();
  }

  render(): void {
    const titleEl = new BaseComponent(
      this.node,
      "p",
      "task-title",
      this.task.title
    );

    const descriptionEl = new BaseComponent(
      this.node,
      "span",
      "task-description",
      this.task.description
    );

    const statusEl = new BaseComponent(
      this.node,
      "span",
      "task-status",
      `Status - ${this.task.status}`
    );

    const deleteBtn = new BaseComponent(
      this.node,
      "button",
      "btn-delete",
      "Delete"
    );

    deleteBtn.node.addEventListener("click", this.handleDelete.bind(this));
  }

  private handleDelete() {
    this.onDeleteCallback(this.task.id);
    this.destroy();
  }

  updateStatus(task: TodoItem): void {
    this.task = task;
    this.node.innerHTML = "";
    this.render();
  }
}
