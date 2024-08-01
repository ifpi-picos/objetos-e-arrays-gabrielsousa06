// Lista de Compras

let suaLista = []
let cont = 0

while(cont == 0){
    console.log(" ----- Lista de Compras ----- \n Digite - 1 para adicionar \n Digite - 2 para remover \n Digite - 3 para pesquisar \n Digite - 4 para ordenar \n Digite - 5 para exibir \n Digite - 6 para limpar \n Digite - 7 para encerrar ")
    const funcao = parseInt(prompt("Digite o número de acordo com a função escolhida:"))
    if(funcao == 1){
        const item = prompt("Digite o item que deseja adicionar: ")
        suaLista.push(item)
        console.log(suaLista)
    }
    else if(funcao == 2 ){
        const remove = (prompt("Digite o item que deseja remover:"))
        const itemRemov = suaLista.indexOf(remove)
        suaLista.splice(itemRemov,1)
        console.log(suaLista)
    }

    else if(funcao == 3){
        const verificaItem = prompt("Digite o item q deseja verificar: ")
        console.log(suaLista.includes(verificaItem), 'O item está na lista')
    }
    
    else if(funcao == 4){
        suaLista.sort((a,b) => a.localeCompare(b))
        console.log(suaLista)
    }

    else if(funcao == 5){
        console.log("Itens da sua Lista", suaLista)
    }

    else if(funcao == 6){
        const numeroItens = suaLista.length
        parseInt(numeroItens)
        suaLista.splice(0,numeroItens)
    }
    
    
    else{
        cont = 2;
        console.log("Itens da sua Lista", suaLista)
    }

    }
    