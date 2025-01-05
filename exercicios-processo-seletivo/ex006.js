function fibonacci(n) {
    fibonacciSequency = [0]
    fibonacciNumber = 1
    auxiliaryNumber = 0

    for (let i = 0; i < n-1; i++) {
        fibonacciSequency.push(fibonacciNumber)
        fibonacciNumber += auxiliaryNumber
        auxiliaryNumber = fibonacciNumber - auxiliaryNumber
    }

    return fibonacciSequency
}

n = parseInt(prompt('Quantos números da sequência de Fibonacci você deseja exibir?'))
console.log(fibonacci(n))