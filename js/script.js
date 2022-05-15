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
document.addEventListener('scroll', onScroll, { passive: true });
