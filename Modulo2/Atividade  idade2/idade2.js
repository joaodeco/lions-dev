let nome 
let idade
let aniversario
let anoDeNascimento
const ano = 2024

console.log("Como é seu nome?")

process.stdin.once('data', function (data) {

    nome = data.toString().trim()
    console.log("Qual é a sua idade?")

    process.stdin.once('data', function(data) {

        idade = parseInt(data.toString().trim())
        console.log('Você ja fez aniversario?')

            process.stdin.once('data', function(data){

                aniversario = data.toString().trim()
                processamento(nome, idade, aniversario)
                process.exit()
            })
            
    })
})

function processamento(nome, idade, aniversario) {

    let niver

    if (aniversario == 'sim') {
        
        niver = true

    }
    else{
      
        niver = false

    }

    anoDeNascimento = ano - idade 

    if (niver == true){

        
        console.log(`Olá ${nome} você nasceu no ano de de ${anoDeNascimento}`)

    }

    else {

        
        console.log(`Olá ${nome} você nasceu no ano de ${anoDeNascimento-1}`)


    }
}