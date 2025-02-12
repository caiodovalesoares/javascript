//GetElementById //retorna o elemento que possui o valor do atributo id igual ao especificado
let secao1 = document.getElementById('secao_de_texto1');
console.log(secao1);

//GetElementsByClassName //retorna uma coleção HTML de elementos com o nome da classe especificado
let paragrafos = document.getElementsByClassName('paragrafo');
console.log(paragrafos);

//querySelector //retorna o primeiro elemento que corresponde ao seletor especificado
let secao = document.querySelector('#secao_de_texto1');
console.log(secao);

let paragrafo = document.querySelector('.paragrafo');
console.log(paragrafo);

//querySelectorAll  //retorna todos os elementos que correspondem ao seletor especificado
let paragrafos2 = document.querySelectorAll('.paragrafo');
console.log(paragrafos2);

//getElementsByTagName //retorna uma coleção HTML de elementos com o nome da tag especificado
let paragrafos3 = document.getElementsByTagName('p');
console.log(paragrafos3);