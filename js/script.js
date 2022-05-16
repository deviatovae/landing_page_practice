const header = document.querySelector('.header')

function onScroll() {
    if (window.scrollY === 0) {
        header.classList.add('header_dark')
        header.classList.remove('header_light')
    } else {
        header.classList.remove('header_dark')
        header.classList.add('header_light')
    }
}

onScroll()
document.addEventListener('scroll', onScroll, {passive: true});


const videoPromoBtn = document.querySelector('.promo-video')

videoPromoBtn.addEventListener('click', function () {
    const htmlOnClick = `<iframe
        src = "https://www.youtube.com/embed/0qisGSwZym4?controls=0"
        title = "YouTube video player"
        frameBorder = "0"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen > < /iframe>`

    showVideoPopup(htmlOnClick)
})


const videoPopup = document.querySelector('.video-popup')

function showVideoPopup(content) {
    videoPopup.querySelector('.video-popup__content').innerHTML = content
    videoPopup.style.display = "block"
}
function hideVideoPopup() {
    videoPopup.style.display = "none"
}
videoPopup.onclick = function (event) {
    if (event.target === this) {
        hideVideoPopup()
    }
}