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

//cookie pop-up
const cookiePop = document.querySelector(".cookie-content");
const changeCookieSettings = document.querySelector(".btn-settings");
const acceptCookie = document.querySelector(".btn-accept");
const cookieSettings = document.querySelector(".cookie-settings");

//check settings clicked
changeCookieSettings.addEventListener("click", function(){
  cookiePop.style.display = "none";
  cookieSettings.style.display = "flex"
});

//check accept clicked
acceptCookie.addEventListener("click", function() {
  cookiePop.style.display = "none";
  localStorage.setItem("cookieAccepted", "yes")
});

///check if cookie accepted or not

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookiePop.style.display = "flex";
    }
}, 1000)
