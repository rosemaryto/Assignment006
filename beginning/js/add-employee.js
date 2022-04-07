// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800
let height = 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

window.resizeTo(width,height)

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((screen.width - width) / 2), ((screen.height - height) / 2)) 

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => document.getElementById(id);
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
let cancel = $("cancel")
cancel.addEventListener('click', () => {
    window.close()
})
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
     // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    let id = $("id")
    let name = $("name")
    let ext = $("extension")
    let email = $("email")
    let department = $("department")


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
let out = window.opener.document.querySelector("output").innerHTML = (`ID: ${id.value}<br>Name: ${name.value}<br>Extension: ${ext.value}<br>Email: ${email.value}<br>Department: ${department.value}`)


// CLOSE THE POPUP
window.close()

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
})
})