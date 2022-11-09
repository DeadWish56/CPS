import { body } from './helpmodal';
const openButton = document.querySelector('.btn__icon--burger');
const closeButton = document.querySelector('.btn__icon--close');
const modalMenu = document.querySelector('.modal-menu');
const menuWindow = document.querySelector('.modal-menu__window')
const overlay = document.querySelector('.modal__wrapper');

const openModalMenu = function () {
    modalMenu.classList.add('modal-menu--display')
    menuWindow.classList.add('modal-menu__window--display')
    body.classList.add('page__body--overflow')
}

const closeModalMenu = function () {
    modalMenu.classList.remove('modal-menu--display')
    menuWindow.classList.remove('modal-menu__window--display')
    body.classList.remove('page__body--overflow')
}

openButton.onclick = function () {
    openModalMenu()
}

closeButton.onclick = function () {
    closeModalMenu()
}

overlay.addEventListener('click', function (evt) {
    if (evt.target == this) {
        closeModalMenu()
    }
})

body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closeModalMenu()
    }
})