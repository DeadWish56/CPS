



let buttons = document.querySelectorAll('.section__btn');
let buttonsIcon = document.querySelectorAll('.show-more');
let sectionsHeight = document.querySelectorAll('.section__inner');
let buttonsText = document.querySelectorAll('.btn__text');

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let buttonIcon = buttonsIcon[i];
  let sectionHeight = sectionsHeight[i];
  let buttonText = buttonsText[i];

  button.onclick = function () {
    sectionHeight.classList.toggle('section__inner--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (buttonIcon.classList.contains('btn__expand--rotate')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Показать все';
    }
  }
}