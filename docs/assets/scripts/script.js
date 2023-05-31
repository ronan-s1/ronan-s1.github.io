document.addEventListener('DOMContentLoaded', function() {
  let sideNav = document.getElementById("mySidenav");
  let theMenu = document.querySelector('.menu');
  let main = document.getElementById('main');
  let theOverlay = document.querySelector('.overlay');
  let closeBtn = document.querySelector('.closebtn');
  let theLinks = sideNav.querySelectorAll('a');

  theMenu.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  theOverlay.addEventListener('click', closeNav);

  function openNav(e) {
    e.preventDefault();
    sideNav.style.width = "100vw";
    document.getElementById("main").style.marginLeft = "10vw";
    theOverlay.classList.add('active');
    theLinks.forEach((link, index) => {
      link.style.transitionDelay = index / 10.2 + 's';
      setTimeout(() => {
        link.classList.add('show');
      }, 20);
    });
  }

  function closeNav(e) {
    e.preventDefault();
    sideNav.style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    theOverlay.classList.remove('active');
    theLinks.forEach((link) => {
      link.classList.remove('show');
    });
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
    }, 300); // adjust the interval time to control the speed of the animation
}
  



const isMobile = /Mobi/.test(navigator.userAgent);
console.log(isMobile)
if (!isMobile) {
    // Device is not mobile, assume it has a cursor and initialize custom cursor
    document.addEventListener('DOMContentLoaded', () => {
        new window['Cursor']({
        targets: ['a', '#menu']
    })
})
} else {
    // Device is mobile, hide custom cursor
    const cursorElement = document.querySelector('[data-cursor]');
        if (cursorElement) {
        cursorElement.style.display = 'none';
    }
}