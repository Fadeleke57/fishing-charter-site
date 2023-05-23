//Get elements from the DOM
const animated = document.querySelectorAll(".animate");

animated.forEach(animate => {
  //Variable that tracks if the animations have been activated
  let activated = false;
  //Get the second class from each animated element
  const animation = animate.classList[1];
  //Remove all animations
  animate.classList.remove(animation);
  //Add scroll event to the page
  window.addEventListener("scroll", () => { 
    /*If the page is scrolled to the animated element 
    element and the animations are not activated*/
    if(
      scrollY > animate.offsetTop - window.innerHeight / 1.5 
      && activated === false
    ) {
      //Fire the animation
      animate.classList.add(animation);
      //Set activated to true
      activated = true;
    /*If the page is scrolled back enough to 
    hide the animated element from view*/
    } else if(
        scrollY < animate.offsetTop - window.innerHeight 
        && activated === true
      ) {
      //Remove all animations
      animate.classList.remove(animation);
      //Set activated to false
      activated = false;
    }
  });
});