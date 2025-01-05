clients = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Juliana']

let options = 0
while (options != 3) {
    options = parseInt(prompt(`CENTRAL DE ATENDIMENTO AO CLIENTE\nFila: ${clients}\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair`))
    switch (options) {
        case 1: 
            clients.push(prompt('Digite o nome do novo cliente'))
            break
        case 2: 
            let currentClient = clients.shift()
            alert(`Atendimento de ${currentClient}`)
            break
        case 3:
            break
        default:
            alert('Opção Inválida!')
    }
} 
alert('Fim do programa!')