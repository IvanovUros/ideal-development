const menuBtn = document.querySelector('.hamburger-wrapper');
const navWrapper = document.querySelector('.main-nav')
const menu = document.querySelector('.nav-list');
let menuOpen = false;
let screenWidth = screen.width;

window.addEventListener('resize',() => {
    screenWidth = screenWidth;
})

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        menuOpen = false;
    }
})
