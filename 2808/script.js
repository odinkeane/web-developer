leftArrow = document.querySelector('.left-arrow');
rightArrow = document.querySelector('.right-arrow');
photos = document.querySelectorAll('.photos img');
bigPhoto = document.querySelector('.big-photo img');
let number = 0;


leftArrow.addEventListener("click", () => {
    number -= 1;
    if (number == -1) {
        number = photos.length - 1;
    }
    bigPhoto.src = photos[number].src;
})

rightArrow.addEventListener("click", () => {
    number += 1;
    if (number == photos.length) {
        number = 0;
    }
    bigPhoto.src = photos[number].src;
})

for (let photo of photos) {
    photo.addEventListener('click', () => {
        bigPhoto.src = photo.src;
    })
}
