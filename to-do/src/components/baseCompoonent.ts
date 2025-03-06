export class BaseComponent<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(
    parenNode: HTMLElement | null,
    tagName = "div",
    className = "",
    content = ""
  ) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;

    this.node = element as NodeType;
  }

  destroy(): void {
    this.node.remove();
  }
}
