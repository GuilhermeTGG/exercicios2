import PromptSync from "prompt-sync"

const prompt = PromptSync();

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let nulo = 0
let branco = 0 

function autorizaVoto(idade){

if (idade < 16) {
    return "NEGADO"
}else if (idade >= 16 && idade < 18) {
    return "VOTO OPCIONAL"
}else if (idade >=70 ) { 
    return "VOTO OPCIONAL"
}else {
    return "VOTO OBRIGATORIO"
}}

function votacao(autorizacao, voto){
    if(autorizaVoto === "VOTO OPCIONAL" || autorizaVoto === "VOTO OBRIGAORIO"){
        voto = Number(prompt("Digite eu voto: [1]C1 [2]C2 [3]C3 [4]Nulo [5]Branco"));
        if (voto = 1){
            candidato1++
        }else if(voto = 2){
        candidato2++
    }else if(voto = 3){
        canditado3++
    }else if (voto = 4){
        nulo++
    }else
    branco++
    }
}
