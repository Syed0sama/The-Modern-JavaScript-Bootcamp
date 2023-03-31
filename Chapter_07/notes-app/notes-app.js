			
				//NOTES JAVASCRIPT
const notes = [{
          title: 'My next trip',
          body: 'I would like to go to spain'
 }, {
          title: 'Habbits to work',
          body: 'Exercise. Eating a bit better'
  }, {
          title: 'Office modifications',
          body: 'Get a new seat'
  }]



/*
// DOM - Document Object Model

const p = document.querySelector('p')// querySlector only selects the first matching element like it will target the first p tag
p.remove() // it removes our paragraph from our html file. so we can modify our html from our js file.

//Query all and remove all


const ps = document.querySelectorAll('p')
ps.forEach(function (p){
	p.textContent = '******'// it will modify all p tag and set their value to ***
	//console.log(p.textContent)// it will read the text value
	//p.remove()
})

//Add new element new element on html file through js

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is the new element from js'
document.querySelector('body').appendChild(newParagraph)
*/

const filters = {
	searchText: ''
}

const renderNotes = function (notes , filters){
		const filteredNotes = notes.filter(function (note){
			return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
})
	document.querySelector('#notes').innerHTML = ''// innerHTML helps to remove duplication	


	filteredNotes.forEach(function (note){
		const noteEl = document.createElement('p')
		noteEl.textContent = note.title
		document.querySelector('#notes').appendChild(noteEl)
})
}
renderNotes(notes , filters)


document.querySelector('#create-note').addEventListener('click', function (e){
	console.log('Did this work!')
	e.target.textContent = 'This button was clicked'
})


/*document.querySelector('#remove-all').addEventListener('click' , function(e){// (1) means the index 1 
	document.querySelectorAll('.note').forEach(function (note){
		note.remove()
})
*/

document.querySelector('#search-text').addEventListener('input' , function(e){
	filters.searchText = e.target.value
	renderNotes(notes , filters)
})
/*
document.querySelector('#name-form').addEventListener('submit', function(e){
	e.preventDefault()
	console.log(e.target.elements.firstName.value)
	e.target.elements.firstName.value=''
})*/

document.querySelector('#filter-by').addEventListener('change' , function(e){
	console.log(e.target.value)
})
