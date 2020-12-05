const feed = document.querySelector('#contents_container')
const more = document.querySelector('.more')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const modalOverlay = document.querySelector('.modal_overlay')
const likeBtn = document.querySelector('.icon_heart')

// const textInput = document.querySelectorAll('.id_input')
// const textInputBtn = document.querySelectorAll('.send_message')



function openModal (e) {

    let elem = e.target;
    e.stopPropagation();

   console.log(elem)

   

    if (e.target.matches('[data-name="more"]')) {
        modal.classList.remove('hidden')
    }
    
}


function closeModal (e) {
    modal.classList.add('hidden')
}


function commentKeypress (e) {
    let elem = e.target;
    e.stopPropagation();

   console.log(elem)

   while (!elem.getAttribute('data-name')) {
    elem = elem.nextElementSibling;

    if (elem.nodeName === 'BODY') {
        elem = null;
        return;
    }
}



if (elem.matches('[data-name="id_input"]')) {
    elem.classList.add('add')
}
}

function likeClick (e) {
    let elem = e.target
    e.stopPropagation();

        console.log(elem);

      
    

    if(elem.matches('[data-name="like"]')) {
        elem.classList.toggle('icon_heart')
        elem.classList.toggle('icon_red_heart')
    }
} 


feed.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
modalOverlay.addEventListener('click', closeModal)

feed.addEventListener('keypress', commentKeypress)

feed.addEventListener('click', likeClick)


// function canComment (e) {
//     for( let i = 0; i < textInputBtn.length; i++) {
//         textInputBtn[i].classList.add('add')
//     }
// }
// for( let i = 0; i < textInput.length; i++) {
    //     textInput[i].addEventListener('keypress', canComment)
    // }
