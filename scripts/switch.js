var about = document.getElementsByClassName('about__tab');
about[0].addEventListener("click", function() {
  for (var i = 0; i < about.length; i++) {
    about[i].classList.remove('about__tab_active');
  }
  this.classList.add('about__tab_active');
  })
about[1].addEventListener("click", function() {
  for (var i = 0; i < about.length; i++) {
    about[i].classList.remove('about__tab_active');
  }
  this.classList.add('about__tab_active');
  })
about[2].addEventListener("click", function() {
  for (var i = 0; i < about.length; i++) {
    about[i].classList.remove('about__tab_active');
  }
  this.classList.add('about__tab_active');
})
about[3].addEventListener("click", function() {
  for (var i = 0; i < about.length; i++) {
    about[i].classList.remove('about__tab_active');
  }
  this.classList.add('about__tab_active');
})
var menu_switch = document.querySelector('.header__switch');
var menu = document.querySelector('.header__menu');
var f = 0;
menu_switch.addEventListener("click", function(){
  if (f == 1){
    menu.style.display = "none";
    f = 0;
    return
  }
  if (f == 0){
    menu.style.display = "block";
    f = 1;
  }
})
