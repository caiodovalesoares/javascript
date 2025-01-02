let userName = prompt('Digite seu nome')
let userAge = parseInt(prompt('Digite sua idade'))

if (userAge >= 18) {
    let student = prompt('Você é estudante?')
    if (student == 'sim') {
        if (userAge >= 25) {
            discount = '30%'
        }
        else {
            discount = '20%'
        }
    }
    if (student == 'nao' || student == 'não') {
        discount = '10%'
    }
    message = null
}

if (userAge < 18 && userAge >= 16) {
    message = 'Você precisa da autorização de um responsável'
    discount = null
}

if (userAge < 16) {
    message = 'Acesso negado!'
    discount = null
}

realDiscount = discount || 'nenhum'
realMessage = message || 'Nenhuma informação importante'

alert(`Nome: ${userName}\nDesconto: ${realDiscount}\n${realMessage}`)