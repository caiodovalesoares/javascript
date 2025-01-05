const birthYears = [2010, 2002, 2009, 1998, 2015, 2006, 1967, 2018, 1958, 2008]

currentYear = parseInt(prompt('Em qual ano estamos?'))

function ageVerifier(birthYear) {
    if (currentYear - birthYear >= 18) {
        return true
    } else {
        return false
    }
}

for (let i = 0; i < birthYears.length; i++) {
    if (ageVerifier(birthYears[i]) == true) {
        console.log(`Pessoa ${i+1}: Maior de idade`)
    } else {
        console.log(`Pessoa ${i+1}: Menor de idade`)
    }
}