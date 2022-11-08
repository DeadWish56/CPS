import { body } from './helpmodal';
const openButton = document.querySelector('.btn__icon--burger');
const closeButton = document.querySelector('.btn__icon--close');
const modalMenu = document.querySelector('.modal-menu');
const menuWindow = document.querySelector('.modal-menu__window')
const overlay = document.querySelector('.modal__wrapper');



openButton.onclick = function () {
    modalMenu.classList.add('modal-menu--display')
    menuWindow.classList.add('modal-menu__window--display')
    body.classList.add('page__body--overflow')
}

closeButton.onclick = function () {
    modalMenu.classList.toggle('modal-menu--display')
    body.classList.remove('page__body--overflow')
    menuWindow.classList.remove('modal-menu__window--display')
}

overlay.addEventListener('click', function (evt) {
    if (evt.target == this) {
        modalMenu.classList.toggle('modal-menu--display')
        body.classList.remove('page__body--overflow')
        menuWindow.classList.remove('modal-menu__window--display')
    }
})

body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        modalMenu.classList.add('modal-menu--display')
    }
})