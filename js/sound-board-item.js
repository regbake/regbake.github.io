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

  render() {
    this.shadow.innerHTML = `
      <script>
        function play() {
          const aud = document.getElementById("${this.name}");
          console.log(aud)
          aud.play();
        }
      </script>
      <div>
        <input type="button" value="${this.name}" onclick="play()">
        <audio id="${this.name}" src="/audio/${this.name}.mp3"></audio>
      </div>
    `;
  }
}

customElements.define('sound-board-item', SoundBoardItem);
