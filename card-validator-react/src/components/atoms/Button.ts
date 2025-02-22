import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("button-primary")
export class Button extends LitElement {
  static styles = css`
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

  @state()
  private buttonText: string = "texto";

  render() {
    return html`<button>${this.buttonText}</button>`;
  }
}
