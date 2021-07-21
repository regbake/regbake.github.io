class MenuItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.name = '';
  }

  connectedCallback() {
    this.name = this.getAttribute('name');

    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <div part="menu-item">
        <div part="menu-item--icon">
          
        </div>
        
        <button part="menu-item--button">${this.name}</button>
      </div>
    `;
  }
}

customElements.define('global-header', GlobalHeader);
