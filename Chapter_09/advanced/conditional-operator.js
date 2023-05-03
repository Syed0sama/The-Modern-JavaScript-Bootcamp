const myAge = 27
const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote' // this is same as below but in reduced lines



/*
if (myAge >= 18){
	message = 'You can vote!'
}else{
	message = 'You cannot vote'
}
*/


console.log(message)


const age = 30

const showPage = () => {
	console.log('Showing the Page')
}
const showErrorPage = () => {
	console.log('Showing error page')
	}


age >=21 ? showPage() : showErrorPage()


const team = [ 'Tyler' , 'Kinzey' ]
const text = team.length<=4 ? `Team size: ${team.length}` : 'Too many people in your team'
console.log(text)
