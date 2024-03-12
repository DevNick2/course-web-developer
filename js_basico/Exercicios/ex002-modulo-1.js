const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    }
]

const idade = usuarios.map(item => item.idade)
const colaborador = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18)
const google = usuarios.find(item => item.empresa === 'Google')
const mult = usuarios.map(item => {
   
    item.idade *= 2
  
    return item

}) 
const res = mult.filter(item => item.idade <= 50)

console.log(res)
//console.log(res)