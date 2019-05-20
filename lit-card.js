import { LitElement, html, css } from "lit-element";

class LitCard extends LitElement {
  static get styles() {

    return css`
      :host {
        --primary-color: var(--card-primary-color, #0d47a1);
        --secundary-color: var(--card-secundary-color, #5472d3);
        --neutral-color: var(--card-nuetral-color, #ccc);
        --font-color: var(--card-font-color, #ffffff);
        --border: var(--card-border, 1px solid var(--neutral-color));
        --border-radius: var(--card-border-radius, 4px);
        --padding: var(--card-padding, 5px);
        --font-size: var(--card-font-size, 10px);
        --width: var(--card-width, 250px);
        --img-size: var(--card-img-size, 200px);
      }

      .card {
        width: var(--width, 250px);
        border: var(--border);
        border-radius: var(--border-radius);
        font-size: var(--font-size);
      }

      .header {
        border-bottom: var(--border);
        background-color: var(--primary-color);
        color: var(--font-color);
        padding: var(--padding);
      }

      .body {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: var(--padding);
        border-bottom: var(--border);
      }

      .separator {
        width: 90%;
        border: 3px dashed #ccc;
      }

      .main-img {
        width: var(--img-size, 200px);
        height: var(--img-size, 200px);
        margin-left: auto;
        margin-right: auto;
        border-radius: var(--border-radius);
      }

      .description {
        margin: 0px;
      }

      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--padding);
      }

      .btn.primary {
        background-color: var(--primary-color);
        color: var(--font-color);
        min-height: 25px;
        min-width: 50px;
        margin: 0px 5px;
      }
    `;
  }

  static get properties() {
    return {
      card: { type: Object }
    }
  }

  render() {
    return html`
      <div class="card">
        <div class="header">${this.card.title}</div>
        <div class="body">
          <img class="main-img" src="${this.card.src}" />
          <hr class="separator"/>
          <p class="description">
            ${this.card.description}
          </p>
        </div>
        <div class="footer">
          ${this.setButtons()}
        </div>
      </div>
    `;
  }

  clickHandler(event) {
    let eventName = event.target.getAttribute('event');
    let customEvent = new CustomEvent(
      eventName,
      {
        bubbles: true,
        composed: true,
        detail: {
          key: this.card.id
        }
      }
    );

    this.dispatchEvent(customEvent);
  }

  setButtons() {
    return html`
      ${this.card.actions.map(action => html`
      <button
      class="btn primary"
      event="${action.event}"
      @click="${this.clickHandler}"
      >${action.title}</button>`)}
    `;
  }
}

window.customElements.define("lit-card", LitCard);
