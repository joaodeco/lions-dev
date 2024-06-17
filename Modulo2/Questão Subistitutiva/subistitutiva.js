//1
let nome = 'Murilo'

console.log(nome)


//2
let numero = 3
let booleana
if (numero %2 == 0){
    booleana = true

    console.log(booleana)

}else{
    booleana = false
    console.log(booleana)
}

//3

numero = 20

if (numero < 0){
    console.log('O seu numero é negativo')
}else if (numero > 0){
    console.log('O seu numero é positivo')
}else{
    console.log("O seu numero é zero")
}

//7
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media
let soma = 0
let notaMaxima= notas[0]
let notaMinima = notas[0]
let acimaMedia = 0 
let reprovados = 0

//A
for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
media = soma / notas.length
console.log(`A media é ${media}`)

//B
for(let i = 0; i < notas.length; i++){
    if(notas[i]<notaMinima){
        notaMinima = notas[i]
    }if(notas[i]>notaMaxima){
        notaMaxima = notas[i]
    }
}
console.log(`A maior nota é ${notaMaxima}, e a menor é ${notaMinima}`)

//C

for(let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        console.log(notas[i])
        acimaMedia++
    }
}
console.log(`As notas acima da media são ${acimaMedia}`)

//D
notas.push (8.0)
console.log(`O vetor atualizado é ${notas}`)

//E

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 6.0 ){
        console.log(notas[i])
        reprovados ++
    }
}
console.log(`As notas reprovadas são ${reprovados}`)

