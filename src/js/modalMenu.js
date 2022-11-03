import { body } from './helpmodal';
let openButton = document.querySelector('.btn__icon--burger');
let closeButton = document.querySelector('.btn__icon--close');
let modalMenu = document.querySelector('.modal-menu');
let overlay = document.querySelector('.modal__wrapper');
let modalWindow = document.querySelector('.modal-menu__window')

console.log(modalWindow)

openButton.onclick = function () {
    modalMenu.classList.toggle('modal-menu--display')
    body.classList.add('page__body--overflow')
}

closeButton.onclick = function () {
    modalMenu.classList.toggle('modal-menu--display')
    body.classList.remove('page__body--overflow')
}

overlay.addEventListener('click', function (evt) {
    if (evt.target == this) {
        modalMenu.classList.toggle('modal-menu--display')
        body.classList.remove('page__body--overflow')
    }
})

body.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
        modalMenu.classList.add('modal-menu--display')
        console.log('ЕСК!')
    }
})