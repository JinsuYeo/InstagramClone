const more = document.querySelector('.more')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const modalOverlay = document.querySelector('.modal_overlay')




function openModal (e) {
    modal.classList.remove('hidden')
}


function closeModal (e) {
    modal.classList.add('hidden')
}

more.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
modalOverlay.addEventListener('click', closeModal)