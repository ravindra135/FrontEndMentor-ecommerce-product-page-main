const productImage = [
    {
        "src": "./images/image-product-1.jpg",
        "thumb": "./images/image-product-1-thumbnail.jpg"
    },
    {
        "src": "./images/image-product-2.jpg",
        "thumb": "./images/image-product-2-thumbnail.jpg"
    },
    {
        "src": "./images/image-product-3.jpg",
        "thumb": "./images/image-product-3-thumbnail.jpg"
    },
    {
        "src": "./images/image-product-4.jpg",
        "thumb": "./images/image-product-4-thumbnail.jpg"
    }
];

const galItem = document.createElement('p');
const galImg = document.createTextNode('img');
galItem.appendChild(galImg);
const el = document.getElementById('gallery');
el.appendChild(galItem);


