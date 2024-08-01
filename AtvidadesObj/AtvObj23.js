/*Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome. */

const nome = prompt("Digite seu nome:")

const nome1 = nome.split(" ")
const nomeInicial = nome1[0]

console.log(`Olá ${nomeInicial} `)