let valueInReais = parseFloat(prompt('Digite o valor em reais'))

let valueInEuro = (valueInReais / 6.1)
let valueInDollars = (valueInReais / 5.7)

if (valueInReais >= 2) {
alert(`${valueInReais} reais em euro: ${valueInEuro.toFixed(2)}\n${valueInReais} reais em dólar: ${valueInDollars.toFixed(2)}`)
} else {
    alert(`${valueInReais} real em euro: ${valueInEuro.toFixed(2)}\n${valueInReais} real em dólar: ${valueInDollars.toFixed(2)}`)
}