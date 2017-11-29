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
var menu_switch = document.querySelector('.header__switch');
var menu = document.querySelector('.header__menu');
menu_switch.addEventListener("click", function(){
  menu.classList.toggle('header__menu_active')
  menu_switch.classList.toggle('header__switch_active')
})
	function hint_switch(input, hint) {
		input.onfocus = hintOn;
		input.onblur = hintOff;

		function hintOn() {
			hint.classList.add("contact__form-hint_active");
		}

		function hintOff() {
			if (input.value === ""){
        hint.classList.remove("contact__form-hint_active");
      }
		}
	}
  var inputs = document.querySelectorAll('.contact__form-input');
  var hints = document.querySelectorAll('.contact__form-hint');
  for (var i = 0; i < inputs.length; i++) {
    hint_switch(inputs[i], hints[i]);
  }
