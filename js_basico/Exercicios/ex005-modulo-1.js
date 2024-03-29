// 5.1
const arr = [1, 2, 3, 4, 5, 6]
const [
    x,
    ...y
] = arr

console.log(x)
console.log(y)

const soma = (...n) => n.reduce((total, next) => total + next)
console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2))

// 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}

const user1 = {
    ...usuario,
    nome:'Gabriel'
}
const user2 = {
    ...usuario,
    endereco:{
        ...usuario.endereco,
        cidade: 'Lontras'
    }
}

console.log(user1)
console.log(user2)