class DittyItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.fileName = '';
  }

  connectedCallback() {
    this.fileName = this.getAttribute('fileName');

    this.render();
  }

  buildItem() {
    return (`
      <span>${this.fileName}</span>
      <audio>
	<source src="/showmeyour/${this.fileName}.mp3" type="audio/mpeg">
      </audio>
    `);
  }

  render() {
this.shadow.innerHTML = this.buildItem();
//    this.shadow.innerHTML = `
//      <div>
//        ${this.buildItem()}
//      </div>
//    `;
  }
}

customElements.define('ditty-item', DittyItem);
