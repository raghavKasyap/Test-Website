const popUpBtn = document.querySelector('.video-wrapper')
const popUpSection = document.querySelector('.popUp')
const popUpVideo = document.querySelector('.popUp-video-wrapper')
const popUpClose = document.querySelector('.close-wrapper')

/* The popUp Functionality */
popUpBtn.addEventListener('click', () => {
    popUpSection.className = 'popUp view-popUp'
})

popUpClose.addEventListener('click', () => {
    console.log('close');
    popUpSection.className = 'popUp'
})