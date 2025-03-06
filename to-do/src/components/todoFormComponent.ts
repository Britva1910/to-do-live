import { BaseComponent } from "./baseCompoonent";

export class TodoFormComponent extends BaseComponent<HTMLFormElement> {
  private onSubmitCallback: (title: string, description: string) => void;

  constructor(
    parentNode: HTMLElement | null,
    onSubmit: (title: string, description: string) => void
  ) {
    super(parentNode, "form", "todo-form");
    this.onSubmitCallback = onSubmit;
    this.render();
  }
  private render(): void {
    const titleInput = new BaseComponent<HTMLFormElement>(
      this.node,
      "input",
      "title-field"
    );
    titleInput.node.placeholder = "Task name";
    titleInput.node.required = true;
    titleInput.node.name = "title";

    const descriptionInput = new BaseComponent<HTMLFormElement>(
      this.node,
      "input",
      "description-field"
    );
    descriptionInput.node.placeholder = "Description name";
    descriptionInput.node.required = true;
    descriptionInput.node.name = "description";

    const submitButton = new BaseComponent(
      this.node,
      "button",
      "form-submit-btm",
      "Add task"
    );

    submitButton.node.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = new FormData(this.node);
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      this.onSubmitCallback(title, description);
      this.node.reset();
    });
  }
}
