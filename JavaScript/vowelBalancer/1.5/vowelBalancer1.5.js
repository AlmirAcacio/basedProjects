/* VOWEL BALANCER (Balanceadora de Vogais) - JavaScript Edition (Versão da primeira atualização: 1.5)
   Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/). */

/**
 * Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
 * isolando o caractere central em comprimentos ímpares.
 *
 * @param {string} word - A palavra ou string a ser balanceada.
 * @param {string} [mode=null] - O modo de conversão para o retorno das vogais encontradas em ambas as metades da palavra ("lower" = Minúsculo | "upper" = Maiúsculo | null ou undefined = Padrão).
 * @returns {{balanced: string, leftSide: string, rightSide: string}} Um objeto em formato de relatório com o resultado do balanceamento ("Yes" = Balanceada | "No" = Desbalanceada) e as vogais encontradas em cada uma das metades da palavra. Caso não houver, retornará "No vowels found".
 * 
 * @example
 * console.log(vowelBalancer("racecar"))      
 * // Retornará "Yes" (É balanceada) e (Lado Esquerdo: a | Lado Direito: a)
 * 
 * console.log(vowelBalancer("Lorem Ipsum", "lower"))    
 * // Retornará "Yes" (Também é balanceada) e (Lado Esquerdo: o, e | Lado Direito: i, u)
 * 
 * console.log(vowelBalancer("string", "upper"))    
 * // Retornará "No" (É desbalanceada) e (Lado Esquerdo: Sem Vogais | Lado Direito: I)
 */

function vowelBalancer(word, mode = null) {

    const validModes = new Set(["lower", "upper"])

    if (mode !== null && !validModes.has(mode)) {
        throw new Error(
            `Invalid Mode: '${mode}'. Expected 'lower' (Lowercase Mode), 'upper' (Uppercase Mode) or no parameters (Standard Mode).\n`
        )
    }

    const vowels = new Set("aeiouAEIOU")
    const middle = Math.floor(word.length / 2)

    const leftHalf = word.slice(0, middle)
    const rightHalf = middle > 0 ? word.slice(-middle) : ""

    const getVowels = half => [...half].filter(char => vowels.has(char))

    let leftHalfVowels = getVowels(leftHalf)
    let rightHalfVowels = getVowels(rightHalf)

    if (mode === "lower") {
        leftHalfVowels = leftHalfVowels.map(char => char.toLowerCase())
        rightHalfVowels = rightHalfVowels.map(char => char.toLowerCase())
    } 
    
    else if (mode === "upper") {
        leftHalfVowels = leftHalfVowels.map(char => char.toUpperCase())
        rightHalfVowels = rightHalfVowels.map(char => char.toUpperCase())
    }
    
    const leftHalfCount = leftHalfVowels.length
    const rightHalfCount = rightHalfVowels.length

    const vowelBalancingResult = leftHalfCount === rightHalfCount

    const checkVowels = vowelsArray => vowelsArray.length > 0 ? vowelsArray.join(', ') : "No vowels found"

    return {
        balanced: vowelBalancingResult ? "Yes" : "No",
        leftSide: checkVowels(leftHalfVowels),
        rightSide: checkVowels(rightHalfVowels)
    }
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

try {
    testWords.forEach(word => {
        const report = vowelBalancer(word)                      // Standard Mode (Retorno das Vogais de forma padrão)
        // const report = vowelBalancer(word, "lower")             // Lowercase Mode (Retorno das Vogais em forma minúscula)
        // const report = vowelBalancer (word, "upper")            // Uppercase Mode (Retorno das Vogais em forma maiúscula)
        
        /*
        const errorTest = vowelBalancer("Error Test", "error")          // Para teste de tratativa de erro de modo
        console.log(errorTest)
        */

        console.log(
            `Word: ${word.padStart(35)}\n` +
            `Balanced: ${report.balanced.padStart(31)}\n` + 
            `Left Side: ${report.leftSide.padStart(30)}\n` +
            `Right Side: ${report.rightSide.padStart(29)}\n`
        )
    }) 

} catch (error) {
    console.error(`Error: ${error.message}`)
}