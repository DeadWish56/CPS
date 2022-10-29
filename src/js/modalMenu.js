let openButton = document.querySelector('.btn__icon--burger');
let closeButton = document.querySelector('.btn__icon--close');
let modalMenu = document.querySelector('.page__modal-menu');
let overlay = document.querySelector('.modal__wrapper');

openButton.onclick = function () {
    modalMenu.classList.toggle('page__modal-menu--display')
}

closeButton.onclick = function () {
    modalMenu.classList.toggle('page__modal-menu--display')
}
