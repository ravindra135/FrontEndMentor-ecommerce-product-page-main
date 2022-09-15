// Variables
const menuOpenBtn = document.getElementById('hamberger-menu-open');
const slideMenu = document.getElementById('menu-mobile');
const menuCloseBtn = document.getElementById('hamberger-menu-close')

fetch('./images.json')
    .then((res) => res.json())
    .then((data) => imgData(data))

/* Image Function */
function imgData(image) {
    console.log(image);
}

/* NavBar Open & Close */
menuOpenBtn.addEventListener('click', menuOpen);
menuCloseBtn.addEventListener('click', menuClose);

function menuOpen() {
    slideMenu.style.animation = 'slide-in .6s';
    slideMenu.classList.toggle('open');
    if(slideMenu.classList.contains('open')) {
        document.querySelector('nav').classList.toggle('menuOpen');
    }
}

function menuClose() {
    if(slideMenu.classList.contains('open')) {
        slideMenu.style.animation = 'slide-out .5s';
        slideMenu.classList.toggle('open');
        document.querySelector('nav').classList.toggle('menuOpen');
    }
}
/* NavBar Open & Close Ends Here */