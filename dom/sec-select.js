let paragraph = document.querySelector('.text');
let html = document.querySelector('.html');

//.parentElement - retorna o elemento pai do elemento selecionado
console.log(paragraph.parentElement);
dadParagraph = paragraph.parentElement;
dadParagraph.style.color = 'red';
console.log(dadParagraph);

//.parentNode - retorna o nó pai do elemento selecionado, e caso não exista, retorna todo o documento
console.log(html.parentNode);

//.firstElementChild - retorna o primeiro elemento filho do elemento selecionado
let section = document.querySelector('#section');
console.log(section.firstElementChild);

//.firstChild - retorna o primeiro nó filho do elemento selecionado
console.log(section.firstChild);

//.lastElementChild - retorna o último elemento filho do elemento selecionado
console.log(section.lastElementChild);

//.lastChild - retorna o último nó filho do elemento selecionado
console.log(section.lastChild);

//.children - retorna uma coleção HTML de todos os elementos filhos do elemento selecionado
console.log(section.children);