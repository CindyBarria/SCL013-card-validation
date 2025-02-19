import { html, css, LitElement } from 'lit';

export class SimpleText extends LitElement {
  // Estilos con `static get styles()`
  static get styles() {
    return css`input {
    display: block;
    padding: 10px; 
    color : #414141;
}`;
  }

  // Definir propiedades de la clase
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>${this.name}</p>`;
  }
}

// Registrar el web component
customElements.define('simple-text', SimpleText);
