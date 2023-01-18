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
const acceptCookie = document.querySelectorAll(".btn-accept");
const cookieSettings = document.querySelector(".cookie-settings");

//check settings clicked
changeCookieSettings.addEventListener("click", function(){
  cookiePop.style.display = "none";
  cookieSettings.style.display = "flex"
});

//check accept clicked
acceptCookie[0].addEventListener("click", function() {
  cookiePop.style.display = "none";
  localStorage.setItem("cookieAccepted", "yes")
});
acceptCookie[1].addEventListener("click", function() {
  cookieSettings.style.display = "none";
  localStorage.setItem("cookieAccepted", "yes")
});

///check if cookie accepted or not

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookiePop.style.display = "flex";
    }
}, 1000)

//getting all buttons in cookie settings block
const cookieSettingsButtons = document.querySelectorAll(".cookies-container  button");

//set active buttons
cookieSettingsButtons[0].classList.add("btn-web-cookie");
cookieSettingsButtons[1].classList.add("btn-light-cookie");
cookieSettingsButtons[2].classList.add("btn-web-cookie");
cookieSettingsButtons[3].classList.add("btn-light-cookie");
cookieSettingsButtons[6].classList.add("btn-web-cookie");
//

/////////////////////////////////////////////////////////////
//switch
///////////////////////////////////////////////////////////
cookieSettingsButtons[1].addEventListener('click', function(){
  cookieSettingsButtons[0].classList.remove("btn-web-cookie");
  cookieSettingsButtons[1].classList.remove("btn-light-cookie");
  cookieSettingsButtons[1].classList.add("btn-web-cookie");
  cookieSettingsButtons[0].classList.add("btn-light-cookie");
})

cookieSettingsButtons[0].addEventListener('click', function(){
  cookieSettingsButtons[1].classList.remove("btn-web-cookie");
  cookieSettingsButtons[0].classList.remove("btn-light-cookie");
  cookieSettingsButtons[0].classList.add("btn-web-cookie");
  cookieSettingsButtons[1].classList.add("btn-light-cookie");
})
///////////////////////////////////////////////////////////////

cookieSettingsButtons[3].addEventListener('click', function(){
  cookieSettingsButtons[2].classList.remove("btn-web-cookie");
  cookieSettingsButtons[3].classList.remove("btn-light-cookie");
  cookieSettingsButtons[3].classList.add("btn-web-cookie");
  cookieSettingsButtons[2].classList.add("btn-light-cookie");
})

cookieSettingsButtons[2].addEventListener('click', function(){
  cookieSettingsButtons[3].classList.remove("btn-web-cookie");
  cookieSettingsButtons[2].classList.remove("btn-light-cookie");
  cookieSettingsButtons[2].classList.add("btn-web-cookie");
  cookieSettingsButtons[3].classList.add("btn-light-cookie");
})

////////////////////////////////////////////
///cokie cookieSettings cancel clicked
///////////////////////////////////////////
cookieSettingsButtons[5].addEventListener('click', function(){
  cookieSettings.style.display = "none";
  cookiePop.style.display = "flex";
})
