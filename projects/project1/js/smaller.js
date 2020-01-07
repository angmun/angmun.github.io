// Global variables
var siteHead = document.getElementsByTagName('header')[0];
var siteLogo = document.querySelector('header img');
var hamburgerIcon = document.getElementById('hamburger');
var navOptions = document.getElementById('main-options');
var content = document.getElementsByTagName('main')[0];
// Change size of header depending on window's y-offset position
window.onscroll = function(){
  if ((window.pageYOffset > 200 && window.innerWidth > 750) || (window.pageYOffset > 100 && window.innerWidth <= 750)){
    siteHead.classList.add('header-small');
    siteLogo.src = "media/am-logo-72x72.png";
    content.classList.add('content-stagger');
  }
  else{
    siteHead.classList.remove('header-small');
    siteLogo.src = "media/apple-touch-icon-144x144.png";
        content.classList.remove('content-stagger');
  }
}
// Show hamburger menu upon clicking the hamburger icon
hamburgerIcon.onclick = function(){
  navOptions.classList.toggle('show-block');
}
navOptions.onmouseleave = function() {
  navOptions.classList.remove('show-block');
}
window.onclick = function(event){
  if(!event.target.matches('#hamburger')){
    navOptions.classList.remove('show-block');
  }
}
