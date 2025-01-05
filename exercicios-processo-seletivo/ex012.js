function uniqueElementFinder(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        equalElements = 0
        for (let j = 0; j < numbers.length; j++) {
            if (i == j) continue
            if (numbers[i] == numbers[j]) equalElements += 1
        }
        if (equalElements == 0) uniqueElement = numbers[i]
    }

    return uniqueElement
}

numbers = [1,1,2,2,3,4,4,5,5]
console.log(`Elemento único: ${uniqueElementFinder(numbers)}`)