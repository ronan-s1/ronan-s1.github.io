document.addEventListener('DOMContentLoaded', function() {
let sideNav =document.getElementById("mySidenav");
let theMenu = document.querySelector('.menu');
let main = document.getElementById('main');
let theOverlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.closebtn');

let theLinks = sideNav.querySelectorAll('a');

document.addEventListener('click', navigate);

function navigate(e) {
  if(e.target == theMenu) {
    sideNav.style.width = "100vw";
    document.getElementById("main").style.marginLeft = "10vw";
  theOverlay.classList.toggle('active'); 
  for(i = 0; i <= theLinks.length; i++) { theLinks[i].classList.toggle('show'); 
theLinks[i].style.transitionDelay = i / 10.2 + 's'; 
}//for loop end   
  }
  //if open
  
  else if(e.target == closeBtn || e.target == theOverlay){  sideNav.style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
 theOverlay.classList.toggle('active');
for(i = 0; i <= theLinks.length; i++) { theLinks[i].classList.toggle('show'); }
  }   
}
});


window.onload = function() {
    var elements = document.getElementsByClassName("fade-in");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 0;
    }
    
    var index = 0;
    var intervalId = setInterval(function() {
      if (index >= elements.length) {
        clearInterval(intervalId);
        return;
      }
      elements[index].style.opacity = 1;
      index++;
    }, 200); // adjust the interval time to control the speed of the animation


    
  }
  


