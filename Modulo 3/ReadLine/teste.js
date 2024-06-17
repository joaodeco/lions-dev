let idade = 15
let nome = 'murilo'
const maioridade = 18
const ano = 2024
let anosParaMaioridade = maioridade - idade
let aniversario = 'sim'
let diferença = ano - idade


 switch(true){
    case idade >= maioridade && aniversario == 'sim':
        console.log(`Olá ${nome}, você é maior de idade e nasceu no ano de ${diferença}`)
        break
    case idade >= maioridade && aniversario != 'sim':
        console.log (`Olá ${nome}, você é maior de idade e nasceu no ano de ${diferença - 1}`)
        break
    case idade < maioridade:
        console.log(`Olá ${nome}, você ainda é menor de iade, faltam apenas ${anosParaMaioridade} para você atingir a maioridade`)
        break
    }





