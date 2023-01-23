const cookiePop = document.querySelector(".cookie-content");
const acceptCookie = document.querySelectorAll(".btn-accept");


let cname = "name";
const cvalue = "15155156";
const exdays = 30;

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

acceptCookie[0].addEventListener("click", function () {
  setCookie(cname, cvalue, exdays);
  cookiePop.style.display = "none";
});





function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//check cookie exist?
function checkCookie() {
  let user = getCookie("name");
  if (user != "") {
    cookiePop.style.display = "none";
  } else {
     cookiePop.style.display = "flex";
  }
}



const changeCookieSettings = document.querySelector(".btn-settings");
const cookieSettings = document.querySelector(".cookie-settings");
//check settings clicked
changeCookieSettings.addEventListener("click", function(){
  cookiePop.style.display = "none";
  cookieSettings.style.display = "flex"
});

//getting all buttons in cookie settings block
const cookieSettingsButtons = document.querySelectorAll(".cookies-container  button");

//set active buttons
cookieSettingsButtons[0].classList.add("btn-web-cookie");
cookieSettingsButtons[1].classList.add("btn-light-cookie");
cookieSettingsButtons[2].classList.add("btn-web-cookie");
cookieSettingsButtons[3].classList.add("btn-light-cookie");
//////////////////////////
//table cookieSettingsButtons
/////////////////////////////


cookieSettingsButtons[5].classList.add("btn-web-cookie");
cookieSettingsButtons[6].classList.add("btn-light-cookie");
cookieSettingsButtons[7].classList.add("btn-web-cookie");
cookieSettingsButtons[8].classList.add("btn-light-cookie");
cookieSettingsButtons[9].classList.add("btn-web-cookie");
cookieSettingsButtons[10].classList.add("btn-light-cookie");
cookieSettingsButtons[11].classList.add("btn-web-cookie");
cookieSettingsButtons[12].classList.add("btn-light-cookie");
cookieSettingsButtons[13].classList.add("btn-web-cookie");
cookieSettingsButtons[14].classList.add("btn-light-cookie");
cookieSettingsButtons[15].classList.add("btn-web-cookie");
cookieSettingsButtons[16].classList.add("btn-light-cookie");

////////
// table btn switch
///////

cookieSettingsButtons[6].addEventListener('click', function(){
  cookieSettingsButtons[5].classList.remove("btn-web-cookie");
  cookieSettingsButtons[6].classList.remove("btn-light-cookie");
  cookieSettingsButtons[6].classList.add("btn-web-cookie");
  cookieSettingsButtons[5].classList.add("btn-light-cookie");
})
cookieSettingsButtons[8].addEventListener('click', function(){
  cookieSettingsButtons[7].classList.remove("btn-web-cookie");
  cookieSettingsButtons[8].classList.remove("btn-light-cookie");
  cookieSettingsButtons[8].classList.add("btn-web-cookie");
  cookieSettingsButtons[7].classList.add("btn-light-cookie");
})
cookieSettingsButtons[10].addEventListener('click', function(){
  cookieSettingsButtons[9].classList.remove("btn-web-cookie");
  cookieSettingsButtons[10].classList.remove("btn-light-cookie");
  cookieSettingsButtons[10].classList.add("btn-web-cookie");
  cookieSettingsButtons[9].classList.add("btn-light-cookie");
})
cookieSettingsButtons[12].addEventListener('click', function(){
  cookieSettingsButtons[11].classList.remove("btn-web-cookie");
  cookieSettingsButtons[12].classList.remove("btn-light-cookie");
  cookieSettingsButtons[12].classList.add("btn-web-cookie");
  cookieSettingsButtons[11].classList.add("btn-light-cookie");
})
cookieSettingsButtons[14].addEventListener('click', function(){
  cookieSettingsButtons[13].classList.remove("btn-web-cookie");
  cookieSettingsButtons[14].classList.remove("btn-light-cookie");
  cookieSettingsButtons[14].classList.add("btn-web-cookie");
  cookieSettingsButtons[13].classList.add("btn-light-cookie");
})
cookieSettingsButtons[16].addEventListener('click', function(){
  cookieSettingsButtons[15].classList.remove("btn-web-cookie");
  cookieSettingsButtons[16].classList.remove("btn-light-cookie");
  cookieSettingsButtons[16].classList.add("btn-web-cookie");
  cookieSettingsButtons[15].classList.add("btn-light-cookie");
})
////////^^^^^^^^^^^^^^^^^^^//////////////////
////////
/////////////////////////////////////////////
cookieSettingsButtons[5].addEventListener('click', function(){
  cookieSettingsButtons[6].classList.remove("btn-web-cookie");
  cookieSettingsButtons[5].classList.remove("btn-light-cookie");
  cookieSettingsButtons[5].classList.add("btn-web-cookie");
  cookieSettingsButtons[6].classList.add("btn-light-cookie");
})
cookieSettingsButtons[7].addEventListener('click', function(){
  cookieSettingsButtons[8].classList.remove("btn-web-cookie");
  cookieSettingsButtons[7].classList.remove("btn-light-cookie");
  cookieSettingsButtons[7].classList.add("btn-web-cookie");
  cookieSettingsButtons[8].classList.add("btn-light-cookie");
})
cookieSettingsButtons[9].addEventListener('click', function(){
  cookieSettingsButtons[10].classList.remove("btn-web-cookie");
  cookieSettingsButtons[9].classList.remove("btn-light-cookie");
  cookieSettingsButtons[9].classList.add("btn-web-cookie");
  cookieSettingsButtons[10].classList.add("btn-light-cookie");
})
cookieSettingsButtons[11].addEventListener('click', function(){
  cookieSettingsButtons[12].classList.remove("btn-web-cookie");
  cookieSettingsButtons[11].classList.remove("btn-light-cookie");
  cookieSettingsButtons[11].classList.add("btn-web-cookie");
  cookieSettingsButtons[12].classList.add("btn-light-cookie");
})
cookieSettingsButtons[13].addEventListener('click', function(){
  cookieSettingsButtons[14].classList.remove("btn-web-cookie");
  cookieSettingsButtons[13].classList.remove("btn-light-cookie");
  cookieSettingsButtons[13].classList.add("btn-web-cookie");
  cookieSettingsButtons[14].classList.add("btn-light-cookie");
})
cookieSettingsButtons[15].addEventListener('click', function(){
  cookieSettingsButtons[16].classList.remove("btn-web-cookie");
  cookieSettingsButtons[15].classList.remove("btn-light-cookie");
  cookieSettingsButtons[15].classList.add("btn-web-cookie");
  cookieSettingsButtons[16].classList.add("btn-light-cookie");
})
///////////////////////////////
///
///////////////////////////////
cookieSettingsButtons[18].classList.add("btn-web-cookie");
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
cookieSettingsButtons[17].addEventListener('click', function(){
  cookieSettings.style.display = "none";
  cookiePop.style.display = "flex";
})


/////////////////////////////////////////////////
//table show/hide
/////////////////////////////////////////////////
const cookieSettingsTable = document.querySelector("table");

cookieSettingsButtons[4].addEventListener('click', function(){

  if (cookieSettingsTable.style.display === "table") {
    cookieSettingsTable.style.display = "none";
    cookieSettingsButtons[4].innerHTML = "Show detailed preferences";
  }else {
    cookieSettingsTable.style.display = "table";
    cookieSettingsButtons[4].innerHTML = "Hide detailed preferences";
  }
})

acceptCookie[18].addEventListener("click", function () {
  setCookie(cname, cvalue, exdays);
  cookiePop.style.display = "none";
});
