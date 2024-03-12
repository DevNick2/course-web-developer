var listElement = document.querySelector('#app ul'),
    inputElement = document.querySelector('#app input'),
    buttonElement = document.querySelector('#app button'),
    todos = JSON.parse(localStorage.getItem('list_todos')) || []
    
function renderTodos(){
    listElement.innerHTML = ''
    for(todo of todos){
        var todoElement = document.createElement('li'),
            todoText = document.createTextNode(todo),
            linkElement = document.createElement('a'),
            linkText = document.createTextNode('Remover'),
            pos = todos.indexOf(todo)
        
        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}