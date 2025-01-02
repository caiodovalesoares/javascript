// let frutas = ['banana', 'maçã', 'uva', 'pera', 'mamão']
// console.log(frutas[4])

// frutas[5] = 'jaca'
// console.log(frutas)

// frutas[4] = 'kiwi'
// console.log(frutas)

// frutas[7] = 'amora'
// console.log(frutas)

// let frutas2 = frutas
// //não é uma cópia, é uma referência

// //array de arrays
// let listaDeCompras = ['pão', 'leite', 'açúcar', 'café', 'arroz']
// listaDeCompras[5] = frutas
// console.log(listaDeCompras)
// console.log(listaDeCompras[5][4])

// let times = ['fluminense', 'vasco', 'flamengo', 'botafogo']

// //adiciona no final
// let tamanho = times.push('bangu') //atribui o tamanho do array
// console.log(times)
// console.log(tamanho)

// //adiciona no início
// times.unshift('madureira')
// console.log(times)

// //remove do final
// let timeRemovido = times.pop() //atribui o elemento removido
// console.log(times)
// console.log(timeRemovido)

// //remove do início
// let timeRemovido2 = times.shift() //atribui o elemento removido
// console.log(times)
// console.log(timeRemovido2)

// //indice do elemento
// let indice = times.indexOf('fluminense')
// console.log(indice) //caso não exista, retorna -1

// //saber se existe
// let existe = times.includes('corinthians')
// console.log(existe) //retorna true ou false

// //separar array
// let classicoDosMilhoes = times.slice(1, 3) //início e fim
// console.log(classicoDosMilhoes)

// //copiar array
// let times2 = times.slice()
// console.log(times2) //mudanças feitas em times não afetam times2 e vice-versa

// //concatenar arrays
// let numeros = [1, 2, 3, 4, 5]
// let letras = ['a', 'b', 'c', 'd', 'e']
// let simbolos = ['!', '@', '#', '$', '%']

// let caracteres = numeros.concat(letras, simbolos)
// console.log(caracteres)

// //tamanho da array
// console.log(caracteres.length)

// //inverter array
// console.log(caracteres.reverse())

// //ordenar array
// console.log(caracteres.sort())

// //iteração de arrays
// for (let i = 0; i < caracteres.length; i++) {
//     console.log(caracteres[i])
// }

// for (let caracter of caracteres) {
//     console.log(caracter)
// }

// //exemplo
// numeros = [1, 2, 3, 4, 5]
// let numeroAoQuadrado = []
// for (let i = 0; i < numeros.length; i++) {
//     numeroAoQuadrado.push(numeros[i] ** 2)
// }
// console.log(numeroAoQuadrado)

// //desestruturação de arrays
// let frutas = ['banana', 'maçã', 'morango', 'kiwi']
// let [primeiraFruta, , terceiraFruta] = frutas //para pular uma posição, basta deixar um espaço vazio
// console.log(primeiraFruta)
// console.log(terceiraFruta)

//exercício
books = ['Dom Quixote', '1984', 'O Senhor dos Anéis', 'Cem Anos de Solidão']
books.push('A Revolução dos Bichos', 'Os Miseráveis')
console.log(`Livros disponíveis: ${books}`)

bookSold = books.pop()
console.log(`Livro vendido: ${bookSold}`)

bookSelected = prompt('Digite o nome do livro que você deseja consultar')
bookChecker = books.includes(bookSelected)
if (bookChecker == true) {
    console.log(`O livro ${bookSelected} está disponível`)
} else {
    console.log(`O livro ${bookSelected} não está disponível`)
}

bestSellerBooks = []
bestSellerBooks.push(books[1], books[3], bookSold)
console.log(`Livros mais vendidos: ${bestSellerBooks}`)

for (let i = 0; i < books.length; i++) {
    console.log(`Livro ${i+1}: ${books[i]}`)
}