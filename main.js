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

/////////////////////////////////////////////////////////////////////////////
//reworking
///////////////////////////////////////////////////////////////////////////
// //cookie pop-up
// const cookiePop = document.querySelector(".cookie-content");
// const changeCookieSettings = document.querySelector(".btn-settings");
// const acceptCookie = document.querySelectorAll(".btn-accept");
// const cookieSettings = document.querySelector(".cookie-settings");
//
// //check settings clicked
// changeCookieSettings.addEventListener("click", function(){
//   cookiePop.style.display = "none";
//   cookieSettings.style.display = "flex"
// });
//
// //check accept clicked
// acceptCookie[0].addEventListener("click", function() {
//   cookiePop.style.display = "none";
//   localStorage.setItem("cookieAccepted", "yes")
// });
// acceptCookie[1].addEventListener("click", function() {
//   cookieSettings.style.display = "none";
//   localStorage.setItem("cookieAccepted", "yes")
// });
//
// ///check if cookie accepted or not
//
// setTimeout(function (){
//     let cookieAccepted = localStorage.getItem("cookieAccepted")
//     if (cookieAccepted != "yes"){
//         cookiePop.style.display = "flex";
//     }
// }, 1000)
//
// //getting all buttons in cookie settings block
// const cookieSettingsButtons = document.querySelectorAll(".cookies-container  button");
//
// //set active buttons
// cookieSettingsButtons[0].classList.add("btn-web-cookie");
// cookieSettingsButtons[1].classList.add("btn-light-cookie");
// cookieSettingsButtons[2].classList.add("btn-web-cookie");
// cookieSettingsButtons[3].classList.add("btn-light-cookie");
// //////////////////////////
// //table cookieSettingsButtons
// /////////////////////////////
//
//
// cookieSettingsButtons[5].classList.add("btn-web-cookie");
// cookieSettingsButtons[6].classList.add("btn-light-cookie");
// cookieSettingsButtons[7].classList.add("btn-web-cookie");
// cookieSettingsButtons[8].classList.add("btn-light-cookie");
// cookieSettingsButtons[9].classList.add("btn-web-cookie");
// cookieSettingsButtons[10].classList.add("btn-light-cookie");
// cookieSettingsButtons[11].classList.add("btn-web-cookie");
// cookieSettingsButtons[12].classList.add("btn-light-cookie");
// cookieSettingsButtons[13].classList.add("btn-web-cookie");
// cookieSettingsButtons[14].classList.add("btn-light-cookie");
// cookieSettingsButtons[15].classList.add("btn-web-cookie");
// cookieSettingsButtons[16].classList.add("btn-light-cookie");
//
// ////////
// // table btn switch
// ///////
//
// cookieSettingsButtons[6].addEventListener('click', function(){
//   cookieSettingsButtons[5].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[6].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[6].classList.add("btn-web-cookie");
//   cookieSettingsButtons[5].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[8].addEventListener('click', function(){
//   cookieSettingsButtons[7].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[8].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[8].classList.add("btn-web-cookie");
//   cookieSettingsButtons[7].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[10].addEventListener('click', function(){
//   cookieSettingsButtons[9].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[10].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[10].classList.add("btn-web-cookie");
//   cookieSettingsButtons[9].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[12].addEventListener('click', function(){
//   cookieSettingsButtons[11].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[12].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[12].classList.add("btn-web-cookie");
//   cookieSettingsButtons[11].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[14].addEventListener('click', function(){
//   cookieSettingsButtons[13].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[14].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[14].classList.add("btn-web-cookie");
//   cookieSettingsButtons[13].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[16].addEventListener('click', function(){
//   cookieSettingsButtons[15].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[16].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[16].classList.add("btn-web-cookie");
//   cookieSettingsButtons[15].classList.add("btn-light-cookie");
// })
// ////////^^^^^^^^^^^^^^^^^^^//////////////////
// ////////
// /////////////////////////////////////////////
// cookieSettingsButtons[5].addEventListener('click', function(){
//   cookieSettingsButtons[6].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[5].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[5].classList.add("btn-web-cookie");
//   cookieSettingsButtons[6].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[7].addEventListener('click', function(){
//   cookieSettingsButtons[8].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[7].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[7].classList.add("btn-web-cookie");
//   cookieSettingsButtons[8].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[9].addEventListener('click', function(){
//   cookieSettingsButtons[10].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[9].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[9].classList.add("btn-web-cookie");
//   cookieSettingsButtons[10].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[11].addEventListener('click', function(){
//   cookieSettingsButtons[12].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[11].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[11].classList.add("btn-web-cookie");
//   cookieSettingsButtons[12].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[13].addEventListener('click', function(){
//   cookieSettingsButtons[14].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[13].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[13].classList.add("btn-web-cookie");
//   cookieSettingsButtons[14].classList.add("btn-light-cookie");
// })
// cookieSettingsButtons[15].addEventListener('click', function(){
//   cookieSettingsButtons[16].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[15].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[15].classList.add("btn-web-cookie");
//   cookieSettingsButtons[16].classList.add("btn-light-cookie");
// })
// ///////////////////////////////
// ///
// ///////////////////////////////
// cookieSettingsButtons[18].classList.add("btn-web-cookie");
// //
//
// /////////////////////////////////////////////////////////////
// //switch
// ///////////////////////////////////////////////////////////
// cookieSettingsButtons[1].addEventListener('click', function(){
//   cookieSettingsButtons[0].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[1].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[1].classList.add("btn-web-cookie");
//   cookieSettingsButtons[0].classList.add("btn-light-cookie");
// })
//
// cookieSettingsButtons[0].addEventListener('click', function(){
//   cookieSettingsButtons[1].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[0].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[0].classList.add("btn-web-cookie");
//   cookieSettingsButtons[1].classList.add("btn-light-cookie");
// })
// ///////////////////////////////////////////////////////////////
//
// cookieSettingsButtons[3].addEventListener('click', function(){
//   cookieSettingsButtons[2].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[3].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[3].classList.add("btn-web-cookie");
//   cookieSettingsButtons[2].classList.add("btn-light-cookie");
// })
//
// cookieSettingsButtons[2].addEventListener('click', function(){
//   cookieSettingsButtons[3].classList.remove("btn-web-cookie");
//   cookieSettingsButtons[2].classList.remove("btn-light-cookie");
//   cookieSettingsButtons[2].classList.add("btn-web-cookie");
//   cookieSettingsButtons[3].classList.add("btn-light-cookie");
// })
//
// ////////////////////////////////////////////
// ///cokie cookieSettings cancel clicked
// ///////////////////////////////////////////
// cookieSettingsButtons[17].addEventListener('click', function(){
//   cookieSettings.style.display = "none";
//   cookiePop.style.display = "flex";
// })
//
//
// /////////////////////////////////////////////////
// //table show/hide
// /////////////////////////////////////////////////
// const cookieSettingsTable = document.querySelector("table");
//
// cookieSettingsButtons[4].addEventListener('click', function(){
//   console.log("I clicked")
//   if (cookieSettingsTable.style.display === "table") {
//     cookieSettingsTable.style.display = "none";
//     cookieSettingsButtons[4].innerHTML = "Show detailed preferences";
//   }else {
//     cookieSettingsTable.style.display = "table";
//     cookieSettingsButtons[4].innerHTML = "Hide detailed preferences";
//   }
// })
