

// OBJECT BASICS



let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 934  
}

console.log(`${myBook.title} by ${myBook.author}.`)

myBook.title = 'Animal Farm'  // this will update the title

console.log(`${myBook.title} by ${myBook.author}.`)



//CHALLENGE AREA

let person = {
	name: 'Osama',
	age: 23,
	location_: 'Islamabad'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location_}`)



//USING OBJECTS WITH FUNCTIONS


 
let myBook_ = {
	title: 'A peoples History',
	author: 'Howard Zincc',
	pageCount: 723  
}


let otherBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 934  
}

// we have to write console.log for every book object so we will creat a function through which we dont have to write again and again

let getSummary = function (book){
	return {
	summary: `${book.title} by ${book.author}`,
	pageCountSummary: `${book.title} is ${book.pageCount} pages long` 
}

	//console.log(`${book.title} by ${book.author}`   //if we want two strings so we cant get from it from console.log so we have to return something
}

let bookSummary = getSummary(myBook_)
let pageCountSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


//CHALLENGE AREA


let temp_con = function(temp_in_fah) {
	return{
		temp_in_fahrenheit: temp_in_fah,
		temp_in_celcius: (temp_in_fah - 32) * 5 / 9 ,
		temp_in_kelvin: (temp_in_fah +426) * 5 / 9,
}
}

let temprature = temp_con(50)

console.log(temprature.temp_in_celcius)




//OBJECT REFRENCES


let myAccount = {
	name: 'Syed Muhammad Osama',
	expense: 0,
	income: 0
}

let addExpense = function (account , amount ){
	account.expense = account.expense + amount
}

addExpense(myAccount , 2.5)
console.log(myAccount)
 


//BUILD AN EXPENSE TRACKER


let accountMy = {
	name: 'Syed Muhammad Osama',
	income: 0,
	expenses:0
}

let addExpenses = function (account , amount){
	account.expenses = account.expenses + amount
}
let addIncome = function (account , amount){
	account.income = account.income + amount
}
let getAccountSummary = function (account){
	let balance = account.income - account.expenses

	return	`Account for ${accountMy.name} has $${balance} balance.$${accountMy.income} income.  $${accountMy.expenses} in expenses.`
}

let resetAccount = function (account){
	account.expenses = 0
	account.income = 0
}

 
addIncome(accountMy , 5000)
addExpenses(accountMy , 100)
addExpenses(accountMy , 500)
addExpenses(accountMy , 1200)
console.log(getAccountSummary(accountMy)) 
//we can do above console.log instead of below lines
//let detail = getAccountSummary(accountMy)
//console.log(detail)
resetAccount(accountMy)
console.log(getAccountSummary(accountMy)) 



//METHODS


let restaurant = {
	name: 'La Montana',
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function (partySize){
		let seatsLeft = this.guestCapacity - this.guestCount
		return partySize <= seatsLeft}, 
	seatParty: function (no_of_guests_entered){
		this.guestCount = this.guestCount + no_of_guests_entered
		return this.guestCount},
	removeParty: function (no_of_guests_left){
		this.guestCount = this.guestCount - no_of_guests_left
		return this.guestCount

}}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))



//EXPLORING STRING METHODS



let myName = 'Syed Muhammad Osama'

//length property
console.log(myName.length)

//COnvert to uppercase
console.log(myName.toUpperCase(myName))

// convert to lower case
console.log(myName.toLowerCase())

//Include method
let password = 'abc123password'
console.log(password.includes('password'))

//TRIM
console.log(myName.trim())



//CHALLENGE AREA

let isValidPassword = function (password){

	return password.length >8 && !password.includes('password')
	//if (password.length >8 && !password.includes('password')){
	//return true
//}	else{
	//return false
//we can use one line return instead of this all if statements
}

console.log(isValidPassword('abcjkadhfkkjlbaskdfpassword'))







//EXPLORING NUMBERS METHOD



let num = 103.941

//To fixed method. it will show 2 numbers after decimal point as we have passed 2 in below line
console.log(num.toFixed(2))

//ROund
console.log(Math.round(num))

//Floor
console.log(Math.floor(num))  //it will round down to nearest integer 

//Ceiling
console.log(Math.ceil(num)) // it will round up to nearest integer

//Random
console.log(Math.random(num)) // it will create random number between 0 and 1 not 1 0.999999999999999999

//random more detail

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min //it will give whole number range between 10 and 20
console.log(randomNum)




//CHALLENGE AREA



let min1 = 1
let max1 = 5
let randomNum1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1 //it will give whole number range between 10 and 20
let makeGuess = function(number){
	return number === randomNum1
}
console.log(randomNum1)
console.log(makeGuess(1))





//CONSTANTS VARIABLES




const isRaining = true // it is replacement as let but difference is const cannot be reassigned like we have assigned israining after false it will give error but for let it will modify israining to false
//isRaining = false

console.log(isRaining)

const person2 = {
	age: 23
}
//person{}// it will give error but we can modify object properties same as let object

person2.age = 18 // it is corect we can do this

//we uses const because itt makes read the code easy. if someone else is reading code variable with const will make that person easy that this will not be changed so he does not have to track it





// BONUS: VARIABLES WITH VAR


var firstName = 'Osama'
firstName = 'Syed'

var firstName = 'nouman'  // it will not show error that firstName is already declared it will assign new value to it so this is dangerous so this is not used in javascript now
console.log(firstName)

if(10 === 10){
	var lastName = 'hassan' // it will not give error it is function scoped not block scoped if we use let instead of var in this line wq will get an error
}

console.log(lastName)

