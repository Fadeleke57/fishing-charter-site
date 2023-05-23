//Get elements from the DOM
const modalBtn = document.querySelector('.yt-modal-btn');
const modal = document.querySelector('.modal-bg');

//Add click event to the button
modalBtn.addEventListener('click', () => {
  //Add youtube embed to the HTML
  modal.innerHTML = `
  <div class="modal">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/mHpRQCoIPSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  `;
  //Show the modal
  modal.style.display = "flex";
  //smooth opacity transition
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 50);
});

//Add click event to the modal bg
modal.addEventListener('click', () => {
  //Remove youtube embed to the HTML
  /*This is a simple way to stop 
  the video from playing
  when you close the modal*/
  modal.innerHTML = '';
  //smooth opacity transition
  modal.style.opacity = "0";
  setTimeout(() => {
    //Hide the modal when the transition is done
    modal.style.display = "none";
  }, 450);
});