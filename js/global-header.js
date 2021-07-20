class GlobalHeader extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.heading = "";
    this.subheading = "";
  }

  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.subheading = this.getAttribute('subheading');

    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <div>
        <h1>${this.heading}</h1>
        <p>${this.subheading}</p>
      </div>
    `;
  }
}

customElements.define('global-header', GlobalHeader);
