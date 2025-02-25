const aside = document.querySelector('aside');
const main = document.querySelector('main');
const dataBlock = document.querySelector(".data");
const nav = document.querySelector('nav');

let lessons;



function setCurrent(i, title) {
    data = lessons[title];
    dataBlock.innerHTML = marked.parse(data[i]);
    for (let j = 0; j < data.length; j++) {
        aside.children[j].style.background = ""
        aside.children[j].style.color = ""
    }
    aside.children[i].style.background = "#826A5F";
    aside.children[i].style.color = "#FFF";
}

function setCurrentLesson(button) {
    for (let children of nav.children) {
        children.style.borderBottom = "2px solid transparent";
    }
    button.style.borderBottom = "2px solid #826A5F"

    const title = button.innerHTML;
    const data = lessons[title];
    aside.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        aside.innerHTML += `<button onClick='setCurrent(${i}, "${title}")'>${i + 1}</button>`
    }
    setCurrent(0, title)
}

window.addEventListener('load', async () => {
    lessons = await fetch("task.json")
        .then(response => response.json())
        .then(data => data.data)

    for (let lesson of Object.keys(lessons)) {
        nav.innerHTML += `<button onClick='setCurrentLesson(this)'>${lesson}</button>`;
    }
    setCurrentLesson(nav.children[0])
})