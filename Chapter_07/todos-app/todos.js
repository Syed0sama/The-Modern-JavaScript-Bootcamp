				

					// TODOS JAVASCRIPT
									


  const todos = [{
          text: 'Order cat food',
          completed: false
  }, {
          text: 'Clean kitchen',
          completed: true
  }, {
          text: 'Buy food',
          completed: true
  }, {
          text: 'Do work',
          completed: false
  }, {
          text: 'Exercise',
          completed: true
  }]

const filters = {
	searchText: '',
	hideCompleted: false
}

const renderTodos = function (todos , filters){
	let filteredTodos = todos.filter(function (todo){
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
		})

	filteredTodos = filteredTodos.filter(function (todo){
		if (filters.hideCompleted){
			return !todo.completed
		}else{
			return true
	}
	})


/*
const ps = document.querySelectorAll('p')

ps.forEach(function (p){

	if(p.textContent.includes('the')){
	p.remove()
	}
})
*/

	const incompletedTodos = filteredTodos.filter(function (todo){
		return !todo.completed
	})
	document.querySelector('#todo').innerHTML = ''

	const summary = document.createElement('h2')
	summary.textContent = `You have ${incompletedTodos.length} todos left.`
	document.querySelector('#todo').appendChild(summary)



	filteredTodos.forEach(function(todo){
		const p = document.createElement('p')
		p.textContent = todo.text
		document.querySelector('#todo').appendChild(p)
	})

}
renderTodos(todos , filters)
/*
renderTodos(todos , filters)
document.querySelector('#add-todo').addEventListener('click' , function(e){
	console.log('I have added new todo')
})

document.querySelector('#new-todo').addEventListener('input' , function(e){
	console.log(e.target.value)
})

*/
document.querySelector('#search-text').addEventListener('input' , function(e){
	filters.searchText = e.target.value
	renderTodos(todos , filters)
})

document.querySelector('#new-todo').addEventListener('submit' , function(e){
	e.preventDefault()
	console.log(e)
	todos.push({
		text: e.target.elements.text.value,
		completed: false

	})
	renderTodos(todos , filters)
	e.target.elements.text.value = ''

	})
document.querySelector('#hide-todo').addEventListener('change', function(e){
	filters.hideCompleted = e.target.checked 
	renderTodos(todos , filters)
})

