// Dark Mode the page when i click on dark mode button
let body = document.querySelector('body')
let darkModeButton = document.querySelector(".dark-mode");
let secondSection = document.querySelector(".about-me");
let scrollButton = document.querySelector(".scroll-top");

darkModeButton.addEventListener('click', () => {
  if(darkModeButton.classList.contains('light-active')){
    darkModeButton.classList.remove('light-active')
    body.classList.remove('light-mode')
  }
  else {
    darkModeButton.classList.add('light-active')
    body.classList.add('light-mode')  
  }

// toggle class about dark Mode Button
  (darkModeButton.classList.contains("active")) ? darkModeButton.classList.remove("active") : darkModeButton.classList.add("active")
})

// show dark Mode Button and scroll Button
function showDarkMode(){
  if(window.scrollY >= secondSection.scrollHeight){
    darkModeButton.style.left = "25px";
    scrollButton.style.right = "25px";
  }
  else {
    darkModeButton.style.left = "-100%";
    scrollButton.style.right = "-100%";
  }
}

//  Typed on header 
var typed = new Typed('.typed .welcome', {
  strings: ['Youssef Raafat', 'a Front End Developer'],
  typeSpeed: 50,
  backSpeed:50,
  backDelay: 2000,
  loop: true
});

// start random background header
let header = document.querySelector('header .picture');
let imgArray = ['header_01.jpg', 'header_02.avif','header_03.avif']; 

let randomNumber = 1;
let animateNumber = 2;

function randmizeImgs() {
  backgroundInterval = setInterval(() => {
  header.style.backgroundImage = 'url("./images/' + imgArray[randomNumber] +'")'
  header.style.animationName = 'headerBackground_' + animateNumber
  if(randomNumber == imgArray.length - 1){
    randomNumber = 0
    animateNumber = 1
  }
  else {
    randomNumber++;
    animateNumber++;
  }
  }, 5000);
}
randmizeImgs()

// Start Buttons in header
let buttonsLeft = document.querySelectorAll("header ul .left li");
let buttonsRight = document.querySelectorAll("header ul .right li");
let margin = 100;

buttonsLeft.forEach(e => {
  e.style.marginLeft = margin + 'px';
  margin += 120;
})

margin = 320;
buttonsRight.forEach(e => {
  e.style.marginRight = margin + 'px';
  margin -= 100;
})

// Start calc Age and copyright year
let myAge = document.querySelector('.about-box .my-age')
let currentYear = document.querySelector('footer .current-year')

myAge.innerHTML = new Date().getFullYear() - 2001
currentYear.innerHTML = new Date().getFullYear()

// Certificates
let AllCerti = document.querySelectorAll('.certi .slide-track .slide img')
let overload = document.querySelector('.certi .overload')

AllCerti.forEach(currentCerti => {
  let myImg = ""
  currentCerti.addEventListener('click', () => {
    overload.classList.add('active')
    myImg = currentCerti.cloneNode()
    overload.appendChild(myImg)
    overload.onclick = () => {
      overload.classList.remove('active')
      myImg = ""
    }
  })
})

// on scroll
window.onscroll = function(){
  showDarkMode()
}

