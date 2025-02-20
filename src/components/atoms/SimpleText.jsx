import { html, css, LitElement } from "lit";

export class SimpleText extends LitElement {
  // Estilos con `static get styles()`
  static get styles() {
    return css`
      p {
      color: white;
        font-size: larger;
        font-family: 'calibri';
      }
    `;
  }

  // Definir propiedades de la clase
  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Somebody";
  }

  render() {
    return html`<p>${this.name}</p>`;
  }
}

// Registrar el web component
customElements.define("simple-text", SimpleText);
