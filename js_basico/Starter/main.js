/* var minhaPromise = function(){
    return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest()

        xhr.open('GET', '')

        xhr.send(null)
        
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('Error na requisição')
                }
            }
        }
    })
} */

axios.get('https://api.github.com/users/diego3g')
.then((response)=>{
    console.log("Json: ", response)
})
.catch((error)=>{
    console.warn("Error: ", error)
})
