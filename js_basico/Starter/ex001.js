function checaIdade(idade){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(idade > 18){
                resolve('O usuário é maior de idade')
            }else{
                reject('Este usuário é menor de 18 anos')
            }
        },2000)
    })
}

checaIdade(17)
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((reject)=>{
        console.warn(reject)
    })