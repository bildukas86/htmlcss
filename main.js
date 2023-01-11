const  hamButton = document.getElementById('ham-button');
const sideNav = document.getElementById('sideNav')
const mainContainer = document.getElementById('main-container');

hamButton.addEventListener('click', function () {
  // console.log("I clicked")
    hamButton.classList.toggle("change");
    if(sideNav.style.display === "block"){
      sideNav.style.display = "none";
      console.log("visible");
    }else {
      sideNav.style.display = "block";
    }


})


///////////////////////////////////////////////////////////////////////////
//old
////////////////////////
//animated hamburger icon
// function hamFunction(x) {
//
//   x.classList.toggle("change");
//
//   var s = document.getElementById('sideNav');
//   var b = document.body;
//   var m = document.getElementById('main-container');
//
//
//     if (s.style.display === "block"){
//      s.style.display = "none";
//      b.style.overflow = "visible";
//      b.style.left = "0";
//      m.style.opacity = "1";
//
//     } else {
//       s.style.display = "block";
//       b.style.overflow = "hidden";
//       b.style.left = "-275px";
//       m.style.opacity = "0.3";
//
//
//     }
// }
/////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////
