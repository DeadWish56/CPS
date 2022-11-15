import { modalMenu } from './modalMenu';
const modalHelp = document.querySelector('.modal-help')
const modalsWindows = document.querySelectorAll('.modal-help__window')
let inputsName = document.getElementsByName('user-name');
export const body = document.querySelector('.page__body');

const openModalHelp = function () {
    body.classList.add('page__body--overflow')
    modalHelp.classList.add('modal-help--display')
    for (let i = 0; i < inputsName.length; i++) {
        let input = inputsName[i];
        setTimeout(() => {
            input.focus();
        }, 500)
    }
}

const closeModalHelp = function () {
    for (let i = 0; i < modalsWindows.length; i++) {
        let modalWindow = modalsWindows[i];

        if (!modalMenu.classList.contains('modal-menu--display')) {
            body.classList.remove('page__body--overflow')
        }

        modalWindow.classList.remove('modal-help__window--display')
        modalHelp.classList.remove('modal-help--display')
    }
}

document.addEventListener('click', function (evt) {
    const closeModal = evt.target.dataset.name;
    const btnOpen = evt.target.dataset.path;

    if (evt.target.closest('.btn')) {
        if (btnOpen) {
            openModalHelp()
            document.querySelector(`[data-target="${btnOpen}"]`).classList.add('modal-help__window--display');
        }

        if (closeModal === "close") {
            closeModalHelp();
        }
    }

    if (evt.target.closest('.modal-help__overlay')) {
        if (closeModal === "overlay") {
            closeModalHelp();
        }
    }
})
body.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closeModalHelp()
    }
})

