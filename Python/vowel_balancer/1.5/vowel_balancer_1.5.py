""" VOWEL BALANCER (Balanceadora de Vogais) - Python Edition (Versão da primeira atualização: 1.5)
    Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/). """

def vowel_balancer(word: str, mode: str = None) -> dict:
    """
    Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
    isolando o caractere central em comprimentos ímpares.
    
    Args:
        word (str): A palavra ou string a ser balanceada.
        mode (str, optional): O modo de conversão para o retorno das vogais encontradas em ambas as metades da palavra ("lower" = Minúsculo | "upper" = Maiúsculo | None = Padrão).
    
    Returns:
        dict: Um dicionário em formato de relatório com os seguintes campos:
        - 'balanced' (str): O resultado do balanceamento das vogais encontradas em ambas as metades da palavra (Yes = Balanceada | No = Desbalanceada)
        - 'left_side' (str): As vogais encontradas no lado esquerdo da palavra, separadas por vírgula. Se não houver nenhuma vogal, retornará "No vowels found".
        - 'right_side' (str): As vogais encontradas no lado direito da palavra, separadas por vírgula. Se não houver nenhuma vogal, retornará "No vowels found".

    Examples:
    
        >>> print(vowel_balancer("racecar"))                     # {Retornará Balanced: "Yes" (É balanceada) e (Lado Esquerdo: a | Lado Direito: a)}

        >>> print(vowel_balancer("Lorem Ipsum", "lower"))        # {Retornará "Yes" (Também é balanceada) e (Lado Esquerdo: o, e | Lado Direito: i, u)}

        >>> print(vowel_balancer("string", "upper"))             # {Retornará "No" (É desbalanceada) e (Lado Esquerdo: Sem Vogais | Lado Direito: I)}
    """

    valid_modes = {"lower", "upper"}

    if mode is not None and mode not in valid_modes:
        raise ValueError( f"Invalid Mode: '{mode}'. Expected 'lower' (Lowercase Mode), 'upper' (Uppercase Mode) or no parameters (Standard Mode)\n")
    
    vowels = set("aeiouAEIOU")          
    middle = len(word) // 2

    left_half = word[:middle]
    right_half = word[-middle:] if middle > 0 else ""

    def get_vowels(half: str) -> list[str]:
        return [char for char in half if char in vowels]    

    left_half_vowels = get_vowels(left_half)
    right_half_vowels = get_vowels(right_half)

    if mode == "lower":
        left_half_vowels = [char.lower() for char in left_half_vowels]
        right_half_vowels = [char.lower() for char in right_half_vowels]

    elif mode == "upper":
        left_half_vowels = [char.upper() for char in left_half_vowels]
        right_half_vowels = [char.upper() for char in right_half_vowels]

    left_half_count = len(left_half_vowels)
    right_half_count = len(right_half_vowels)

    vowel_balancing_result = left_half_count == right_half_count

    def check_vowels(vowels_list: list[str]) -> str:
        return ", ".join(vowels_list) if len(vowels_list) > 0 else "No vowels found"

    return {
        "balanced": "Yes" if vowel_balancing_result is True else "No",
        "left_side": check_vowels(left_half_vowels),
        "right_side": check_vowels(right_half_vowels),
    }

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

try:
    for word in test_words:
        report = vowel_balancer(word)                       # Standard Mode (Retorno das Vogais de forma padrão)
        # report = vowel_balancer(word, "lower")              # Lowercase Mode (Retorno das Vogais em forma minúscula)
        # report = vowel_balancer(word, "upper")              # Uppercase Mode (Retorno das Vogais em forma maiúscula)

        """
        error_test = vowel_balancer("Error Test", "error")          # Para teste de tratativa de erro de modo
        print(error_test)
        """

        print(
            f"Word: {word:>35}\n"
            f"Balanced: {report['balanced']:>31}\n"
            f"Left Side: {report['left_side']:>30}\n"
            f"Right Side: {report['right_side']:>29}\n"
        )

except ValueError as error:
    print(f"Error: {error}")

# print(vowel_balancer.__doc__)             # Para testes da docstring através do terminal.