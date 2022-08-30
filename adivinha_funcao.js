import PromptSync from "prompt-sync"

const prompt = PromptSync();

const chute = Number(prompt("Chute um número: "));
console.clear()

function sorteiaNumero(palpite) {
  let randomico = Math.floor(Math.random() * 10);
  console.log(`O NUMERO PENSADO FOI ${randomico}`)
  if (randomico == palpite){
      return "VOCE ACERTOU!!"
  } else {
      return "VOCE ERROU!!"
  }
}
console.log(sorteiaNumero(chute));