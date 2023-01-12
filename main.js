const  hamButton = document.getElementById('ham-button');
const sideNav = document.getElementById('sideNav')
const mainContainer = document.getElementById('main-container');
const overlay = document.getElementById("overlay");


hamButton.addEventListener('click', function () {
  // console.log("I clicked")
    hamButton.classList.toggle("change");
    sideNav.classList.toggle("side-nav-open");
    mainContainer.classList.toggle("side-nav-main");
    overlay.classList.toggle("overlay");
});
overlay.addEventListener('click', function () {
  hamButton.classList.toggle("change");
  sideNav.classList.toggle("side-nav-open");
  mainContainer.classList.toggle("side-nav-main");
  overlay.classList.toggle("overlay");
});
