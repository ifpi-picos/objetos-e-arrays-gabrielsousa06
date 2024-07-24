/*Crie um array de objetos representando pessoas com nome e idade, 
e use find para encontrar a primeira pessoa com idade maior que 18. */

const pessoas = [
    {nome:'GB', idade: 18},
    {nome:'Aluisio', idade: 19},
    {nome:'Bg', idade: 29},
    {nome:'Kauvis', idade: 10},
    {nome:'arturo do Grau', idade: 9}
]

const pessoasdeMaior = pessoas.find((pessoa) => { 
    return pessoa.idade > 18

})

console.log(pessoasdeMaior)


