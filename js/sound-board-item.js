class SoundBoardItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.name = '';
  }

  connectedCallback() {
    this.name = this.getAttribute('name');

    this.render();
  }

  play(name) {
    const aud = document.getElementById(name);
    console.log(aud)
    aud.play();

    console.log('true' + name);
    return 'true' + name;
  }

  render() {
    this.shadow.innerHTML = `
      <div>
        <input type="button" value="${this.name}" onclick="this.parentElement.play('${this.name}')">
        <audio id="${this.name}" src="/audio/${this.name}.mp3"></audio>
      </div>
    `;
  }
}

customElements.define('sound-board-item', SoundBoardItem);
