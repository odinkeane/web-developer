const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');


window.addEventListener("load", () => {
    burgerMenu.style.opacity = 1;    
    imageChild.value = "open"; 
    burgerMenu.style.right = "100%"
    burgerBtn.zIndex = 2; 
})

const imageChild = burgerBtn.children[0];

burgerBtn.addEventListener('click', () => {

    if (imageChild.value == "open") {
        imageChild.src = "close.svg"
        imageChild.value = "close"
        burgerMenu.style.right = "0px"
        burgerBtn.style.zIndex = 2;
    } else {
        imageChild.style.opacity = 0;
        burgerBtn.style.zIndex = 0;
        imageChild.value = "open";
        setTimeout(() => {
            burgerMenu.style.right = "100%";
            imageChild.style.opacity = 1;
            imageChild.src = "burger.svg";
        }, 200)
    }



})

