/* 

const notes = ['Note 1' , 'Note 2' , 'Note 3']

console.log(notes.length)

console.log(notes[0])





//MANIPULATING ARRAYS WITH METHODS



console.log(notes.pop())

notes.push('Note 4 ')

console.log(notes.shift())// remove first element in an array

notes.unshift('Note 5') // create new element on 0 index

notes.splice(1 , 1 , 'This is the new item' ) // it will go to index 1 and remove 1 element 

notes[2] = 'this is now latest note'


console.log(notes)



//CHALLENGE AREA on toDO file



//LOOPING OVER ARRAYS


notes.forEach(function(item , index){           // forEach we have to pass a function it takes a function as an argumrnt so we have declared inline function
	console.log(index)
	console.log(item)
})



//Challenege area in toDo




//FOR LOOP

for (let count = 0 ; count <= 2 ; count++){
	console.log(count)
}


for (let count = notes.length - 1 ; count >= 0  ; count--){
	console.log(notes[count])
}	





// SEARCHING ARRAYS PART 1 also Searching Array part 2

console.log(notes.indexOf('Note 5')) // it will search for Note 5 in the note array

*/

const note = [{
	title: 'My next trip',
	body: 'I would like to go to spain'
}, {
	title: 'Habbits to work',
	body: 'Exercise. Eating a bit better'
}, {
	title: 'Office modifications',
	body: 'Get a new seat'
}]
// This is the array containing the objects as its elements

// we cannot use indexOf on this object containing array 
// if we find an empty object in the array it will not find it as below



/*
console.log(note.indexOf({}))

const findNote = function ( notes , noteTitle){
	const index = note.findIndex(function (note , index){

		return note.title.toLowerCase() === noteTitle.toLowerCase()
})
	return notes[index]
}


const note_ = findNote (note , 'Office modifications')
console.log(note_)
//so we have to do something else to find elements in object array
console.log(note.length)
console.log(note)

const index = note.findIndex(function (note, index){
	console.log(note)
	return note.title === 'Habbits to work'
})

console.log(index)





// filtering arays




// we have to find an item without giving a title. like in emails we want to search email with same author. this concept is called filtering

const filteredArray = note.filter(function (note , index) {
	const isTitleMatch = note.title.toLowerCase().includes('ne')
	const isBodyMatch = note.body.toLowerCase().includes('ne')
	return isTitleMatch || isBodyMatch
})

console.log(filteredArray)
*/
const findNotes = function (note , query){

const filteredArray = note.filter(function (note , index) {
	const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
	const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
	return isTitleMatch || isBodyMatch
})
	return filteredArray

}


console.log(findNotes(note , 'WoRk'))



// SORTING ARRAY



const sortNotes = function (notes){
	notes.sort(function (a , b){
		if (a.title.toLowerCase() < b.title.toLowerCase()){
			return -1
		}else if (b.title.toLowerCase() < a.title.toLowerCase()){
			return 1
		}else{
			return 0
		}
// we have sort this array of object alphabatically like in notes array Habbits is the first comming word in the array it will come first
})
}
sortNotes(note)
console.log(note)

 



// Improve our Expense Tracker



const account = {
	name: 'Syed Muhammad Osama',
	expenses: [],
	income: [],
	addExpense: function (description , amount){
			this.expenses.push({
			description: description,
			amount: amount})
	},
	getAccountSummary: function(){
		let totalExpense = 0
		this.expenses.forEach(function (expense){
			totalExpense = totalExpense + expense.amount})
		let totalIncome = 0
		this.income.forEach(function (income){
			totalIncome = totalIncome + income.amount})


	return `${this.name} has $${totalIncome - totalExpense} balance.$${totalIncome} in income. $${totalExpense} in expenses.`
	},
   
	addIncome: function(description , amount){
			this.income.push({
				description: description,
				amount: amount})

}}

account.addExpense('Rent' , 950)
account.addExpense('coffee' , 50)
account.addIncome('salary' , 5000)
console.log(account.getAccountSummary())
