import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("simple-text")
export class SimpleText extends LitElement {
  // Definir estilos
  static styles = css`
    p {
      color: white;
      font-size: larger;
      font-family: 'calibri';
    }
  `;

  // Estado reactivo
  @state()
  private name: string = "texto";

  render() {
    return html`<p>${this.name}</p>`;
  }
}
