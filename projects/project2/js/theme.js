var navigate = document.getElementsByTagName("nav")[0];
var diy_title = document.getElementById("diy-menu");
var diy_options = document.getElementById("diy-options");
var home_button = document.getElementById("home-btn");

// Changing the size of the header upon scrolling past a certain point
window.onscroll = function(){
  if (window.pageYOffset > 250){
    navigate.classList.add('fix-it');
  }
  else{
    navigate.classList.remove('fix-it');
  }
}
// The DIY Tips menu and 645 home button set-up
clickBtn(diy_title,diy_options);
clickBtn(home_button);
hoverBtn(home_button);
mouseOut(home_button);
window.onclick = function(event){
  if(!event.target.matches('#diy-title')){
    if(diy_options.classList.contains('show-block')){
      diy_options.classList.remove('show-block');
    }
  }
}

function clickBtn(btn, cont){
  if(!cont){
    btn.ontouchstart = function(){
      btn.src="media/home-645-60x60.png";
    };
  }
  else{
    btn.onclick = function(){
      cont.classList.toggle("show-block");
    };
  }
}
function hoverBtn(btn){
  btn.onmouseover = function(){
    btn.src="media/home-645-60x60.png";
  };
}
function mouseOut(btn){
  btn.onmouseout = function(){
    btn.src="media/home-645-60x60-original.png";
  };
}
