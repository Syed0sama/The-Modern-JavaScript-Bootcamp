
const Hangman = function (word , remainingGuesses){
	this.word = word.toLowerCase().split('')
	this.remainingGuesses = remainingGuesses
	this.guessedLetters = ['c']
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


const firstWord = new Hangman('cat' , 2)

console.log(firstWord.getPuzzle())

const secondWord = new Hangman('Islamabad' , 4)
console.log(secondWord.getPuzzle())

