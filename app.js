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

  if(templateParams.number.length < 11 || templateParams.fullname == "" || templateParams.age == ""){
  
    alert("لطفا تمام فیلد هارا پر کنید")
  
  }else{
  
    emailjs.send('service_z9svkil', 'template_mvh6wm7', templateParams)
    .then(function(response) {
    
      console.log('SUCCESS!', response.status, response.text);
      alert("خیلی ممنون. بزودی با شما تماس میگیریم. به امید دیدار!")
    
    },function(error) {
    
      console.log('FAILED...', error);
      alert("متاسفانه مشکلی رخ داد. چند ثانیه دیگر دوباره امتحان کنید")
    
    });
  
  }
}

function sendQues(){

  let templateParams = {
    fullname: document.getElementById("fullNameQues").value,
    number: document.getElementById("numberQues").value,
    question: document.getElementById("question").value
  };

  if(templateParams.fullname == "" || templateParams.question == "" || templateParams.number.length < 11){

    alert("لطفا تمام فیلد ها را پر کنید")

  }else{

    emailjs.send('service_z9svkil', 'template_ecz0uum', templateParams)
    .then(function(response) {

      console.log('SUCCESS!', response.status, response.text);
      alert("بزودی با شما در جهت پاسخ به سوالتان تماس گرفته خواهد شد.")

    }, function(error) {
    
      console.log('FAILED...', error);
      alert("متاسفانه مشکلی رخ داد. چند ثانیه دیگر دوباره امتحان کنید")
    
    });

  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("navactive");
navMenu.classList.toggle("navactive");
});

document.querySelectorAll(".nav-link").forEach((link) =>

  link.addEventListener("click", () => {
  hamburger.classList.remove("navactive");
  navMenu.classList.remove("navactive");
  })

);