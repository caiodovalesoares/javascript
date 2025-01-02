let pessoa = [
{
    nome: 'João',
    idade: 19,
    estudante: true,
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    endereco: {
        rua: 'Passo da Pátria',
        numero: 12,
        bairro: 'Ingá'
    }
},
{
    nome: 'Maria',
    idade: 27,
    estudante: false,
    habilidades: ['C', 'Python', 'PHP']
}
]

console.log(pessoa[0].nome)
console.log(pessoa[0].habilidades[2])
console.log(pessoa[0].endereco)
console.log(pessoa[0].endereco.rua)
console.log(pessoa[1])
console.log(pessoa[1].habilidades)

//desestruturação de objetos
let { nome, estudante } = pessoa[1]
console.log(nome)
console.log(estudante)

//alterando objetos
pessoa[0].nome = 'Caio'
pessoa[0].altura = 1.75
delete pessoa[0].estudante

console.log(pessoa[0])