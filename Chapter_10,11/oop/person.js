

class Person {
	constructor (firstName , lastName, age , likes = []){
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
	this.likes = likes
	}

	getBio() {
	let bio = `${this.firstName} is ${this.age}.`
	
	this.likes.forEach((like) => {
		bio += ` ${this.firstName} likes ${like}.`
	})
	return bio
	
	}
	
	set fullName(fullName){
	const names = fullName.split(' ')
	this.firstName = names[0]
	this.lastName = names[1]

	}
	get fullName(){
	return `${this.firstName} ${this.lastName}`
	}
}

class Employee extends Person {
	constructor(firstName , lastName , age , position , likes){
		super(firstName , lastName , age , likes)
		this.position = position
	}
	getBio(){
		return ` ${this.fullName}  is a ${this.position}`
	}
	getYearsLeft(){
		return 65 - this.age
	}
}

class Student extends Person{
	constructor(firstName , lastName , age , likes , score){
	super(firstName , lastName , age , likes)
	this.score = score
	}

	gradeCalc(){
	let grade = ''
	if(this.score >= 80){
		grade = 'A'
		return `${this.firstName} ${this.lastName} got A`
	}
	else if(this.score >= 75){
		grade = 'B+'
		return `${this.firstName} ${this.lastName} got B+`
	}
	else if(this.score >=70){
		grade = 'B'
		return `${this.firstName} ${this.lastName} got B`
	}
	else{
		grade = 'F'
		return `${this.firstName} ${this.lastName} got F`
	}
	}
	getBio(){
		const grade = this.score >=70 ? `${this.firstName} is Passing` : `${this.firstName} is Fail`
		return grade
	}
	updateGrade(number){
		return this.score += number
	}
	
}
const student1 = new Employee('Aleeze' , 'Shah' , 20 , 'actress')
console.log(student1.getBio())






/*
const me = new Employee('Osama' , 'Syed' , 23 ,'Coder', ['Coding' , 'Gaming'])
me.setName('Mustafa Rameez')
console.log(me.getBio())
console.log(me.getYearsLeft())


const person2 = new Person('Syed' , 'Hassan' , 32)
console.log(person2.getBio())


const myPerson = new PersonClass('Syed' , 'Osama' , 22 , ['Coding'])
console.log(myPerson.getBio())

const Person = function(firstName, lastName , age , likes = []){
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
	this.likes = likes
}

Person.prototype.getBio = function(){
	let bio = `${this.firstName} is ${this.age}.`
	
	this.likes.forEach((like) => {
		bio += ` ${this.firstName} likes ${like}.`
})
	return bio
}
Person.prototype.setName = function (fullName) {
	const names = fullName.split(' ')
	this.firstName = names[0]
	this.lastName = names[1]
}
*/


