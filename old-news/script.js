document.getElementById('header').innerHTML += `
  <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
              <!-- <img src="../images/bulma.png" alt="Logo"> -->
              Master of my domain.
            </a>
            <span id="nav-toggle" class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="index.html">
                Home
              </a>
              <a class="navbar-item" href="portfolio.html">
                Portfolio
              </a>
              <a class="navbar-item" target="_blank" href="https://resume.creddle.io/resume/hcekfysu45i">
                Resume
              </a>
              <a class="navbar-item" href="about.html">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
`

document.getElementById('footer').innerHTML += `
  <div class="hero-foot">
    <div class="container">
      <div class="tabs is-centered">
        <ul>
          <li><a>2020</a></li>
        </ul>
      </div>
    </div>
  </div>
`

// handle burger menu
// @TODO: resolve this not working?
document.getElementById("nav-toggle").addEventListener ("click", toggleNav);
function toggleNav() {
        var nav = document.getElementById("navbarMenu");
        var className = nav.getAttribute("class");
        if (className == "nav-right nav-menu") {
            nav.className = "nav-right nav-menu is-active";
        } else {
            nav.className = "nav-right nav-menu";
        }
};