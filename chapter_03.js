

// STRINGNS AND VARIABLES

let name = 'Osama' // creating a variable name
console.log(name) // printing it to the screen

let firstName = 'Syed'
let lastName  = 'Muhammad Osama'
let fullName = firstName + ' ' + lastName
console.log(fullName)

// Challenge Area

let city = 'Islamabad'
let country = 'Pakistan'
let location_ = city + ', ' + country
console.log(location_)


//NUMBERS

let age = 23
let dogYears = (age + 1) / 7
console.log(dogYears)

//Challenge Area
let studentScore = 18
let maxScore = 20
let percentage = (18 / 20) * 100
console.log(percentage)



//MORE ON VARIABLES
let petName = 'Hal'
//let petName = 'Spot' // ot will give error as we have craeteed two variables with same name
petName = 'Spot'  // it will modify the petname now petname is spot
// "let 3 = 2" // it will give error we cannot create a variable starting wwith a number


//TEMPRATURE CONVERTER

let fahrenheit = 32
let celcius = (fahrenheit) - 32 * 5 / 9
let kelvin = (fahrenheit + 459.67) * 5 / 9

console.log(celcius)
console.log(kelvin)






//BOOLEAN


//let isFreezing = false
//let isFreezing = true
//let isFreezing = temp !== 31 // this is not equal operator this is the syntax
//let isFreezing = temp < 31    //this is less than operator this is the syntax
//let isFreezing = temp > 31    //this is graater than operator this is the syntax
//let isFreezing = temp <= 31    //this is less and equal to than operator this is the syntax
//let isFreezing = temp >= 31    //this is greater and equal to than operator this is the syntax


let temp = 91
let isFreezing = temp === 31 // this is conditional operator to check the equality and this is the syntax


// Challenge area

let age_ = 23

let child = age_ <=7
let senior = age_ >= 65


console.log(child)
console.log(senior)

// IF STATEMENT

if (isFreezing){
	console.log('It is Freezing outside')

}
if (temp <= 31){
	console.log('It is Freezing outside')// this both if statements are same
}

if (temp >= 110){
	console.log('It is way to hot outside')
}

//ADVANCED IF STATEMENT


let isAccountLocked = false
let userRole = 'admin'
if (isAccountLocked){
	console.log('Is Account Locked')
} else if (userRole === 'admin'){
	console.log('Welcome Admin')
} else {
	console.log('Welcome')
}       //else if will be between if and else



// Challenge Area

let tempr = 444
if (tempr === 45){
	console.log('Go for it. It is pretty nice')
} else if (tempr >= 120){
	console.log('It is hot outside')
}else {
	console.log('It is freezing outside')
}



//LOGICAL "AND" "OR" OPERATOR

let temprature = 65
if (temprature >= 60 && temprature <= 90){        // logical and both conditions must be true to run the code block
	console.log('It is pretty nice outside')
}else if (temprature <= 0 || temprature >= 120){        // logical or only one condition must br true to run the code block
	console.log('Do not go outside')
}else {
	console.log('Eh!. What do you want')
}


// Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan  &&  isGuestTwoVegan){
	console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan){
	console.log('Make sure to offer up some vegan dishes')
} else {
	console.log('Offer up anything in the menu')
}



// VARIABLES SCOPE PART 1

let varOne = 'varOne'

if (true){
	console.log (varOne)
	let varTwo = 'varTwo'
}
//console.log(varTwo)// this will give error as vartwo is not defined 
// lexical scope (stattic scope) : that a variable we have created in our program is not accessiible from anywhere from your program
// Global scope : Define variable ouutside of all code blocks
// Local scope : Defined inside  a code block





// VARIABLES SCOPE PART 2


let name_ = 'Osama' // Global scope

if (true) {
	let name = 'Nouman' //this is local variable so we can create it with same name
   if (true){
	name = 'Hassan' // it will search the first instance in the parent and if at first instance there is name variable it will modify it to hassan so in this it will change nouman to hassan
	console.log(name) // it will go to parent where name is nouman
}}
if (true) {
	console.log(name)   // it will go to parent and it has onyl one parent global so here name is osama
}




if (true){
	if (true){
	names= 'Hary'     // it will check up above parent if not in parent it wil move toancestor and then to root which is global and if not find a names variable in global it wil create a variable names = 'Hary' this is called leaked variable
	console.log(names)
}}
if (true){
	console.log(names)
}

