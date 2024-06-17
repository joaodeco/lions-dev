let nome = 'Odete'
let idade = 20
const maiorDeIdade = 18
let diferença = maiorDeIdade - idade
let genero = 'feminino'


if (genero == 'masculino' && idade >= 65 ){
    console.log('O senhor já pode se aposentar.')
} else if (genero == 'feminino' && idade >= 62){
    console.log('A senhora já pode se aposentar.')
} else if (genero == 'masculino' && 18 <= idade <= 45){
    console.log('Está na hora de se alistar.')
}else if (genero == 'feminino' && idade >= 18){
    console.log('Você pode fazer oque quiser.')
}
