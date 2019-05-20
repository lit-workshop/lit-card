import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lit-card`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lit-card',
      },
    };
  }
}

window.customElements.define('lit-card', LitCard);
