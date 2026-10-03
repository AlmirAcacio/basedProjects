--[[ VOWEL BALANCER (Balanceadora de Vogais) - Lua Edition (Versão inicial: 1.0)
    Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/). ]]

--- Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
--- isolando o caractere central em comprimentos ímpares.
--- 
--- @param word string: A palavra ou string a ser balanceada.
--- @return string (Yes = Balanceada | No = Desbalanceada): O resultado do balanceamento das vogais encontradas em ambas as metades da palavra.
---
--- @usage
--- 
--- print(vowelBalancer("racecar"))             -- Retornará "Yes" (É balanceada)
--- 
--- print(vowelBalancer("Lorem Ipsum"))         -- Retornará "Yes" (Também é balanceada)
--- 
--- print(vowelBalancer("string"))              -- Retornará "No" (É desbalanceada)
--- 
local function vowelBalancer(word)

    local vowels = {
        a = true, e = true, i = true, o = true, u = true,
        A = true, E = true, I = true, O = true, U = true
    }

    local middle = math.floor(#word / 2)

    if middle == 0 then
        return "Yes"
    end

    local leftHalf = word:sub(1, middle)
    local rightHalf = word:sub(-middle)

    local function getVowels(half)
        local total = 0
        for i = 1, #half do
            local char = half:sub(i, i)
            if vowels[char] then
                total = total + 1
            end
        end
        return total
    end

    local leftHalfCount = getVowels(leftHalf)
    local rightHalfCount = getVowels(rightHalf)

    local vowelBalancingResult = leftHalfCount == rightHalfCount

    return vowelBalancingResult and "Yes" or "No"
end

local test_words = {
    "racecar",
    "Lorem Ipsum",
    "Kitty Ipsum",
    "string",
    " ",
    "abcdefghijklmnopqrstuvwxyz",
    "123A#b!E&456-o.U"
}

print()

for _, word in ipairs(test_words) do
    print(string.format("Word: %-30s      ||      Balanced: %15s\n", string.format(word), vowelBalancer(word)))
end