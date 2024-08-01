import { adicionaItens } from "./ProjCompras"; 
import { removeItens } from "./ProjCompras";
import { pesquisaItens } from "./ProjCompras";
import { ordenaItens } from "./ProjCompras";
import { exibeItens } from "./ProjCompras";
import { limpaItens } from "./ProjCompras";
import { encerra } from "./ProjCompras";

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