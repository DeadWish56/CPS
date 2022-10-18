let buttons = document.querySelectorAll('.section__btn');
let buttonsIcon = document.querySelectorAll('.btn__expand');
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

/*
let clickOnButtonShowMore = function (button, sectionHeight, buttonIcon, buttonText) {

  button.addEventListener('click', function () {
    sectionHeight.classList.toggle('section__inner--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Показать все';
    }

  });

};

for (let i = 0; i < buttons.length; i++) {
  clickOnButtonShowMore(buttons[i], sectionsHeight[i], buttonsIcon[i], buttonsText[i]);
};

*/
/* обработчик с ранним объявлением функции
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i]
  let buttonIcon = buttonsIcon[i];
  let sectionHeight = sectionsHeight[i];
  let buttonText = buttonsText[i];

  function handleClickFunction() {
    sectionHeight.classList.toggle('section__inner--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Показать все';
    }
  }

  button.addEventListener('click', handleClickFunction)
}
*/
/*  с помощью on-свойств DOM-элементов
let buttons = document.querySelectorAll('.section__btn');
let buttonsIcon = document.querySelectorAll('.btn__expand')
let sectionsHeight = document.querySelectorAll('.section__inner')
let buttonsText = document.querySelectorAll('.btn__text')

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let buttonIcon = buttonsIcon[i];
  let sectionHeight = sectionsHeight[i];
  let buttonText = buttonsText[i];

  button.onclick = function () {
    sectionHeight.classList.toggle('section__inner--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Показать все';
    }
  }
}
*/
/* c анонимной функцией
let buttons = document.querySelectorAll('.section__btn');
let buttonsIcon = document.querySelectorAll('.btn__expand')
let sectionsHeight = document.querySelectorAll('.section__inner')
let buttonsText = document.querySelectorAll('.btn__text')

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i]
  let buttonIcon = buttonsIcon[i];
  let sectionHeight = sectionsHeight[i];
  let buttonText = buttonsText[i];

  button.addEventListener('click', function () {
    sectionHeight.classList.toggle('section__inner--height');
    buttonIcon.classList.toggle('btn__expand--rotate');

    if (sectionHeight.classList.contains('section__inner--height')) {
      buttonText.textContent = 'Скрыть';
    } else {
      buttonText.textContent = 'Показать все';
    }
  })

}
*/