=begin 
  VOWEL BALANCER (Balanceadora de Vogais) - Ruby Edition (Versão inicial: 1.0)
  Este projeto foi baseado no exercício Vowel Balance do dia 11/08/2026 do site freeCodeCamp (https://www.freecodecamp.org/).
=end

require 'set'

# Esta função verifica se a quantidade de vogais na primeira metade de uma palavra é igual à da segunda metade,
# isolando o caractere central em comprimentos ímpares.
#
# @param word [String] A palavra ou string a ser balanceada.
# 
# @return [String] (Yes = Balanceada | No = Desbalanceada): O resultado do balanceamento das vogais encontradas em ambas as metades da palavra.
#
# @example
#   vowel_balancer("racecar")          #=>  Retornará "Yes" (É balanceada)
#   vowel_balancer("Lorem Ipsum")      #=>  Retornará "Yes" (Também é balanceada)
#   vowel_balancer("string")           #=>  Retornará "No"  (É desbalanceada)
def vowel_balancer(word)

  vowels = Set.new(%w[a e i o u A E I O U])
  middle = word.length / 2

  return "Yes" if middle.zero?

  left_half = word[0...middle]
  right_half = word[-middle..-1]

  get_vowels = ->(half) { half.chars.count { |char| vowels.include?(char) } }

  left_half_count = get_vowels.call(left_half)
  right_half_count = get_vowels.call(right_half)

  vowel_balancing_result = left_half_count == right_half_count

  vowel_balancing_result ? "Yes" : "No"
end

test_words = [
  "racecar",
  "Lorem Ipsum",
  "Kitty Ipsum",
  "string",
  " ",
  "abcdefghijklmnopqrstuvwxyz",
  "123A#b!E&456-o.U"
]

puts

test_words.each do |word|
  puts "Word: #{word.ljust(30)}      ||      Balanced: #{vowel_balancer(word).rjust(15)}"
  puts
end