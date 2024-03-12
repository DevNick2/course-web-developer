
/* 
    A palavra reservada super() dentro do construtor quando usado em herança faz com que a classe filho receba o construtor da classe pai
    
    Ex:
    class Pai{
        constructor(){
            this.nome = 'Jipicles'
        }

        digaNome(){
            console.log("O nome é: ", this.nome)
        }
    }

    class Filho extends Pai{
        constructor(){
            super()
        }

        setaNomeNovo(){
            this.nome = 'Meu novo nome'
        }
    }

    const teste = new Filho()
    teste.digaNome()
    teste.setaNomeNovo()
    teste.digaNome()
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    metodos estáticos (static) não tem acesso ao restante da classe
    metodos estáticos geralmente são independentes do resto da classe

    Ex:
    class OutroClasse{
        constructor(){
            this.nome = 'Jipicles'
        }

        static hue(nome){
            console.log('Nome: ', this.nome) // Vai dar undefined
            console.log('Nome: ', nome)
        }
    }

    OutroClasse.hue('Jose')
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    para acessar metodos estáticos não precisa instanciar, mesmo que a classe tenha construtor

    constantes não podem ser alteradas, apenas é possível mutar: alterando valores dentro do objeto ou vetor

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    Manipulando Arrays
    
    array.reduce(function(total, next){}) -> Reduz o array ao somar os elementos
    array.map(function(item, index){}) -> aplica a função callback em cada elemento do array, retorna um novo array
    array.filter(function(item){}) -> filtra o array com a função callback, precisa sempre retornar true or false

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Arrow function
    O melhor lugar para usa-las é onde precisa de funções anonimas
    caso precise retornar um objeto usar parenteses ()=>({ objProperty: value })

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    desestruturação
    
    Para buscar uma propriedade dentro de outro objeto usar a sintax var/let/const { nomePropriedade: { nomePropriedadeFilho } }

    Pode usar a desestruturação como parametro da função

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Rest/Spred

    Rest -> serve para pegar o resto das propriedades: Ex: const {nome, ...resto}
        Pode ser usado em parametros de função: function(a, b, ...rest){}

    Spred -> Propaga, repassa as informações de objeto/array para outras estruturas, pode ser usada para sobrepor propriedades
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Export Default
        é a função que exporta padrão dentro do arquivo, exporta apenas uma função como default
        ao importar uma função default não precisa das chaves e também pode colocar o nome que quiser na hora de importar:

        Sintaxe: 
            export multiple: import { func1, func2, func2 } from './func'
            export default: import nome_da_func from './func'
            export multiple as: import {func1 as x1, func2, func3} from './func'
            export multiple as object: import * as obj from './func'
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Async/Await
        A promise sempre executa primeiro, outras promises devem aguardar a anterior finalizar.
        Para pegar os erros das promises dentro de um async/await precisa colocar um try/catch
    
*/
