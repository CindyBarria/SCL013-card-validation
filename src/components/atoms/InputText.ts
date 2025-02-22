import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("input-text")
export class InputText extends LitElement {
  static styles = css`
      input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
    `;

  @state()
   private placeholder: string = "placeholder";
   private value: string = "";
   private maxlength: number = 0;
   private type: string = "text";


  handleInput(event:Event) {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    if (this.type === "number") {
      inputValue = inputValue.replace(/\D/g, "").slice(0, this.maxlength);
    } else {
      inputValue = inputValue.slice(0, this.maxlength);
    }

    this.value = inputValue;
    this.dispatchEvent(new CustomEvent("input-change", {
      detail: this.value,
      bubbles: true, // Permite que el evento suba en el DOM
      composed: true // Permite que sea detectado en React
    }));
  }

  render() {
    return html`
      <input
        placeholder="${this.placeholder}"
        .value="${this.value}"
        @input="${this.handleInput}"
        maxlength="${this.maxlength}"
        type="${this.type}"
        ${this.type === "number" ? "inputmode='numeric' pattern='[0-9]*'" : ""}
        ${this.type === "number" ? "inputmode='numeric' pattern='[0-9]*'" : ""}
      />
    `;
  }
}
