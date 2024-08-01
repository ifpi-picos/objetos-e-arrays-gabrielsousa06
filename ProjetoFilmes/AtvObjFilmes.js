console.log(" ----- Lista de Filmes ----- \n Digite - 1 para adicionar \n Digite - 2 para remover \n Digite - 3 para pesquisar \n Digite - 4 para ordenar \n Digite - 5 para exibir \n Digite - 6 para marcar como Assistido \n Digite - 7 para encerrar ")



let listaFilmes = []
let filmesAssistidos = []


let cont = 0

while(cont == 0){

    console.log(`${'\x1b[31m'}----- Lista de Filmes -----${'\x1b[0m'}\n\n${'\x1b[36m'} Digite - 1 para adicionar \n Digite - 2 para remover \n Digite - 3 para pesquisar \n Digite - 4 para ordenar \n Digite - 5 para exibir \n Digite - 6 para marcar como Assistido \n Digite - 7 para encerrar ${'\x1b[0m'}`)



    const funcao = parseInt(prompt("Digite o número de acordo com a função escolhida:"))
    if(funcao == 1){
        const tituloFilm = prompt("Digite o nome do Filme que deseja adicionar: ").trim()
        const anoFilm = Number(prompt("Digite o ano de lançamento do Filme: "))
        listaFilmes.push({Titulo: tituloFilm, Ano: anoFilm})
        console.log(listaFilmes)
    }
    


    else if(funcao == 2){
        const fRemov = prompt('filme a remover: ')
        for(let i = 0; i < listaFilmes.length; i++){
            if(listaFilmes[i].Titulo === fRemov ){
                listaFilmes.splice(i, 1)
            }

        }           


    }

    else if(funcao == 3){
        const tituloPesq = prompt("Digite o nome do Filme que deseja pesquisar: ").trim()
        const verificaFilm = listaFilmes.find(filme => filme.Titulo === tituloPesq )
        console.log(verificaFilm, 'Está na Lista para assitir')

    }

    
    else if(funcao == 4){
        const ordena = prompt("Digite TITULO para ordenar os filmes pelo Título ou Digite ANO para ordenar pelo ano:")
        if(ordena == 'TITULO'){
            listaFilmes.sort((a,b) => a.Titulo.localeCompare(b.Titulo)) 
        console.log(listaFilmes)
        }
        else{
            listaFilmes.sort((a,b) => a.Ano - b.Ano) 
        console.log(listaFilmes)
        }
        
        
    }

    else if(funcao == 5){
        console.log("Sua lista de filmes para assistir: ")
        console.table(listaFilmes)
        console.log(' ')
        console.log("Lista de Filmes Assistidos:")
        console.table(filmesAssistidos)
        
    }

    else if(funcao == 6){
       const filmeAss = prompt(`Marcar o filme ${listaFilmes[0].Titulo} como assistido?`)
       if(filmeAss == "Sim" || filmeAss == "sim"){
        let y = listaFilmes.shift()
        filmesAssistidos.push(y)
       }
    }

    else{       
        cont = 2;
    }
}




