var menu_switch = document.querySelector('.header__switch');
var menu = document.querySelector('.header__menu');
var menu_list_items = document.querySelectorAll('.menu__list-item');
menu_switch.addEventListener("click", function(){
  menu.classList.toggle('header__menu_active')
  menu_switch.classList.toggle('header__switch_active')
})
for (var i = 0; i < menu_list_items.length; i++) {
  var menu_list_item = menu_list_items[i];
  menu_list_item.addEventListener("click", function(){
    menu.classList.toggle('header__menu_active');
    menu_switch.classList.toggle('header__switch_active');
  })
}

var abouts = document.getElementsByClassName('about__tab');
for (var i = 0; i < abouts.length; i++) {
  var about = abouts[i];
  toggleswitch(about);
};

function toggleswitch(about){
  about.addEventListener("click", function() {
    for (var i = 0; i < abouts.length; i++) {
      abouts[i].classList.remove('about__tab_active');
    }
    this.classList.add('about__tab_active');
    })
}
