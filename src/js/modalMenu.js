let openButton = document.querySelector('.btn__icon--burger');
let closeButton = document.querySelector('.btn__icon--close');
let modalMenu = document.querySelector('.modal-menu');
let overlay = document.querySelector('.modal__wrapper');

openButton.onclick = function () {
    modalMenu.classList.toggle('modal-menu--display')
}

closeButton.onclick = function () {
    modalMenu.classList.toggle('modal-menu--display')
}

overlay.addEventListener('click', function (evt) {
    if (evt.target == this) {
        modalMenu.classList.toggle('modal-menu--display')
        console.log(evt)
    }
})