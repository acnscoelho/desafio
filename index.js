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

adicionarCliente("Harry Potter", 31, "harry@gmail.com")
adicionarCliente("Ron Weasley", 20, "ron@gmail.com")
adicionarCliente("Minerva McGonagall", 38, "minerva@gmail.com")
adicionarCliente("Hermione Granger", 15, "hermione@gmail.com")
adicionarCliente("Lord Voldemort", 50, "lordv@gmail.com")
adicionarCliente("Remo Lupin", 10, "remo@gmail.com")

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