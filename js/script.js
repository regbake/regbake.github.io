// http://localhost:9292/gists
const getAllGists = () => fetch('https://www.regbake.dev/gists')
  .then(function(response) {
    return response.json();
  })
  .catch((error) => {
    console.log('Oh no there was an error fetching the gists!')
    return [
      "<h1>You're looking great today.</h1>",
      `
        <p>The quick brown fox jumped</p>
        <ul>
          <li>foo</li>
          <li>foo</li>
          <li>bar</li>
          <li>moo</li>
        </ul>
      `,
      "<h3>over the lazy</h3>",
      "<p>dog.</p>"
    ];
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