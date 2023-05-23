//Get the video containers from the DOM
const containers = document.querySelectorAll("header > div");

//Loop through the containers
containers.forEach(container => {

    container.querySelector('video').play();
  
});
