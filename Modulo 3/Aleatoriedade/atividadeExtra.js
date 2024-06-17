let caracteres = 'qwertyuiopasdfghjklmnbvcxzçQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890'
let senha = ''
let comprimentoSenha 

console.log('Quantos digitos você quer na sua senha?')
process.stdin.once('data', function (data){
    comprimentoSenha = parseInt(data.toString().trim())
    procesamento (caracteres, senha, comprimentoSenha)
    process.exit()
})

function procesamento (caracteres, senha, comprimentoSenha){
    for(let i = 0; i < comprimentoSenha; i++){
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length) + 1
        senha += caracteres.charAt(numeroAleatorio)
    }
console.log(`Sua senha é ${senha}`)
}