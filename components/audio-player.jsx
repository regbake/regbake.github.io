const { useState } = React;

const AudioPlayer = (props) => {
  const [album, setAlbum] = useState('six');

  const collections = {
    dittyList: [
      'thirteen',
      'nflditty',
      'one',
      'thirty',
      'eighteen',
      'twentyfour_birthday',
      'twentysix',
    ],
    sixList: [
      '43',
      '46',
      'colt45',
      '047',
      '44',
      '49',
      '50',
      'area51',
      '048_1',
    ],
    epDittyList: [
      '102degreeditty',
      'area51_ep',
      'ditty101',
    ],
  };

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

  const toggleAlbum = () => {
    if (album === 'ep') {return setAlbum('ep')}
    return album === 'six' ? setAlbum('showMeYour') : setAlbum('ep');
  }

  const handleShowAlbum = () => {
    if (album === 'six') {
      return showSix();
    }

    if (album === 'ep') {
      return showEp();
    }

    return showDittyList();
  }

  const handleShowImage = () => {
    const srcImage = (album === 'showMeYour'
      ? "https://i.imgur.com/ZuVozuCl.jpg"
      : "https://i.imgur.com/X4bFJxLl.jpg");
    return (
      <div>
        <h2>{album}</h2>
        <img src={srcImage} />
      </div>
    )
  }

  const showEp = () => {
    return (
      collections.epDittyList.map(item => (
        <div key={item} class="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`/ep_ditty/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }

  const showSix = () => {
    return (
      collections.sixList.map(item => (
        <div key={item} class="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`/six/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }

  const showDittyList = () => {
    return (
      collections.dittyList.map(item => (
        <div key={item} class="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`/showmeyour/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }


  return (
    <div class="main-audio-container">
      <div class="audio-elements">
        <div>
          <button onClick={playAll}>play all</button>
          {/* <button onClick={playAllAtOnce}>play all at once</button> */}
          <button onClick={toggleAlbum}>toggle collection</button>
          <select>
            
          </select>
          {
            handleShowAlbum()
          }
        </div>
      </div>
      <div class="image-container">
        {
          handleShowImage()
        }
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#audio-player');
const root = ReactDOM.createRoot(domContainer);
// root.render(AudioPlayer('hello'));
root.render(<AudioPlayer props='hello' />);
// ReactDOM.render(<AudioPlayer props='hello' />, domContainer);
