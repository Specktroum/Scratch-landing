let preRegisterPopUp = document.getElementById("popUp");
let popUpCloser = document.getElementById("closer");
let askUsCloser = document.getElementById("askUsCloser");
let popUpBox = document.getElementById("popUpBox");
let askUs = document.getElementById("askUs");
let askUsBox = document.getElementById("askUsBox");

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
askUs.addEventListener("click", e =>{
  
  askUsBox.classList.toggle("inActive");
  askUsBox.classList.add("aactive");

  e.preventDefault();
});
askUsCloser.addEventListener("click", e =>{
  
  askUsBox.classList.add("inActive");

  e.preventDefault();
});
if(askUsBox.classList.contains("aactive")){
  document.body.addEventListener("click", e=>{
    
    askUsBox.classList.remove("inActive")
    
    e.preventDefault()
  })
}

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
        alert("متاسفانه مشکلی رخ داد. چند ثانیه دیگر دوباره امتحان کنید")
      });
}

function sendQues(){
  let templateParams = {
    fullname: document.getElementById("fullNameQues").value,
    number: document.getElementById("numberQues").value,
    question: document.getElementById("question").value
  };

emailjs.send('service_ueakwmi', 'template_nbfpxri', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("بزودی با شما در جهت پاسخ به سوالتان تماس گرفته خواهد شد.")
    }, function(error) {
      console.log('FAILED...', error);
      alert("متاسفانه مشکلی رخ داد. چند ثانیه دیگر دوباره امتحان کنید")
    });
}

