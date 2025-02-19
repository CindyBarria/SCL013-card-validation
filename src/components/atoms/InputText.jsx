import { html, css, LitElement } from 'lit';

export class InputText extends LitElement {
  static get styles() {
    return css`input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    } `;
  }

  static get properties() {
    return {
      placeholder: { type: String },
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.value = '';
  }

  handleInput(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <input 
        type="text" 
        placeholder="${this.placeholder}" 
        .value="${this.value}"
        @input="${this.handleInput}"
      />
    `;
  }
}

customElements.define('input-text', InputText);
