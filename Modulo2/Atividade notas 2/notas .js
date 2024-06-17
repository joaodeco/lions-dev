let resposta

console.log('Qual foi a sua nota? ')
    process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    if (resposta >= 70 )
        console.log('Você foi aprovado! ')
    
        else if (resposta < 70) {
            console.log('Você foi reprovado!')
        }
        else  {
            console.log('Seu caractere é invalido!')
        }
        console.log(calculoNotas (resposta))
    process.exit()

})

function calculoNotas(resposta){
    switch (true) {
        case (resposta>= 0 && resposta<= 60):
        return 'Sua nota foi F'
        break

        case (resposta>= 60 && resposta<= 69):
        return 'Sua nota foi D'
        break

        case (resposta>= 70 && resposta<= 79):
        return 'Sua nota foi C'
        break

        case (resposta>= 80 && resposta<= 89):
        return 'Sua nota foi B'
        break

        case (resposta>= 90 && resposta<= 100):
        return 'Sua nota foi A'
        break
        
       
    }
}