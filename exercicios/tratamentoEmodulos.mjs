//try, catch, finally

function dividir(a, b) {
    if (b===0) {
        throw new Error('Divisão por zero!'); //estabelece uma mensagem de erro
    } else {
        return a/b
    }
}

try { //tenta o bloco
    console.log(dividir(5, 0))
} catch (error) { //caso dê erro
    console.error(error.message) //utiliza a mensagem de erro estabelecida
} finally { //mensagem exibida no final (não obrigatório)
    console.log('Fim da execução')
}

import { subtrair, multiplicar } from './modulos.mjs';

console.log(subtrair(8, 2))
console.log(multiplicar(2, 5))

//node (nome do arquivo) -> no terminal para executar