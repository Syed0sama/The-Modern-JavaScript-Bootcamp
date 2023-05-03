
const square = (num) => num * num


const squareLong = (num) => {
	return num * num

}

console.log(square(5))


const people = [{
	name:'Osama',
	age: 22
},{
	name:'Nouman',
	age:20
},{
	name:'Hassan',
	age:30
}] 

const under30 = people.filter(function(person){
	return person.age < 30
})

const under30_1 = people.filter((person) => person.age < 30)  // this is the same function as above but in one line this is called arrow function.

console.log(under30_1)


console.log(under30)


//CHALLENGE AREA


//taking above people array as input

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)
