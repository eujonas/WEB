const nome = "Jon4s"

console.log(nome.charAt(4))
console.log(nome.charAt(6)) // nao aparece nada msm rs
console.log(nome.charCodeAt(3)) //na posicao 3, ele transforma o caractere em valor binário
console.log(nome.indexOf('n'))

console.log(nome.substring(1)) 
console.log(nome.substring(0, 3)) //busca na variavel da posicao 0 , contanto 3 posicoes, ou seja, 0,1,2

console.log((nome).concat("!")) //concatenacao de palavras/variaveis do tipo string
console.log('nome:' + nome + "!") //concatenacao = junta strings
console.log(nome.replace(4, "a")) //procura na variavel o valor e substitui pela string 'a'

console.log('Ana,Maria,Pedro'.split(','))