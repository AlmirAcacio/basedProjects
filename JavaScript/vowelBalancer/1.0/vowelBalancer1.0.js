/* VOWEL BALANCER (Balanceadora de Vogais) - JavaScript Edition (Versão inicial: 1.0)
   Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/). */

/**
 * Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
 * isolando o caractere central em comprimentos ímpares.
 *
 * @param {string} word - A palavra ou string a ser balanceada.
 * @returns {string} ("Yes" = Balanceada | "No" = Desbalanceada) - O resultado do balanceamento das vogais encontradas em ambas as metades da palavra.
 * 
 * @example
 * console.log(vowelBalancer("racecar"))             // Retornará "Yes" (É balanceada)
 * console.log(vowelBalancer("Lorem Ipsum"))         // Retornará "Yes" (Também é balanceada)
 * console.log(vowelBalancer("string"))              // Retornará "No" (É desbalanceada)
 */

function vowelBalancer(word) {

    const vowels = new Set("aeiouAEIOU")
    const middle = Math.floor(word.length / 2)

    if (middle === 0) {
        return "Yes"
    }

    const leftHalf = word.slice(0, middle)
    const rightHalf = word.slice(-middle)

    const getVowels = half => [...half].filter(char => vowels.has(char)).length

    const leftHalfCount = getVowels(leftHalf)
    const rightHalfCount = getVowels(rightHalf)

    const vowelBalancingResult = leftHalfCount === rightHalfCount

    return vowelBalancingResult ? "Yes" : "No"
}

let testWords = [
    "racecar", 
    "Lorem Ipsum",
    "Kitty Ipsum",
    "string",
    " ",
    "abcdefghijklmnopqrstuvwxyz",
    "123A#b!E&456-o.U"
]

console.log()

testWords.forEach(word => {
    console.log(`Word: ${word.padEnd(30)}      ||      Balanced: ${vowelBalancer(word).padStart(15)}\n`)
})