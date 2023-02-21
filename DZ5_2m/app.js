const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')



const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const del = document.createElement('button')
        del.innerText = 'delete'
        del.onclick = () => {
            div.remove()
        }

        const edit = document.createElement('button')
        edit.innerText = 'edit'
        edit.onclick = () => {
            let pr = prompt('dfdfdf')
            text.innerText = pr
        }
        
        div.setAttribute('class', 'block_text')

        text.innerHTML = input.value

        div.append(text,edit,     del)
        todoList.append(div)
    }
    input.value = ''
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)