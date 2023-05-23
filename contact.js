//Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".supremebutton");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");
const subjectInput = document.querySelector("#subject")

//Get needed data from email JS
const publicKey = "dREOtnw4xvKr92AYT";
const serviceID = "service_7donpps";
const templateID = "template_xqbn2lb";

//Initialize email JS with public key
emailjs.init(publicKey);

//Add submit event to the form
contactForm.addEventListener("submit", e => {
  //Prevent form default behaviour
  e.preventDefault();
  //Change button text
  submitBtn.innerText = "Just A Moment...";
  //Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    subject: subjectInput.value
  }
  /*Send the email 
  (Add service, template ID and input field values)*/
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      //Change button text
      submitBtn.innerText = "Message Sent Successfully";
      //Clear out all input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
      subjectInput.value = "";
    }, (error) => {
        //Console log the error
        console.log(error);
        //Change button text
        submitBtn.innerText = "Something went wrong";
    });
});


