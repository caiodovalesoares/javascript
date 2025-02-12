let button = document.querySelector('.button');

//addEventListener - método que adiciona um evento a um elemento
button.addEventListener("click", () => {
    console.log('Clicou no botão');
    button.style.boxShadow = '0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan, 0 0 80px cyan';
    button.style.animation = 'ease-in-out 1s infinite alternate';
});

let text = document.querySelector('.paragrafo');
text.addEventListener("mouseenter", () => {
    text.innerText = 'Passou o mouse';
});

text.addEventListener("mouseleave", () => {
    text.innerText = 'Tirou o mouse';
});