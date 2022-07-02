class GlobalHeader extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.heading = '';
    this.subheading = '';
    this.href = '';
  }

  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.subheading = this.getAttribute('subheading');
    this.href = this.getAttribute('href');

    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <header part="global-header">
        <h1 part="header">
          <a part="anchor" href="${this.href}">
            ${this.heading}
          </a>
        </h1>
        <p part="sub-header">${this.subheading}</p>
      </header>
    `;
  }
}

customElements.define('global-header', GlobalHeader);
