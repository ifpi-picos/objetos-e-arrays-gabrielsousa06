/* Crie um array de objetos representando carros, cada um com propriedades nome e ano, 
e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.
*/

const carros = [
    {nome: 'Gol', ano: 2010},
    {nome: 'Camaro', ano: 2012},
    {nome: 'Kwid', ano: 2015},
    {nome: 'Audi Q3', ano: 2005}

]

const carrosAtuais = carros.filter((carro) => {
    return carro.ano > 2010
})

console.log(carrosAtuais)