/* Images Are Configured Dynamically; */
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

// Creating a Element
productImage.forEach(img => {
    const galItem = document.createElement('div');
    galItem.classList.add('gallery-item');
    const galImg = document.createElement('img');
    galItem.appendChild(galImg);
    const el = document.getElementById('gallery');
    el.appendChild(galItem);
    galImg.src = img.thumb;
});

/* Image Updating on Thumbnail Click (Desktop) */
const galleryItem = document.querySelectorAll('.gallery-item');
galleryItem[0].classList.add('slide-active');
sliderImg.src = galleryItem[0].childNodes[0].src.replace('-thumbnail', '');

galleryItem.forEach(img => {
    img.addEventListener('click', (event) => {
        let already = document.getElementsByClassName('slide-active');
        already[0].classList.remove('slide-active')
        img.classList.add('slide-active');
        sliderImg.src = event.target.src.replace('-thumbnail', '');
    });
});

// Image Change on Previous or Next Click (Mobile);
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', onNextClick);
prev.addEventListener('click', onPrevClick);

function onNextClick() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if(imageIndex > 4) {
        imageIndex = 1;
    }
    setSliderImg(imageIndex);
}

function onPrevClick() {
    let imageIndex = getCurrentImageIndex();
    imageIndex--;
    if(imageIndex < 1) {
        imageIndex = 4;
    }
    setSliderImg(imageIndex);
}

function getCurrentImageIndex() {
    const imageIndex = parseInt(sliderImg.src.split('-').pop().replace('.jpg', ''));
    return imageIndex;
}

function setSliderImg(imageIndex) {
    sliderImg.src = "./images/image-product-" + imageIndex + ".jpg";
}

// Overlay Thumb Clicks
