const getPuzzle = async (wordCount) => {
	const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
		if(response.status === 200){
			const data = await response.json()
			return data.puzzle
		}else{
			throw new Error ('Unable to fetch')
		}

}

const getPuzzleold = (wordCount) => {
	return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
		if(response.status === 200){
			return response.json()
		}else{
			throw new Error ('Unable to fetch')
		}

}).then((data) => {
	return data.puzzle
})
}

const getCountry = async (countryCode) =>{
	const response = await fetch('https://restcountries.com/v3.1/all')
		if(response.status === 200){
			const data = await response.json()
			return data.find((country) => country.cca2 === countryCode)
		}else{
			throw new Error('Unable to fetch')
		}
}

const getCountryOld = (countryCode) =>{
	return fetch('https://restcountries.com/v3.1/all').then((response) => {
		if(response.status === 200){
			return response.json()
		}else{
			throw new Error('Unable to fetch')
		}
}).then((data) =>{
	return country.name
})

}

const getCurrentCountry = async () => {
	const locations = await getLocation()
	const country  = await getCountry(locations.country)
	return country
}

const getLocation = async() =>{
	const response = await fetch('https://ipinfo.io/json?token=05b07313d9db64')
	if(response.status === 200){
		return response.json()
	}else{
		throw new Error('Unable to fetch')
	}
}


const getLocationOld = () =>{
	return fetch('https://ipinfo.io/json?token=05b07313d9db64').then((response) => {
	if(response.status === 200){
		return response.json()
	}else{
		throw new Error('Unable to fetch')
	}
})
}

