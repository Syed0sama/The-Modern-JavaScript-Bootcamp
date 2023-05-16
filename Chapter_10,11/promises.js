//callback

const getDataCallback = (num , callback) => {
	setTimeout(() => {
		if(typeof num === 'number'){
			callback(undefined , num*2)
		}else{
			callback('Number must be an integer')
		}
	},2000)

	}

getDataCallback (2 , (err , data) => {
	if (err){
		console.log(err)
	}else{
		getDataCallback(data , (err , data) => {
		if(err){
			console.log('err')
		}
		else{
			console.log(data)
		}
	})
	}
})

//promises
const getDataPromise = (num) => new Promise((resolve , reject) => {
	setTimeout(() => {
		typeof num === 'number' ? resolve(num * 2) : reject('Number must be integer')
	},2000)
})

/*
const myPromise = getDataPromise()
myPromise.then((data) => {
		console.log(data)
	}, (err) => {
		console.log(err)
	})
*/

getDataPromise(10).then((data) => {
	return getDataPromise(data)
}).then((data) =>{
	console.log(data)
}).catch((err) =>{
	console.log(err)
})

