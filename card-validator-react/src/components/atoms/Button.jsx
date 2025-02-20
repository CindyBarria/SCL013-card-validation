import { html, css, LitElement } from "lit";

export class Button extends LitElement {
  // Estilos con `static get styles()`
  static get styles() {
    return css`
      button {
        text-decoration: none;
        background-color: #5662b9;
        height: 12%;
        width: 23%;
        border-radius: 12%;
        border: 0px solid #1d1f78;
        color: white;
        cursor: pointer;
        transition-duration: 0.4s;
      }
    `;
  }

  // Definir propiedades de la clase
  static get properties() {
    return {
      buttonText: { type: String },
    };
  }

  constructor() {
    super();
    this.buttonText = "Texto";
  }

  render() {
    return html`<button>${this.buttonText}</button>`;
  }
}

// Registrar el web component
customElements.define("button-primary", Button);
