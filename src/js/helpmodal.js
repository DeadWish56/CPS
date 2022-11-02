const helpBtns = document.querySelectorAll('.btn-modal')
const modalHelp = document.querySelector('.modal-help')
const modalOverlay = document.querySelector('.modal-help__overlay')
const modalWindows = document.querySelectorAll('.modal-help__window')
const body = document.querySelector('.page__body')

for (let i = 0; i < helpBtns.length; i++) {
    let helpBtn = helpBtns[i];

    helpBtn.addEventListener('click', function () {
        console.log('клик-клак!')
        let path = this.getAttribute('data-path');
        document.querySelector(`[data-target="${path}"]`).classList.add('modal-help__window--display');
        modalHelp.classList.add('modal-help--display')
        console.log(path)
        body.classList.add('page__body--overflow')
    })
}

for (let i = 0; i < modalWindows.length; i++) {

    modalOverlay.addEventListener('click', function (evt) {
        if (evt.target == this) {
            modalHelp.classList.remove('modal-help--display')
            console.log(evt)
            modalWindows[i].classList.remove('modal-help__window--display')
            body.classList.remove('page__body--overflow')
        }
    })
}