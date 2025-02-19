import { html, css, LitElement } from 'lit';

export class Selector extends LitElement {
  static get styles() {
    return css`select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    } `;
  }

  static get properties() {
    return {
      value: { type: String },
      options: { type: Array },
    };
  }

  constructor() {
    super();
    this.value = '';
    this.options = [];
  }


  handleSelectChange(event) {
    const selectedValue = event.target.value;
    this.value = selectedValue;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: selectedValue,
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
       <select .value="${this.value}" @change="${this.handleSelectChange}">
        ${this.options.map(option => html`
          <option value="${option.id}">${option.name}</option>
        `)}
      </select>
    `;
  }
}

customElements.define('select-option', Selector);
