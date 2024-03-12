var botao_usuario_git = document.querySelector('#repos button'),
    input = document.querySelector('#repos input')
    list = document.querySelector('#repos ul')

function buscaUsuarioGithub(username){
    return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.open('GET', `https://api.github.com/users/${username}/repos`)
        xhr.send(null)

        xhr.onreadystatechange = ()=>{
            list.innerHTML = '<li>Carregando</li>'
            setTimeout(()=>{
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        var result = JSON.parse(xhr.responseText)
                        if(result.length <=0){
                            reject('Nenhum repositório encontrado!')
                        }else{
                            resolve(result)
                        }                    
                    }
                    else
                    {
                        reject('Usuário não encontrado!')
                    }
                }
            }, 2000)
        }
    })
}

function render(){
    var username = input.value

    buscaUsuarioGithub(username)
        .then((resolve)=>{
            console.log(resolve)
            var repos = resolve.map(repo => {
                return `<li>${repo.name}</li>`
            })
            repos = repos.toString().replace(/,/g,'')

            list.innerHTML = repos
        })
        .catch((reject)=>{
            list.innerHTML = `<li>${reject}</li>`
            console.warn(reject)
        })
}

botao_usuario_git.onclick = render
