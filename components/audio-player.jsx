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
    // start by playing first item
    audioElements[0].play();

    for (let item = 0; item < audioElements.length; item++) {
      // don't continue playing after the last element
      if (audioElements.length - item > 1) {
        audioElements[item].addEventListener('ended', () => {
          audioElements[item + 1].play();
        })
      }
    }
  }


  return (
    <div class="main-audio-container">
      <div class="audio-elements">
        <div>
          <button onClick={playAll}>play all in order</button>
          <button onClick={playAllAtOnce}>play all at once</button>
          {
            dittyList.map(item => (
              <div key={item} class="audio-element-container">
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
          {/* <img src="/photos/showmeyour_photo.jpg"/> */}
          <img src="https://i.imgur.com/ZuVozuCl.jpg" />
        </div>
    </div>
  );
}

const domContainer = document.querySelector('#audio-player');
const root = ReactDOM.createRoot(domContainer);
root.render(AudioPlayer());
