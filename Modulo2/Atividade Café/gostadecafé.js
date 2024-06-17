let resposta
let gostaDeCafe 

console.log('Você gosta de café?')
process.stdin.once('data', function(data){
    resposta=data.toString().trim()
    processamento(resposta)
    process.exit()
})


function processamento(resposta){
    if (resposta == "sim") {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    }

    if (gostaDeCafe == true) {
        console.log('A café é muito bom mesmo')
    } else {
    console.log ('Então você não gosta de café, que pena')
    }
    
}