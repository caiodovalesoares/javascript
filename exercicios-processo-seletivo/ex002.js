let answer = 'S'

while (answer == 'S' || answer == 's') {
    let number = parseInt(prompt('Digite um número positivo'))

    for (let i = number - 1; i > 1; i--) {
    number *= i
    }

    console.log(number)

    answer = prompt('Deseja calcular o fatorial de outro número?\n(S) para sim\n(N) para não')

    if (answer == 'N' || answer == 'n') {
        break
    }
}