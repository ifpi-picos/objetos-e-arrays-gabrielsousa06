import { adicionaItens } from "./ListaCompras1"; 
import { removeItens } from "./ListaCompras1";
import { pesquisaItens } from "./ListaCompras1";
import { ordenaItens } from "./ListaCompras1";
import { exibeItens } from "./ListaCompras1";
import { limpaItens } from "./ListaCompras1";
import { encerra } from "./ListaCompras1";

let suaLista = []
let cont = 0
while(cont == 0){
    console.log(" ----- Lista de Compras ----- \n Digite - 1 para adicionar \n Digite - 2 para remover \n Digite - 3 para pesquisar \n Digite - 4 para ordenar \n Digite - 5 para exibir \n Digite - 6 para limpar \n Digite - 7 para encerrar ")
    let funcao = parseInt(prompt("Digite o número de acordo com a função escolhida:"))
    
    switch (funcao) {
        case 1:
            adicionaItens(suaLista)
            break;
        case 2:
            removeItens(suaLista)
            break;
        case 3:
            pesquisaItens(suaLista)
            break;
        case 4:
            ordenaItens(suaLista)
            break;
        case 5:
            exibeItens(suaLista)
            break;
        case 6:
            limpaItens(suaLista)
            break;
        case 7:
            encerra(suaLista)
            break;
    }
    
}