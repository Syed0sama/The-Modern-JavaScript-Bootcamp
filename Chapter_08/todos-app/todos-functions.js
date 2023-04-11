				

				//TODOS FUNCTIONS

//Read existing data from localStorage
const getSavedTodos = function(){
 	 const userJASON = localStorage.getItem('todos')
 	 if (userJASON !== null){
         	return JSON.parse(userJASON)
 	 }else{
		return []
	 }
}

// saved todos to localStorage
const saveTodos = function(todos){
	 localStorage.setItem('todos', JSON.stringify(todos))
}

//render Todos

 const renderTodos = function(todos, filters) {
    // Filter the to-do list based on search text
    let filteredTodos = todos.filter(function(todo) {
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
   })
 
    // Filter the to-do list based on completed task visibility
    filteredTodos = filteredTodos.filter(function(todo) {
      if (filters.hideCompleted) {

        return !todo.completed
      } else {
        return true
      }

    })


    // Count number of incomplete tasks and display on the page
    const incompletedTodos = filteredTodos.filter(function(todo) {
	
      return !todo.completed
    })
    document.querySelector('#todo').innerHTML = ''
   document.querySelector('#todo').appendChild(generateSummaryDOM(incompletedTodos))
 
    // Display each task on the page
    filteredTodos.forEach(function(todo) {
      document.querySelector('#todo').appendChild(generateDOM(todo)) 
    })
}

//removetodo function
const removeTodo = function(id){
	const todoIndex = todos.findIndex(function(todo){
	return todo.id === id
	})
	if (todoIndex > -1){
		todos.splice(todoIndex , 1)
	}
}

//toggletodo
const toggleTodo = function(id){
	const todo = todos.find(function (todo){
		return todo.id === id
	})
	if (todo !== undefined){
		todo.completed = !todo.completed
	}
}

//Generate DOM structure
const generateDOM = function(todo){
        const todoEl = document.createElement('div')
	const checkbox = document.createElement('input')
	const todoText = document.createElement('span')
	const removeButton = document.createElement('button')

	//setup the checkbox
	checkbox.setAttribute('type' , 'checkbox')
	checkbox.checked = todo.completed	
	todoEl.appendChild(checkbox)
	checkbox.addEventListener('change' , function(e){
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
	removeButton.addEventListener('click', function(){
		removeTodo(todo.id)
		saveTodos(todos)
		renderTodos(todos , filters)
	})
	return todoEl

}

//DOM summary

const generateSummaryDOM = function(incompletedTodos) {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompletedTodos.length} todos left.`
  return summary
}


