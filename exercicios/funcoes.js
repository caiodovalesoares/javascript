// function helloWorld() {
//     console.log('Hello, World!')
// }
// helloWorld()

// function numeroAoQuadrado(num) {
//     num **= 2
//     return num
// }
// console.log(numeroAoQuadrado(5))

// function media(a,b,c) {
//     return (a + b + c)/3
// }
// console.log(media(1,3,5))

// //atribuir valor reserva
// function saudacao(nome = 'visitante') {
//     console.log(`Olá, ${nome}!`)
// }
// saudacao()

// let pessoa = {
//         nome: 'João',
//         idade: 19,
//         estudante: true,
//         habilidades: ['JavaScript', 'HTML', 'CSS'],
//         endereco: {
//             rua: 'Rua Passo da Pátria',
//             numero: 12,
//             bairro: 'Ingá'
//         }
//     }

// function mostrarDados (dados) {
//     console.log(`Nome: ${dados.nome}`)
//     console.log(`Idade: ${dados.idade}`)
//     console.log(`Endereço: ${dados.endereco.rua}`)
// }
// mostrarDados(pessoa)

// function fatorial(n) {
//     fat = 1
//     for (n; n > 1; n--){
//         fat = fat*n
//     }
//     return fat
// }
// console.log(fatorial(5))

// console.error('Número inválido')
// console.warn('Digite novamente')

// //métodos

// let pessoa = {
//     nome: 'João',
//     idade: 19,
//     dizerOla() {
//         //this é usado para pegar informações do mesmo objeto
//         console.log(`Olá, ${this.nome}`)
//     }
// }
// pessoa.dizerOla()

// //função nomeada
// //função normal

// //função anônima

// let dizerTchau = function() {
//     console.log('tchau')
// }
// dizerTchau()

// //arrow function

// let dizerOi = () => {
//     console.log('oi')
// }

// //let multiplicar = (a, b) => {
// //     return a*b
// // }  forma longa

// //função callback
// let multiplicar = (a, b) => a*b //forma curta

// let dividir = (a, b) => a/b

// let operacao = (a, b, operacao) => operacao(a,b)

// console.log(operacao(8, 4, dividir))

// //forEach, percorre uma array
// let numeros = [1, 2, 3, 4, 5];

// numeros.forEach(numero => {
//     console.log(numero * 2);
// });

const personagens = [
    {
        nome: 'Luke Skywalker',
        altura: 172,
        peso: 77,
        corCabelo: 'blond',
        corOlhos: 'blue',

    },

    { 
        nome: 'C-3PO',
        altura: 167,
        peso: 75,
        corCabelo: 'n/a',
        corOlhos: 'yellow'
    },

    {
        nome: 'R2-D2',
        altura: 96,
        peso: 32,
        corCabelo: 'n/a',
        corOlhos: 'red'
    },
    {
        nome: 'Darth Vader',
        altura: 202,
        peso: 136,
        corCabelo: 'black',
        corOlhos: 'yellow'
    }
]

//map, percorre uma array e retorna uma nova array
let nomes = personagens.map(personagem => personagem.nome)
console.log(nomes)

//filter, percorre uma array e retorna uma nova array com os elementos que atendem a condição
let altos = personagens.filter((personagem) => personagem.altura >= 170)
console.log(altos)

//sort, ordena uma array
let ordenaAltura = personagens.slice().sort((a,b) => a.altura - b.altura)
console.log(ordenaAltura)

//reduce, reduz a array a um único valor
let somaPeso = personagens.reduce((acumulador, personagem) => acumulador + personagem.peso, 0)
console.log(somaPeso)