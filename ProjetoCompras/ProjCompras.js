export function adicionaItens(lista){
    const item = prompt("Digite o item que deseja adicionar: ")
    lista.push(item)
    console.log(lista)
}



export function removeItens(lista){
    const remove = (prompt("Digite o item que deseja remover:"))
        const itemRemov = lista.indexOf(remove)
        lista.splice(itemRemov,1)
        console.log(lista)
}



export function pesquisaItens(lista){
    const verificaItem = prompt("Digite o item q deseja verificar: ")
        console.log(lista.includes(verificaItem), 'O item está na lista')
}



export function ordenaItens(lista){
    lista.sort((a,b) => a.localeCompare(b))
    console.log(lista)
}



export function exibeItens(lista){
    console.log("Itens da sua Lista", lista)
}



export function limpaItens(lista){
    const numeroItens = lista.length
        parseInt(numeroItens)
        lista.splice(0,numeroItens)
}



export function encerra(lista){
    console.log("Itens da sua Lista", lista)
}

