const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let notebooks = []

let nitroG5 = {
    modelo: 'Nitro G5',
    fabricante: 'ACER',
    preco: '4800 reais'
}

notebooks.push(nitroG5)

exibirMenu()

function exibirMenu (){
    console.log(`
    Menu:
    1.Cadastrar notebook:
    2.Listar notbooks:
    3.Mostrar notbook mais caro:
    4.Editar notbook:
    5.Remover notebook:
    6.Sair.
    `)

    rl.question('Escolha uma opção!: ' , (opcao) => {
        switch(opcao){
            case'1':
                cadastrarNotbook()
                break
            case'2':
                listarNotbooks()
                break
            case'3':
                mostrarMaisCaro()
                break
            case'4':
                editarNotbook()
                break
            case'5':
                removerNotbook()
                break
            case'6':
                console.log('Saindo do programa!')
                rl.close()
                break
            default:
                console.log('Caractere invalido!')
                exibirMenu()
                break
        }
    })
}



function cadastrarNotbook(){
    rl.question('Qual é o modelo do seu Notbook?' , (modelo) => {
        rl.question('Quem é a fabricante do seu Notbook?' , (fabricante) =>{
            rl.question('Qual é o preço do seu Notbook?' , (preco) =>{
                notebooks.push({modelo: modelo, fabricante: fabricante, preco: preco })
                console.log('Notbook cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}

function listarNotbooks(){
    if (notebooks.length == 0){
        console.log('Nenhum Notbook listado')
        
    }else{
        for(let i = 0;i < notebooks.length; i ++){
            console.log(`Os Notbooks são ${notebooks[i].modelo}`)
        }
        
    }
    exibirMenu()
}

function mostrarMaisCaro(){
    let maisCaro = notebooks[0]
    if (notebooks.length == 0){
        console.log('Nenhum Notbook listado')
        exibirMenu()
    }else{
        for(let i =0;i < notebooks.length; i ++){
            if (notebooks[i] > maisCaro){
                maisCaro = notebooks[i]
            }
        }
        console.log(`O Notbook mais caro é o ${maisCaro.modelo}`)
        exibirMenu()
    }
}

function editarNotbook(){
    if (notebooks.length == 0){
        console.log('Nenhum Notbook listado')
        exibirMenu()
    }else{
        for(let i =0;i < notebooks.length; i ++){
            console.log(`Nossos Notbooks já listados são ${notebooks.modelo} `)
        }rl.question('Digite o nome do Notbook  que deseja editar!' , (numero) => {
            if (numero > 0 && numero <= notebooks.length){
                rl.question('Digite o novo modelo do seu Notbook!' , (modelo) => {
                    rl.question('Digite a nova fabricante do seu Notbook!' , (fabricante) => {
                        rl.question('Digite o novo preço do seu Notbook!' , (preco) => {
                            notebooks[numero - 1] = {
                                modelo,
                                fabricante,
                                preco
                            }
                            console.log('Notbook editado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
            }
        })
    }
}

function removerNotbook(){
    if (notebooks.length == 0){
        console.log('Nenhum Notbook listado')
        exibirMenu()
    }else{
        for(let i =0;i < notebooks.length; i ++){
            console.log(i + 1, notebooks[i])
        }
    }
    rl.question('Qual o número do Notbook que você deseja remover?' , (removido) =>{
        notebooks.splice(removido - 1, 1)
        console.log('Notbook removido com sucesso!')
        exibirMenu()
    })  
}