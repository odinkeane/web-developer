const scrollDown = document.querySelector('.scroll-down');
const main = document.querySelector('main');

scrollDown.addEventListener('click', () => {
    main.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
const navBlock = document.querySelector('.header-nav-block');
const navButton = document.querySelector('.header-nav-button');
const sliderElements = document.querySelectorAll('.slider-element');


navButton.addEventListener('click', () => {
    if (navBlock.style.top == "-250px") {
        navBlock.style.top = "0px";
        navButton.children[0].style.opacity = "0";
        setTimeout(() => {
            navButton.children[0].src = "images/close.svg";
            navButton.children[0].style.opacity = "1";
            navButton.children[0].style.filter = "none";
        }, 500)
    } else {
        navBlock.style.top = "-250px";
        navButton.children[0].style.opacity = "0";
        setTimeout(() => {
            navButton.children[0].src = "images/ham.svg";
            navButton.children[0].style.opacity = "1";
            navButton.children[0].style = "";
        }, 500)
    }
})


window.addEventListener('load', () => {
    navBlock.style.top = "-250px";
    for (let i = 0; i < sliderElements.length - 1; i++) {
        sliderElements[i].style.left = 100 * i + "%";
    }
    sliderElements[sliderElements.length - 1].style.left = "-100%";

})


const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');


const deltaTime = 2;

sliderRight.addEventListener('click', () => {
    let timer = 0;
    const interval = setInterval(() => {
        for (let i = 0; i < sliderElements.length; i++) {
            let value = Number(sliderElements[i].style.left.replace("%", ""));
            if (value == -200) {
                value = 100 * (sliderElements.length - 2);
            }
            sliderElements[i].style.left = Number(value - deltaTime) + "%";
        }
        timer += deltaTime;
        if (timer == 100) {
            clearInterval(interval);
        }
    }, 20)
})

sliderLeft.addEventListener('click', () => {
    let timer = 0;
    const interval = setInterval(() => {
        for (let i = 0; i < sliderElements.length; i++) {
            let value = Number(sliderElements[i].style.left.replace("%", ""));
            if (value == 100 * (sliderElements.length - 1)) {
                value = -100;
            }
            sliderElements[i].style.left = Number(value + deltaTime) + "%";
        }
        timer += deltaTime;
        if (timer == 100) {
            clearInterval(interval);
        }
    }, 20)

})