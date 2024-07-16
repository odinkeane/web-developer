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

const products = document.querySelector('.products');

function request(url) {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
}

window.addEventListener('load', async () => {
    const URL = "https://odinkeane.github.io/web-developer/practical6/data.json"
    const response = await request(URL);
    showProducts(response["data"]);
    allProducts = document.querySelectorAll('.slider-element');
})

function showProducts(response) {
    let position = 0;
    for (res of response) {
        products.innerHTML += `
        <div class='slider-element' style='left: ${percent * position}%'>
            <div class='product'>
                <img class='product-image' src='${res.urlImage}'>
                <h4 class='product-name'>${res.name}</h4>
                <p class='product-price'>$${res.price}</p>
            </div>  
        </div>`;
        if (res.hot) {
            products.lastChild.children[0].innerHTML += "<img class='hot' src='https://odinkeane.github.io/web-developer/practical6/hot.svg'>"
        }
        position++;
    }
}

const percent = 50;

let allProducts;
function right() {
    let pos = allProducts[0].style.left.replace("%", "");
    if (Number(pos) - percent <= -percent * allProducts.length) {
        return;
    }
    for (let product of allProducts) {
        let pos = product.style.left.replace("%", "");
        pos = Number(pos) - percent;
        product.style.left = pos + "%";
    }
}

function left() {
    let pos = allProducts[allProducts.length - 1].style.left.replace("%", "");
    if (Number(pos) + percent > percent * (allProducts.length - 1)) {
        return;
    }
    for (let product of allProducts) {
        let pos = product.style.left.replace("%", "");
        pos = Number(pos) + percent;
        product.style.left = pos + "%";
    }
}
