/*Crie uma string com o seu nome e imprima o número de caracteres. */

let nome = 'Gabriel de Sousa Filho'
let novoNome = nome.split(" ")

let nomes = novoNome.map((letra) => {
    return letra.length
})

let soma = 0
for(let i = 0; i < nomes.length; i++){
    soma = soma + nomes[i]
}
console.log(`Seu nome é ${nome} e ele tem ${soma} caracteres`)
