/*
// FUNCTIONS

let greetUser = function () {      // def of function 
	console.log('Welcome User')
}

greetUser()  // calling of function
 
let square = function (num){
	let result = num * num
	return result
}

let value = square(3)
square(10) //this will not print any result as return is being not useed to use it write it as above syntax
console.log(value)



// CHALLENGE AREA

let temp_conv = function (temprature){
	let temp_in_celcius = (temprature - 32) * 5 / 9
	return temp_in_celcius
}

let temp_in_fahrenheit = temp_conv(32)
let temp_in_fahrenheit_2 = temp_conv(56)

console.log(temp_in_fahrenheit)
console.log(temp_in_fahrenheit_2)




// UNDEFINED AND NULL

let name   // undefined variable   
console.log(name) // it will print undefined

if (name === undefined){
	console.log('Please provide a name')
}else {
	console.log(name)
}

let square_ = function (num){
	console.log(num)  // if function is not returning anything it will set that argument as undefined
}

let result_ = square_()
console.log(result_)

let age = 27
age = undefined //we can also use NULL instead of undefined both are same it will reset the age value
console.log(age)




// MULTIPLE ARGUMENTS AND ARGUMENTS DEFAULTS


let add = function (a , b , c){
	return a + b + c	

}

let result = add(10 , 7 , 1)
console.log(result)


let getScoreText = function ( name ='Anonymous'  , score = 0){ // it will set default value to zero if not value passed om this value will be used
	return 'Name: ' + name + ' ' + 'Score: ' + score}
let scoreText = getScoreText('Osama')  // it will update the name with osama but we have not passed a score so it will use default value which is 0
console.log(scoreText)



//CHALLENGE AREA


let tip_calculator = function ( total , tipPercent = 0.1){
	return total * tipPercent
}
let tip1 = tip_calculator(100 , 0.5)
let tip2 = tip_calculator(50)

console.log(tip1)
console.log(tip2)
 


// FUNCTION SCOPE


let temp_conv_ = function (temprature){                    // temprature and celcius are local variables in the function so we can not call these two variables outside the function
	let temp_in_celcius = (temprature - 32) * 5 / 9
	if (temp_in_celcius <= 0){
		let isFreezing = true         //WE can acess temprature and fahrenheit in if because it is in the parent and from its root global means from temp_conv function 
}
 return temp_in_celcius
}

let temp_in_fahrenheit1_ = temp_conv_(32)
let temp_in_fahrenheit_2_ = temp_conv_(56)

console.log(temp_in_fahrenheit)
console.log(temp_in_fahrenheit_2)





// TEMPLATE STRING



let names_ = 'Osama'
let ages_ = 23
console.log(`Hey, my name is ${names_}! I am ${ages_} years old.`)




// CHALLENGE AREA 

let tip_calculator_ = function ( total , tipPercent = 0.1){
	let percent = tipPercent * 100 
	let tip = total * tipPercent
	return `A ${percent}% tip on $${total} would be $${tip}`
	//return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}` it will give the same result 
}
let tip1_ = tip_calculator_(100)

console.log(tip1_) 
 
*/

// BUILD A GRADE CALCULATOR


let grade_calc = function (student_score , total_possible_score){
	percentage = (student_score / total_possible_score) * 100
	if (percentage >= 90){
	return `You got ${student_score}/${total_possible_score} and your grade is A (${percentage}%).`}
        else if (percentage>=80 & percentage < 90){
	return `You got ${student_score}/${total_possible_score} and your grade is B (${percentage}%).`}
        else if (percentage>=70 & percentage < 80){
	return `You got ${student_score}/${total_possible_score} and your grade is C (${percentage}%).`}
        else if (percentage>=60 & percentage < 70){
	return `You got ${student_score}/${total_possible_score} and your grade is D (${percentage}%).`}
	else {
	return `You got ${student_score}/${total_possible_score} and your grade is F (${percentage}%).`
}
}
let student = grade_calc(5,20)
console.log(student)	
	

	
	
	
	 
	 
