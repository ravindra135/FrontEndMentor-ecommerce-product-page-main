// Variables
const menuOpenBtn = document.getElementById('hamberger-menu-open');
const slideMenu = document.getElementById('menu-mobile');
const menuCloseBtn = document.getElementById('hamberger-menu-close');
const quantity = document.getElementById('quantity');
const checkout = document.getElementById('checkout-btn');
const cartCount = document.getElementById('cart-count');
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

/* Cart Process */

// Checkout Button Click;
checkout.addEventListener('click', () => {
    if(cartItem != 0) {
        cartCount.classList.remove('hidden');
        document.getElementById('cart-count-quantity').innerHTML = cartItem;
    } else {
        cartCount.classList.add('hidden');
        console.log('cant be added')
    }
});

/* End of Cart Process */

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