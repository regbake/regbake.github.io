const AudioPlayer = () => {
  const dittyList = [
    'thirteen',
    'nflditty',
    'one',
    'thirty',
    'eighteen',
    'twentyfour_birthday',
    'twentysix',
  ];

  const audioElements = document.getElementsByTagName('audio');

  const playAllAtOnce = () => {
    for (const audioElement of audioElements){
      audioElement.play();
    }
  };

  const playAll = () => {
    audioElements[0].play();
    for (let item = 0; item < audioElements.length; item++){
      if (audioElements.length - item > 1) {
        audioElements[item].addEventListener('ended', () => {
        audioElements[item + 1].play();
        })
      }
    }
  }


  return (
    <div class="main-container">
      <div class="music-elements">
        <div>
          <button onClick={playAll}>play all in order</button>
          <button onClick={playAllAtOnce}>play all at once</button>
          {
            dittyList.map(item => (
              <div key={item}>
                <h3>{item}</h3>
                <audio
                  src={`/showmeyour/${item}.mp3`}
                  controls
                />
              </div>
            ))
          }
        </div>
      </div>
      <div class="image-container">
          <img src="/photos/showmeyour_photo.jpg"/>
        </div>
    </div>
  );
}

const domContainer = document.querySelector('#audio-player');
const root = ReactDOM.createRoot(domContainer);
root.render(AudioPlayer());
