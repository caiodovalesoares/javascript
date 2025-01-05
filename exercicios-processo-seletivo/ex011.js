let quantity = parseInt(prompt('Quantos números vão ter na lista?'))
let numbers = []

for (let i = 0; i < quantity; i++) {
    numbers.push(parseInt(prompt(`Digite o ${i+1}° número`)))
}

let numbersInAscendingOrder = 0
for (let i = 0; i < (numbers.length - 1); i++) {
    if (numbers[i] < numbers[i+1]) {
        numbersInAscendingOrder += 1
    }
}

console.log(`${numbers}\nNúmeros em ordem crescente: ${numbersInAscendingOrder}`)