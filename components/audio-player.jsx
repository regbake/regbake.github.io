const { useState } = React;

const AudioPlayer = (props) => {
  const [album, setAlbum] = useState('six');

  const dittyList = [
    'thirteen',
    'nflditty',
    'one',
    'thirty',
    'eighteen',
    'twentyfour_birthday',
    'twentysix',
  ];

  const sixList = [
    '43',
    '46',
    'colt45',
    '047',
    '44_interlude',
    '49',
    '50',
    'area51',
    'giddy_ditty_outro',
  ];

  const goingUpList = [
    'ditty101',
    'area51',
    '2-5',
    '2-6',
    '2-7',
    '2-9',
    '102degree_cut',
  ];

  const albumData = {
    showMeYour: 'https://i.imgur.com/ZuVozuCl.jpg',
    six: 'https://i.imgur.com/X4bFJxLl.jpg',
    goingUp: 'https://i.imgur.com/VF6AMyBl.jpg',
  }

  const audioElements = document.getElementsByTagName('audio');

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

  const toggleAlbum = (albumName) => {
    // return album === 'six' ? setAlbum('showMeYour') : setAlbum('six');
    if (albumName === 'six') {
      setAlbum('six');
    } else if (albumName === 'showMeYour') {
      setAlbum('showMeYour');
    } else {
      setAlbum('goingUp');
    }
  }

  const handleShowAlbum = () => {
    // if (album === 'six') {
    //   return showSix();
    // }

    // return showDittyList();
    if (album === 'six') {
      return showSix();
    } else if (album === 'showMeYour') {
      // aka "showMeYour"
      return showDittyList()
    } else {
      return showGoingUp();
    }
  }

  const handleShowImage = () => {
    // going up photo
    // https://i.imgur.com/VF6AMyBl.jpg
    // const srcImage = (album === 'showMeYour'
    //   ? "https://i.imgur.com/ZuVozuCl.jpg"
    //   : "https://i.imgur.com/X4bFJxLl.jpg");
    let srcImage = "https://i.imgur.com/ZuVozuCl.jpg";
    if (album === 'six') {
      srcImage = "https://i.imgur.com/X4bFJxLl.jpg";
    } else if (album === 'showMeYour') {
      srcImage = "https://i.imgur.com/ZuVozuCl.jpg";
    } else {
      srcImage = "https://i.imgur.com/VF6AMyBl.jpg";
    }

    return (
      <div>
        <h2>{album}</h2>
        <img src={srcImage} />
      </div>
    )
  }

  const selectAlbum = () => {
    return (
      Object.entries(albumData).map(
        (album) => (
          <div key={album[0]}>
            <button onClick={() => toggleAlbum(album[0])}>
              <img src={album[1]} />
              <h4>Play {album[0]}</h4>
            </button>
          </div>
        )
      )
    )
  }

  const showGoingUp = () => {
    return (
      goingUpList.map(item => (
        <div key={item} className="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`ditty-albums/goingUp/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }

  const showSix = () => {
    return (
      sixList.map(item => (
        <div key={item} className="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`ditty-albums/six/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }

  const showDittyList = () => {
    return (
      dittyList.map(item => (
        <div key={item} className="audio-element-container">
          <h3>{item}</h3>
          <audio
            src={`ditty-albums/showmeyour/${item}.mp3`}
            controls
          />
        </div>
      ))
    )
  }


  return (
    <div>
      <div className="album-selection-container">
        {selectAlbum()}
      </div>
      <div className="main-audio-container">
        <div className="audio-elements">
          <div>
            <button onClick={playAll}>play all</button>
            {
              handleShowAlbum()
            }
          </div>
        </div>
        <div className="image-container">
          {
            handleShowImage()
          }
        </div>
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#audio-player');
const root = ReactDOM.createRoot(domContainer);
root.render(<AudioPlayer props='hello' />);
