'use strict'	

				//TODOS FUNCTIONS

//Read existing data from localStorage
const getSavedTodos = () => {
 	 const userJASON = localStorage.getItem('todos')

	
	try{
		
 		 return userJASON ?  JSON.parse(userJASON) :  []
	} catch(e){
		 return []

	}
}

// saved todos to localStorage
const saveTodos = (todos) => {
	 localStorage.setItem('todos', JSON.stringify(todos))
}

//render Todos

 const renderTodos = (todos, filters) => {
    // Filter the to-do list based on search text
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
 
    // Filter the to-do list based on completed task visibility
    filteredTodos = filteredTodos.filter((todo) => {
      if (filters.hideCompleted) {

        return !todo.completed
      } else {
        return true
      }

    })


    // Count number of incomplete tasks and display on the page
    const incompletedTodos = filteredTodos.filter((todo) => !todo.completed)
    document.querySelector('#todo').innerHTML = ''
   document.querySelector('#todo').appendChild(generateSummaryDOM(incompletedTodos))
 
    // Display each task on the page
    if (filteredTodos.length > 0){
    filteredTodos.forEach((todo) => {
      document.querySelector('#todo').appendChild(generateDOM(todo)) 
    })
    }else{
	const emptyMessage = document.createElement('p')
	emptyMessage.classList.add('empty-message')
	emptyMessage.textContent = 'No to-dos to show'
	document.querySelector('#todo').appendChild(emptyMessage)
}
}
    

//removetodo function
const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id)
	if (todoIndex > -1){
		todos.splice(todoIndex , 1)
	}
}

//toggletodo
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id)
	if (todo){
		todo.completed = !todo.completed
	}
}

//Generate DOM structure
const generateDOM = (todo) => {
        const todoEl = document.createElement('label')
	const containerEl = document.createElement('div')
	const checkbox = document.createElement('input')
	const todoText = document.createElement('span')
	const removeButton = document.createElement('button')

	//setup the checkbox
	checkbox.setAttribute('type' , 'checkbox')
	checkbox.checked = todo.completed	
	containerEl.appendChild(checkbox)
	checkbox.addEventListener('change' , (e) => {
		toggleTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos , filters)
	})
	//setup the todo text
	todoText.textContent = todo.text
	containerEl.appendChild(todoText)


	todoEl.classList.add('list-item')
	containerEl.classList.add('list-item__container')
	todoEl.appendChild(containerEl)

	//setup the remove button
	removeButton.textContent = 'Remove'
	removeButton.classList.add('button' , 'button--text')
	todoEl.appendChild(removeButton)
	removeButton.addEventListener('click', () => {
		removeTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos , filters)
	})
	
	
	return todoEl

}

//DOM summary

const generateSummaryDOM = (incompletedTodos) => {
  const summary = document.createElement('h2')
  const plural = incompletedTodos.length === 1 ? '' : 's'
  summary.classList.add('list-title')
  summary.textContent = `You have ${incompletedTodos.length} todo${plural} left.`
  return summary
}


