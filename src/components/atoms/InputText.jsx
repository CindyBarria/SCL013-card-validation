import { html, css, LitElement } from "lit";

export class InputText extends LitElement {
  static get styles() {
    return css`
      input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }
    `;
  }

  static get properties() {
    return {
      placeholder: { type: String },
      value: { type: String },
      maxlength: { type: Number },
      type: { type: String }, // text o number
    };
  }

  constructor() {
    super();
    this.placeholder = "placeholder";
    this.value = "";
    this.maxlength = 16;
    this.type = "text"; // Valor por defecto
  }

  handleInput(event) {
    let inputValue = event.target.value;

    if (this.type === "number") {
      inputValue = inputValue.replace(/\D/g, "").slice(0, this.maxlength);
    } else {
      inputValue = inputValue.slice(0, this.maxlength);
    }

    this.value = inputValue;
    this.dispatchEvent(
      new CustomEvent("input-change", {
        detail: this.value,
        bubbles: true,
        composed: true,
      })
    );

    this.requestUpdate();
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

customElements.define("input-text", InputText);
