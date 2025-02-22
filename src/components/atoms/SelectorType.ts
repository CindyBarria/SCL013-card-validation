import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("select-option")
export class Selector extends LitElement {
  static styles = css`
      select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
    `;

  @state()
  private value: string = ""; 

  @property({ type: Array })
  options = [
    { id: 1, name: "Opción 1" },
    { id: 2, name: "Opción 2" },
    { id: 3, name: "Opción 3" }
  ];

  handlerChange(event: Event){
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
  }

  render() {
    return html`
      <select .value="${this.value}" @change=${this.handlerChange}>
        ${this.options.map(
          (option) => html`
            <option value="${option.id}">${option.name}</option>
          `
        )}
      </select>
    `;
  }
}

