""" VOWEL BALANCER (Balanceadora de Vogais) - Python Edition (Versão inicial: 1.0)
    Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/). """

def vowel_balancer(word: str) -> str:
    """
    Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
    isolando o caractere central em comprimentos ímpares.
    
    Args:
        word (str): A palavra ou string a ser balanceada.
    
    Returns:
        str (Yes = Balanceada | No = Desbalanceada): O resultado do balanceamento das vogais encontradas em ambas as metades da palavra.

    Examples:
    
        >>> print(vowel_balancer("racecar"))            # Retornará "Yes" (É balanceada)

        >>> print(vowel_balancer("Lorem Ipsum"))        # Retornará "Yes" (Também é balanceada)

        >>> print(vowel_balancer("string"))             # Retornará "No" (É desbalanceada)
    """

    vowels = set("aeiouAEIOU")          
    middle = len(word) // 2

    if middle == 0:                     
        return "Yes"

    left_half = word[:middle]
    right_half = word[-middle:]

    def get_vowels(half: str) -> str:

        return sum(char in vowels for char in half)    

    left_half_count = get_vowels(left_half)
    right_half_count = get_vowels(right_half)

    vowel_balancing_result = left_half_count == right_half_count

    return "Yes" if vowel_balancing_result is True else "No"

test_words = [
    "racecar", 
    "Lorem Ipsum",
    "Kitty Ipsum",
    "string",
    " ",
    "abcdefghijklmnopqrstuvwxyz",
    "123A#b!E&456-o.U"
]

print()

for word in test_words:
    print(f"Word: {word:<30}      ||      Balanced: {vowel_balancer(word):>15}\n")

# print(vowel_balancer.__doc__)             # Para testes da docstring através do terminal.