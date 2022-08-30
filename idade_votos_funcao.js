import PromptSync from "prompt-sync"

const prompt = PromptSync();

function votacao(idade){

    if (idade <16){
        return "VOCE NEGADO!"
    } else if (idade >= 70 || idade < 18 && idade > 16){
        return "VOTO OPCIONAL"
    } else if (idade >= 18 && idade < 70){
        return "VOTO OBRIGATORIO"
    }
}

const idade = Number(prompt(`Digite a sua idade: `))

console.log(votacao(idade))