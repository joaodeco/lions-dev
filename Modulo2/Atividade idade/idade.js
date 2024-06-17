let nome 
let idade
const ano = 2024
let anoDeNascimento

console.log("Como é seu nome?")

process.stdin.once('data', function (data) {
    nome = data.toString().trim()
    console.log("Qual é a sua idade?")

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
function processamento(nome, idade){
    anoDeNascimento =  ano - idade
    console.log(`Olá ${nome},você nasceu no ano de ${anoDeNascimento} se ja fez aniversário ou ${anoDeNascimento-1} se não fez aniversário ainda `)
}