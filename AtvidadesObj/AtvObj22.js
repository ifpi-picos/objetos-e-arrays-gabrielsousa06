/*Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome. */

function nomeCompleto(){
let nomecomp = prompt("Digite seu Nome:")

let nome = nomecomp.split(" ")
let nome1 = nome[0]
let nome2 = nome[nome.length -1]
console.log(`Olá ${nome1} ${nome2} `)
}

nomeCompleto()
