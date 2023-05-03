'use strict'	

				//Notes Edit JAVSCRIPT


// Select the title, body, and remove note button elements from the web page
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

// Extract the note ID from the URL hash
const noteId = location.hash.substring(1)

// Select the date element and retrieve the list of notes
const dateElement = document.querySelector('#last-edited')
let notes = getSavedNotes()

// Find the note with the matching ID from the list of notes
let note = notes.find((note) => note.id === noteId)

// If the note doesn't exist, redirect to the index page
if (!note){
  location.assign('/index.html')
}

// Update the title, body, and date elements on the web page with the note's values
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// Add an event listener for changes to the title element
titleElement.addEventListener('input' , (e) => {
  // Update the note's title and last updated time
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  
  // Update the date element and save the list of notes to local storage
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Add an event listener for changes to the body element
bodyElement.addEventListener('input' , (e) => {
  // Update the note's body and last updated time
  note.body = e.target.value
  note.updatedAt = moment().valueOf()

  // Update the date element and save the list of notes to local storage
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Add an event listener for clicks on the remove note button
removeElement.addEventListener('click' , (e) => {
  // Remove the note from the list of notes
  removeNote(note.id)

  // Save the updated list of notes to local storage and redirect to the index page
  saveNotes(notes)
  location.assign('/index.html')
})

// Add an event listener for changes to local storage
window.addEventListener('storage' , (e) => {
  // If the notes data changes in local storage...
  if (e.key === 'notes'){
    // Retrieve the updated list of notes
    notes = JSON.parse(e.newValue)
    
    // Find the note with the matching ID from the updated list
    note = notes.find((note) => note.id === noteId)

    // If the note doesn't exist, redirect to the index page
    if (!note){
      location.assign('/index.html')
    }

    // Update the title, body, and date elements on the web page with the note's values
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})


