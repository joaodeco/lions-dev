let notas = [6, 4, 10, 7, 8, 9, 3, 1, 2, 5]
let soma = 0
let mediaCalculada
let maiorNota = notas[0]
let menorNota = notas[0]
let acimaMedia = 0
let reprovados = 0

//Calcular Media//
for(let i =0;i < notas.length; i++) {
    soma = soma + notas[i]
}

mediaCalculada = soma / notas.length

console.log(`A media é: ${mediaCalculada}`)

//Nota mais alta e nota mais baixa//
for(let i =0;i < notas.length; i++){
    if(notas[i] > maiorNota){
        maiorNota = notas[i]    
    }
    if (notas[i] < menorNota){
        menorNota= notas[i]
    }
    
}
console.log(`A maior nota é: ${maiorNota}, e a menor nota é: ${menorNota}`)

//Notas acima da media//
for(let i =0;  i < notas.length; i++){

    if (notas[i] >= mediaCalculada){
        acimaMedia++ 
    }
}
console.log(`Ao todo temos  ${acimaMedia} notas acima da media, notas acima da media${mediaCalculada}`)

notas.push (11)

console.log(`O vetor atualizado é: ${notas}`)

//Notas resprovadas//

for(let i =0;  i < notas.length; i++){

    if (notas[i] < 8){
        reprovados++
    }

}
console.log(`As notas reprovadas são ${reprovados}`)
