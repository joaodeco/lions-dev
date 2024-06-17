const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []


let murilo = {
    nome: 'Murilo', 
    cargo: 'Técnico em TI',
    salario: 10000
}
funcionarios.push(murilo)

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exiba o funcionário com o maior salário
	4. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
                listarFuncionarios()
				rl.close()
				break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
                console.log('Saindo do programa!')
                rl.close()
                break

			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios() {
    for (let i = 0;i < funcionarios.length; i ++) {
        console.log(funcionarios[i])
    }
    exibirMenu()
}

function exibirMaiorSalario() {
    let maiorSalario = funcionarios[0]
    if (funcionarios.length == 0){
        console.log('Não a nenhum funcionário listado!')
    }else{
        for(let i = 0; i < funcionarios.length;i ++){
            if (funcionarios[i] > maiorSalario){
                maiorSalario = funcionarios[i]
            }
        }
        console.log(`O funcionario com maior salário é ${maiorSalario.nome}`)
        exibirMenu()
    } 
}