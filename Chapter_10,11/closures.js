const createCounter = () => {
	let count = 0

	return {
		increament() {
			count++
		},
		decreament(){
			count--
		},
		get(){
			return count
		}
	}
}

const counter = createCounter()
counter.increament()
counter.increament()
counter.increament()
counter.decreament()
console.log(counter.get())

//Adder

const adder = (a) => {
	return (b) =>{
		return a + b
	}
}

const add10 = adder(10)
console.log(add10(3))
console.log(add10(-3))


//Tipper

const calculateTipper = (tipPercentage) => {
	return (amount) => {
		return amount * tipPercentage
	}
}

const bill = calculateTipper(.20)
console.log(bill(100))

