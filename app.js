// Variables
const menuOpenBtn = document.getElementById('hamberger-menu-open');
const slideMenu = document.getElementById('menu-mobile');
const menuCloseBtn = document.getElementById('hamberger-menu-close');
const quantity = document.getElementById('quantity');
let cartItem = 0;

/* Inventory Increase and Decrease */
document.getElementById('inv-decrease').addEventListener('click', () => {
    if (cartItem != 0) {
        cartItem = cartItem - 1;
        quantity.innerHTML = cartItem;
    } else {
        return null;
    }
});

document.getElementById('inv-increase').addEventListener('click', () => {
    cartItem = cartItem + 1;
    quantity.innerHTML = cartItem;
});
/* Inventory Increase and Decrease End */

/* Navbar Open & Close */
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