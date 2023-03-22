

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


let account = {
	name: 'Syed Muhammad Osama',
	income: 0,
	expenses:0
}

let addExpenses = function (account , amount){
	account.expenses = account.expenses + amount
	account.income = acount.income - amount
}
let addIncome = function (account , amount){
	account.income = accoun.income + amount
}
let getAccountSummary = function (account){
	return{
		summary:`Account for ${name} has $${income}. $${expenses} in expenses.`
}}

let resetAccount = function (account){
	account.expenses = 0
	account.income = 0
}

 
let accountDetail = function (account){
	addIncome(account)
	addExpense(account)
	getAccountSummary(account)
}


