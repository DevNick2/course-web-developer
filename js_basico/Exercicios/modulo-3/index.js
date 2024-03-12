import axios from 'axios'

const delay = ()=> new Promise(resolve => setTimeout(resolve, 1000))

const umPorSegundo = async ()=>{
    await delay()
    console.log('1s')
    await delay()
    console.log('2s')
    await delay()
    console.log('3s')
}

umPorSegundo()


async function getUser(user){
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    } catch (error) {
        console.warn('Usuário não encontrado! ', error)
    }
}

getUser('diego3g')
getUser('diego3gdassd')

class Github{
    static async getRepositories(repo){
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        } catch (error) {
            console.warn('Nenhum repo encontrado! ', error)
        }
    }
}

Github.getRepositories('DevNick2/supreme-broccoli');
Github.getRepositories('rocketseat/dass')

const buscaUsuario = async usuario =>{
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    } catch (error) {
        console.warn('Usuário not find: ', error)
    }
}

buscaUsuario('diego3g')