const modalHelp = document.querySelector('.modal-help')
const modalsWindows = document.querySelectorAll('.modal-help__window')
export const body = document.querySelector('.page__body');

const openModalHelp = function () {
    body.classList.add('page__body--overflow')
    modalHelp.classList.add('modal-help--display')
}

const closeModalHelp = function () {
    for (let i = 0; i < modalsWindows.length; i++) {
        let modalWindow = modalsWindows[i];

            modalWindow.classList.remove('modal-help__window--display')
            modalHelp.classList.remove('modal-help--display')
            body.classList.remove('page__body--overflow')
    }
}

document.addEventListener('click', function (evt) {
    const btnOpen = evt.target.dataset.path;
    const closeModal = evt.target.dataset.name;

    if (btnOpen) {
        openModalHelp()
        document.querySelector(`[data-target="${btnOpen}"]`).classList.add('modal-help__window--display');
    }

    if (closeModal === "close" || closeModal === "overlay") {
        closeModalHelp();
    }
})