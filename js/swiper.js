const sliders = document.querySelectorAll('.swiper');
var mySwiper

function mobileSlider() {

  for (var i = 0; i < sliders.length; i++) {
    var slider = sliders[i];

    if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {

      mySwiper = new Swiper(slider, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
        },
        slidesPerView: "auto",
        spaceBetween: 16,

      });

      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }

  }

}

mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
});

var buttons = document.querySelectorAll('.section__btn');
var btnIcon = document.querySelectorAll('.btn__expand')
var sectionsHeight = document.querySelectorAll('.section__inner')
var buttonsText = document.querySelectorAll('.btn__text')





var clickButton = function (button) {
  button.addEventListener('click', function () {
    btnIcon();
    sectionHeigth();
    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть'
    } else {
      buttonText.textContent = 'Показать все'
    }

  });

  var btnIcon = function () {
    btnIcons.classList.toggle('btn__expand--rotate');
  }

  var sectionHeigth = function () {
    sectionHeight.classList.toggle('section__inner--height')
  }

};


for (var i = 0; i < buttons.length; i++) {
  clickButton(buttons[i]);
  var sectionHeight = sectionsHeight[i];
  var btnIcons = btnIcon[i];
  var buttonText = buttonsText[i]
};




/* для одной секции
var clickButton = function (button) {
  button.addEventListener ('click', function () {
    console.log(button);
    btnIc();
  });

  var btnIc = function () {
  btnIcons.classList.toggle('btn__expand--rotate');
  console.log(btnIcons)

}
};


for (var i = 0; i < buttons.length; i++) {
  clickButton(buttons[i])
  
  var btnIcons = btnIcon[i]

};

рабочий код для одного элемента

var clickButton = function (button) {
  button.addEventListener('click', function () {
    console.log(button);
    btnIcon();
    sectionHeigth();
  });

var btnIcon = function () {
  btnIcons.classList.toggle('btn__expand--rotate');
  console.log(btnIcons)
}

var sectionHeigth = function () {
  sectionHeight.classList.toggle('swiper--height')
}

};


for (var i = 0; i < buttons.length; i++) {
  clickButton(buttons[i]);
  var sectionHeight = sectionsHeight[i];
  var btnIcons = btnIcon[i];

};

*/