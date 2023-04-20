$(function () {
   // Nice Scroll
   // $("body").niceScroll({
   //    cursorcolor: "#00b894", // change cursor color in hex
   //    cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
   //    cursorHeight: "10px", // cursor width in pixel (you can also write "5px")
   //    zindex: 9999,
   //    cursorborder: "none", // css definition for cursor borde

   // });

// ####################################################################################################

// Dark Mode
$(".dark-mode").click(function () {
      if ($(this).hasClass("light-active")) {
        $(this).removeClass("light-active");
        $('body').removeClass('light-mode')
      } else {
        $(this).addClass("light-active");
        $('body').addClass('light-mode')    
  }
});

// ####################################################################################################

// window loading
$(window).load(function () {
  $(".overlay-loading .spinner").fadeOut(1000, function () {
      $(this)
      .parent()
      .fadeOut(200, function () {
        $(this).remove();
      });
  });
});

$(window).scroll(function () {
  $("section, nav, header").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - 150) {
    var blockId = $(this).attr("id");

    $("a").parent().removeClass("active");

    $('li a[data-scroll="' + blockId + '"]')
        .parent()
        .addClass("active");
    }
  });

});

// ####################################################################################################

// Start Typed
var typed = new Typed(".welcome", {
  strings: ["Welcome, Iam"],
  typeSpeed: 50,
  startDelay: 2000, // time the typing
  backSpeed: 20,    // time the return
  backDelay: 2000, // time the display
  loop: false,
  // loopCount: 5, //
  showCursor: false, // REMOVE cursorChar 
  // cursorChar: " .",
  autoInsertCss: true,
});

var typed02 = new Typed(".name", {
  strings: ["Youssef Raafat"],
  typeSpeed: 50,
  startDelay: 3050, // time the typing
  backSpeed: 20,    // time the return
  backDelay: 2000, // time the display
  loop: false,
  // loopCount: 5, //
  showCursor: false, // REMOVE cursorChar 
  // cursorChar: " .",
  autoInsertCss: true,
});


var typed03 = new Typed(".job", {
  strings: ["Front End Developer", "Web Designer"],
  typeSpeed: 50,
  color: "#f5f5f5",
  backDelay: 2500, 
  startDelay: 4000, 
  backSpeed: 2, 
  loop: true, 
  showCursor: true, 
  cursorChar: " |",
  autoInsertCss: false,
});

// ####################################################################################################
  // Start Certificates
  $(".certi .slide-track .slide img").click(function(){
    let myImg = $(this).clone();
    $(".certi .overload").empty().append(myImg)
    $(".certi .overload").fadeToggle();
  })

  $(".certi .overload").click(function(){
    $(this).hide();
  })

// close
});

// ---------------------------------------------
// start js
let secondSection = document.querySelector(".about-me");
let darkModeButton = document.querySelector(".dark-mode");
let scrollButton = document.querySelector(".scroll-top");

// show dark Mode Button and scroll Button
function showDarkmode(){
  if(window.scrollY >= secondSection.scrollHeight){
    darkModeButton.style.left = "25px";
    scrollButton.style.right = "25px";
  }
  else {
    darkModeButton.style.left = "-100%";
    scrollButton.style.right = "-100%";
  }
}

// toggle class about dark Mode Button
darkModeButton.onclick = function(){
  if(this.classList.contains("active")){
    this.classList.remove("active")
  }
  else {
    this.classList.add("active")
  }
}

// start random background header
let header = document.querySelector('header .picture');
let imgArray = ['header_01.jpg', 'header_02.avif','header_03.avif']; 

let randomNumber = 1;
let animateNumber = 2;
function randmizeimgs() {
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
randmizeimgs()

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

// Start About me
let aboutMe = document.querySelector('.about-me');
let aboutMeImage = document.querySelector('.about-me img');
let aboutMeHeading = document.querySelector('.about-me h2');
let aboutMeDesc = document.querySelector('.about-me .about-desc');

function animateAboutme(){
  if(window.scrollY < aboutMe.scrollHeight - 300){
    aboutMeImage.style.cssText = "transform: translateY(-100px); opacity: 0;"
    aboutMeHeading.style.cssText = "transform: translateX(-100px); opacity: 0;"
    aboutMeDesc.style.cssText = "transform: translateX(-100px); opacity: 0;"
  }
  else {
    aboutMeImage.style.cssText = "transform: translateY(0); opacity: 1;"
    aboutMeHeading.style.cssText = "transform: translateX(0); opacity: 1;"
    aboutMeDesc.style.cssText = "transform: translateX(0); opacity: 1;"
  }
}

// Start skills
function animateSkills(){
  let skills = document.querySelector('.skills');
  let skillsOffsetTop = skills.offsetTop;
  let skillsOuterHeight = skills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  let allSkills = document.querySelectorAll(".skills .skill-box .skill .progress");

  allSkills.forEach(skill => {
    if(windowScrollTop + 100 < skillsOffsetTop + skillsOuterHeight - windowHeight){
      skill.style.width = 0
    }
    else {
      skill.style.width = skill.dataset.progress
    }
  });
}

// Start Testimonials
// function animateTesti(){
//   let testi = document.querySelector('.testimonials');
//   let testiOffsetTop = testi.offsetTop;
//   let testiOuterHeight = testi.offsetHeight;
//   let WindowHeight = this.innerHeight;
//   let WindowScrollTop = this.pageYOffset;
  
//   let testiBoxOne = document.querySelector('.testimonials .testi-box.one');
//   let testiBoxTwo = document.querySelector('.testimonials .testi-box.two');
//   let testiBoxThree = document.querySelector('.testimonials .testi-box.three');

//   let testiBoxs = document.querySelectorAll('.testimonials .testi-box');


//   testiBoxs.forEach(element => {
//   if(WindowScrollTop < (testiOffsetTop + testiOuterHeight - 800) - WindowHeight){
//       testiBoxOne.style.cssText = "transform: translateY(70px); opacity: 0;"
//       testiBoxTwo.style.cssText = "transform: translateY(-70px); opacity: 0;"
//       testiBoxThree.style.cssText = "transform: translateY(70px); opacity: 0;"

//   }
//   else {
//       element.style.cssText = "transform: translateY(0); opacity: 1;"
//     }
//   });
//   console.log("WindowScrollTop: "  + WindowScrollTop)
//   console.log("testiOffsetTop: " + testiOffsetTop)
//   console.log("testiOuterHeight: " + testiOuterHeight)
//   console.log("WindowHeight: " + WindowHeight)
// }

// on scroll
window.onscroll = function(){
  showDarkmode()
  animateAboutme()
  animateSkills()
  // animateTesti()




}

















// let skillBox = document.querySelectorAll('.skills .skill-box');
// let progress = document.querySelectorAll('.skills .skill-box .progress');

// skillBox.forEach(element => {
//   if(window.innerWidth < 768){
//     element.classList.add("mob");
//   }
// });




// Start Skills


  // // Skills Offset Top
  // let skillsOffsetTop = ourSkills.offsetTop;

  // // Skills Outer Height
  // let skillsOuterHeight = ourSkills.offsetHeight;

  // // Window Height
  // let windowHeight = this.innerHeight;

  // // Window ScrollTop
  // let windowScrollTop = this.pageYOffset;

  // if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

  //   let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

  //   allSkills.forEach(skill => {

  //     skill.style.width = skill.dataset.progress;

  //   });

  // }

