'use strict'
				//TODOS JAVASCRIPT


// Retrieve saved to-do items from local storage
let todos = getSavedTodos()

// Define filters object to keep track of current search text and completed task visibility
const filters = {
  searchText: '',
  hideCompleted: false
}


// Render the to-do list initially
renderTodos(todos, filters)

// Add event listener to the search bar to update the search text filter and re-render the list
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters)
})

// Add event listener to the "add new task" form to create a new task object, add it to the list, and re-render the list
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim()
  e.preventDefault()
  if (text.length > 0){
  todos.push({
    id: uuidv4(),
    text,
    completed: false
  })
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
}
})

// Add event listener to the "hide completed tasks" checkbox to update the completed task visibility filter and re-render the list
document.querySelector('#hide-todo').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})

