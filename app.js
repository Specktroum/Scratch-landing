
function sendMail(){
    let templateParams = {
      fullname: document.getElementById("fullName").value,
      number: document.getElementById("number").value,
      age: document.getElementById("age").value
    };
  
  emailjs.send('service_ueakwmi', 'template_yn8qca7', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("خیلی ممنون. بزودی با شما تماس میگیریم. به امید دیدار!")
      }, function(error) {
        console.log('FAILED...', error);
        alert("متاسفانه مشکلی رخ داده. بزودی مشکل رو حل میکنیم")
      });
}


let preRegisterPopUp = document.getElementById("popUp");
let popUpCloser = document.getElementById("closer");
let popUpBox = document.getElementById("popUpBox");

preRegisterPopUp.addEventListener("click", e =>{
  
  popUpBox.classList.toggle("inActive");
  popUpBox.classList.add("aactive");

  e.preventDefault();
});

popUpCloser.addEventListener("click", e =>{
  
  popUpBox.classList.add("inActive");

  e.preventDefault();
});

if(popUpBox.classList.contains("aactive")){
  document.body.addEventListener("click", e=>{
    
    popUpBox.classList.remove("inActive")
    
    e.preventDefault()
  })
}