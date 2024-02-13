const getAllGists = () => fetch('http://localhost:4567/gists')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json;
  })
  .then(arr => {
    arr.map(gist => {
      // <script src="https://gist.github.com/regbake/fd7dc13cb9a6a946c56c7cd2acf71259.js"></script>
      const el = document.getElementById('homepage-gists');
      const newTag = document.createElement('script');
      newTag.setAttribute('src', `${gist.html_url}.js`);
      el.appendChild(newTag);      
    })
  });

getAllGists();