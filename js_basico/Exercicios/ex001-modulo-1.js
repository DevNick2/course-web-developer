class Usuario{
    constructor(email, senha){
        this.email = email
        this.senha = senha
        this.adm = false
    }

    isAdmin(){
        return this.adm
    }
}

class Admin extends Usuario{
    constructor(){
        super()

        this.adm = true
    }
}

const User = new Usuario('Email@teste', 'uma senha por ai')
const Adm = new Admin('Email@teste', 'uma senha por ai')

console.log(User.isAdmin())
console.log(Adm.isAdmin())
