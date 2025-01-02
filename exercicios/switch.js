operation = prompt('Digite a operação desejada\n+ para adição\n- para subtração\nx para multiplicação\n/ para divisão')

let n1 = parseInt(prompt('Digite um valor'))
let n2 = parseInt(prompt('Digite outro valor'))

switch (operation) {
    case '+':
        alert(n1+n2)
        break
    case '-':
        alert(n1-n2)
        break
    case 'x':
        alert(n1*n2)
        break
    case '/':
        alert(n1/n2)
        break
}