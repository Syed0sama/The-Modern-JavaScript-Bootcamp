

class Hangman {
	constructor(word , remainingGuesses){
	this.word = word.toLowerCase().split('')
	this.remainingGuesses = remainingGuesses
	this.guessedLetters = []
	this.statuss = 'Playing'
	}	
	calculateStatus(){
		const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === '')
		if(this.remainingGuesses <= 0){
			this.statuss = 'failed'
		}
		else if (finished){
			this.statuss ='finished'
		}else{
			this.statuss = 'Playing'
		}

	}	
	
	get StatusMessage(){
		
		if (this.statuss === 'Playing'){
			return `Guesses left: ${this.remainingGuesses}`
		}
		else if (this.statuss === 'failed'){
			return `Nice try! The word was "${this.word.join('')}"`
		}
		else{
			return 'Great work'
		}
	}
	
	get Puzzle(){
	let puzzle = ''
	this.word.forEach((letter) =>{
		if (this.guessedLetters.includes(letter) || letter === ''){
			puzzle += letter
		}else{
			puzzle += '*'
		}

	})
	
	return puzzle
	}
	
	makeGuess(guess){
	
  	guess = guess.toLowerCase()
 	const isUnique = !this.guessedLetters.includes(guess)
  	const isBadGuess = !this.word.includes(guess)

  	if (isUnique) {
    		this.guessedLetters.push(guess)
 	 }

 	 if (isUnique && isBadGuess) {
    		this.remainingGuesses--
 	 }
  	this.calculateStatus()

	}
}





/*
const Hangman = function (word , remainingGuesses){
	this.word = word.toLowerCase().split('')
	this.remainingGuesses = remainingGuesses
	this.guessedLetters = []
	this.statuss = 'Playing'
}

Hangman.prototype.calculateStatus = function(){
	const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
	if(this.remainingGuesses === 0){
		this.statuss = 'failed'
	}
	else if (finished){
		this.statuss ='finished'
	}else{
		this.statuss = 'Playing'
	}

}


	let finished = true

	this.word.forEach((letter) => {
		if(this.guessedLetters.includes(letter)){
	}else{
		finished = false
	}

})

	if(this.remainingGuesses <= 0){
		this.statuss = 'You have failed the game'
	}
	else if (finished){
		this.statuss ='finished'
	}else{
		this.statuss = 'Playing'
	}
}
Hangman.prototype.getStatusMessage = function (){
	if (this.statuss === 'Playing'){
		return `Guesses left: ${this.remainingGuesses}`
	}
	else if (this.statuss === 'failed'){
		return `Nice try! The word was "${this.word.join('')}"`
	}
	else{
		return 'Great work'
	}

}
Hangman.prototype.getPuzzle = function (){
	let puzzle = ''
	
	this.word.forEach((letter) =>{
		if (this.guessedLetters.includes(letter) || letter === ''){
			puzzle += letter
		}else{
			puzzle += '*'
		}

 })

	
	return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }
  this.calculateStatus()
}
	
*/
