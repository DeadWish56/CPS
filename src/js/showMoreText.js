let button = document.querySelector('.about__btn');
let buttonIcon = document.querySelector('.btn__expand');
let sectionHeight = document.querySelector('.about__content-text');
let buttonText = document.querySelector('.about__btn-text');

  button.onclick = function () {
    sectionHeight.classList.toggle('about__content-text--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (buttonIcon.classList.contains('btn__expand--rotate')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Читать далее';
    }
  }