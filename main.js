const burgerMenu = document.getElementById('burger');
const logo = document.getElementById('mylogo');
const navigation = document.getElementById('nav-holder');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

let state = 0;

function clickMenu () {
  
  
  if (state == 1) {
    burgerMenu.src = "active-menu.png";
    logo.style.display = "none";
    navigation.style.display = "flex"
    nav1.style.padding = "1rem 0rem 0rem 1rem";
    nav2.style.padding = "1rem 0rem";
    nav3.style.padding = "1rem 0rem";
    nav1.style.fontSize = "16px";
    nav2.style.fontSize = "16px";
    nav3.style.fontSize = "16px";
    state = 0;
  } else {
    burgerMenu.src = "menu.png";
    logo.style.display = "";
    navigation.style.display = "";
    nav1.style.padding = "";
    nav2.style.padding = "";
    nav3.style.padding = ""; 
    
    nav1.style.fontSize = "";
    nav2.style.fontSize = "";
    nav3.style.fontSize = "";    
    state = 1;
  }
  
}
