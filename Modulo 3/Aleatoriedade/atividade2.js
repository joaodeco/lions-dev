let opçoes = ['pedra', 'papel', 'tesoura']
let escolhaComputador = ''
let escolhaUsuario = ''

console.log('pedra, papel ou tesoura?')
process.stdin.once('data', function(data){
    escolhaUsuario = data.toString().trim()
    processamento (opçoes, escolhaComputador, escolhaUsuario)
    process.exit()
})

function processamento (opçoes, escolhaComputador, escolhaUsuario){
escolhaComputador = opçoes[Math.floor(Math.random()* opçoes.length)]
console.log(`A escolha do PC é ${escolhaComputador}`)

switch(true){
    case escolhaUsuario == escolhaComputador:
        console.log('Deu empate')
        break
    case escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' || escolhaUsuario == 'papel' && escolhaComputador == 'pedra' || escolhaUsuario == 'tesoura' && escolhaComputador == 'papel':
        console.log('Você venceu')
        break
    
    default:
        console.log('Você perdeu')
    }
    
}

