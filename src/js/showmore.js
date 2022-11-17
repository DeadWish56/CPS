let buttons = document.querySelectorAll('.showmore-btn');
let buttonsIcon = document.querySelectorAll('.btn__expand');
let sectionsHeight = document.querySelectorAll('.height');
let buttonsText = document.querySelectorAll('.btn__text');


for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let buttonIcon = buttonsIcon[i];
  let sectionHeight = sectionsHeight[i];
  let buttonText = buttonsText[i];

  button.onclick = function () {
    sectionHeight.classList.toggle('height--open');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (buttonIcon.classList.contains('btn__expand--rotate')) {
      buttonText.textContent = 'Скрыть';
    } else if (button.classList.contains('about__btn')) {
      buttonText.textContent = 'Читать далее';
    } else {
      buttonText.textContent = 'Показать все';
    }

  }
}