// Variables
const menuOpenBtn = document.getElementById('hamberger-menu-open');
const slideMenu = document.getElementById('menu-mobile');
const menuCloseBtn = document.getElementById('hamberger-menu-close');
const quantity = document.getElementById('quantity');
const checkout = document.getElementById('checkout-btn');
const cartCount = document.getElementById('cart-count');
const headCart = document.getElementById('header-cart');
const emptyCart = document.getElementById('empty-cart');
const cart = document.getElementById('cart');
let cartItem = 0;

/* Inventory Increase and Decrease */
document.getElementById('inv-decrease').addEventListener('click', () => {
    if (cartItem != 0) {
        cartItem = cartItem - 1;
        quantity.innerHTML = cartItem;
    }
});

document.getElementById('inv-increase').addEventListener('click', () => {
    cartItem = cartItem + 1;
    quantity.innerHTML = cartItem;
});
/* Inventory Increase and Decrease End */

/* Cart Process */

// Show Cart-Items Pop Up on Click
headCart.addEventListener('click', () => {
    cart.style.animation = 'showCart .7s ease-in';
    cart.classList.toggle('cart-open');
    // If Cart is Empty;
    if(cartItem == 0) {
        document.getElementById('cart-products').classList.add('cart-empty');
        document.getElementById('cart-msg').classList.remove('hidden');
    } else {
        document.getElementById('cart-products').classList.remove('cart-empty');
        document.getElementById('cart-msg').classList.add('hidden');
    }
});

// On Checkout Button Click;
checkout.addEventListener('click', () => {
    if(cartItem != 0) {
        cartCount.classList.remove('hidden');
        document.getElementById('cart-count-quantity').innerHTML = cartItem;
        // Setting the Quantity in Cart Popup;
        let finalPrice = 125.00 * cartItem;
        document.getElementById('inCart-quantity').innerHTML = cartItem;
        document.getElementById('final-price').innerHTML = '$' + finalPrice + '.00'
    } else {
        cartCount.classList.add('hidden');
        console.log('cant be added');
    }
});

// On Empty Cart
emptyCart.addEventListener('click', () => {
    cartItem = 0;
    document.getElementById('cart-products').classList.add('cart-empty');
    document.getElementById('cart-msg').classList.remove('hidden');
    cartCount.classList.toggle('hidden');
    quantity.innerHTML = '0';
});

/* End of Cart Process */

// On Scroll Side Menu wil Hide;
document.addEventListener('scroll', (event) => {
    if(!slideMenu.contains(event.target)) {
        menuClose();
    }
});

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
        slideMenu.style.animation = 'slide-out .6s';
        slideMenu.classList.toggle('open');
        document.querySelector('nav').classList.toggle('menuOpen');
    }
}