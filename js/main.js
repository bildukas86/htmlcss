const  hamButton = document.getElementById('ham-button');
const sideNav = document.getElementById('sideNav')
const mainContainer = document.getElementById('container');
const overlay = document.getElementById("overlay");
const headerUpDown = document.getElementById('header');

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


/////////////////////////////////////////////////////////////
//search button toggle .s-button-md .s-input-md
////////////////////////////////////////////////////////////

const searchInputToggle = document.getElementById('s-input-md-input');
const searchButton = document.getElementById('s-button-md-button');
const hideButtons = document.querySelectorAll('.hide-sm');


searchButton.addEventListener('click', function () {
  // searchInputToggle.classList.toggle("s-input-md-toggle");
  const mq = window.matchMedia( "(min-width: 992px)" );
  const maxq = window.matchMedia( "(max-width: 1200px)" );

  if (mq.matches && maxq.matches) {
    searchInputToggle.classList.toggle("s-input-md-toggle");
    if(searchInputToggle.classList != "s-input-md"){
      hideButtons[0].classList.add("s-input-md");
      hideButtons[1].classList.add("s-input-md");
    }else {
      hideButtons[0].classList.remove("s-input-md");
      hideButtons[1].classList.remove("s-input-md")
    }
  }

});














/////////////////////////////////////////////////////////////////////
////
///////////////////////////////////////////////////////////////////
// var scrollableElement = document.getElementById("main-container"); //document.getElementById('scrollableElement');
//
// // //
// scrollableElement.addEventListener('scroll', checkScrollDirection);
// // //
// //
// // //track scroll up or down
// let position = 0;
// const noClass = document.querySelector('.side-nav');
//
// // sticky header
// function checkScrollDirection(event) {
//   if (checkScrollDirectionIsUp(event) || noClass.classList.contains("side-nav-open") === true ) {
//     position = 1;
//     headerUpDown.classList.add("sticky");
//     headerUpDown.classList.remove("stickyDown");
//
//   } else {
//
//     position = 0;
//     headerUpDown.classList.remove("sticky");
//     headerUpDown.classList.add("stickyDown");
//   }
// }
//
// function checkScrollDirectionIsUp(event) {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0;
//   }
//   return event.deltaY < 0;
//
// }


let position = 0;
const scrolledElement = document.querySelector('#main-container');

scrolledElement.addEventListener('scroll', (event) => {

      let scrolled = scrolledElement.scrollTop;
      console.log(scrolled);
      if (scrolled  < position) {
            console.log("up");

            headerUpDown.classList.add("sticky");
            headerUpDown.classList.remove("stickyDown");
      } else {
            console.log("down");

            headerUpDown.classList.remove("sticky");
            headerUpDown.classList.add("stickyDown");
      }
      position = scrolled;
 });
////////////////////////////////////////////////////////////
//sideNav hover sections
///////////////////////////////////////////////////////////
const listOne = document.querySelectorAll(".side-main-li2");


$(".side-main-li2").hover(function(){
  $(this).css("background-color", "hsla(0,0%,100%,.05)");
  }, function(){
  $(this).css("background-color", "#333645");
});
