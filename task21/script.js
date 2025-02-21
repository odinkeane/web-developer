aside = document.querySelector('aside');
main = document.querySelector('main');
markdown = window.markdownit();

let data;

function setCurrent(i) {
    main.innerHTML = markdown.render(data[i]);
    for (let j = 0; j < data.length; j++) {
        aside.children[j].style.background = ""
        aside.children[j].style.color = ""
    }
    aside.children[i].style.background = "#826A5F";
    aside.children[i].style.color = "#FFF";
}

window.addEventListener('load', async () => {
    data = await fetch("task.json")
        .then(response => response.json())
        .then(data => data.data)
    for (let i = 0; i < data.length; i++) {
        aside.innerHTML += `<button onClick='setCurrent(${i})'>${i + 1}</button>`
    }
    setCurrent(0)
})