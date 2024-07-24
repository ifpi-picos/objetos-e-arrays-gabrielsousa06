/* Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados
 usando um for..of.
 */

const filmes = []

 for(let i = 0; i < 5; i++){
    const filme = prompt("Digite um filme:")
    filmes.push(filme)
 }

 for(const elemento of filmes){
    console.log(elemento)
 }