const helpBtns = document.querySelectorAll('.btn-modal');
const modalHelp = document.querySelector('.modal-help');
const modalOverlay = document.querySelector('.modal-help__overlay');
const modalWindows = document.querySelectorAll('.modal-help__window');
export const body = document.querySelector('.page__body');
const closeModalsHelp = document.querySelectorAll('.modal-help__close-btn');

for (let i = 0; i < helpBtns.length; i++) {
    let helpBtn = helpBtns[i];

    helpBtn.addEventListener('click', function () {
        let path = this.getAttribute('data-path');

        document.querySelector(`[data-target="${path}"]`).classList.add('modal-help__window--display');
        modalHelp.classList.add('modal-help--display')
        body.classList.add('page__body--overflow')
    })
}


for (let i = 0; i < closeModalsHelp.length; i++) {
    let closeModalHelp = closeModalsHelp[i];

    for (let j = 0; j < modalWindows.length; j++) {
        let modalWindow = modalWindows[j];

        modalOverlay.addEventListener('click', function (evt) {
            if (evt.target == this) {
                modalHelp.classList.remove('modal-help--display')
                modalWindow.classList.remove('modal-help__window--display')
                body.classList.remove('page__body--overflow')
            }
        })

        closeModalHelp.addEventListener('click', function () {
            modalHelp.classList.remove('modal-help--display')
            body.classList.remove('page__body--overflow')
            modalWindow.classList.remove('modal-help__window--display')
        })
    }
}