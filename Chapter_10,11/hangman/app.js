// Primitive value: string, number , boolean , null , undefined everything except these are objects

// Object: myproduct --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Functions: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null




  const puzzleEl = document.querySelector('#puzzle')
  const guessesEl = document.querySelector('#guesses')
  let game1
 
 
  window.addEventListener('keypress' ,(e) => {
          const guess = String.fromCharCode(e.charCode)
          game1.makeGuess(guess)
	  render()
 })

const startGame = async () => {
	const puzzle = await getPuzzle('2')
	game1 = new Hangman(puzzle , 5)
	render()
}

const render = () => {
          puzzleEl.textContent = game1.Puzzle
          guessesEl.textContent = game1.StatusMessage
}

document.querySelector('#reset').addEventListener('click' , startGame)

startGame()


















/*
  getPuzzle('2').then((puzzle) => {
	console.log(puzzle)
}).catch((err) => {
	console.log(`Error: ${err}`)
}) 

getCurrentCountry().then((country) => {
	const name = country.name
	console.log(name.common)
}).catch((error) => {
	console.log(error)
})


getCountry('PK').then((country) => {
		console.log(country.common)
	}).catch((err) => {
		console.log(`Error: ${err}`)
	})
getLocation().then((locations) => {
	return getCountry(locations.country)
}).then((country) => {
	return country.name
}).then ((country) => {
	return country.common
}).then ((name) =>{
	console.log(name)
}).catch((err) => {
	console.log(err)
})

*/
