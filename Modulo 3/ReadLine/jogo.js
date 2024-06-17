console.log('Boas vindas ao nosso jogo de adivinhação')
console.log('Atenção você tem 10 chances')

let numeroRodadas = 0
let limiteRodadas = 10

const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


let numeroSorteado = Math.floor(Math.random() * 100)  + 1 
jogar()

function jogar(){
    numeroRodadas ++
    rl.question('Digite um número entre 1 e 100: ' , (palpite) =>{
        if (numeroRodadas == limiteRodadas){
            console.log(`Suas chances acabaram, o número éra ${numeroSorteado}`)
            rl.close()
        }else{
            switch(true){
                case palpite < numeroSorteado:
                    console.log("Muito baixo!")
                    jogar()
                    break
                case palpite > numeroSorteado:
                    console.log('Muito alto!')
                    jogar()
                    break
                case palpite == numeroSorteado:
                    console.log('Você acertou')
                    console.log(`Você precisou de ${numeroRodadas} rodadas para acertar o número!`)
                    rl.close()
                    break
                default:
                    console.log('Caractere inválido!!, tente novamente')
                jogar()
                break
                }0

        }
        
    })
}
