
//animated hamburger icon
// function hamFunction(x) {
//
//   x.classList.toggle("change");
//
//   var s = document.getElementById('sideNav');
//   var b = document.body;
//   var m = document.getElementById('main-container');
//
//   // s.classList.toggle("side-nav-open");
//   // b.classList.toggle("side-nav-open_body");
//   s.addEventListener('click', function() {
//     console.log("click")
//     s.classList.toggle("side-nav-open");
//     b.classList.toggle("side-nav-open_body");
//   });






    // if (s.style.display === "block"){
    //  s.style.display = "none";
    //  b.style.overflow = "visible";
    //  b.style.left = "0";
    //  m.style.opacity = "1";
    //
    // } else {
    //   s.style.display = "block";
    //   b.style.overflow = "hidden";
    //   b.style.left = "-275px";
    //   m.style.opacity = "0.3";
    //
    //
    // }





// };
const hamClicked = document.getElementById("ham-button");
var s = document.getElementById('sideNav');
const b = document.body;

hamClicked.addEventListener("click", function() {
  console.log("clicked")
  s.classList.toggle("side-nav-open");
  b.classList.toggle("side-nav-open_body");

});

//////////////////////////////////////
//body clicked
/////////////////////////////////////

            // const bodyClicked = document.getElementById("main-container");
            //
            // bodyClicked.addEventListener("click", function() {
            //
            //   s.classList.toggle("side-nav-open");
            //   b.classList.toggle("side-nav-open_body");
            //
            // });

// var m = document.getElementById('main-container');
// var s = document.getElementById('sideNav');
//
//
// m.addEventListener('click', function() {
//
//   s.classList.toggle("side-nav-open");
//   m.classList.toggle("side-nav-open_body");
//
// });

// function hamFunction(x){
//   //add class
//   x.classList.toggle("change");
//
//   // open/close navigation
//   var n = document.getElementById('sideNav');
//
//   n.classList.toggle("vis-on");
//
// }
// const openNav = document.getElementById('main-container');
// var s = document.getElementById('sideNav');
// var b = document.body;
// openNav.addEventListener('click', function() {
//   s.classList.toggle("side-nav-open");
//   b.classList.toggle("side-nav-open_body");
// })
