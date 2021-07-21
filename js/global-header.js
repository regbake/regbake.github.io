class GlobalHeader extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.heading = '';
    this.subheading = '';
  }

  connectedCallback() {
    this.heading = this.getAttribute('heading');
    this.subheading = this.getAttribute('subheading');

    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <header part="global-header">
        <h1>${this.heading}</h1>
        <p>${this.subheading}</p>
      </header>
    `;
  }
}

customElements.define('global-header', GlobalHeader);
