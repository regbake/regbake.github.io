//dealing with the burger menu
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

//The part of the portfolio section where you toggle the sections...
var toggleUl = document.getElementById("toggle-ul").getElementsByTagName("li");
var pastProj = toggleUl[0].firstChild;
var currProj = toggleUl[1].firstChild;

pastProj.addEventListener("click", function(){
  //change this to not selected
  if (this.classList.contains("selected-title")) {
    this.classList.remove("selected-title");
    this.classList.add("not-selected-title");

    //change the other to selected
    currProj.classList.remove("not-selected-title");
    currProj.classList.add("selected-title");
  } else if (this.classList.contains("not-selected-title")){
    this.classList.remove("not-selected-title");
    this.classList.add("selected-title");

    //change the other to selected
    currProj.classList.remove("selected-title");
    currProj.classList.add("not-selected-title");
  }
});
currProj.addEventListener("click", function(){
  //change this to not selected
  if (this.classList.contains("selected-title")) {
    this.classList.remove("selected-title");
    this.classList.add("not-selected-title");

    //change the other to selected
    pastProj.classList.remove("not-selected-title");
    pastProj.classList.add("selected-title");
  } else if (this.classList.contains("not-selected-title")){
    this.classList.remove("not-selected-title");
    this.classList.add("selected-title");

    //change the other to selected
    pastProj.classList.remove("selected-title");
    pastProj.classList.add("not-selected-title");
  }
});
