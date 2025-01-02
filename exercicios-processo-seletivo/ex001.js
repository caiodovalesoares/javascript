let a = parseInt(prompt('Digite o valor de A'))
let b = parseInt(prompt('Digite o valor de B'))
let c = parseInt(prompt('Digite o valor de C'))

let delta = (b**2) - (4*a*c)
console.log(delta)

if (delta > 0) {
        let x1 = ((-b) + delta**0.5) / (2*a)
        let x2 = ((-b) - delta**0.5) / (2*a)
        
        console.log(`Raízes: ${x1} e ${x2}`)
}
if (delta == 0) {
        let x = (-b) / (2*a)

        console.log(`Raiz: ${x}`)
}
if (delta < 0) {
        console.error('Delta negativo! A equação não possui raízes reais.')
}
