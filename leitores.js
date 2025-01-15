function Pessoa(nome) {
    this.nome = nome
}

function Leitor(nome, genoroDeLivro) {
    this.genoroDeLivro = genoroDeLivro

    Pessoa.call(this, nome)
}

function Corredor(nome, kmPorSemana) {
    this.kmPorSemana = kmPorSemana

    Pessoa.call(this, nome)
}

const pessoa = new Pessoa('Joana')

const leitor1 = new Leitor('João', 'Terror')

const corredor1 = new Corredor('Maria', 20)

console.log(pessoa)
console.log(leitor1)
console.log(corredor1)