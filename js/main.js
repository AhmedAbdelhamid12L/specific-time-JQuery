//*********** sidebar effect using jQuery *************//

let pageLinksWidth = $(".page-links").outerWidth();
$("#hiddenSidebar").css("left" , -pageLinksWidth );
$("#toggleBtn").click(function(){
  if($("#hiddenSidebar").css("left") == "0px") {
    $("#hiddenSidebar").animate({left: `-${pageLinksWidth}`} , 1000);
  }else {
    $("#hiddenSidebar").animate({left: `0px`} , 1000);
  }
})

//********** hidden text effect using jQuery **********//

$(".singer").click(function(){
  $(this).next().slideToggle(800);
  $(this).parents(".singer-card").siblings().children("p").slideUp(800);
})

//***************  Countdown Timer ****************//

// Set the date we're counting down to
let countDownDate = new Date("Oct 30, 2021 22:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(()=> {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("days").innerHTML =`<h2>${days} d </h2>`;
  document.getElementById("hours").innerHTML =`<h2>${hours} h </h2>`;
  document.getElementById("minutes").innerHTML =`<h2>${minutes} m </h2>`;
  document.getElementById("seconds").innerHTML =`<h2>${seconds} s </h2>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").classList.replace("row" , "d-none");
    document.getElementById("expired").style.display = "block";
    document.getElementById("expired").innerHTML = `<h2 class="fs-1 fw-bold">EXPIRED</h2>` ;
  }
}, 1000);


//***************  text Count input ****************//

let charInput = document.getElementById("charInput");
let textCount = document.getElementById("textCount");
let maxText = 100;


function charCount() {
  if(charInput.value.length > maxText) {
    charInput.value = charInput.value.substring(0,100);
  }else{
    $("#textCount").text(maxText - charInput.value.length);
  }
}

charInput.addEventListener("keyup" ,()=> {
  charCount();
});