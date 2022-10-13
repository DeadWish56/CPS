var buttons = document.querySelectorAll('.section__btn');
var buttonsIcon = document.querySelectorAll('.btn__expand')
var sectionsHeight = document.querySelectorAll('.section__inner')
var buttonsText = document.querySelectorAll('.btn__text')

var clickButton = function (button, sectionHeight, buttonIcon, buttonText) {
  button.addEventListener('click', function () {
    icon();
    height();
    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть'
    } else {
      buttonText.textContent = 'Показать все'
    }

  });

  var height = function () {
    sectionHeight.classList.toggle('section__inner--height')
  }

  var icon = function () {
    buttonIcon.classList.toggle('btn__expand--rotate');
  }


};


for (var i = 0; i < buttons.length; i++) {
  clickButton(buttons[i], sectionsHeight[i], buttonsIcon[i], buttonsText[i]);
};