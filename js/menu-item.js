class MenuItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.name = '';
    this.href = '';
  }

  connectedCallback() {
    this.name = this.getAttribute('name');
    this.href = this.getAttribute('href');

    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <div part="menu-item">
        <div part="menu-item--icon">
        </div>
        
        <a href="${ this.href }">
        <button part="menu-item--button">${this.name}</button>
      </div>
    `;
  }
}

customElements.define('menu-item', MenuItem);
