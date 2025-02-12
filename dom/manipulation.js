let titulo = document.querySelector('.titulo');

//InnerHTML - Pega o conteúdo HTML de um elemento
console.log(titulo);
console.log(titulo.innerHTML);

titulo.innerHTML = '<h2 class= "subtitulo">Novo Subtítulo</h2>';

//InnerText - Pega o conteúdo de texto de um elemento
let sub = document.querySelector('.subtitulo');
console.log(sub.innerText);

sub.innerText = 'subtítulo alterado';

//atributos - Pega o valor de um atributo
let paragrafo = document.querySelector('.paragrafo');
paragrafo.innerHTML = '<a class = "link" href = "#" target = "_blank">Link</a>';
console.log(paragrafo.innerHTML);

let link = document.querySelector('.link');
link.href = 'http://www.google.com';
link.style.color = 'red';
link.style.backgroundColor = 'darkgreen'