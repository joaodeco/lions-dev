//Lista de notas
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media
let acimaMedia = []
let reprovados
let maiorNota = notas[0]
let menorNota
let soma




//Media
for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
media = soma / notas.length
console.log(`A media das notas é ${media}`)

//Maior nota 
for(let i = 0; i < notas.length; i++){
    if(maiorNota < notas[i]) {
        maiorNota = notas[i]
    }
}
console.log(`A maior nota é ${maiorNota}`)

//Menor nota
for(let i = 0; i < notas.length; i++){
    if(menorNota > notas[i]){
    menorNota = notas[i]
    }
}
console.log(`A menor nota é ${menorNota}`)

//Notas acima da media
for(let i = 0; i < notas.length; i++){
    if(acimaMedia == notas < 6.0){}
}
console.log(`As notas que estão acima da media são ${acimaMedia}, no total  elas são ${acimaMedia.length}`)


//Adicionando uma nova nota
notas.push [4.0]
console.log(`O vetor atualizado é ${notas}`)

//Notas reprovadas
for(let i = 0; i < notas.length; i++){
    if (reprovados = notas > 6.0){}
}
console.log (`As notas reprovadas são ${reprovados}, no total temos ${reprovados.length} notas reprovadas`)


