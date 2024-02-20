// http://localhost:9292/gists
const getAllGists = () => fetch('164.92.76.225:9292/gists')
  .then(function(response) {
    return response.json();
  })
  .then((arr) => {
    arr.map(markup => {
      // <script src="https://gist.github.com/regbake/fd7dc13cb9a6a946c56c7cd2acf71259.js"></script>
      const el = document.getElementById('homepage-gists');
      const newTag = document.createElement('div');
      newTag.className = 'homepage-gists__item'
      newTag.innerHTML = markup;
      el.appendChild(newTag);
    })
  });

getAllGists();