			
				//NOTES JAVASCRIPT
let notes = getSavedNotes()

const filters = {
	searchText: '',
	sortBy: 'byEdited'
}


/*
//localStorage.setItem('location' , 'Islamabad')
//console.log(localStorage.getItem('location'))
//localStorage.removeItem('location')
//localStorage.clear()

const user = {
	name:'Osama',
	age:23
}

const userJASON = JSON.stringify(user)
console.log(userJASON)
localStorage.setItem('user' , userJASON)
const userJASON = localStorage.getItem('user')
const user = JSON.parse(userJASON)
console.log(`${user.name} is ${user.age}`)

*/
renderNotes(notes , filters)

// Event listener for create note button
document.querySelector('#create-note').addEventListener('click', function (e){
	const id = uuidv4()
	const timestamp = moment().valueOf()
	notes.push({
		id: id,
		title: '',
		body: '',
		createdAt: timestamp,
		updatedAt: timestamp
	})
	saveNotes(notes)
	location.assign(`/edit.html#${id}`)
})



document.querySelector('#search-text').addEventListener('input' , function(e){
	filters.searchText = e.target.value
	renderNotes(notes , filters)
})

document.querySelector('#filter-by').addEventListener('change' , function(e){
	filters.sortBy = e.target.value
	renderNotes(notes , filters)
})
window.addEventListener('storage' , function (e){
	if (e.key === 'notes'){
		notes = JSON.parse(e.newValue)
	}
	renderNotes(notes , filters)
})








/* Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
//console.log(now.getTime())
const timeStamp = now.getTime()


const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())
console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of Month: ${now.getDate()}`)
console.log(`Hours: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const firstDate = new Date('August 15 2020 7:30:00')
const secondDate = new Date()

const timestamp1 = firstDate.getTime()
const timestamp2 = secondDate.getTime()
console.log(timestamp1)
console.log(timestamp2)
if(timestamp1 < timestamp2){
	console.log(firstDate.toString())
	}else
	{
		console.log(secondDate.toString())
}


const now = moment()
//now.minute(1)
now.add(1 , 'year').subtract(20, 'days')
//console.log(now.minute())
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
// November 3rd, 2003

const nowtimestamp = now.valueOf()
console.log(moment(nowtimestamp).toString())

const birthdate = moment()
//birthdate.subtract(23, 'Year').add(4, 'Month').subtract(5, 'days')
birthdate.year(2000).month(7).date(6)
console.log(birthdate.format('MMM D, YYYY'))


const now = moment()

*/
