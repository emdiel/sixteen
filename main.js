const navigation = document.getElementById('nav-holder');
const burgerMenu = document.getElementById('burger');
const logo = document.getElementById('mylogo');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

let state = 0;

const clickMenu = () => {
  
  if (state == 1) {
    
    burgerMenu.src = "active-menu.png";
    logo.style.display = "none";
    navigation.style.display = "flex"
    nav1.style.marginLeft = "1rem";
    
    nav1.style.fontSize = "16px";
    nav2.style.fontSize = "16px";
    nav3.style.fontSize = "16px";
    state = 0;
    
  } else {
    
    burgerMenu.src = "menu.png";
    logo.style.display = "";
    navigation.style.display = "";
    nav1.style.marginLeft = "";
    
    nav1.style.fontSize = "";
    nav2.style.fontSize = "";
    nav3.style.fontSize = "";    
    state = 1;
    
  }
  
}

const contactBtn = () => {
  alert ("Contact me on messenger:)");
}
