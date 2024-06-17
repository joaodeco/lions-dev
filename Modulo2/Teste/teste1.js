let nome 

console.log('Qual seu nome')

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    procesamento (nome)
    process.exit()
})

function procesamento (nome){
    if(nome == 'Murilo' || nome == 'murilo'){
        console.log('Sou eu')
    }else {
        console.log('Não sou eu')
    }

}