import { body } from './helpmodal';
const openButton = document.querySelector('.btn__icon--burger');
const closeButton = document.querySelector('.btn__icon--close');
const modalMenu = document.querySelector('.modal-menu');
const menuWindow = document.querySelector('.modal-menu__window')
const overlay = document.querySelector('.modal__wrapper');

const clickModalMenu = function () {
    modalMenu.classList.toggle('modal-menu--display')
    menuWindow.classList.toggle('modal-menu__window--display')
    body.classList.toggle('page__body--overflow')
}

openButton.onclick = function () {
    clickModalMenu()
}

closeButton.onclick = function () {
    clickModalMenu()
}

overlay.addEventListener('click', function (evt) {
    if (evt.target == this) {
        clickModalMenu()
    }
})

body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        clickModalMenu()
    }
})