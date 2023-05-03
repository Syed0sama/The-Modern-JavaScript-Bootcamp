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
    filteredTodos.forEach((todo) => {
      document.querySelector('#todo').appendChild(generateDOM(todo)) 
    })
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
        const todoEl = document.createElement('div')
	const checkbox = document.createElement('input')
	const todoText = document.createElement('span')
	const removeButton = document.createElement('button')

	//setup the checkbox
	checkbox.setAttribute('type' , 'checkbox')
	checkbox.checked = todo.completed	
	todoEl.appendChild(checkbox)
	checkbox.addEventListener('change' , (e) => {
		toggleTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos , filters)
	})
	//setup the todo text
	todoText.textContent = todo.text
	todoEl.appendChild(todoText)

	//setup the remove button
	removeButton.textContent = 'x'
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
  summary.textContent = `You have ${incompletedTodos.length} todos left.`
  return summary
}


