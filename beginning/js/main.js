// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btnAddEmp = window.document.getElementById('btnAddEmployee')
btnAddEmp.addEventListener('click', () => {

    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('add-employee.html','add-employee','popup')
})
})


