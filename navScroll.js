//Get elements for the navbar from the DOM
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelectorAll(".menu ul a");

//Add click event to the menu button
menuBtn.addEventListener("click", () => {
  //Toggle the menu open class
  menu.classList.toggle("menu-open");
});

//Add a scroll event to the window
window.addEventListener("scroll", () => {
  //If the page is scrolled over 50 px
  if(scrollY > 50) {
    //Add the navbar active class
    navbar.classList.add("navbar-active");
  } else {
    //Remove the navbar active class
    navbar.classList.remove("navbar-active");
  }
});


