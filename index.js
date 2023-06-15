let clientes = []

function adicionarCliente(nome, idade, email) {

    let pessoa = {
        nome,
        idade,
        email,
    }

    clientes.push(pessoa)
    return pessoa
}

adicionarCliente("Patrícia", 31, "pmidori@gmail.com")
adicionarCliente("Juliana", 20, "ju@gmail.com")
adicionarCliente("Roberto", 38, "bari@gmail.com")
adicionarCliente("Marcia", 15, "marcia@gmail.com")
adicionarCliente("Mari", 50, "mari@gmail.com")
adicionarCliente("Pedro", 10, "pe@gmail.com")

function exibirClientes() {

    console.table(clientes)

    console.log("\nAté o momento foram cadastradas " + clientes.length + " pessoas à lista.\n")
    
    clientes.forEach((cliente) => {
        let categoria = ""
            
        if (cliente.idade < 12) {
            categoria = "criança"
        } else if (cliente.idade >= 12 && cliente.idade <=17) {
            categoria = "adolescente"
        } else {
            categoria = "adulto(a)"
        }
        console.log(`${cliente.nome} é ${categoria}. Tem ${cliente.idade} anos e seu e-mail é ${cliente.email}.\n`)
    })
    
}


exibirClientes()

module.exports = clientes