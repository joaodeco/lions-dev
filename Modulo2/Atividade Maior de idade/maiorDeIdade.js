let nome 
let idade
let diferenca
const maioridade = 18

console.log('Qual o seu nome?')
process.stdin.once('data', function (data){
    resposta1 = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data){
        resposta2 = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })

}) 

function processamento(nome, idade){

     if (resposta2 >= 18) {
     console.log(`Olá ${nome}, você é maior de idade`)
     }
     
     else {
    
        diferenca = maioridade - idade
            console.log(`Olá ${nome} você ainda é menor de idade, faltam ${diferenca} anos para você ficar de maior`)
     }

     }
    
