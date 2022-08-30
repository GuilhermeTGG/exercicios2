import PromptSync from "prompt-sync"

const prompt = PromptSync();

const idade = Number(prompt("Qual é a sua idade? "));

let statusVoto = ``

if (idade < 16) {
    statusVoto = "VOTO NEGADO"

}else if (idade >= 16 && idade < 18) {
    statusVoto = "VOTO OPCIONAL"

}else if (idade >=70 ) { 
    statusVoto = "VOTO OPCIONAL"

}else {
    statusVoto = "VOTO OBRIGATORIO"
}

console.clear()
console.log(`Você tem o ${statusVoto}!`)