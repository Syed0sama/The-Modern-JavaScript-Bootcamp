/*
const toDo = ['complete course' , 'complete react course' , 'hackerrank' , 'database book' , 'vim book' ]

console.log(`You have ${toDo.length} todos`)
console.log(`Todo: ${toDo[0]}`)
console.log(`Todo: ${toDo[toDo.length - 1]}`)
console.log(`Todo: ${toDo[toDo.length - 2]}`)
console.log(`Todo: ${toDo[toDo.length - 3]}`)
console.log(`Todo: ${toDo[toDo.length - 4]}`)




//Challenge area arrays

toDo.splice(2 , 1)
toDo.push('Fasting')
toDo.shift()
console.log(toDo)


//challenge area

toDo.forEach(function (item , index ){
	const num = index +1
	console.log(`${num}. ${item}`)
})


//Challenge area

for (let count = 0 ; count < toDo.length ; count++){

	console.log(toDo[count])
}

*/
//CHALLENGE AREA


const todos = [{
	text: 'Order cat food',
	completed: true
}, { 
	text: 'Clean kitchen',
	completed: true
}, {	
	text: 'Buy food',
	completed: true
}, {	
	text: 'Do work',
	completed: true
}, {
	text: 'Exercise',
	completed: false
}]


/*
const deletetodo =function ( objectArray , text){
	let findedItem = todos.findIndex(function (array){
	return array.text.toLowerCase() === text.toLowerCase()
})
	if(findedItem != -1){
		todos.splice(findedItem , 1)
}
}

deletetodo(todos , 'buy u1food')
console.log(todos)
*/

const getThingsTodo = function (todos){
	return todos.filter(function (todo){
		return todo.completed === false
//we can do in another way   return !todo.completed 

})}
console.log(getThingsTodo(todos))



// Challenge area

const sortTodos = function(todos){
	todos.sort(function (a , b){
		if(a.completed === false && b.completed === true){
			return -1
		}else if (b.completed === false && a.completed === true){
			return 1
		}else{
			return 0
		}
})
}

sortTodos(todos)
console.log(todos)
	
