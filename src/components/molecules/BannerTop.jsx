import { html, LitElement } from 'lit';
import logo from '../../assets/images/LOGO-AMARILLO.png';
export class BannerTop extends LitElement {

  // Definir propiedades de la clase
  static get properties() {
    return {
      image: { type: String },
      alt: { type: String }
    };
  }

  constructor() {
    super();
    this.image = logo;
    this.alt  = "banner"
  }

  render() {
    return html`<img alt="${this.alt}" src= "${this.image}"/>`;
  }
}

// Registrar el web component
customElements.define('banner-top', BannerTop);
