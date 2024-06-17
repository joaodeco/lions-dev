let resposta
 

console.log ('Qual o número de lados do dado?')
process.stdin.once('data', function(data){
    resposta = parseInt(data.toString().trim())
   procesamento(resposta)
    process.exit()
})


function procesamento(resposta){
console.log(`O número aleatorio é ${Math.floor(Math.random() * resposta) + 1}`)
}
    
