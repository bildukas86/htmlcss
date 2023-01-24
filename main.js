const  hamButton = document.getElementById('ham-button');
const sideNav = document.getElementById('sideNav')
const mainContainer = document.getElementById('main-container');
const overlay = document.getElementById("overlay");
const headerUpDown = document.getElementById('header')

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


var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);


//track scroll up or down
let position = 0;
const noClass = document.querySelector('.side-nav');

//sticky header
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event) || noClass.classList.contains("side-nav-open") === true ) {
    position = 1;
    headerUpDown.classList.add("sticky");
    headerUpDown.classList.remove("stickyDown");
  } else {

    position = 0;
    headerUpDown.classList.remove("sticky");
    headerUpDown.classList.add("stickyDown");
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
