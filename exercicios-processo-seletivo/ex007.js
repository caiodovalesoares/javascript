const sentence = prompt("Digite uma frase:");

const formattedSentence = sentence.replace(/\s+/g, '').toLowerCase();

const isPalindrome = formattedSentence === formattedSentence.split('').reverse().join('');

if (isPalindrome) {
    console.log("A frase é um palíndromo.");
} else {
    console.log("A frase não é um palíndromo.");
}